import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATS_FILE = path.join(__dirname, "data", "stats.json");

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API to get and increment stats
  app.get("/api/stats", (req, res) => {
    try {
      let stats = { views: 0 };
      if (fs.existsSync(STATS_FILE)) {
        stats = JSON.parse(fs.readFileSync(STATS_FILE, "utf-8"));
      }

      // Increment views
      stats.views += 1;

      // Save back to file
      fs.writeFileSync(STATS_FILE, JSON.stringify(stats, null, 2));

      res.json(stats);
    } catch (error) {
      console.error("Error handling stats:", error);
      res.status(500).json({ error: "Failed to update stats" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production: serve static files from dist
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

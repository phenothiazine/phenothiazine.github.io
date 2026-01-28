# Personal Portfolio & Online Resume

This project is a minimalist, responsive online portfolio designed for an Algorithm Engineer. It serves as a modern, interactive complement to a traditional LaTeX resume, featuring an "Apple-style" aesthetic with a focus on typography, whitespace, and visual hierarchy.

## 🛠 Tech Stack

- **Core Framework:** React 19 (via Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Utility-first)
- **Icons:** Lucide React
- **Build Tool:** Vite

## 🏗 Architecture & Framework Design

The application is built with a **Data-Driven UI** philosophy, ensuring that content updates are separated from UI logic.

### 1. Data-Driven Content Layer (`/types.ts` & `/constants.tsx`)
Instead of hardcoding text into HTML, all resume data is structured as JSON-like objects.
- **Type Safety:** Defined strictly in `types.ts` (Interfaces for Experience, Project, Publication).
- **Content Management:** All text (ZH/EN) resides in `constants.tsx`. Updating the resume only requires modifying this single file, making the system highly maintainable.

### 2. Component-Based Architecture
The UI is decomposed into reusable atomic components:
- **Layout:** `Section.tsx` handles consistent padding and titles.
- **Modules:** `ExperienceItem.tsx`, `ProjectCard.tsx` (with image support), and `Hero.tsx` handle specific data types.
- **Interactivity:** `ImageCarousel.tsx` provides a custom lightbox implementation for viewing architectural diagrams and demo screenshots.

### 3. State Management & I18n
- **Lightweight State:** Uses React `useState` for language toggling (`zh` / `en`).
- **Conditional Rendering:** The entire app instantly re-renders content based on the selected language state without page reloads.

### 4. Responsive & Aesthetic Design
- **Tailwind CSS:** Used for rapid, responsive styling.
- **Mobile-First:** optimized for viewing on smartphones (collapsed margins, stacked grids) while scaling up elegantly to desktops.
- **Visuals:** Implements subtle backdrop blurs, smooth transitions, and distinct typography (Inter font) to mimic modern OS design languages.

## 🚀 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start dev server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```
├── components/        # Reusable UI components (Navbar, Hero, Cards...)
├── constants.tsx      # All resume content (Chinese & English data)
├── types.ts           # TypeScript interfaces for data models
├── App.tsx            # Main layout and state entry point
├── index.html         # Entry HTML
└── tailwind.config.js # CSS configuration
```

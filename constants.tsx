import { ResumeData, SkillCategory } from './types';
import { Mail, Github, FileText } from 'lucide-react';
import React from 'react';

// Common Social Links (Shared between languages)
const SOCIAL_LINKS = [
  { name: "Email", icon: <Mail size={20} />, link: "mailto:xujiajun2001@yeah.net" },
  { name: "GitHub", icon: <Github size={20} />, link: "https://github.com/phenothiazine" },
  { name: "Resume", icon: <FileText size={20} />, link: "/resume.pdf" },
];

const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Tools",
    skills: ["Python", "MATLAB", "Linux", "Docker", "Git", "C++ (Basic)", "Java (Basic)"]
  },
  {
    category: "AI Frameworks",
    skills: ["PyTorch", "LangChain", "Dify", "FastAPI", "ONNX", "TensorRT"]
  },
  {
    category: "Core Competencies",
    skills: ["Computer Vision", "LLM / RAG", "Prompt Engineering", "Image Segmentation", "CET-6 (English)"]
  }
];

// --- CHINESE DATA ---
export const ZH_DATA: ResumeData = {
  nav: {
    education: "教育经历",
    experience: "实习经历",
    projects: "项目经验",
    publications: "论文发表",
    resumeBtn: "简历 PDF"
  },
  personalInfo: {
    name: "徐嘉骏",
    secondaryName: "Xu Jiajun",
    title: "上海工程技术大学 · 硕士 · 男 · 中共党员",
    location: "中国 · 上海",
    email: "xujiajun2001@yeah.net",
    phone: "+86 18258456778",
    github: "https://github.com/phenothiazine",
    summary: "即将毕业的控制科学与工程硕士，专注于计算机视觉与大模型应用。在多家科技公司积累了扎实的算法落地经验，擅长将前沿AI技术转化为实际生产力。以第一作者发表 SCI 二区论文一篇，曾获华为杯研赛国家一等奖。",
    socials: SOCIAL_LINKS
  },
  experience: [
    {
      id: "exp1",
      company: "杭州威灿科技有限公司",
      team: "数字警察算法团队",
      role: "算法工程师实习生",
      period: "2025.09 – 2026.01",
      summary: "参与构建公司 AI 基础架构，实现模型能力与业务解耦；优化推理链路将复杂案情分析耗时控制在 10s 内；核心算法模块准确率达 90% 并高效支撑政务项目产品交付。",
      details: [
        "架构工程化: 协作构建基于 FastAPI + Docker 的标准化脚手架，应用 Cookiecutter 规范开发流程；设计独立模型网关，实现底层模型与上层业务的彻底解耦。",
        "Agent 迭代: 推动算法框架向 LangChain 1.0 Agent 体系演进，负责复杂推理逻辑实现；独立承担伤情分类与票据 OCR 提取模块，模型微调准确率分别达 90% 与 88%。",
        "部署与交付: 在 K8s 集群与 Docker Compose 混合部署架构下，通过全链路异步优化推理性能，高效支撑复杂案情分析等核心业务场景的私有化落地。"
      ]
    },
    {
      id: "exp2",
      company: "杭州虹软科技股份有限公司",
      team: "夜景图像部门",
      role: "图像 AI 算法测试实习生",
      period: "2023.01 – 2023.07",
      summary: "创新性引入多模态大模型辅助图像质量主观评测，建立客观量化依据；主导画质问题闭环优化，确保旗舰机型成像效果符合行业标准。",
      details: [
        "多模态应用: 构建基于 CLIP 的美学评分模型，对样张的构图、色彩和谐度等维度进行量化评估，解决了传统主观评测标准不统一的痛点。",
        "画质调校: 深度参与旗舰手机 Camera 系统开发，针对色彩偏差、噪点控制等问题进行根因分析，协调软硬件团队进行参数优化与缺陷修复。"
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "基于检索增强生成 (RAG) 的领域知识问答系统",
      role: "算法研究开发",
      period: "2025.05 – 2025.08",
      intro: "搭建基于 LLM 与 RAG 的智能问答系统，解决通用大模型在私有领域的知识过时与幻觉问题。",
      highlights: [
        "知识库构建: 设计自动化数据流水线，采用语义切分与 Embedding 构建高效私有知识库，支持GB级数据处理。",
        "问答优化: 优化检索策略与 Prompt 工程，使回答事实一致性得分超 95%，有效抑制模型幻觉。",
        "系统落地: 搭建完备系统原型，检索Top-3命中率达 92%，平均响应<2s，显著提升特定领域信息提取可靠性。"
      ],
      imageUrls: ["/images/project1.png", "/images/project1_demo.png"]
    },
    {
      id: "proj2",
      title: "基于深度学习的遥感建筑物影像高精度实例分割研究",
      role: "算法开发",
      period: "2024.12 – 2025.05",
      intro: "研发结合反池化重建与方向场迭代的背景感知新型网络，解决复杂分割场景下边缘模糊与背景干扰难题。",
      highlights: [
        "结构优化: 增强对边缘、角点等高频细节的感知，有效恢复了网络处理中易丢失的精细结构特征。",
        "算法改进: 改进方向引导生成方式并引入迭代校正机制，显著减少分割结果中的噪声残留与表达偏差。",
        "效果提升: 解决轮廓不平滑问题，在标准数据集上mAP提升 9.0%，边界 IoU 提升 5.2%，大幅增强了分割鲁棒性。"
      ],
      imageUrls: ["/images/project2.png", "/images/project2_demo.png"]
    }
  ],
  education: [
    {
      id: "edu1",
      school: "上海工程技术大学",
      degree: "硕士",
      major: "控制科学与工程",
      period: "2023.09 – 至今",
      rank: "前 15%"
    },
    {
      id: "edu2",
      school: "浙江海洋大学",
      degree: "本科",
      major: "数据科学与大数据技术",
      period: "2019.09 – 2023.06",
      rank: "前 10%"
    }
  ],
  publications: [
    {
      id: "pub1",
      citation: "J. Xu, C. Wang and F. Wu, \"URDGNet: Directional Fields-Guided Building Instance Segmentation Network With Unpooling Content Reconstruction,\" in IEEE Transactions on Automation Science and Engineering, vol. 22, pp. 23513-23526, 2025.",
      tag: "SCI 2区 / IF 6.4 / 第一作者",
      url: "https://doi.org/10.1109/TASE.2025.3627845",
      imageUrls: ["/images/pub1_arch.png"]
    }
  ],
  skills: SKILLS
};

// --- ENGLISH DATA ---
export const EN_DATA: ResumeData = {
  nav: {
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    publications: "Publications",
    resumeBtn: "Resume"
  },
  personalInfo: {
    name: "Andy Xu",
    secondaryName: "Jiajun Xu",
    title: "M.S. in Control Science and Engineering · Shanghai University of Engineering Science",
    location: "Shanghai, China",
    email: "xujiajun2001@yeah.net",
    phone: "+86 18258456778",
    github: "https://github.com/phenothiazine",
    summary: "Upcoming Master's graduate specializing in Computer Vision and Large Language Model applications. Possesses solid algorithm deployment experience across multiple tech companies, with a strong ability to translate cutting-edge AI technologies into production productivity. Published one SCI Q2 paper as the first author and won the National First Prize in the Huawei Cup Postgraduate Mathematics Modeling Competition.",
    socials: SOCIAL_LINKS
  },
  experience: [
    {
      id: "exp1",
      company: "Hangzhou Weican Technology Co., Ltd.",
      team: "Digital Police Algorithm Team",
      role: "Algorithm Engineer Intern",
      period: "Sep 2025 – Jan 2026",
      summary: "Participated in building the company's AI infrastructure, decoupling model capabilities from business logic; optimized inference pipelines to reduce complex case analysis time to under 10s; core algorithm modules achieved 90% accuracy, efficiently supporting government project delivery.",
      details: [
        "Architecture Engineering: Collaborated to build a standardized scaffold based on FastAPI + Docker using Cookiecutter; designed an independent model gateway to fully decouple underlying models from upper-level business logic.",
        "Agent Iteration: Drove the evolution of the algorithm framework towards the LangChain 1.0 Agent system, implementing complex reasoning logic; independently owned injury classification and receipt OCR extraction modules, achieving 90% and 88% fine-tuning accuracy respectively.",
        "Deployment & Delivery: Under K8s cluster and Docker Compose hybrid deployment architectures, optimized inference performance via full-link asynchrony, efficiently supporting privatization deployment for core scenarios like complex case analysis."
      ]
    },
    {
      id: "exp2",
      company: "ArcSoft Technology Co., Ltd.",
      team: "Night Scene Image Department",
      role: "Image AI Algorithm Test Intern",
      period: "Jan 2023 – Jul 2023",
      summary: "Innovatively introduced multi-modal large models to assist subjective image quality evaluation, establishing objective quantitative benchmarks; led closed-loop optimization of image quality issues, ensuring flagship imaging effects met industry standards.",
      details: [
        "Multi-modal Application: Built an aesthetic scoring model based on CLIP to quantitatively evaluate dimensions like composition and color harmony, resolving the pain point of inconsistent traditional subjective evaluation standards.",
        "Image Quality Tuning: Deeply participated in flagship mobile camera system development, conducting root cause analysis for issues like color deviation and noise control, and coordinating with software/hardware teams for parameter optimization and defect fixes."
      ]
    }
  ],
  projects: [
    {
      id: "proj1",
      title: "RAG-Based Domain Knowledge Q&A System",
      role: "Algorithm Research & Development",
      period: "May 2025 – Aug 2025",
      intro: "Built an intelligent Q&A system based on LLM and RAG to solve knowledge obsolescence and hallucination issues of general large models in private domains.",
      highlights: [
        "Knowledge Base Construction: Designed an automated data pipeline using semantic splitting and Embedding to build an efficient private knowledge base, supporting GB-level data processing.",
        "Q&A Optimization: Optimized retrieval strategies and Prompt Engineering, achieving over 95% factual consistency in answers and effectively suppressing model hallucinations.",
        "System Implementation: Built a complete system prototype with a Top-3 retrieval hit rate of 92% and average response time <2s, significantly improving the reliability of information extraction in specific domains."
      ],
      imageUrls: ["/images/project1.png", "/images/project1_demo.png"]
    },
    {
      id: "proj2",
      title: "High-Precision Building Instance Segmentation in Remote Sensing Images",
      role: "Algorithm Development",
      period: "Dec 2024 – May 2025",
      intro: "Developed a novel background-aware network combining unpooling reconstruction and directional field iteration to solve edge blurring and background interference in complex segmentation scenarios.",
      highlights: [
        "Structure Optimization: Enhanced perception of high-frequency details like edges and corners, effectively recovering fine structural features easily lost during network processing.",
        "Algorithm Improvement: Improved direction-guided generation methods and introduced iterative correction mechanisms, significantly reducing noise residue and representation bias in segmentation results.",
        "Performance Boost: Solved contour unsmoothness issues, increasing mAP by 9.0% and Boundary IoU by 5.2% on standard datasets, substantially enhancing segmentation robustness."
      ],
      imageUrls: ["/images/project2.png", "/images/project2_demo.png"]
    }
  ],
  education: [
    {
      id: "edu1",
      school: "Shanghai University of Engineering Science",
      degree: "Master",
      major: "Control Science and Engineering",
      period: "Sep 2023 – Present",
      rank: "Top 15%"
    },
    {
      id: "edu2",
      school: "Zhejiang Ocean University",
      degree: "Bachelor",
      major: "Data Science & Big Data Tech",
      period: "Sep 2019 – Jun 2023",
      rank: "Top 10%"
    }
  ],
  publications: [
    {
      id: "pub1",
      citation: "J. Xu, C. Wang and F. Wu, \"URDGNet: Directional Fields-Guided Building Instance Segmentation Network With Unpooling Content Reconstruction,\" in IEEE Transactions on Automation Science and Engineering, vol. 22, pp. 23513-23526, 2025.",
      tag: "SCI Q2 / IF 6.4 / First Author",
      url: "https://doi.org/10.1109/TASE.2025.3627845",
      imageUrls: ["/images/pub1_arch.png"]
    }
  ],
  skills: SKILLS
};
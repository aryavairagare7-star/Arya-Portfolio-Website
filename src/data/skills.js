import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaJava,
  FaGithub,
  FaServer,
  FaKey,
  FaAws,
} from "react-icons/fa";

import {
  SiMui,
  SiSpringboot,
  SiSpringsecurity,
  SiMysql,
  SiAxios,
  SiVercel,
  SiRazorpay,
  SiMongodb,
} from "react-icons/si";

const skills = [
  /* ========================================
     FRONTEND
  ======================================== */

  {
    name: "HTML",
    category: "Frontend",
    percentage: 85,
    icon: FaHtml5,
  },

  {
    name: "CSS",
    category: "Frontend",
    percentage: 75,
    icon: FaCss3Alt,
  },

  {
    name: "JavaScript",
    category: "Frontend",
    percentage: 80,
    icon: FaJs,
  },

  {
    name: "React.js",
    category: "Frontend",
    percentage: 70,
    icon: FaReact,
  },

  {
    name: "Bootstrap",
    category: "Frontend",
    percentage: 60,
    icon: FaBootstrap,
  },

  {
    name: "Material UI",
    category: "Frontend",
    percentage: 50,
    icon: SiMui,
  },

  /* ========================================
     BACKEND
  ======================================== */

  {
    name: "Java",
    category: "Backend",
    percentage: 85,
    icon: FaJava,
  },

  {
    name: "Spring Boot",
    category: "Backend",
    percentage: 75,
    icon: SiSpringboot,
  },

  {
    name: "Spring Security",
    category: "Backend",
    percentage: 70,
    icon: SiSpringsecurity,
  },

  {
    name: "REST APIs",
    category: "Backend",
    percentage: 75,
    icon: FaServer,
  },

  {
    name: "JWT Authentication",
    category: "Backend",
    percentage: 70,
    icon: FaKey,
  },

  /* ========================================
     DATABASE
  ======================================== */

  {
    name: "MySQL",
    category: "Database",
    percentage: 85,
    icon: SiMysql,
  },

  {
    name: "MongoDB",
    category: "Database",
    percentage: 30,
    icon: SiMongodb,
  },

  /* ========================================
     TOOLS
  ======================================== */

  {
    name: "AWS",
    category: "Tools",
    percentage: 30,
    icon: FaAws,
  },

  {
    name: "GitHub",
    category: "Tools",
    percentage: 50,
    icon: FaGithub,
  },

  {
    name: "Axios",
    category: "Tools",
    percentage: 80,
    icon: SiAxios,
  },

  {
    name: "Vercel",
    category: "Tools",
    percentage: 70,
    icon: SiVercel,
  },

  {
    name: "Razorpay API",
    category: "Tools",
    percentage: 65,
    icon: SiRazorpay,
  },
];

export default skills;

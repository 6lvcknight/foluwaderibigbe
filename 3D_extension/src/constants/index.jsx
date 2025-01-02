import { PcCase } from "lucide-react";
import { Database } from "lucide-react";
import { Webhook } from "lucide-react";
import { Award } from "lucide-react";
import { HashLink as Link } from 'react-router-hash-link';



import {
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

export const navItems = [
  { label: "Skills", href: "#Skills" },
  { label: "Projects", href: "#Projects" },
  { label: "About", href: "#About" },
];

export const certifications = [
  {
    icon: <Database />,
    text: "What is Data Science?",
    description:
      "Define data science and its importance in today’s data-driven world.",
  },
  {
    icon: <PcCase />,
    text: "IBM Z Xplore - Concepts",
    description:
      "Perform everyday tasks in an IBM Z environment, including administering data sets, formulating commands, managing JCL, scripting actions in USS (Unix System Services), writing and debugging Python, and orchestrating actions through IBM Z Open Automation Utilities.",
  },
  {
    icon: <PcCase />,
    text: "IBM Z Xplore - Advanced",
    description:
      "Orchestrated system activities using Ansible and Zowe, while working in Docker containerized environments. The earner has also demonstrated key IBM Z skills, including REXX, COBOL, VSAM, and TSO.",
  },
  {
    icon: <Webhook />,
    text: "Fundamentals for Zowe",
    description:
      "Describe the functional components and capabilities of Zowe, and how those components integrate with the IBM Z platform. Describe how Zowe is started, and how server and client components are installed and configured. Identify methods used to create or import additional functionality into Zowe.",
  },
  {
    icon: <Award />,
    text: "Developed a sustainable urban heating solution - Smart Cities Innovation Challenge",
    description: "Showcasing the innovative approach and potential impact on urban living, receiving positive feedback for the project's creativity, sustainability, and potential for scalability.",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    icon: AiFillInstagram,
    url: "https://www.instagram.com/6lvcknight",
    ariaLabel: "Visit Instagram profile"
  },
  {
    name: "LinkedIn",
    icon: AiFillLinkedin,
    url: "https://linkedin.com/in/foluwaderibigbe",
    ariaLabel: "Visit LinkedIn profile"
  },
  {
    name: "YouTube",
    icon: AiFillYoutube,
    url: "https://www.youtube.com/@6lvcknight",
    ariaLabel: "Visit YouTube channel"
  },
  {
    name: "GitHub",
    icon: AiFillGithub,
    url: "https://github.com/6lvcknight",
    ariaLabel: "Visit GitHub profile"
  },
];

export const Experiences = [
  {
    title: "Languages",
    price: "$0",
    features: [
      "Python",
      "Java",
      "SQL",
      "Javascript",
      "C++",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Data Science",
    price: "$10",
    features: [
      "Pandas",
      "Numpy",
      "SciPy",
      "Matplotlib",
      "Seaborn",
      "Tableau",
      "SciKit-Learn",
    ],
  },
  {
    title: "Software Developer",
    price: "$200",
    features: [
      "React.js",
      "three.js",
      "Next.js",
      "Flask",
      "tailwind",
    ],
  },
];

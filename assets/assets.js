import {
  Globe,
  MonitorSmartphone,
  Server,
  Code2,
} from "lucide-react";

import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    id: 1,
    title: "KineticCare",
    subtitle: "AI Physiotherapy Assistant",
    description:
      "A real-time rehabilitation platform that uses MediaPipe pose detection and Three.js to analyze body posture, calculate joint angles, and provide live exercise feedback.",
    techStack: ["React", "MediaPipe", "Three.js", "TensorFlow", "JavaScript"],
    github: "https://github.com/arjxnnagar/KineticCare",
    live: "https://kinetic-care-frontend.vercel.app/",
    bgImage: "/work-1.png",
  },

  {
    id: 2,
    title: "Schedura",
    subtitle: "AI Social Media Scheduler",
    description:
      "An AI-powered platform that generates, manages, and schedules social media posts with an intuitive dashboard for content creators.",
    techStack: ["Next.js", "OpenAI", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/arjxnnagar/Schedura",
    live: "https://schedura-rxkh.vercel.app/",
    bgImage: "/work-2.png",
  },

  {
    id: 3,
    title: "DriftStay",
    subtitle: "Hotel Booking Platform",
    description:
      "A full-stack accommodation booking application featuring authentication, property listings, booking management, and responsive design.",
    techStack: ["React", "Express", "MongoDB", "Node.js"],
    github: "https://github.com/arjxnnagar/DriftStay",
    live: "https://github.com/arjxnnagar/DriftStay",
    bgImage: "/work-3.png",
  },

  {
    id: 4,
    title: "Chat App",
    subtitle: "Real-Time Messaging",
    description:
      "A modern chat application supporting instant messaging, online users, authentication, and Socket.io-powered real-time communication.",
    techStack: ["React", "Socket.io", "Express", "MongoDB"],
    github: "https://github.com/arjxnnagar/chat-app",
    live: "https://chat-app-one-blue.vercel.app/",
    bgImage: "/work-4.png",
  },
];

export const services = [
  {
    icon: <Globe size={28} />,
    title: "Full Stack Development",
    description:
      "Building modern, scalable web applications using React, Next.js, Node.js, Express, MongoDB and PostgreSQL.",
  },
  {
    icon: <MonitorSmartphone size={28} />,
    title: "Responsive Web Design",
    description:
      "Creating fast, mobile-first websites that deliver a seamless experience across all devices.",
  },
  {
    icon: <Server size={28} />,
    title: "Backend Development",
    description:
      "Designing secure REST APIs, authentication systems, databases, and server-side logic.",
  },
  {
    icon: <Code2 size={28} />,
    title: "Frontend Development",
    description:
      "Developing clean, interactive user interfaces using React, Next.js, Tailwind CSS, and modern JavaScript.",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

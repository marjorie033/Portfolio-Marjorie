// import { HeroBottomSVG } from "../theme/data";
import knowyourtrash from "../assets/projects/know-your-trash.png";
import knowyourtrashmain from "../assets/projects/kyt-main.png";
import knowyourtrash2 from "../assets/projects/kyt-2.png";
import knowyourtrash3 from "../assets/projects/kyt-3.png";
import howtoswimyourfish from "../assets/projects/how-swim-your-fish.png";
import howtoswimyourfish2 from "../assets/projects/how-swim-2.png";
import howtoswimyourfish3 from "../assets/projects/how-swim-3.png";
import howtoswimyourfish4 from "../assets/projects/how-swim-4.png";

import anito from "../assets/projects/anito.png";
import anito2 from "../assets/projects/anito2.png";
import anito3 from "../assets/projects/anito3.png";
import anito4 from "../assets/projects/anito5.png";


import figma from '../assets/icons/Figma.svg';
import vs from '../assets/icons/VS.svg';
import aseprite from '../assets/icons/aseperite.svg';
import unity from '../assets/icons/unity.svg';
import wordpress from '../assets/icons/wordpress.svg';
import godot from '../assets/icons/Godot.svg';
import css from '../assets/icons/css.svg';
import photoshop from '../assets/icons/Photoshop.svg';
import illustrator from '../assets/icons/Illustrator.svg';
import react from '../assets/icons/React.svg';
import github from '../assets/icons/github.svg';
import html from '../assets/icons/html.svg';  

import thiana from '../assets/projects/thiana.png';
import nsf from '../assets/projects/nsf.png';
import curious from '../assets/projects/curious.png';
import itshotdogtime from '../assets/projects/itshotdogtime.png';
import whaloo from '../assets/projects/whaloo.png';
import remgloves from '../assets/projects/remgloves.png';



// ── Home | Tools Section ─────────────────────────────────────────────────────────────
export const tools = [
  { name: 'Figma',       icon: <img src={figma}        alt="Figma"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'VS Code',     icon: <img src={vs}           alt="VS Code"      style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Aseprite',    icon: <img src={aseprite}    alt="Aseprite"     style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Unity',       icon: <img src={unity}        alt="Unity"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'WordPress',   icon: <img src={wordpress}    alt="WordPress"    style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Godot',       icon: <img src={godot}        alt="Godot"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'CSS',         icon: <img src={css}          alt="CSS"          style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Photoshop',   icon: <img src={photoshop}    alt="Photoshop"    style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Illustrator', icon: <img src={illustrator}  alt="Illustrator"  style={{ height: '1em', width: 'auto' }} /> },
  { name: 'React',       icon: <img src={react}        alt="React"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Git',         icon: <img src={github}       alt="Git"          style={{ height: '1em', width: 'auto' }} /> },
  { name: 'HTML',        icon: <img src={html}         alt="HTML"         style={{ height: '1em', width: 'auto' }} /> },
]

export const toolCardBase = {
  background: '#e0d9d6',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  cursor: 'inherit',
  // transition: 'transform 0.18s, background 0.18s',
}

// ── Home | Projects Section ─────────────────────────────────────────────────────────────
// ── Projects data ─────────────────────────────────────────────────────────────
export const projects = [
  {
    title: 'Know Your Trash',
    description: 'An educational game about waste segregation, featuring intuitive gameplay that teaches players to properly sort trash. Served as Lead Artist, responsible for the game’s visual style and assets.',
    tags: ['Lead Artist', 'Unity'],
    status: 'Live',
    date: 'February 2026',
    accent: '#FFD341',
    image: knowyourtrash,
    link: 'https://settery.itch.io/know-your-trash',
  },
  {
    title: 'How to Swim your Fish',
    description: 'A fun underwater adventure game where players navigate a fish through obstacles and challenges. Served as Lead Artist, creating characters, environments, and visual assets',
    tags: ['Wire Framming', 'Godot', 'Lead Artist'],
    status: 'Live',
    date: 'February 2026',
    accent: '#7C6EEA',
    image: howtoswimyourfish,
    link: 'https://settery.itch.io/how-to-swim-your-fish',
  },
  {
    title: 'Thiana Guerra Photography',
    description: 'Contributed as the WordPress designer/dev for Thiana Guerra Photography, where I improved the overall user experience (UX) and developed all secondary pages. Worked alongside a senior developer responsible for the homepage and deployment.',
    tags: ['Wordpress', 'Web Designer/Developer'],
    status: 'Live',
    date: 'January 2026',
    accent: '#D85662',
    image: thiana,
    link: 'https://thianaguerraphoto.com/',
  },
  {
    title: 'Nature Spring Foundation',
    description: 'Contributed as a WordPress designer for the Nature’s Spring Foundation website, focusing on UI design, Responsiveness and layout, in collaboration with a senior developer responsible for deployment and publishing.',
    tags: ['Wordpress', 'Web Designer/Developer'],
    status: 'Live',
    date: 'January 2026',
    accent: '#FFD341',
    image: nsf,
    link: 'https://naturespringfoundation.org/',
  },
  {
    title: 'Anito',
    description: 'A Filipino mythology-inspired game where players guide a mortal child through a mystical world. Lead Artist and UI/UX designer creating characters and environments in Unity.',
    tags: ['Wire Framming', 'Unity', 'Lead Artist'],
    status: 'In Development',
    date: 'December 2025',
    accent: '#7C6EEA',
    image: anito,
  },
]

/* ─── Projects | Data ───────────────────────────────────────── */
export const navLinks = [
  { label: "All Projects", short: "All Projects" },
  { label: "Web Projects",    short: "Web" },
  { label: "Game Projects",   short: "Game" },
  { label: "Mobile Projects", short: "Mobile" },
];

export const projectsData = [
  {
    title: "Know Your Trash",
    category: "Game",
    tags: "UI design - User research - Unity Engine",
    image: knowyourtrash,
    description: "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay.",
    path: "/project/know-your-trash"
  },
  {
    title: "How to Swim Your Fish",
    category: "Game",
    tags: "UI design - User research - Godot Engine",
    image: howtoswimyourfish,
    description: "A quirky puzzle platformer where you guide a fish through obstacle-filled waters to safety.",
    path: "/project/how-to-swim-your-fish"
  },
  {
    title: "Anito",
    category: "Game",
    tags: "UI designer - Lead Artist - Unity Engine",
    image: anito,
    description: "A quirky puzzle platformer where you guide a fish through obstacle-filled waters to safety.",
    path: "/project/anito"
  },
  {
    title: "Thiana Guerra Photography",
    category: "Web",
    tags: "Web Developer - Layout - Wordpress",
    image: thiana,
    description: "A music discovery website with an editorial layout designed to surface hidden gems and new sounds.",
    // path: "/project/thiana-guerra-photography"
  },
  {
    title: "Nature Spring Foundation",
    category: "Web",
    tags: "Web Developer/Designer - Wordpress",
    image: nsf,
    description: "A music discovery website with an editorial layout designed to surface hidden gems and new sounds.",
    // path: "/project/nature-spring-foundation"
  },
  {
    title: "Curious Music",
    category: "Web",
    tags: "Web Developer/Designer - Wordpress",
    image: curious,
    description: "A music discovery website with an editorial layout designed to surface hidden gems and new sounds.",
    // path: "/project/curious-music"
  },
  {
    title: "It's Hotdog Time",
    category: "Web",
    tags: "Web Developer/Designer - Layout - Wordpress",
    image: itshotdogtime,
    description: "A music discovery website with an editorial layout designed to surface hidden gems and new sounds.",
    // path: "/project/it's-hotdog-time"
  },
  {
    title: "Whaloo",
    category: "Mobile",
    tags: "Mobile Front-End - UI/UX - Flutter",
    image: whaloo,
    description: "A mobile app that helps users track and manage their daily hydration habits with gentle nudges.",
    // path: "/project/whaloo"
  },
  {
    title: "RemGlove",
    category: "Mobile",
    tags: "Mobile Front-End - Thesis Project - Flutter",
    image: remgloves,
    description: "A mobile app that helps users track and manage their daily hydration habits with gentle nudges.",
    // path: "/project/remgloves"
  },
];

/* ─── Projects Pages ───────────────────────────────────────── */
/* ─── Know  Your Trash ─────────────────────────── */
export const projectData = {
  title: "Know Your Trash",
  subtitle: "Interactive Game Development",
  tags: ["2D Pixelated", "Deployed"],
  description:
    "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay. Designed with bright, readable UI and progressive difficulty to keep players engaged while learning proper waste segregation habits.",
  meta: [
    { label: "Date", value: "February 2026" },
    { label: "Type", value: "Game App" },
    { label: "Role", value: "Designer" },
    { label: "Status", value: "Live" },
  ],
  technologies: [
    { name: "Unity", color: "#15141F" },
    { name: "C#", color: "#15141F" },
    { name: "Figma", color: "#15141F" },
    { name: "Aseprite", color: "#15141F" },
  ],
  mainImage: knowyourtrashmain,
  thumbnails: [
    knowyourtrashmain,
    knowyourtrash2,
    knowyourtrash3,
    knowyourtrash,
  ],
  github: "https://github.com/marjorie033",
  liveUrl: "https://settery.itch.io/know-your-trash",
};

/* ─── How To Swim Your Fish ─────────────────────────── */
export const projectData2 = {
  title: "How To Swim Your Fish",
  subtitle: "Interactive Game Development",
  tags: ["2D Pixelated", "Deployed"],
  description:
    "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay. Designed with bright, readable UI and progressive difficulty to keep players engaged while learning proper waste segregation habits.",
  meta: [
    { label: "Date", value: "February 2026" },
    { label: "Type", value: "Game App" },
    { label: "Role", value: "Designer" },
    { label: "Status", value: "Live" },
  ],
  technologies: [
    { name: "Unity", color: "#15141F" },
    { name: "C#", color: "#15141F" },
    { name: "Figma", color: "#15141F" },
    { name: "Aseprite", color: "#15141F" },
  ],
  mainImage: howtoswimyourfish2,
  thumbnails: [
    howtoswimyourfish2,
    howtoswimyourfish3,
    howtoswimyourfish,
    howtoswimyourfish4,
  ],
  github: "https://github.com/marjorie033",
  liveUrl: "https://settery.itch.io/know-your-trash",
};

/* ─── 👻 Anito Page ─────────────────────────── */
export const projectData3 = {
  title: "Anito",
  subtitle: "Interactive Game Development",
  tags: ["2D Pixelated", "Deployed"],
  description:
    "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay. Designed with bright, readable UI and progressive difficulty to keep players engaged while learning proper waste segregation habits.",
  meta: [
    { label: "Date", value: "August 2025" },
    { label: "Type", value: "Game App" },
    { label: "Role", value: "Designer" },
    { label: "Status", value: "Live" },
  ],
  technologies: [
    { name: "Unity", color: "#15141F" },
    { name: "C#", color: "#15141F" },
    { name: "Figma", color: "#15141F" },
    { name: "Aseprite", color: "#15141F" },
  ],
  mainImage: anito,
  thumbnails: [
    anito,
    anito2,
    anito3,
    anito4,
  ],
  github: "https://github.com/marjorie033",
  liveUrl: "https://settery.itch.io/know-your-trash",
};
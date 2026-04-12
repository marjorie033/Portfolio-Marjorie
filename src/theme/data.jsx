// import { HeroBottomSVG } from "../theme/data";

// ── Home | Tools Section ─────────────────────────────────────────────────────────────
export const tools = [
  { name: 'Figma',       icon: <img src="src/assets/icons/Figma.svg"        alt="Figma"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'VS Code',     icon: <img src="src/assets/icons/VS.svg"           alt="VS Code"      style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Aseprite',    icon: <img src="src/assets/icons/aseperite.svg"    alt="Aseprite"     style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Unity',       icon: <img src="src/assets/icons/unity.svg"        alt="Unity"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'WordPress',   icon: <img src="src/assets/icons/wordpress.svg"    alt="WordPress"    style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Godot',       icon: <img src="src/assets/icons/Godot.svg"        alt="Godot"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'CSS',         icon: <img src="src/assets/icons/css.svg"          alt="CSS"          style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Photoshop',   icon: <img src="src/assets/icons/Photoshop.svg"    alt="Photoshop"    style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Illustrator', icon: <img src="src/assets/icons/Illustrator.svg"  alt="Illustrator"  style={{ height: '1em', width: 'auto' }} /> },
  { name: 'React',       icon: <img src="src/assets/icons/React.svg"        alt="React"        style={{ height: '1em', width: 'auto' }} /> },
  { name: 'Git',         icon: <img src="src/assets/icons/github.svg"       alt="Git"          style={{ height: '1em', width: 'auto' }} /> },
  { name: 'HTML',        icon: <img src="src/assets/icons/html.svg"         alt="HTML"         style={{ height: '1em', width: 'auto' }} /> },
]

export const toolCardBase = {
  background: '#e0d9d6',
  borderRadius: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 5,
  cursor: 'inherit',
  transition: 'transform 0.18s, background 0.18s',
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
    image: 'src/assets/projects/know-your-trash.png',
    link: 'https://settery.itch.io/know-your-trash',
  },
  {
    title: 'How to Swim your Fish',
    description: 'A fun underwater adventure game where players navigate a fish through obstacles and challenges. Served as Lead Artist, creating characters, environments, and visual assets',
    tags: ['Wire Framming', 'Godot', 'Lead Artist'],
    status: 'Live',
    date: 'February 2026',
    accent: '#7C6EEA',
    image: 'src/assets/projects/how-swim-your-fish.png',
    link: 'https://settery.itch.io/how-to-swim-your-fish',
  },
  {
    title: 'Thiana Guerra Photography',
    description: 'Contributed as the WordPress designer/dev for Thiana Guerra Photography, where I improved the overall user experience (UX) and developed all secondary pages. Worked alongside a senior developer responsible for the homepage and deployment.',
    tags: ['Wordpress', 'Web Designer/Developer'],
    status: 'Live',
    date: 'January 2026',
    accent: '#D85662',
    image: 'src/assets/projects/thiana.png',
    link: 'https://thianaguerraphoto.com/',
  },
  {
    title: 'Nature Spring Foundation',
    description: 'Contributed as a WordPress designer for the Nature’s Spring Foundation website, focusing on UI design, Responsiveness and layout, in collaboration with a senior developer responsible for deployment and publishing.',
    tags: ['Wordpress', 'Web Designer/Developer'],
    status: 'Live',
    date: 'January 2026',
    accent: '#FFD341',
    image: 'src/assets/projects/nsf.png',
    link: 'https://naturespringfoundation.org/',
  },
  {
    title: 'Anito',
    description: 'A Filipino mythology-inspired game where players guide a mortal child through a mystical world. Lead Artist and UI/UX designer creating characters and environments in Unity.',
    tags: ['Wire Framming', 'Unity', 'Lead Artist'],
    status: 'In Development',
    date: 'December 2025',
    accent: '#7C6EEA',
    image: 'src/assets/projects/anito.png',
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
    image: "src/assets/projects/know-your-trash.png",
    description: "A sorting game that teaches players to classify waste correctly through fun, fast-paced gameplay.",
    path: "/project/know-your-trash"
  },
  {
    title: "How to Swim Your Fish",
    category: "Game",
    tags: "UI design - User research - Godot Engine",
    image: "src/assets/projects/how-swim-your-fish.png",
    description: "A quirky puzzle platformer where you guide a fish through obstacle-filled waters to safety.",
  },
  {
    title: "Curious Music",
    category: "Web",
    tags: "Web Design - Layout - HTML/CSS",
    image: "src/assets/projects/curious-music.png",
    description: "A music discovery website with an editorial layout designed to surface hidden gems and new sounds.",
  },
  {
    title: "Whaloo",
    category: "Mobile",
    tags: "Mobile Dev - UI/UX - Flutter",
    image: "src/assets/projects/whaloo.png",
    description: "A mobile app that helps users track and manage their daily hydration habits with gentle nudges.",
  },
];
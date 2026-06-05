// ─── Portfolio Data ───────────────────────────────────────────────────────────
import me from "../../assets/me.jpg";
import ferret from "../../assets/experience/ferret-logo.png";
import icpep from "../../assets/experience/icpep.png";
// import coc from "../../assets/images/coc.jpg";
// import devfest from "../../assets/images/devfest.png";
// import websiteHosting from "../../assets/images/website-hosting.png";
import cit from "../../assets/education/cit-u-logo.png";
import cbd from "../../assets/education/cbd-logo.png";
import uc from "../../assets/education/uc-logo.jpg";
import bsce from "../../assets/education/bsce-logo.png"; 

export const DEFAULT = {
  img: me,
  name: "Marjorie P. Matilos",
  subtitle: "4th Year Computer Engineering Student",
  tag1: "Web Dev/Designer",
  tag2: "Game Dev/Designer",
  hashtags: "#Computer Engineer | #Web Designer/Dev",
  expTitle: null,
  expRole: null,
  expDesc: null,
};

export const experiences = [
  {
    img: ferret,
    expTitle: "Ferre9 Creative Solution Intern",
    expRole: "May 30 - July 21, 2025",
    expDesc:
      "Assisted in designing and developing client websites at a creative digital agency. Also served as a QA intern, running cross-browser tests to validate UI consistency and functionality.",
    tag1: "Web Dev/Designer Intern",
    tag2: "QA Intern",
  },
  {
    img: ferret,
    expTitle: "Ferre9 Creative Solution",
    expRole: "July 21 - March 2026",
    expDesc:
      "Joined full-time as a Junior Web Developer and Designer, building responsive, client-facing web solutions and contributing to the agency's design system.",
    tag1: "Junior Web Developer",
    tag2: "Junior Web Designer",
  },
  {
    img: icpep,
    expTitle: "ICPEP",
    expRole: "July 21 - March 2025",
    expDesc:
      "Contributed to the Institute of Computer Engineers of the Philippines as a web developer and designer, supporting the organization's digital presence and student-facing initiatives.",
    tag1: "Junior Web Developer",
    tag2: "Junior Web Designer",
  },
];

export const educations = [
  {
    img: cit,
    school: "Cebu Institute of Technology - University",
    years: "2020 - 2026",
    degree: "BS Computer Engineering & Senior High School (STEM)",
    desc: "Pursuing a BS in Computer Engineering with a STEM Senior High School background from the same institution, focusing on software systems, hardware, and web technologies.",
    side: "left",
  },
  {
    img: cbd,
    school: "CBD College",
    years: "2018 - 2020",
    degree: "Junior High School",
    desc: "Completed Junior High School at CBD College, building a solid academic foundation across core STEM and humanities subjects.",
    side: "right",
  },
  {
    img: uc,
    school: "University of Cebu — METC",
    years: "2016 - 2017",
    degree: "Junior High School",
    desc: "Began Junior High School at UC-METC, developing foundational skills in structured academic learning.",
    side: "left",
  },
  {
    img: bsce,
    school: "Basak Community Elementary School",
    years: "2015",
    degree: "Elementary",
    desc: "Completed elementary education at Basak Community Elementary School, establishing core literacy and numeracy skills.",
    side: "right",
  },
];
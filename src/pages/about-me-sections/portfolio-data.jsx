// ─── Portfolio Data ───────────────────────────────────────────────────────────
import me from "src/assets/images/me.jpg";
import ferret from "src/assets/images/ferret-logo.png";
import icpep from "src/assets/images/icpep.png";

import cit from "src/assets/education/cit-u-logo.png";
import cbd from "src/assets/education/cbd-logo.png";
import uc from "src/assets/education/uc-logo.jpg";
import bsce from "src/assets/education/bsce-logo.png";

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
      "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
    tag1: "Web Dev/Designer Intern",
    tag2: "QA Intern",
  },
  {
    img: ferret,
    expTitle: "Ferre9 Creative Solution",
    expRole: "July 21 - March 2026",
    expDesc:
      "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
    tag1: "Junior Web Developer",
    tag2: "Junior Web Designer",
  },
    {
    img: icpep,
    expTitle: "ICPEP",
    expRole: "July 21 - March 2025",
    expDesc:
      "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
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
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere. Sed enim odio blandit risus aliquet.",
    side: "left",
  },
  {
    img: cbd,
    school: "CBD College",
    years: "2018 - 2020",
    degree: "Junior High School",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus. Et urna id purus eu nullam ut amet mauris posuere.",
    side: "right",
  },
  {
    img: uc,
    school: "University of Cebu — METC",
    years: "2016 - 2017",
    degree: "Junior High School",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus.",
    side: "left",
  },
  {
    img: bsce,
    school: "Basak Community Elementary School",
    years: "2015",
    degree: "Elementary",
    desc: "Lorem ipsum dolor sit amet consectetur. Aliquam duis donec condimentum euismod nec ipsum et sed purus.",
    side: "right",
  },
];
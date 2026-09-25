export const profile = {
  name: "Saarthak Singh",
  firstName: "Saarthak",
  email: "saarthaksingh5663@gmail.com",
  linkedin: "https://www.linkedin.com/in/saarthak-singh-a52998270/",
  github: "https://github.com/ssaarrthak",
  location: "Noida, Uttar Pradesh, India",
  locationShort: "Noida / Delhi NCR, IN",
  avatar: "./IMG_0212.png",
  portrait: "./IMG_0245.png",
};

export interface Metric {
  icon: string;
  period: string;
  title: string;
  description: string;
}

export const metrics: Metric[] = [
  {
    icon: "school",
    period: "2024 – 2027",
    title: "GGSIPU",
    description: "BCA in Computer Science • KCC Institute of legal & higher educations.",
  },
  {
    icon: "groups",
    period: "HHFC Trust",
    title: "5+ Editors",
    description: "Led post-production crew, standardized templates & delivery cycles",
  },
  {
    icon: "fact_check",
    period: "Rigorous Verification",
    title: "QA & Testing",
    description: "Test planning, bug reproduction protocols & cross-functional validation",
  },
  {
    icon: "trophy",
    period: "Honor & Award",
    title: "National Finalist",
    description: "National Level Film Making Competition recognition for cinematic pacing",
  },
];

export interface ExperienceRole {
  badge: string;
  badgeAccent: boolean;
  location: string;
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  tags: string[];
}

export const experienceRoles: ExperienceRole[] = [
  {
    badge: "Active Role",
    badgeAccent: true,
    location: "Remote",
    company: "Coding Panda",
    role: "Quality Assurance Intern",
    period: "Sept 2025 – Present",
    description:
      "Testing new features and user workflows throughout the development process. I work directly with lead developers to catch bugs and fix issues before updates go live.",
    bullets: [
      "Write detailed test plans and perform manual testing to ensure software features work as intended.",
      "Find, reproduce, and log critical bugs in our tracking system, helping the development team resolve issues faster.",
      "Test backend SQL queries and run data validation checks to maintain database accuracy.",
    ],
    tags: ["Test Cases", "Bug Triage", "Regression Testing", "Quality Standards"],
  },
  {
    badge: "Production",
    badgeAccent: false,
    location: "Remote",
    company: "Coding Panda",
    role: "Assistant Video Editor",
    period: "Feb 2025 – Present",
    description:
      "Editing videos, coding tutorials, and promotional content designed to keep learners interested and improve watch time across our digital platforms.",
    bullets: [
      "Edit raw lectures and marketing footage into clean, fast-paced, and easy-to-follow videos.",
      "Create text animations and on-screen graphics to help explain technical programming concepts visually.",
    ],
    tags: ["Video Production", "Content Strategy", "Motion Graphics"],
  },
  {
    badge: "Leadership",
    badgeAccent: false,
    location: "Patna, Bihar",
    company: "HHFC Trust",
    role: "Editing Manager",
    period: "May 2024 – Feb 2025",
    description:
      "Managed the post-production department for a nonprofit, leading a team of 5+ video editors and ensuring all content met our style guidelines and deadlines.",
    bullets: [
      "Trained junior editors, reviewed their work, and maintained a consistent visual style across dozens of awareness campaigns.",
      "Sped up the video production process by 30% by building reusable editing templates and setting up a clear feedback system.",
    ],
    tags: ["Team Leadership", "Pipeline Optimization", "Nonprofit Outreach"],
  },
  {
    badge: "Creative",
    badgeAccent: false,
    location: "Patna, Bihar",
    company: "HHFC Trust",
    role: "Video Editor",
    period: "Aug 2023 – May 2024",
    description:
      "Created short videos and social campaigns that highlighted the actual people helped by local community programs.",
    bullets: [],
    tags: ["Color Correction", "Social Cuts", "Sound Design"],
  },
];

export interface DualFocusPillar {
  icon: string;
  iconBg: string;
  label: string;
  title: string;
  description: string;
  tags: string[];
}

export const dualFocusPillars: DualFocusPillar[] = [
  {
    icon: "bug_report",
    iconBg: "bg-secondary/10",
    label: "Methodology",
    title: "Software QA",
    description:
      "Writing test plans, checking edge cases, and auditing SQL databases to help teams ship reliable software.",
    tags: ["Test Plans", "Jira / Bug Log", "MySQL Audits"],
  },
  {
    icon: "movie_edit",
    iconBg: "bg-secondary-container/20",
    label: "Creative Craft",
    title: "Video Editing",
    description:
      "Editing short-form videos and digital content with a strong focus on pacing, motion, and holding the viewer's attention.",
    tags: ["Timeline Flow", "Kinetic Motion", "Storyboards"],
  },
];

export interface SkillPillar {
  icon: string;
  title: string;
  subtitle: string;
  skills: string[];
  footer: string;
}

export const skillPillars: SkillPillar[] = [
  {
    icon: "terminal",
    title: "Development & Systems",
    subtitle: "Algorithmic foundations & relational data",
    skills: ["C++", "SQL", "MySQL", "Data Structures", "Schema Design"],
    footer: "GGSIPU Curriculum • Bootcamps",
  },
  {
    icon: "rule",
    title: "Quality Assurance",
    subtitle: "Reliability & defect tracking",
    skills: ["Test Case Design", "Bug Logging", "Manual Testing", "Regression Suites", "MS Excel Analytics"],
    footer: "Coding Panda Protocols",
  },
  {
    icon: "video_camera_front",
    title: "Creative & Post-Prod",
    subtitle: "Visual pacing & motion dynamics",
    skills: ["Video Editing", "Social Strategy", "Pacing & Rhythm", "Audio Cleanliness", "Creative Direction"],
    footer: "18+ Months Production Work",
  },
  {
    icon: "psychology",
    title: "Leadership & Execution",
    subtitle: "Project governance & empathy",
    skills: ["Team Leadership (5+)", "Agile Collaboration", "Structured Reviews", "Attention to Detail", "Problem Solving"],
    footer: "HHFC Trust • Academic Projects",
  },
];

export interface Certification {
  icon: string;
  category: string;
  highlighted: boolean;
  title: string;
  description: string;
  verification: string;
}

export const certifications: Certification[] = [
  {
    icon: "database",
    category: "Technical",
    highlighted: false,
    title: "MySQL Bootcamp",
    description:
      "Relational query optimization, complex JOIN architectures, indexing strategies, and database integrity enforcement.",
    verification: "Database Mastery • Verified",
  },
  {
    icon: "code_blocks",
    category: "Programming",
    highlighted: false,
    title: "C++ Bootcamp",
    description:
      "Object-oriented design patterns, memory allocation, standard template library (STL), and algorithmic efficiency.",
    verification: "Core Computer Science • Verified",
  },
  {
    icon: "table_chart",
    category: "Analytics",
    highlighted: false,
    title: "Microsoft Excel Certification",
    description:
      "Structured data analysis, formula-driven verification models, pivot calculations, and test data sanitization.",
    verification: "Data Operations • Verified",
  },
  {
    icon: "military_tech",
    category: "Distinction",
    highlighted: true,
    title: "National Film Making Finalist",
    description:
      "National recognition for excellence in cinematic editing, storytelling coherence, and narrative pacing.",
    verification: "National Competition Honor",
  },
  {
    icon: "neurology",
    category: "Research",
    highlighted: false,
    title: "International Conference: Emerging Trends",
    description:
      "Participated in discourse surrounding next-generation intelligent systems, software architecture trends, and computational tools.",
    verification: "Academic Participation",
  },
  {
    icon: "volunteer_activism",
    category: "Community",
    highlighted: false,
    title: "HHFC Trust Social Worker",
    description:
      "Commended for hands-on volunteerism, organizing grassroots community drives, and amplifying educational accessibility.",
    verification: "Social Impact Service",
  },
];

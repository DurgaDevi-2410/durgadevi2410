export const personalInfo = {
  name: "Durga Devi",
  fullName: "Durga Devi N",
  role: "Python & Django Developer",
  subRole: "Full Stack Developer",
  location: "Tamil Nadu, India",
  fullAddress: "Tamil Nadu, India",
  email: "durgadevi.nagarajan2410@gmail.com",
  github: "https://github.com/DurgaDevi-2410",
  linkedin: "https://linkedin.com/in/durgadevi",
  status: "Available for work",
  sayHello: "HI THERE, I'M",
  heroHeading: {
    prefix: "DURGADEVI",
    highlight: "PYTHON & DJANGO DEVELOPER",
    suffix: ""
  },
  heroDescription:
    "I build modern, responsive and interactive web applications using modern frontend and backend technologies. Driven by clean code, intuitive UI engineering, and scalable backend architecture.",
  aboutTagline:
    "Passionate software developer dedicated to crafting modern full stack applications with aesthetic precision and robust performance. Building ideas into REALITY.",
  aboutFull:
    "Hello! I'm Durga Devi N, a Full Stack Developer with a strong academic foundation in Computer Science (B.Sc.). I specialize in building end-to-end web applications that combine intuitive, responsive user interfaces with scalable and reliable backend systems.\n\nI have experience working with modern frontend technologies such as React.js, JavaScript (ES6+), HTML5, CSS3, and Bootstrap 5, along with backend technologies including Python, Django, Node.js, Express.js, PHP, and MySQL. I focus on writing clean, modular, and maintainable code, following best practices and delivering efficient, user-focused solutions with a strong commitment to quality.",
  codeSnippet: `const developer = {
  name: "Durga Devi",
  role: "Full Stack Engineer",
  stack: ["React", "Node", "Python"],
  status: "Building the future 🚀"
};`,
  specializations: [
    "B.Sc. Computer Science",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "Responsive UI/UX",
    "Problem Solving & Clean Code"
  ],
  profileImage: "/assets/profile.jpg",
  cvFile: "/assets/projects/DURGA (4).pdf"
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/DurgaDevi-2410", icon: "FaGithub" },
  { name: "LinkedIn", url: "https://linkedin.com/in/durgadevi", icon: "FaLinkedin" },
  { name: "Email", url: "mailto:durgadevi.nagarajan2410@gmail.com", icon: "FiMail" }
];

export const stats = [
  { value: "10+", label: "PROJECTS" },
  { value: "2+", label: "Months EXP." },
  { value: "5+", label: "TECH STACKS" },
  { value: "100%", label: "COMMITMENT" }
];

export const skillsData = {
  frontend: [
    { name: "HTML5", desc: "Semantic markup & SEO best practices", level: 95 },
    { name: "CSS3", desc: "Flexbox, Grid, Animations & Modern layouts", level: 90 },
    { name: "JavaScript", desc: "ES6+, Async/Await, DOM & Closures", level: 90 },
    { name: "Bootstrap", desc: "Responsive grids & rapid prototyping", level: 88 },
    { name: "jQuery", desc: "DOM manipulation & legacy integration", level: 80 },
    { name: "React.js", desc: "Component architecture, Hooks & State", level: 85 }
  ],
  backend: [
    { name: "Python", desc: "Clean object-oriented code & scripts", level: 88 },
    { name: "Django", desc: "MVT architecture, ORM & REST APIs", level: 82 },
    { name: "Node.js", desc: "Event-driven server runtime & npm", level: 85 },
    { name: "Express.js", desc: "RESTful API routing & middleware", level: 85 },
    { name: "PHP", desc: "Server-side scripting & form processing", level: 75 }
  ],
  database: [
    { name: "MySQL", desc: "Relational schema design, queries & joins", level: 88 },
    { name: "MariaDB", desc: "High-performance SQL database management", level: 82 }
  ],
  tools: [
    { name: "Git", desc: "Version control, branching & merging", level: 88 },
    { name: "GitHub", desc: "Repository management, PRs & Actions", level: 90 },
    { name: "VS Code", desc: "IDE extensions, debugging & productivity", level: 95 }
  ]
};

export const projects = [
  {
    id: "01",
    title: "E-Commerce",
    category: "E-Commerce",
    tags: ["E-Commerce", "Full Stack"],
    description: "A feature-rich e-commerce platform with product listings, cart management, secure checkout, and order tracking.",
    stack: ["PHP", "HTML", "CSS", "JS" , "MySQL"],
    image: "/assets/projects/ecommerce.jpg",
    demo: "https://drive.google.com/file/d/1NHIFDqTwieQC1VbrOIK6td1qmy6MlfNL/view?usp=sharing",
    code: "https://github.com/DurgaDevi-2410/Durga-Boutique"
  },
  {
    id: "02",
    title: "Crackers",
    category: "E-Commerce",
    tags: ["E-Commerce", "Full Stack"],
    description: "An online crackers shopping platform with categorized product browsing, cart, and seamless order placement.",
    stack: ["PHP", "HTML", "CSS", "JS" , "MySQL"],
    image: "/assets/projects/crackers.jpg",
    demo: "https://drive.google.com/file/d/15bjtIcFGDI3VBH3FZL8sE3GaFpEJ-PhQ/view?usp=sharing",
    code: "https://github.com/DurgaDevi-2410/Durga_Crackers"
  },
  {
    id: "03",
    title: "Chips",
    category: "E-Commerce",
    tags: ["E-Commerce", "Full Stack"],
    description: "An e-commerce website for chips and snacks with product filtering, cart, and secure payment integration.",
    stack: ["PHP", "HTML", "CSS", "JS" , "MySQL"],
    image: "/assets/projects/chips.jpg",
    demo: "https://drive.google.com/file/d/1ADErVTb5RsiMB6JVO09eHrUPTCBGUmoF/view?usp=sharing",
    code: "https://github.com/DurgaDevi-2410/durga_chips"
  },
  {
    id: "04",
    title: "Catering",
    category: "Web Apps",
    tags: ["Web Apps", "Full Stack"],
    description: "A catering service web application for browsing menus, placing orders, and managing catering requests.",
    stack: ["PHP", "HTML", "CSS", "JS" , "MySQL"],
    image: "/assets/projects/catering.jpg",
    demo: "https://drive.google.com/file/d/1zLbh2MD1MBfZc8ThCNuV5hbqICD1Szfz/view?usp=sharing",
    code: "https://github.com/DurgaDevi-2410/catering"
  },
  {
    id: "05",
    title: "Construction",
    category: "Web Apps",
    tags: ["Web Apps", "Full Stack"],
    description: "A construction business website for project showcasing, client inquiries, and service management.",
    stack: ["PHP", "HTML", "CSS", "JS" , "MySQL"],
    image: "/assets/projects/construction.jpg",
    demo: "https://drive.google.com/file/d/1ULdabdivTDtBBEEOgg4OxHrls9QaL3Qh/view?usp=sharing",
    code: "https://github.com/DurgaDevi-2410/Construction"
  },
  {
    id: "06",
    title: "Durga Academy",
    category: "Web Apps",
    tags: ["Web Apps", "Full Stack"],
    description: "An educational institute website designed to showcase courses, faculty, and manage student enrollments.",
    stack: ["PHP", "HTML", "CSS", "JS" , "MySQL"],
    image: "/assets/projects/njali-academy.jpg",
    demo: "#",
    code: "#"
  },
  {
    id: "07",
    title: "Games Hub",
    category: "Games",
    tags: ["Games"],
    description: "A collection of 21 simple web games built to provide fun and improve logical thinking.",
    stack: ["React", "JavaScript"],
    image: "/assets/projects/games-hub.jpg",
    demo: "https://games-hub-roan.vercel.app/",
    code: "https://github.com/DurgaDevi-2410/games-hub"
  },
  {
    id: "08",
    title: "ToDo",
    category: "Web Apps",
    tags: ["Web Apps", "Full Stack"],
    description: "A task management app to organize daily activities efficiently with priorities and deadlines.",
    stack: ["React", "Django", "MySQL"],
    image: "/assets/projects/todo.jpg",
    demo: "https://todo-frontend-bydo.vercel.app/",
    code: "https://github.com/DurgaDevi-2410/todo_frontend"
  },
  {
    id: "09",
    title: "Diary",
    category: "Web Apps",
    tags: ["Web Apps", "Full Stack"],
    description: "A secure personal diary to write, manage, and organize daily entries with rich text editing.",
    stack: ["React", "Django", "MySQL"],
    image: "/assets/projects/diary.jpg",
    demo: "https://diary-frontend-delta.vercel.app/",
    code: "https://github.com/DurgaDevi-2410/diary-frontend"
  },
  {
    id: "10",
    title: "CRM",
    category: "Business Systems",
    tags: ["Business Systems", "Full Stack"],
    description: "A customer relationship management system to track leads, manage contacts, and streamline business workflows.",
    stack: ["React", "Django", "MySQL"],
    image: "/assets/projects/crm-institute.jpg",
    demo: "https://durga-devi-vejc.vercel.app/#",
    code: "https://github.com/DurgaDevi-2410"
  },
  {
    id: "11",
    title: "Fleet Management System",
    category: "Business Systems",
    tags: ["Business Systems", "Full Stack"],
    description: "A full-stack fleet management system that helps businesses manage vehicles, bookings, expenses, and track operations with real-time insights.",
    stack: ["React", "Node.js", "Express.js", "MongoDB"],
    image: "/assets/projects/fleet-mgmt.jpg",
    demo: "https://drive.google.com/file/d/1FeO6-4-ZVbb79mGliH_9JMhO_Yx7D4OU/view?usp=drive_link",
    code: "https://github.com/DurgaDevi-2410/Sri-Vignesh-Transports"
  },
  {
    id: "12",
    title: "Chat Web Application",
    category: "Web Apps",
    tags: ["Web Apps", "Full Stack"],
    description: "A real-time chat application that allows users to send and receive messages securely with a smooth user interface.",
    stack: ["React", "Node.js", "Express.js", "Socket.io"],
    image: "/assets/projects/chatapp.jpg",
    demo: "https://durga-devi-vejc.vercel.app/chat-demo.pdf",
    code: "https://github.com/DurgaDevi-2410/CHATAPP-FRONTEND"
  },
  // {
  //   id: "13",
  //   title: "Mobile App",
  //   category: "Mobile Apps",
  //   tags: ["Mobile Apps"],
  //   description: "A cross-platform mobile application with intuitive UI, seamless navigation, and robust backend integration.",
  //   stack: ["React Native", "Node.js", "MongoDB"],
  //   image: "/assets/projects/mobile-app.jpg",
  //   demo: "#",
  //   code: "#"
  // }
];

export const experiences = [
  
 

  {
    id: "exp-webx",
    period: "PROFESSIONAL EXPERIENCE",
    tag: "PROFESSIONAL EXPERIENCE",
    icon: "👨‍💻",
    role: "Software Developer",
    company: "WebX Technologies – 2 Months",
    duration: "2 Months",
    description:
      "Worked as a Software Developer, contributing to web applications, implementing features, fixing issues, database integration, and maintaining software projects.",
    highlights: [
      "Software Development",
      "PHP",
      "MySQL",
      "Project Development"
    ]
  },
    {
    id: "intern-webx",
    period: "EXPERIENCE",
    tag: "EXPERIENCE",
    icon: "🚀",
    role: "Software Development Intern",
    company: "WebX Technologies – 3 Months",
    duration: "3 Months",
    description:
      "Completed a 3-month internship, gaining practical experience in web development, application development, database integration, debugging, and real-world projects.",
    highlights: [
      "Web Development",
      "PHP",
      "MySQL",
      "Application Development"
    ]
  },
   {
    id: "edu-bsc",
    period: "2020 – 2023",
    tag: "EDUCATION",
    icon: "🎓",
    role: "B.Sc. Computer Science",
    company: "Bachelor of Science",
    duration: "2020 – 2023",
    description:
      "Completed a Bachelor of Science in Computer Science with a strong foundation in programming, data structures, algorithms, databases, and software development.",
    highlights: [
      "Computer Science",
      "Programming",
      "Data Structures",
      "Database Systems"
    ]
  },
];

export const contactCards = [
  {
    id: "email",
    label: "EMAIL",
    value: "durgadevi.nagarajan2410@gmail.com",
    href: "mailto:durgadevi.nagarajan2410@gmail.com",
    iconKey: "email"
  },
  {
    id: "location",
    label: "LOCATION",
    value: "Tamil Nadu, India",
    href: "https://maps.google.com/?q=Tamil+Nadu,+India",
    iconKey: "location"
  },
  {
    id: "github",
    label: "GITHUB",
    value: "github.com/DurgaDevi-2410",
    href: "https://github.com/DurgaDevi-2410",
    iconKey: "github"
  },
  {
    id: "linkedin",
    label: "LINKEDIN",
    value: "linkedin.com/in/durgadevi",
    href: "https://linkedin.com/in/durgadevi",
    iconKey: "linkedin"
  }
];

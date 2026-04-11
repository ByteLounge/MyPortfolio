export const PORTFOLIO = {
  person: {
    name: 'Yash Sanikop',
    title: 'Computer Science & Engineering Student',
    location: 'Goa, India',
    // GitHub avatar is public and avoids relying on LinkedIn scraping.
    avatarUrl: 'https://github.com/ByteLounge.png?size=220',
    about:
      'I am a Computer Science and Engineering undergraduate passionate about building intelligent, scalable, and meaningful technology solutions that solve real-world problems. Over time, I have developed 20+ projects across software development, AI, robotics, cybersecurity, IoT, and full-stack systems, with a strong focus on combining technical depth with practical usability.',
    tagline: 'Building intelligent systems, immersive interfaces, and scalable software.',
    cvCtaLabel: 'Download CV',
    contactCtaLabel: 'Contact Me',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/yashsanikop/',
    github: 'https://github.com/ByteLounge',
    instagram: 'https://www.instagram.com/sanikopyash/',
    blogspot: 'https://adreamersbook.blogspot.com',
  },
  urls: {
    cvDownload: 'https://drive.google.com/file/d/1tQLk1wNPYqCYxIUOjSSiIIWxwtMExK01/view?usp=sharing',
    certifications:
      'https://www.linkedin.com/in/yashsanikop/details/certifications/',
    latestProject: 'https://github.com/ByteLounge/Inventory-Management-System',
    moreProjects: 'https://github.com/ByteLounge?tab=repositories',
  },
  experience: [
    {
      dates: 'Jul 2025 - Aug 2025',
      title: 'Artificial Intelligence Intern - Lenovo India',
      description:
        'Focused on applied AI solutions, including NLP and prompt engineering. Built and deployed a Botpress chatbot and developed a Mental Health AI Assistant with contextual conversation flows and prompt fine-tuning.',
    },
    {
      dates: 'Oct 2025 - Present',
      title: 'AI Automation Intern - Backend & Mobile App Intern (CareMeez-Visiwell Solutions Pvt. Ltd.)',
      description:
        'Supported backend database operations including video processing and data handling. Improved frontend UI elements of the CareMeez mobile app and assisted in debugging, optimization, and feature enhancements across the application stack.',
    },
    {
      dates: 'Jul 2024 - Aug 2024',
      title: 'QC Inspector - FIRST TECH CHALLENGE (FTC)',
      description:
        'Served as a Robot Inspector ensuring compliance with official FTC rules and safety guidelines. Inspected participant robots, verified legal components, and worked with event officials to uphold safety and integrity.',
    },
  ],
  education: [
    {
      dates: 'Jul 2023 - Jun 2027',
      title: 'Bachelor of Engineering (BE), Computer Engineering - Agnel Institute of Technology and Design',
      description:
        'Focused on software engineering fundamentals with a strong interest in systems, AI, and application integration.',
    },
  ],
  services: [
    { title: 'Web Development', description: 'Web Development (React/Next.js) and API-driven architectures. Mobile app development (Flutter). Android/iOS work.' },
    { title: 'Creative Design', description: 'Canvas and Related designing Services. Web Design and clean UI/UX presentation for modern, user-friendly experiences.' },
    { title: 'Digital Marketing', description: 'Digital marketing, social media marketing, and marketing strategy for projects and businesses.' },
  ],
  projects: [
    {
      title: 'Sneaker AI',
      category: 'Artificial Intelligence',
      tools: 'Python, TensorFlow, Keras, Flask',
      link: 'https://github.com/ByteLounge/Sneaker-AI',
      image: '/images/sneaker.png'
    },
    {
      title: 'NIDS (Network Intrusion Detection System)',
      category: 'Cybersecurity',
      tools: 'Python, Scapy, Machine Learning',
      link: 'https://github.com/ByteLounge/NIDS',
      image: '/images/nids.png'
    },
    {
      title: 'Hyperlocal Air Intelligence',
      category: 'Mobile Development',
      tools: 'React Native, Android',
      link: 'https://github.com/ByteLounge/Hyperlocal-Air-Intelligence',
      image: '/images/hyperlocal.png'
    },
    {
      title: 'Inventory Management System',
      category: 'Software Development',
      tools: 'React, Node.js, Express, MySQL',
      link: 'https://github.com/ByteLounge/Inventory-Management-System',
      image: '/images/inventory.png'
    }
  ]
};

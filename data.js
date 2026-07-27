const data = {

  // ---- Personal info ----
  name: 'Thanapol',
  surname: 'Intasuwan',
  title: 'Full Stack Developer & Backend Develope ',
  status: 'Available',
  avatar: 'assets/profile.jpg',

  // ---- Education ----
  university: 'Kasetsart University',
  campus: 'Kamphaeng Saen Campus',
  universityYears: '2023 - present',
  universityGpax: 3.82,

  school: 'Pluak Daeng Pittayakom School',
  schoolYears: 'Grade 9 - Grade 12',
  schoolGpax: 3.97,

  // ---- Quick stats ----
  favoriteSubjects: 'Programming, Database',
  projectsCompleted: 9,

  // ---- Contact ----
  email: 'bestovered@gmail.com',
  github: 'github.com/Bestzxc',
  line: '0931179686 (best)',
  phone: '061-396-3099',

  // ---- Footer ----
  footerNote: 'Thanapol Intasuwan (Use for Cooperative Education)',

  // ---- About Me ----
  aboutBackground: '4th-year student at Kasetsart University, Kamphaeng Saen Campus, with a strong interest in programming and system development, plus a solid grasp of how software works and basic system design.',
  aboutApproach: 'Passionate about coding and learning new technologies. Experienced in web application development and data management, with a focus on writing clean, readable, and practical code.',
  aboutPriorities: 'Places strong emphasis on problem-solving and continuously improving the quality of every project delivered.',
  aboutGrowth: 'Committed to continuously developing both technical programming skills and the ability to collaborate effectively, aiming to build a foundation for more advanced work in the future.',

  // ---- Soft skill levels (0 to 1) ----
  skillCommunication: 0.82,
  skillTeamwork: 0.85,
  skillProblemSolving: 0.78,
  skillTimeManagement: 0.78,
  skillAdaptability: 0.78,

  // ---- Lists ----
  programmingLanguages: ['C', 'C++', 'Python', 'JavaScript', 'Java', 'Go-lang', 'Dart', 'SQL', 'LUA'],

  toolsAndIde: [
    'Visual Studio', 'Docker', 'Figma & FigJam', 'IntelliJ', 'Spyder',
    'draw.io', 'Wokwi', 'Canvas', 'DBeaver', 'Unity Hub', 'Firebase', 'MySQL'
  ],

  spokenLanguages: [
    { name: 'Thai', level: 'Native' },
    { name: 'English', level: null }
  ],

  aiTools: [
    {
      name: 'ChatGPT',
      uses: [
        'Explains code & debugs issues',
        'Helps write code (multiple languages)',
        'Summarizes content & explains concepts'
      ]
    },
    {
      name: 'Gemini',
      uses: ['Searches for information & summarizes from Google']
    },
    {
      name: 'Copilot',
      uses: ['Real-time code suggestions', 'Speeds up coding in VS Code']
    },
    {
      name: 'Claude AI',
      uses: ['Helps design UI layouts', 'Analyzes long-form text', 'Writes detailed content summaries']
    },
    {
      name: 'Stitch AI',
      uses: ['Helps design UI', 'Creates design concepts']
    }
  ],

  projects: [
    {
      id: '001',
      title: 'Computer Repair Shop Management Website',
      description: 'My first web development project, built as a final course submission. Focused on learning and applying web development fundamentals to create something genuinely usable.',
      tags: ['JavaScript', 'HTML', 'CSS', 'REST API', 'Node.js', 'MySQL']
    },
    {
      id: '002',
      title: 'Monkey Fruit Collector Game',
      description: 'A simple collecting-style game where the player takes on the role of a monkey, gathering fruit to score points while dodging pursuit from hunters — adding challenge and excitement to the gameplay.',
      tags: ['C++', 'Unity Hub']
    },
    {
      id: '003',
      title: 'Tutor Booking Mobile App',
      description: 'A mobile application connecting students with tutors. Users can conveniently search for and choose tutors that fit their needs, with a system that makes contact and scheduling fast and efficient.',
      tags: ['Dart', 'Flutter', 'Firebase']
    },
    {
      id: '004',
      title: 'Machine Learning for Mango Disease Detection',
      description: 'Built a machine learning model to detect and classify mango diseases from photos. Designed to efficiently analyze and categorize disease types, supporting better quality management for agricultural produce.',
      tags: ['Data-sci', 'Python', 'AI']
    },
    {
      id: '005',
      title: 'IoT Project (Kitchen Environment Monitoring System)',
      description: 'Developed an IoT system to monitor the kitchen environment, using sensors to collect data and send it to the cloud for efficient analysis and display, with alerts triggered when abnormal readings are detected.',
      tags: ['IOT', 'C++', 'Dart', 'Flutter', 'REST API', 'MQTT', 'Firebase']
    },
    {
      id: '006',
      title: 'SA Project Development (Schedule Management Website)',
      description: 'A website for managing schedules, where users can add, edit, and organize timetables systematically — helping make planning and task tracking more efficient.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      id: '007',
      title: 'Vending Machine Simulation Website',
      description: 'A simulated vending machine website where users can select products and place orders in a realistic way, built as practice for system development and data management.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Firebase']
    },
    {
      id: '008',
      title: 'Concert Ticket Booking App Design',
      description: 'A UI/UX design for a concert ticket booking app, focused on letting users search, select, and book tickets quickly and conveniently.',
      tags: ['Design', 'Figma']
    },
    {
      id: '009',
      title: 'Network Survey & Design at Mahidol University',
      description: 'Conducted a survey and design of the network infrastructure at Mahidol University, analyzing usage patterns and designing an efficient network structure with full coverage and stable performance.',
      tags: ['Survey', 'Networking']
    }
  ],

  activities: [
    {
      title: 'Company Visit to INET',
      image: 'assets/inet.jpg',
      description: 'Took part in a company visit to INET to learn about server room operations and network infrastructure.'
    },
    {
      title: 'Teaching First-Year Students the Basics of C',
      image: 'assets/c-tutor.jpg',
      description: 'Shared foundational knowledge of the C programming language with first-year students to strengthen their understanding of basic programming.'
    },
    {
      title: 'Spring Boot & Angular Training',
      image: 'assets/boot.png',
      description: 'Attended training on web application development using Spring Boot and Angular, building knowledge in both backend and frontend development.'
    },
    {
      title: 'IoT Farm Visit (Zahira Farm)',
      image: 'assets/zahira.jpg',
      description: 'Visited Zahira Farm to learn how IoT technology is applied to farm management, with a focus on improving efficiency and automated system control.'
    }
  ]
};
/**
 * Portfolio Data Source of Truth
 * Derived strictly from Sainath Patil's verified resume.
 * Unavailable information is kept empty.
 */

export const personalInfo = {
  name: 'Sainath Patil',
  role: 'Software Developer',
  subtitle: 'Aspiring Software Developer',
  location: 'Bengaluru, Karnataka, India',
  email: 'policepatilsai123@gmail.com',
  phone: '8431558397',
  summary:
    'Recent Information Science and Engineering graduate with a strong foundation in Java, Python, SQL, Data Structures, and Software Development. Passionate about problem-solving, learning new technologies, and building innovative solutions. Seeking an opportunity to contribute technical skills, gain industry experience, and grow as a software professional while delivering value to the organization.',
  profileImage: '/assets/profile.png',
  fallbackImage: '/assets/profile.png',
  socialLinks: [
    {
      name: 'GitHub',
      url: '',
      label: '',
      username: ''
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sainath-patil-015622305',
      label: 'Connect with Sainath Patil on LinkedIn',
      username: 'sainath-patil-015622305'
    },
    {
      name: 'LeetCode',
      url: '',
      label: '',
      username: ''
    }
  ]
};

export const skillsData = [
  {
    category: 'Programming Languages',
    description: 'Programming languages used for problem-solving and software development.',
    skills: ['Java', 'Python', 'SQL']
  },
  {
    category: 'Frontend Development',
    description: 'Fundamentals of web development and user interface design.',
    skills: ['HTML', 'CSS']
  },
  {
    category: 'Backend & Frameworks',
    description: 'Backend development technologies.',
    skills: ['Spring Boot']
  },
  {
    category: 'Databases & Storage',
    description: 'Relational database management and data handling.',
    skills: ['MySQL']
  },
  {
    category: 'Core Computer Science',
    description: 'Fundamental computer science concepts.',
    skills: [
      'Data Structures & Algorithms',
      'OOPs',
      'DBMS',
      'Operating Systems',
      'Computer Networks'
    ]
  },
  {
    category: 'Tools & Version Control',
    description: 'Development environments and source control tools.',
    skills: ['VS Code', 'Eclipse', 'Git', 'GitHub']
  }
];

export const featuredProjects = [
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection Using Machine Learning',
    tagline: 'Machine Learning-Based Fake News Classification',
    type: 'Academic Project',
    year: '2026',
    category: 'Machine Learning',
    liveUrl: '',
    summary:
      'Built a machine learning model to classify news articles as fake or real using text preprocessing and feature extraction techniques.',
    features: [
      'Developed a machine learning model to classify news articles as fake or real.',
      'Applied text preprocessing techniques.',
      'Used feature extraction techniques for processing news data.',
      'Implemented Logistic Regression algorithm.',
      'Implemented Random Forest algorithm.'
    ],
    technologies: ['Python', 'Machine Learning', 'Logistic Regression', 'Random Forest']
  },
  {
    id: 'hostel-management-system',
    title: 'Hostel Management System',
    tagline: 'Student and Hostel Record Management Application',
    type: 'Academic Project',
    year: '2026',
    category: 'Full-Stack Development',
    liveUrl: '',
    summary:
      'Developed a hostel management system to manage student details, room allocation, and hostel records efficiently.',
    features: [
      'Managed student details, room allocation, and hostel records.',
      'Implemented CRUD operations to add, update, delete, and retrieve student information.',
      'Integrated MySQL database using JDBC.',
      'Designed a user-friendly interface for hostel administration and student record management.'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'JDBC',
      'HTML',
      'CSS',
      'Bootstrap',
      'JavaScript'
    ]
  }
];

export const educationHistory = [
  {
    degree: 'Bachelor of Engineering in Information Science and Engineering',
    institution: 'SJB Institute of Technology, Bengaluru, Karnataka',
    period: '2023 – 2026',
    score: 'CGPA: 8.35 / 10',
    details: ''
  },
  {
    degree: 'Diploma in Tool & Die Making',
    institution: 'Government Tool Room & Training Centre, Bidar, Karnataka',
    period: '2019 – 2023',
    score: 'Percentage: 84%',
    details: ''
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Government High School, Nirna, Karnataka',
    period: '2019',
    score: 'Percentage: 72.64%',
    details: ''
  }
];

export const internshipExperience = [
  {
    company: 'CampusPe',
    role: 'AI Developer Intern',
    year: '2026',
    description: [
      'Worked on AI-based solutions and document analysis applications.',
      'Developed and tested features for the Unified Command Centre project.',
      'Collaborated with team members on implementation and debugging activities.'
    ],
    technologies: []
  }
];

export const certifications = [
  {
    name: 'Python for Data Science',
    issuer: 'NPTEL - IIT Madras',
    year: '2025'
  },
  {
    name: 'Java (Basic)',
    issuer: 'HackerRank',
    year: '2025'
  },
  {
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    year: '2025'
  }
];

export const personalInterests = [];

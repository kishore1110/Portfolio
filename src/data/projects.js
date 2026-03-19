import cafluenceImg from '../assets/images/cafluence.png';
import shunmugamImg from '../assets/images/shunmugam.png';
import expenseTrackerImg from '../assets/images/ExpenseTracker.png';
import dengueImg from '../assets/images/Dengue.png';
import todoImg from '../assets/images/Todo.png';
import DSA from '../assets/images/DSA.png';
import CattleX from '../assets/images/CattleX.png';

export const projects = [
  {
    id: 1,
    title: 'Cafluence',
    description: ' Built a full-stack platform connecting local shop owners and influencers for paid promotions and implemented role-based onboarding and service listings, enabling influencers to manage multiple offerings with pricing.',
    tags: ['React', 'Tailwind CSS','Node.js', 'Express', 'MongoDB','Cloudinary'],
    github: 'https://github.com/kishore1110/cafeBackend',
    live: 'https://cafeinfluence.onrender.com',
    image: cafluenceImg
  },
  {
    id: 2,
    title: 'Production & Sales System',
    description: 'Built a web and mobile system to digitize production and sales tracking for a textile company, used daily by supervisors and administrators. Reduced errors by 70% and saved 2-3 hours per day of administrative overhead.',
    tags: ['React', 'Tailwind CSS','Node.js','Flutter','Firebase','Cloudinary'],
    github: 'https://github.com/kishore1110/shunmugam-textiles-web',
    live: 'https://www.shunmugamtextile.com',
    image: shunmugamImg
  },
  {
    id: 3,
    title: 'DSA Partner Extension',
    description: 'A Chrome extension to track and review DSA problems from LeetCode and GeeksforGeeks efficiently, actively used by 25+ users with a 4.8 rating on Chrome Web Store.',
    tags: ['React', 'Manifest V3','localStorage API'],
    github: 'https://github.com/kishore1110/DSA-Partner',
    live: 'https://chromewebstore.google.com/detail/dsa-partner/mbfpkgojkdhbeohcaldjojfhehcbncea?utm_source=item-share-cb',
    image: DSA
  },
  {
    id: 4,
    title: 'CattleX – Breed Recognition',
    description: 'Built an AI system for Indian cattle and buffalo breed classification using YOLOv8n and EfficientNet-B1 (85%+ accuracy). Deployed on Hugging Face Spaces with a Flask API and integrated into a Flutter app for real-time, cloud-based inference.',
    tags: ['Python', 'Flask', 'Flutter', 'YOLO', 'EfficientNet-B1','Hugging Face'],
    github: 'https://github.com/kishore1110/CattleX',
    live: 'https://drive.google.com/file/d/1D6D9Dfpua68znVd_RiEZ_Zmp26Eypjw-/view?usp=sharing',
    image: CattleX
  },
  {
    id: 5,
    title: 'Expense Tracker',
    description: 'A fast, elegant expense tracking mobile application. Utilizes the blazing-fast Hive NoSQL database for secure, offline-first local data storage, ensuring immediate access to financial visualizations.',
    tags: ['Flutter', 'Dart', 'Hive NoSQL'],
    github: 'https://github.com/kishore1110/Expense_Tracker',
    live: 'https://drive.google.com/file/d/1ZvIRL4QVbywXs5_rMyHvZIQNFYN2W3GW/view?usp=sharing',
    image: expenseTrackerImg
  },
  {
    id: 6,
    title: 'Dengue Risk Intelligence',
    description: 'AI-Powered Ensemble Model utilizing XGBoost for dengue outbreak prediction with 7-day early warnings. Ingests weather, census, and mobility data to generate weekly risk scores visualized on interactive Mapbox maps.',
    tags: ['Python','Flask', 'XGBoost', 'Machine Learning', 'Mapbox'],
    github: 'https://github.com/kishore1110/Dengue-Risk-Intelligence',
    live: 'https://github.com/kishore1110/Dengue-Risk-Intelligence',
    image: dengueImg
  },
  {
    id: 7,
    title: 'Task Manager',
    description: 'A fast and responsive task manager application built with React for organizing and managing daily to-do lists effectively.',
    tags: ['React', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/kishore1110/TaskManager',
    live: 'https://github.com/kishore1110/TaskManager',
    image: todoImg
  },
];

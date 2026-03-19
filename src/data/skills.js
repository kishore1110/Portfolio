import { Code2, Database, LayoutTemplate, Server, Terminal } from 'lucide-react';

export const skills = [
  {
    category: 'Languages',
    icon: Code2,
    items: ['Java', 'Python', 'C', 'JavaScript']
  },
  {
    category: 'Frontend',
    icon: LayoutTemplate,
    items: ['HTML','CSS','React', 'Tailwind CSS', 'Flutter']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express.js']
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MongoDB', 'MySQL', 'Firebase']
  },
  {
    category: 'DevOps & Tools',
    icon: Terminal,
    items: ['Docker', 'Kubernetes']
  },
  {
    category: 'Core Concepts',
    icon: Code2,
    items: ['DSA', 'OS', 'DBMS', 'Networks','OOPS']
  }
];

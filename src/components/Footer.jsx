import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tighter mb-2">K1shore.me</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {currentYear} Kishore S. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <a
            href="mailto:senthilkishore706@gmail.com"
            className="text-gray-400 hover:text-accentLight dark:hover:text-accent transition-colors p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/kishore1110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accentLight dark:hover:text-accent transition-colors p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/kishore1110"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accentLight dark:hover:text-accent transition-colors p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

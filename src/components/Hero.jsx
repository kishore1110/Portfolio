import { motion } from 'framer-motion';
import { FileText, ArrowRight } from 'lucide-react';

const TypewriterText = ({ text, delayOffset = 0 }) => {
  return (
    <>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, display: 'none' }}
          animate={{ opacity: 1, display: 'inline-block' }}
          transition={{ duration: 0.3, delay: delayOffset + index * 0.08 }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </>
  );
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_500px_at_50%_200px,#e0e7ff,transparent)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#1e3a8a,transparent)] opacity-40 mix-blend-multiply dark:mix-blend-overlay"></div>
      
      {/* Floating Blobs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-tight text-gray-900 dark:text-white flex flex-wrap justify-center items-center">
            <span>
              <TypewriterText text="Hi, I'm" delayOffset={0.5} />
            </span>
            <br className="md:hidden" />
            <span className="text-gradient ml-3 md:ml-4">
              <TypewriterText text="Kishore" delayOffset={0.2 + 7 * 0.08} />
            </span>
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-snug"
          >
            Full Stack Developer | <br className="md:hidden" />
            DSA Enthusiast
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Building scalable systems and solving complex problems with clean, efficient code.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
          >
            <button
              onClick={scrollToProjects}
              className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.3)] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <a
              href="https://drive.google.com/file/d/1wKH3X1vlsNOKgxmDOIKlA_LmFwhzrc40/view?usp=sharing"
              target='_blank'
              className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-white dark:bg-[#111827] text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300"
            >
              <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Resume
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400"
      >
        <span className="text-xs font-semibold tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-0.5 h-16 bg-gray-200 dark:bg-gray-800 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-blue-500"
          />
        </div>
      </motion.div>
    </section>
  );
}

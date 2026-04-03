import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';

/* Card — identical overlay approach to ProjectsPage.jsx (proven to work on mobile).
   On touch devices, tapping an element activates :hover, so group-hover: classes
   work for both desktop hover AND mobile tap with zero JavaScript. */
function ProjectCard({ project, idx }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group w-[85vw] md:w-[350px] lg:w-[400px] shrink-0 snap-center relative bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] flex flex-col"
    >
      <div className="aspect-[16/10] overflow-hidden relative bg-gray-100 dark:bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />

        {/* Overlay — group-hover triggers on desktop hover AND mobile tap */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600/90 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 flex-1 flex flex-col bg-gradient-to-b from-transparent to-gray-50/50 dark:to-black/20">
        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const scrollContainerRef = useRef(null);

  const scrollByAmount = (amount) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 -right-[20%] w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A selection of my recent work focusing on scalable solutions, clean code architecture, and excellent user experiences.
          </p>
        </motion.div>

        <div className="relative group/carousel">
          <div className="absolute top-[40%] -left-4 md:-left-12 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scrollByAmount(-400)}
              className="p-4 rounded-full bg-white border-2 border-gray-100 shadow-2xl hover:border-blue-500/50 hover:-translate-x-1 hover:text-blue-600 transition-all font-bold group dark:bg-[#111827] dark:border-gray-800 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>

          <div className="absolute top-[40%] -right-4 md:-right-12 -translate-y-1/2 z-20 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => scrollByAmount(400)}
              className="p-4 rounded-full bg-white border-2 border-gray-100 shadow-2xl hover:border-blue-500/50 hover:translate-x-1 hover:text-blue-600 transition-all font-bold group dark:bg-[#111827] dark:border-gray-800 dark:hover:border-blue-500/50 dark:hover:text-blue-400"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 group-active:scale-90 transition-transform" />
            </button>
          </div>

          <motion.div
            ref={scrollContainerRef}
            layout
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory pt-4 px-4 -mx-4 md:px-0 md:mx-0 scrollbar-hide relative z-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence>
              {projects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            View Full Project Archive
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

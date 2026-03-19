import { motion } from 'framer-motion';
import { skills } from '../data/skills';

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6">Technical Arsenal</h2>
          <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive set of tools, frameworks, and languages I utilize to engineer modern software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={idx}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white dark:bg-[#111827] p-8 md:p-10 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Glow behind icon */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/40 transition-colors duration-500" />
                
                <div className="flex items-center gap-5 mb-8 relative z-10">
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{skillGroup.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-3 relative z-10">
                  {skillGroup.items.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={item}
                      className="px-5 py-2.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-xl border border-gray-200/50 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

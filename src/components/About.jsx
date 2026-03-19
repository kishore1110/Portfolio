import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-transparent via-blue-50/50 dark:via-blue-900/5 to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white">
              About Me
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white dark:bg-[#111827] rounded-[2rem] p-10 md:p-14 shadow-xl shadow-gray-200/50 dark:shadow-none border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">My Journey</h3>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg md:text-xl">
                    Hi, I am a Computer Science student at Kumaraguru College of Technology with a strong foundation in Data Structures, algorithms, and full-stack development. I have developed and deployed real-world applications, focusing on scalability, efficiency, and clean system design.
                </p>
                <p className="text-gray-600 mt-4 dark:text-gray-400 leading-relaxed text-lg md:text-xl">
                    I enjoy solving complex problems through a structured, algorithmic approach and actively sharpen these skills through competitive programming.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col justify-center">
                <h4 className="text-5xl lg:text-6xl font-black mb-2 text-gray-900 dark:text-white">9.01</h4>
                <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold text-sm">CGPA</p>
              </div>
              
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col justify-center">
                <h4 className="text-5xl lg:text-6xl font-black mb-2 text-gray-900 dark:text-white">1200<span className="text-blue-600">+</span></h4>
                <p className="text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold text-sm">DSA Problems Solved</p>
              </div>
              
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none flex flex-col justify-center col-span-2 lg:col-span-1">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="text-4xl font-black mb-1 text-gray-900 dark:text-white">1800+</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Rating</p>
                  </div>
                  <div className="text-right">
                    <h4 className="text-4xl font-black mb-1 text-gray-900 dark:text-white">Top 7%</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Global Rank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

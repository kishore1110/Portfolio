import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Code2, ExternalLink } from 'lucide-react';

const Card3D = ({ children, className, href }) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Max rotation of 10 degrees
        const maxRotate = 10;
        const rotX = -((y - centerY) / centerY) * maxRotate;
        const rotY = ((x - centerX) / centerX) * maxRotate;

        setRotateX(rotX);
        setRotateY(rotY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const Wrapper = href ? motion.a : motion.div;
    const props = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

    return (
        <Wrapper
            {...props}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX,
                rotateY,
                z: (rotateX || rotateY) ? 50 : 0
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ perspective: 1000, transformStyle: "preserve-3d", display: 'block' }}
            className={`w-full ${className || ''}`}
        >
            <div
                style={{ transform: 'translateZ(30px)', transformStyle: "preserve-3d" }}
                className="w-full h-full relative"
            >
                {children}
            </div>
        </Wrapper>
    );
};

export default function Achievements() {
    const honors = [
        {
            title: 'Mahatma Gandhi Scholarship',
            subtitle: 'Consecutive Winner, 2023, 2024 & 2025',
            description: 'Awarded by Kumaraguru College of Technology for outstanding academic excellence in the CSE department. Recognized for consistent top performance across semesters for three consecutive years. Received a cash prize of ₹10,000 each year and a certificate of merit.',
            icon: Trophy,
            color: 'text-blue-600 dark:text-blue-400',
            bg: 'bg-blue-50 dark:bg-blue-500/10',
            border: 'group-hover:border-blue-500/50'
        },
        {
            title: 'First Place – Project Presentation 2.0',
            subtitle: 'TechCon, September 2024',
            description: 'Secured 1st place for pitching a Real-Time Bus Monitoring System concept, organized by IEEE KCT Student Branch. Presented proposed solutions route optimization and improving the commuter experience. Awarded ₹5,000 and a certificate of recognition.',
            icon: Award,
            color: 'text-blue-600 dark:text-blue-400',
            bg: 'bg-blue-50 dark:bg-blue-500/10',
            border: 'group-hover:border-blue-500/50'
        },
        {
            title: 'First Place - LeetCode Challenge',
            subtitle: 'TEXPERIA’26, March 2026',
            description: '1st place in the LeetCode Challenge event at TEXPERIA’26, hosted by SNS College, and won a ₹5,000 cash prize.',
            icon: Medal,
            color: 'text-blue-600 dark:text-blue-400',
            bg: 'bg-blue-50 dark:bg-blue-500/10',
            border: 'group-hover:border-blue-500/50'
        }
    ];

    return (
        <section id="achievements" className="section-padding relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 flex flex-col items-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">Honours & Awards</h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Recognitions in academics and rigorous competitive algorithmic problem solving.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {/* Honours and Awards */}
                    <div className="w-full max-w-5xl mx-auto">
                        {/* <div className="flex items-center justify-center gap-4 mb-12">
              <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-xl">
                <Trophy className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Honours and Awards</h3>
            </div> */}

                        <div className="space-y-6">
                            {honors.map((honor, idx) => {
                                const Icon = honor.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        className={`group relative bg-white dark:bg-[#111827] p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/40 dark:shadow-none hover:-translate-y-1 transition-all duration-500 ${honor.border}`}
                                    >
                                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                                            <div className={`p-4 rounded-2xl ${honor.bg} ${honor.color} shrink-0`}>
                                                <Icon className="w-8 h-8" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{honor.title}</h4>
                                                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4">{honor.subtitle}</p>
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm lg:text-base">
                                                    {honor.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Coding Profiles */}
                    <div className="w-full max-w-5xl mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center justify-center gap-4 mb-12"
                        >
                            {/* <div className="p-3 bg-emerald-100 dark:bg-emerald-500/20 rounded-xl">
                <Code2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div> */}
                            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">Coding Profiles</h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* LeetCode 3D Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <Card3D href="https://leetcode.com/u/kishore_1110/" className="cursor-pointer group">
                                <div className="relative overflow-hidden bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col justify-center group">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 opacity-0 group-hover:opacity-10 blur-3xl rounded-full pointer-events-none transition-opacity duration-500" />

                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6" style={{ transform: "translateZ(40px)" }}>
                                        <div className="flex items-center gap-4">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" alt="LeetCode" className="w-10 h-10 object-contain dark:invert opacity-70 group-hover:opacity-100 transition-opacity" />
                                            <h4 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">LeetCode</h4>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-4 py-1.5 bg-amber-50 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-bold text-sm rounded-lg border border-amber-100 dark:border-amber-800/50">Knight</span>
                                            <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm rounded-lg border border-blue-100 dark:border-blue-800/50">Top 5%</span>
                                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                    </div>

                                    <div style={{ transform: "translateZ(50px)" }} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <p className="text-gray-500 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">Problems Solved</p>
                                                <p className="text-3xl font-black text-gray-900 dark:text-white">850<span className="text-blue-600 dark:text-blue-400">+</span></p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <p className="text-gray-500 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">Max Rating</p>
                                                <p className="text-3xl font-black text-gray-900 dark:text-white">1870</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card3D>
                            </motion.div>

                            {/* GFG 3D Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                <Card3D href="https://www.geeksforgeeks.org/profile/kishore_1110" className="cursor-pointer group">
                                <div className="relative overflow-hidden bg-white dark:bg-[#111827] border border-gray-100 dark:border-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-500 h-full flex flex-col justify-center group">
                                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500 opacity-0 group-hover:opacity-10 blur-3xl rounded-full pointer-events-none transition-opacity duration-500" />

                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6" style={{ transform: "translateZ(40px)" }}>
                                        <div className="flex items-center gap-4">
                                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg" alt="GeeksforGeeks" className="w-10 h-10 object-contain dark:invert opacity-70 group-hover:opacity-100 transition-opacity" />
                                            <h4 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white tracking-tight">GeeksforGeeks</h4>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-sm rounded-lg border border-blue-100 dark:border-blue-800/50">Rank 2</span>
                                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                                        </div>
                                    </div>

                                    <div style={{ transform: "translateZ(50px)" }} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <p className="text-gray-500 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">Problems Solved</p>
                                                <p className="text-3xl font-black text-gray-900 dark:text-white">400<span className="text-blue-600 dark:text-blue-400">+</span></p>
                                            </div>
                                            <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
                                                <p className="text-gray-500 dark:text-gray-400 font-semibold text-xs uppercase tracking-wider mb-1">Coding Score</p>
                                                <p className="text-3xl font-black text-gray-900 dark:text-white">1500<span className="text-blue-600 dark:text-blue-400">+</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Card3D>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

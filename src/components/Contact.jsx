import { useForm } from 'react-hook-form';
import { Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formsubmit.co/ajax/5101b67f714d141182a0584034098b8f", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message,
                    _subject: "New Contact Form Submission from Portfolio",
                    _template: "table"
                }),
            });

            const result = await response.json();
            if (result.success) {
                setIsSubmitted(true);
                reset();
                setTimeout(() => setIsSubmitted(false), 4000);
            } else {
                console.error(result);
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("An error occurred. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding relative">
            <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-blue-50/80 dark:from-blue-900/10 to-transparent -z-10" />

            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900 dark:text-white">Let&apos;s Work Together</h2>
                    {/* <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p> */}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-white dark:bg-[#111827] p-8 md:p-14 rounded-[2.5rem] border border-gray-100 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-none max-w-3xl mx-auto relative overflow-hidden"
                >
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-bl-[100px] pointer-events-none" />

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-20 relative z-10"
                        >
                            <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                            </div>
                            <h3 className="text-4xl font-black mb-4 text-gray-900 dark:text-white">Message Sent!</h3>
                            <p className="text-xl text-gray-600 dark:text-gray-400">Thanks for reaching out. I will get back to you shortly.</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-bold mb-3 text-gray-900 dark:text-gray-200 uppercase tracking-wide" htmlFor="name">
                                        Your Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register("name", { required: "Name is required" })}
                                        className={`w-full px-6 py-4 rounded-2xl border-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 outline-none ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-blue-500'
                                            }`}
                                        placeholder="Enter your name"
                                    />
                                    {errors.name && <p className="mt-2 text-sm font-bold text-red-500 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500"></span>{errors.name.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold mb-3 text-gray-900 dark:text-gray-200 uppercase tracking-wide" htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address"
                                            }
                                        })}
                                        className={`w-full px-6 py-4 rounded-2xl border-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 outline-none ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-blue-500'
                                            }`}
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && <p className="mt-2 text-sm font-bold text-red-500 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500"></span>{errors.email.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold mb-3 text-gray-900 dark:text-gray-200 uppercase tracking-wide" htmlFor="message">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    {...register("message", { required: "Message is required" })}
                                    className={`w-full px-6 py-5 rounded-2xl border-2 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 focus:ring-4 focus:ring-blue-500/20 outline-none resize-none ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-transparent focus:border-blue-500'
                                        }`}
                                    placeholder="How can I help you?"
                                ></textarea>
                                {errors.message && <p className="mt-2 text-sm font-bold text-red-500 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-red-500"></span>{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg tracking-wide flex items-center justify-center gap-3 hover:bg-blue-700 hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send className={`w-5 h-5 ${isSubmitting ? "animate-pulse" : ""}`} />
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}

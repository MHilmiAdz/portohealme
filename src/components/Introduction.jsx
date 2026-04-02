import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import heroimg from "../assets/images/pphero2.svg";
import fullresume from "../assets/files/CV ATS - Muhammad Hilmi Adzkia [English] V2.pdf";

// Skill images
import skill1 from "../assets/images/androidskill.png";
import skill2 from "../assets/images/cloudcompskill.png";
import skill3 from "../assets/images/gamedevskill.png";
import skill4 from "../assets/images/designskill.png";
import skill5 from "../assets/images/teachingskill.png";

export function Introduction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Kinetic Typography Effects
    const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const skills = [
        { image: skill1, name: "Android Developer", detail: "Kotlin, Java, View Binding, Retrofit, Jetpack", size: "md:col-span-2 md:row-span-2" },
        { image: skill3, name: "Game Developer", detail: "Construct 3, Unity 2D/3D, Game Design", size: "col-span-1" },
        { image: skill2, name: "Cloud Computing", detail: "GCP, Firebase, Node.js, Flask, Auth", size: "col-span-1" },
        { image: skill4, name: "Designer", detail: "Figma, Canva", size: "col-span-1" },
        { image: skill5, name: "Educator", detail: "Information Technology Teacher & Tutor", size: "col-span-1" },
    ];

    return (
        <section id="home" ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 overflow-hidden">
            {/* 2026 Trend: Organic Floating Shapes */}
            <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-72 md:h-72 bg-jade-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob" />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 md:w-72 md:h-72 bg-jade-secondary/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000" />

            <div className="container-max px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 mb-20 md:mb-32">
                    {/* Image Section */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring" }}
                        className="flex-shrink-0 relative group"
                    >
                        <div className="absolute inset-0 bg-jade-primary/10 rounded-full blur-2xl group-hover:bg-jade-primary/20 transition-all duration-500" />
                        <motion.img
                            src={heroimg}
                            alt="Hilmi"
                            className="w-48 h-48 md:w-80 md:h-80 relative z-10 drop-shadow-2xl"
                            whileHover={{ rotate: 5, scale: 1.05 }}
                        />
                    </motion.div>

                    {/* Text Section with Kinetic Motion */}
                    <motion.div 
                        style={{ y: typeof window !== 'undefined' && window.innerWidth > 768 ? yText : 0, opacity: opacityText }}
                        className="text-center md:text-left flex-1"
                    >
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-3xl font-medium text-jade-light mb-2"
                        >
                            Hi, I'm <span className="text-jade-primary font-bold">Hilmi</span>
                        </motion.h2>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 md:mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter text-jade-pale"
                        >
                            Architecting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Digital</span> <br />
                            Experiences.
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base md:text-xl text-jade-light/80 mb-8 md:mb-10 max-w-xl leading-relaxed"
                        >
                            Specializing in <span className="text-jade-pale font-semibold">Android Development</span>, 
                            <span className="text-jade-pale font-semibold"> Game Design</span>, and 
                            <span className="text-jade-pale font-semibold"> Technical Education</span>.
                        </motion.p>
                        
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={fullresume} 
                                download="Hilmi_Resume.pdf"
                                className="btn-jade text-sm px-8 py-4"
                            >
                                Get Resume
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsModalOpen(true)}
                                className="px-6 md:px-8 py-4 bg-jade-deep/30 border border-jade-primary/20 text-jade-primary rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-jade-primary/10 transition-all shadow-lg"
                            >
                                Specialties
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* 2026 Trend: Bento Grid for Skills */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 md:mt-20"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-10 md:mb-12 gap-4 text-center md:text-left">
                        <div>
                            <h3 className="text-[10px] md:text-sm font-black text-jade-primary uppercase tracking-[0.4em] mb-2 md:mb-4">Specialization</h3>
                            <h2 className="text-3xl md:text-5xl font-black text-jade-pale tracking-tighter">Core <span className="text-jade-primary">Expertise</span></h2>
                        </div>
                        <p className="text-jade-light text-xs md:text-sm max-w-xs md:text-right">
                            Multi-disciplinary approach combining mobile engineering with creative design.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:auto-rows-[200px]">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5, scale: 1.01 }}
                                className={`${skill.size} bg-jade-deep/20 border border-jade-primary/10 p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] backdrop-blur-xl relative group overflow-hidden flex flex-col justify-end transition-all duration-500`}
                            >
                                {/* Layered depth visual */}
                                <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                                    <img src={skill.image} alt="" className="w-24 h-24 md:w-32 md:h-32 object-contain grayscale" />
                                </div>
                                
                                <div className="relative z-10">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-jade-dark rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 border border-jade-primary/20 group-hover:bg-jade-primary group-hover:text-jade-dark transition-colors duration-500">
                                        <img src={skill.image} alt={skill.name} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                                    </div>
                                    <h4 className="text-lg md:text-xl font-black text-jade-pale mb-1 md:mb-2">{skill.name}</h4>
                                    <p className="text-jade-light/60 text-[10px] md:text-xs font-medium leading-relaxed max-w-[250px]">{skill.detail}</p>
                                </div>
                                
                                <div className="absolute inset-0 bg-gradient-to-tr from-jade-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Specialties Selection Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-jade-dark/95 backdrop-blur-md"
                            onClick={() => setIsModalOpen(false)}
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-jade-deep/40 p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] max-w-sm w-full shadow-2xl border border-jade-primary/20 text-center backdrop-blur-2xl"
                        >
                            <h3 className="text-xl md:text-2xl font-black text-jade-pale mb-6 md:mb-8 uppercase tracking-widest">Select <span className="text-jade-primary">Track</span></h3>
                            <div className="space-y-3 md:space-y-4">
                                {["Android Developer", "Game Developer", "Educator"].map((role) => (
                                    <button
                                        key={role}
                                        className="w-full py-4 md:py-5 px-6 bg-jade-dark/50 hover:bg-jade-primary text-jade-pale hover:text-jade-dark rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all duration-300 border border-jade-primary/10 shadow-lg"
                                    >
                                        {role} Resume
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="mt-8 md:mt-10 text-jade-light/50 hover:text-jade-pale font-black text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-colors"
                            >
                                [ Back ]
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}

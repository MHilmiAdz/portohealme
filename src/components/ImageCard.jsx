import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageCard({ image, alt, details, author, title }) {
    const [isOpen, setIsOpen] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    return (
        <>
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, translateY: -5 }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-jade-primary/5 border border-jade-primary/10 bg-jade-deep/20 backdrop-blur-sm cursor-pointer transition-all duration-300 group"
                onClick={() => setIsOpen(true)}
            >
                {/* Changed object-cover to object-contain to prevent cropping */}
                <div className="aspect-video overflow-hidden bg-jade-dark/50 relative p-4">
                    <div className="absolute inset-0 bg-jade-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                    <img
                        src={image}
                        alt={alt || title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-jade-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="px-6 py-3 bg-jade-primary text-jade-dark font-black uppercase tracking-widest rounded-xl text-xs transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg shadow-jade-primary/20">
                        View Design
                    </span>
                </div>

                {/* Title bottom left */}
                <div className="absolute bottom-4 left-4 z-30 pointer-events-none">
                    <span className="text-jade-pale text-[10px] font-bold bg-jade-dark/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-jade-primary/20 shadow-lg uppercase tracking-wider">
                        {title}
                    </span>
                </div>
            </motion.div>

            {/* Modal Popup */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 flex items-center justify-center p-4 z-[110]">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-jade-dark/95 backdrop-blur-md"
                            onClick={() => setIsOpen(false)}
                        />
                        
                        <motion.div 
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative bg-jade-deep p-6 md:p-10 rounded-3xl max-w-4xl w-full shadow-2xl border border-jade-primary/20 overflow-hidden max-h-[95vh] flex flex-col"
                        >
                            <button
                                className="absolute top-6 right-6 text-jade-light hover:text-jade-primary transition-colors z-20 bg-jade-dark/80 backdrop-blur-sm p-3 rounded-full border border-jade-primary/20"
                                onClick={() => setIsOpen(false)}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                                <div className="flex flex-col gap-8">
                                    <div className="flex justify-center items-center bg-jade-dark/60 rounded-2xl p-4 md:p-8 border border-jade-primary/5 relative">
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-jade-dark/30 rounded-2xl pointer-events-none" />
                                        <img
                                            src={image}
                                            alt={alt || title}
                                            className="max-w-full max-h-[60vh] object-contain rounded-xl shadow-2xl relative z-10"
                                        />
                                    </div>
                                    
                                    <div className="text-center md:text-left pb-6">
                                        <h3 className="text-3xl md:text-4xl font-black text-jade-pale mb-4">{title}</h3>
                                        <p className="text-jade-light leading-relaxed text-base md:text-lg max-w-3xl mx-auto md:mx-0">{details}</p>
                                        
                                        {author && (
                                            <div className="mt-8 border-t border-jade-primary/10 pt-6">
                                                <p className="text-sm text-jade-light/70 italic font-medium uppercase tracking-widest">
                                                    {author}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-6 border-t border-jade-primary/10 mt-auto flex justify-center">
                                <button
                                    className="px-10 py-4 bg-jade-primary text-jade-dark font-black rounded-xl hover:bg-jade-pale hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-jade-primary/20 transition-all duration-300 active:scale-95 uppercase tracking-[0.2em] text-xs w-full md:w-auto"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Close Design
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

// Grid to render multiple ImageCards
export function ImageCardGrid({ cards }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {cards.map((card, idx) => (
                <ImageCard key={idx} {...card} />
            ))}
        </div>
    );
}

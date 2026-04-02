import { motion } from "framer-motion";
import { ImageCard } from "./ImageCard";
import { designs } from "../data/designs";

export function Designs() {
  return (
    <section className="section-padding relative overflow-hidden bg-jade-dark/50">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-jade-primary/30 to-transparent" />
      
      <div className="container-max relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between mb-24 gap-10">
          <div className="max-w-2xl">
            <h3 className="text-sm font-black text-jade-primary uppercase tracking-[0.5em] mb-6">Creative Work</h3>
            <h2 className="text-5xl md:text-7xl font-black text-jade-pale tracking-tighter leading-tight">
                Selected <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-jade-primary to-jade-light">Designs</span>
            </h2>
          </div>
          <div className="md:text-right flex flex-col items-start md:items-end gap-6">
            <p className="text-jade-light text-base max-w-xs leading-relaxed font-medium">
                Exploring the intersection of art and digital communication through bold visuals and consistent branding.
            </p>
            <div className="flex gap-4">
                <div className="w-12 h-[1px] bg-jade-primary/20 mt-3" />
                <span className="text-[10px] font-black text-jade-primary uppercase tracking-widest">{designs.length} Selected Pieces</span>
            </div>
          </div>
        </div>

        {/* 2026 Trend: Masonry-style Balanced Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Main Featured Piece */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:col-span-8 group"
            >
                <div className="relative h-full">
                    <ImageCard {...designs[0]} />
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-jade-primary/20 rounded-tl-3xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
                </div>
            </motion.div>

            {/* Side Column */}
            <div className="md:col-span-4 flex flex-col gap-10">
                {designs.slice(1).map((design, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                    >
                        <ImageCard {...design} />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}

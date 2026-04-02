import { motion } from "framer-motion";
import { Card } from "./Card";
import { certificates } from "../data/certificates";

export function Certificate() {
  return (
    <section className="section-padding">
      <div className="container-max text-center">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4"
          >
            My <span className="text-jade-primary">Certifications</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-jade-light max-w-xl mx-auto"
          >
            Verified skills and achievements from industry-recognized platforms.
          </motion.p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="grid md:grid-cols-3 gap-8 w-full">
            {certificates?.map((project, index) => (
              <Card key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

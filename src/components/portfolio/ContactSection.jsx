import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-3">04. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently open to new opportunities and always interested in hearing about
            exciting projects. Whether you have a question or just want to say hi, feel free
            to reach out — I'll do my best to get back to you!
          </p>
          <a
            href="mailto:farhan@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary text-primary font-mono hover:bg-primary/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

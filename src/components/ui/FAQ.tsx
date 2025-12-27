import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What types of businesses does QETA work with?",
    answer: "We work with mid-size to enterprise companies that have complex operational workflows ready for automation. Our ideal clients are serious about investing in AI infrastructure that delivers measurable ROI, not just proof-of-concept demos."
  },
  {
    question: "How long does it take to implement an AI solution?",
    answer: "Implementation timelines vary based on complexity. Simple workflow automations can be deployed in 2-4 weeks, while comprehensive AI systems may take 2-3 months. We provide a detailed timeline during our initial strategy call."
  },
  {
    question: "What makes QETA different from other AI automation providers?",
    answer: "We focus on production-grade systems, not prototypes. Our solutions are built to scale with your business, integrate seamlessly with existing infrastructure, and deliver consistent results. We prioritize long-term operational impact over flashy demos."
  },
  {
    question: "Do I need technical expertise to use QETA's solutions?",
    answer: "No. Our systems are designed to integrate into your existing workflows with minimal training required. We handle the technical complexity so your team can focus on their core work."
  },
  {
    question: "What kind of ROI can I expect from AI automation?",
    answer: "Our clients typically see 40-70% reduction in manual processing time and significant cost savings within the first quarter. We work with you to establish clear KPIs before implementation and track measurable results."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "Security is foundational to everything we build. We implement enterprise-grade encryption, follow industry compliance standards (SOC 2, GDPR, HIPAA as needed), and can deploy within your existing security infrastructure."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
};

export const FAQ = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        animate: {
          transition: { staggerChildren: 0.08 }
        }
      }}
      className="w-full max-w-3xl mx-auto"
    >
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <span className="pill-accent mb-6 inline-flex">FAQ</span>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground text-lg">
          Everything you need to know about working with QETA.
        </p>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass-card !p-0 border-border/30 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-5 text-left hover:no-underline hover:bg-primary/5 transition-colors [&[data-state=open]]:bg-primary/5">
                <span className="font-medium text-foreground pr-4">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 pt-0 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </motion.div>
  );
};

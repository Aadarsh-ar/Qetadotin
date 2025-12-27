import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const principles = [
  {
    title: "Systems over tools",
    description: "Tools are commodities. Systems are assets. We build infrastructure that compounds value over time, not point solutions that create dependencies."
  },
  {
    title: "Reliability over speed",
    description: "Fast deployment means nothing if systems break in production. We optimize for stability, predictability, and long-term operational value."
  },
  {
    title: "Ownership over dependency",
    description: "You own everything we build. Full source code, complete documentation, trained team. Our goal is to make ourselves unnecessary."
  },
  {
    title: "Outcomes over activity",
    description: "We measure success by operational impact—time saved, capacity created, friction eliminated. Not by features shipped or hours logged."
  }
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-background pt-32 pb-20 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb w-[600px] h-[600px] bg-stone/15 -top-40 -left-40" />
        </div>
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="pill-accent mb-8 inline-flex">
              About QETA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Built to solve operational problems, not chase trends.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionHeader
              label="Philosophy"
              title="Why QETA exists"
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                QETA was founded on a simple observation: most businesses don't need more AI tools. They need systems that actually work in production.
              </p>
              <p>
                The AI industry is full of demos, prototypes, and proofs of concept. What's missing is reliable infrastructure—systems that run without constant maintenance, scale with the business, and create measurable operational value.
              </p>
              <p>
                We focus exclusively on production-grade automation infrastructure. No experiments, no pilots, no flashy demos. Just systems that eliminate manual work and scale operations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glass-card !p-6"
              >
                <h3 className="font-semibold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            label="Our Approach"
            title="Automation is only meaningful when it's reliable"
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 text-muted-foreground leading-relaxed text-lg"
          >
            <p>
              Every system we build follows the same standard: it must work in production without constant intervention. This isn't a high bar—it's the minimum requirement for operational infrastructure.
            </p>
            <p>
              We don't chase the newest AI models or the latest tooling trends. We use proven, reliable technology that delivers consistent results. The goal is operational value, not technical novelty.
            </p>
            <p>
              Our engagements are structured for clarity. Fixed phases, clear deliverables, transparent timelines. You know exactly what you're getting and when you're getting it.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* The Name */}
      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <SectionHeader
              label="The Name"
              title="QETA"
              className="mb-8"
            />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The wolf represents intelligence, autonomy, and precision. The mountain represents scale, stability, and long-term infrastructure.
              </p>
              <p>
                Together, they embody what we build: intelligent systems with the stability to run at scale. Not flashy tools, but foundational infrastructure.
              </p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-56 h-56 md:w-72 md:h-72 glass-card flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="QETA Logo" 
                className="w-36 h-36 md:w-48 md:h-48 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark className="rounded-t-[3rem]">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
              Ready to discuss your operations?
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-12">
              No sales pitch. Just a conversation about your workflows and whether automation infrastructure makes sense.
            </p>
            <Link to="/contact">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full font-medium shadow-xl"
              >
                Book a Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;
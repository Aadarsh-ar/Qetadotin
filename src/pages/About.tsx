import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
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
      <section className="bg-background pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-6">
              About QETA
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8">
              Built to solve operational problems, not chase trends.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <Section className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              label="Philosophy"
              title="Why QETA exists"
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
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-card border border-border"
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
      <Section className="border-t border-border bg-card">
        <div className="max-w-3xl">
          <SectionHeader
            label="Our Approach"
            title="Automation is only meaningful when it's reliable"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
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
            <p>
              Most importantly, we build for ownership. Every system is deployed to your infrastructure, documented for your team, and designed to run independently. We succeed when you no longer need us.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* The Name */}
      <Section className="border-t border-border">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <SectionHeader
              label="The Name"
              title="QETA"
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
              transition={{ duration: 0.6 }}
              className="w-48 h-48 md:w-64 md:h-64 bg-card border border-border flex items-center justify-center"
            >
              <img 
                src={logo} 
                alt="QETA Logo" 
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Ready to discuss your operations?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10">
            No sales pitch. Just a conversation about your workflows and whether automation infrastructure makes sense.
          </p>
          <Link to="/contact">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-none font-medium"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;

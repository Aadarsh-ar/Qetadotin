import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Workflow, 
  Users, 
  Bot, 
  Layers, 
  Phone, 
  Sparkles, 
  Zap,
  Shield,
  Globe,
  Star,
  Check,
  MessageSquare
} from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

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

const features = [
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    description: "Streamline operations with intelligent automation that adapts to your business needs.",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description: "Build specialized agents for research, support, and decision-making processes.",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Layers,
    title: "System Integration",
    description: "Connect all your tools and data sources into one cohesive ecosystem.",
    gradient: "from-accent to-coral"
  }
];

const stats = [
  { value: "68%", label: "Time Saved" },
  { value: "24/7", label: "Autonomous Ops" },
  { value: "5x", label: "Faster Scaling" }
];

const testimonials = [
  {
    quote: "QETA transformed our operations. What used to take days now happens in minutes.",
    author: "Sarah Chen",
    role: "COO, TechStart Inc",
    avatar: "S"
  },
  {
    quote: "The AI systems they built are incredibly reliable. Zero downtime in 6 months.",
    author: "Marcus Williams",
    role: "CTO, DataFlow",
    avatar: "M"
  },
  {
    quote: "Finally, automation that actually works in production. Game changer for us.",
    author: "Elena Rodriguez",
    role: "VP Operations, ScaleUp",
    avatar: "E"
  }
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "/project",
    description: "Perfect for small automation projects",
    features: [
      "Single workflow automation",
      "Basic integrations",
      "30-day support",
      "Documentation included"
    ],
    featured: false
  },
  {
    name: "Professional",
    price: "$7,500",
    period: "/project",
    description: "For growing businesses needing scale",
    features: [
      "Multiple workflow automations",
      "Custom AI agents",
      "API integrations",
      "90-day support",
      "Priority response"
    ],
    featured: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Full-scale transformation",
    features: [
      "Unlimited automations",
      "Dedicated team",
      "Custom development",
      "24/7 support",
      "SLA guarantees"
    ],
    featured: false
  }
];

const heroIcons = [
  { icon: Zap, label: "Fast" },
  { icon: Shield, label: "Secure" },
  { icon: Globe, label: "Scalable" },
  { icon: Sparkles, label: "Smart" }
];

const teamMembers = [
  {
    name: "Aadarsh",
    role: "Automation & Workflow Architect",
    phone: "+916305367443",
    whatsappLink: "https://wa.me/916305367443"
  },
  {
    name: "Eswar",
    role: "Lead Engineer, AI Integrations",
    phone: "+919391536082",
    whatsappLink: "https://wa.me/919391536082"
  }
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-20 hero-gradient">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="floating-orb-blue w-[600px] h-[600px] -top-40 -right-40 opacity-40" />
          <div className="floating-orb-pink w-[500px] h-[500px] top-1/3 -left-60 opacity-30" style={{ animationDelay: "-7s" }} />
          <div className="floating-orb-coral w-[400px] h-[400px] bottom-20 right-1/4 opacity-25" style={{ animationDelay: "-14s" }} />
          
          {/* Wave background */}
          <div className="wave-bg opacity-50" />
        </div>
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="pill-gradient mb-8 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI Systems Partner
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8"
            >
              <span className="text-foreground">Build </span>
              <span className="gradient-text">Intelligent</span>
              <br />
              <span className="text-foreground">Systems</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10 font-light"
            >
              We design and deploy production-grade AI automation that eliminates manual work, reduces costs, and scales with your business.
            </motion.p>

            {/* Hero icon set */}
            <motion.div 
              variants={fadeInUp}
              className="flex items-center justify-center gap-4 mb-12"
            >
              {heroIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <div className="icon-button">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">{item.label}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="heroOutline" size="xl">
                  Explore Solutions
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Production-Grade AI Systems
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Three core capabilities designed to transform your operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="feature-card h-full">
                  <div className="feature-card-inner">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                We Build Systems,
                <br />
                <span className="gradient-text">Not Demos</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-light">
                Most AI agencies sell tools. We build infrastructure. Our systems are designed to run autonomously, scale infinitely, and never break in production.
              </p>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {teamMembers.map((member, index) => (
                <div key={index} className="glass-card flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-2xl font-bold text-white">{member.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg">{member.name}</h4>
                    <p className="text-muted-foreground text-sm mb-2">{member.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      {member.phone}
                    </div>
                  </div>
                  <a href={member.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="soft" size="sm">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Chat
                    </Button>
                  </a>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative">
        <div className="container-wide px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trusted by Industry Leaders
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="testimonial-card p-8 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-6 font-light">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{testimonial.author}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5" />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
              Choose the plan that fits your automation needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {plan.featured ? (
                  <div className="pricing-card-featured h-full">
                    <div className="pricing-card-featured-inner flex flex-col h-full">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-medium mb-4 w-fit mx-auto">
                        Most Popular
                      </span>
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="mb-4">
                        <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                        <span className="text-muted-foreground text-sm">{plan.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6 font-light">{plan.description}</p>
                      <ul className="space-y-3 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button variant="hero" className="w-full">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="pricing-card flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground text-sm">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6 font-light">{plan.description}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact">
                      <Button variant="heroOutline" className="w-full">
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-95" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-coral/20 rounded-full blur-3xl" />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
              Ready to Automate?
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 font-light">
              Let's discuss how QETA can build the AI infrastructure your business needs to scale.
            </p>
            <Link to="/contact">
              <Button 
                size="xl" 
                className="bg-white text-primary hover:bg-white/90 font-semibold shadow-2xl hover:shadow-xl hover:scale-105 transition-all"
              >
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;

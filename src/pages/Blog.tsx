import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Sample blog posts data
const featuredPost = {
  id: "1",
  title: "How AI Automation is Transforming Business Operations in 2025",
  summary: "Discover the key trends shaping how businesses leverage AI to streamline workflows, reduce costs, and scale operations without adding headcount.",
  category: "Insights",
  date: "Dec 20, 2024",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60"
};

const blogPosts = [
  {
    id: "2",
    title: "Building Production-Ready AI Agents: A Technical Deep Dive",
    summary: "Learn the architecture patterns and best practices for deploying AI agents that actually work in production environments.",
    category: "Engineering",
    date: "Dec 15, 2024",
    readTime: "12 min read"
  },
  {
    id: "3",
    title: "The Real Cost of Manual Workflows: A Data-Driven Analysis",
    summary: "We analyzed 50+ businesses to quantify the hidden costs of manual processes and the ROI of automation.",
    category: "Research",
    date: "Dec 10, 2024",
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "From Fragmented Tools to Unified Systems: A Migration Guide",
    summary: "Step-by-step guide to consolidating your tech stack into a cohesive automation infrastructure.",
    category: "Guides",
    date: "Dec 5, 2024",
    readTime: "10 min read"
  },
  {
    id: "5",
    title: "AI Lead Qualification: Beyond the Basics",
    summary: "Advanced strategies for implementing intelligent lead scoring and qualification at scale.",
    category: "Insights",
    date: "Nov 28, 2024",
    readTime: "7 min read"
  },
  {
    id: "6",
    title: "Case Study: 68% Reduction in Processing Time",
    summary: "How we helped a logistics company transform their operations with custom AI workflows.",
    category: "Case Study",
    date: "Nov 20, 2024",
    readTime: "5 min read"
  },
  {
    id: "7",
    title: "The Future of CRM: AI-Native Relationship Management",
    summary: "Exploring how AI is redefining customer relationship management beyond traditional CRM tools.",
    category: "Insights",
    date: "Nov 15, 2024",
    readTime: "9 min read"
  }
];

const Blog = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none gradient-peach opacity-50" />
        <div className="floating-orb w-[500px] h-[500px] bg-accent/20 -top-32 -right-32" />
        <div className="floating-orb w-[300px] h-[300px] bg-primary/15 bottom-0 -left-20" style={{ animationDelay: "-7s" }} />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span variants={fadeInUp} className="pill-accent mb-6 inline-flex">
              Blog
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6"
            >
              Insights, Updates & Learning
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Explore our thoughts on AI automation, system architecture, and the future of operational efficiency.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <Section className="pt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Link to={`/blog/${featuredPost.id}`} className="block group">
            <div className="blog-card grid md:grid-cols-2 gap-0">
              <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <span className="category-tag w-fit mb-4">{featuredPost.category}</span>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredPost.summary}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <span className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  Read article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </motion.div>
      </Section>

      {/* All Posts Grid */}
      <Section>
        <SectionHeader
          label="All Articles"
          title="Latest from our blog"
          centered
        />
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={fadeInUp}>
              <Link to={`/blog/${post.id}`} className="block group h-full">
                <div className="blog-card h-full p-6 md:p-8 flex flex-col">
                  <span className="category-tag w-fit mb-4">{post.category}</span>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Newsletter CTA */}
      <Section className="bg-secondary/30">
        <div className="text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="pill-accent mb-6 inline-flex">Stay Updated</span>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Get insights delivered to your inbox
            </h2>
            <p className="text-muted-foreground mb-8">
              Join our newsletter for the latest on AI automation, system design, and operational efficiency.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Blog;

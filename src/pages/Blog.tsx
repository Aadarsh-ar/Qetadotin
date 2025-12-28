import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface BlogPost {
  id: string;
  title: string;
  summary: string | null;
  content: string;
  category: string | null;
  image_url: string | null;
  created_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, summary, content, category, image_url, created_at')
      .eq('published', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPosts(data);
    }
    setIsLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden -mt-24">
        {/* Gradient background - extends above to cover nav area */}
        <div className="absolute -top-24 left-0 right-0 bottom-0 gradient-hero-bg opacity-100" />
        
        {/* Floating orbs */}
        <div className="floating-orb w-[600px] h-[600px] bg-primary/30 -top-40 -left-40" />
        <div className="floating-orb w-[500px] h-[500px] bg-accent/25 -top-32 -right-32" style={{ animationDelay: "-7s" }} />
        <div className="floating-orb w-[300px] h-[300px] bg-secondary/25 bottom-0 left-1/4" style={{ animationDelay: "-12s" }} />
        
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

      {/* Loading State */}
      {isLoading && (
        <Section className="pt-8">
          <div className="flex justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
            />
          </div>
        </Section>
      )}

      {/* No Posts State */}
      {!isLoading && posts.length === 0 && (
        <Section className="pt-8">
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No blog posts published yet. Check back soon!</p>
          </div>
        </Section>
      )}

      {/* Featured Post */}
      {!isLoading && featuredPost && (
        <Section className="pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to={`/blog/${featuredPost.id}`} className="block group">
              <div className="blog-card grid md:grid-cols-2 gap-0 overflow-hidden">
                {featuredPost.image_url ? (
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img 
                      src={featuredPost.image_url} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl opacity-20">📝</span>
                  </div>
                )}
                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  {featuredPost.category && (
                    <span className="category-tag w-fit mb-4">{featuredPost.category}</span>
                  )}
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.summary || featuredPost.content.substring(0, 150) + '...'}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.created_at)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {estimateReadTime(featuredPost.content)}
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
      )}

      {/* All Posts Grid */}
      {!isLoading && otherPosts.length > 0 && (
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
            {otherPosts.map((post) => (
              <motion.div key={post.id} variants={fadeInUp}>
                <Link to={`/blog/${post.id}`} className="block group h-full">
                  <div className="blog-card h-full p-6 md:p-8 flex flex-col hover:border-accent/30 transition-all duration-300">
                    {post.category && (
                      <span className="category-tag w-fit mb-4">{post.category}</span>
                    )}
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                      {post.summary || post.content.substring(0, 100) + '...'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border/50">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(post.created_at)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {estimateReadTime(post.content)}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section className="bg-gradient-to-br from-primary/10 via-periwinkle/10 to-accent/10 rounded-t-[3rem]">
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

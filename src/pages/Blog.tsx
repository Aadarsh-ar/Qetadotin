import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section, SectionHeader } from "@/components/ui/Section";
import { supabase } from "@/integrations/supabase/client";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
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
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center bg-white pt-32 pb-16 overflow-hidden">
          <div className="container-wide text-center relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-3xl mx-auto space-y-6"
            >
              <motion.p
                variants={fadeInUp}
                className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold"
              >
                Insights & updates
              </motion.p>
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl font-serif leading-[1.05] tracking-tight text-black"
              >
                Insights, Updates & <br />
                <span className="text-[#ff7633]">Learning</span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-[#251B18]/75 leading-relaxed font-light font-sans max-w-2xl mx-auto"
              >
                Explore our thoughts on AI automation, system architecture, and the future of operational efficiency.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Loading State */}
        {isLoading && (
          <Section className="py-20 bg-white border-t border-black/5">
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="h-8 w-8 border-2 border-[#ff7633] border-t-transparent rounded-full"
              />
            </div>
          </Section>
        )}

        {/* No Posts State */}
        {!isLoading && posts.length === 0 && (
          <Section className="py-20 bg-white border-t border-black/5">
            <div className="text-center">
              <p className="text-[#251B18]/50 text-lg font-light font-sans">No blog posts published yet. Check back soon!</p>
            </div>
          </Section>
        )}

        {/* Featured Post */}
        {!isLoading && featuredPost && (
          <Section className="py-12 bg-white border-t border-black/5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Link to={`/blog/${featuredPost.id}`} className="block group">
                <div className="bg-[#f8f6f1] border border-black/10 rounded-[30px] overflow-hidden grid md:grid-cols-2 gap-0 shadow-sm">
                  {featuredPost.image_url ? (
                    <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img 
                        src={featuredPost.image_url} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[16/10] md:aspect-auto bg-[#ff7633]/5 flex items-center justify-center border-r border-black/5">
                      <span className="text-6xl opacity-35">📝</span>
                    </div>
                  )}
                  <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
                    {featuredPost.category && (
                      <span className="pill-accent w-fit">{featuredPost.category}</span>
                    )}
                    <h2 className="text-3xl md:text-4xl font-serif text-black font-bold group-hover:text-[#ff7633] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[#251B18]/70 leading-relaxed font-light text-sm font-sans">
                      {featuredPost.summary || featuredPost.content.substring(0, 150) + '...'}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-[#251B18]/50 font-sans">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-[#ff7633]" />
                        {formatDate(featuredPost.created_at)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#ff7633]" />
                        {estimateReadTime(featuredPost.content)}
                      </span>
                    </div>
                    <span className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#ff7633] font-sans pt-2">
                      Read article
                      <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </Section>
        )}

        {/* All Posts Grid */}
        {!isLoading && otherPosts.length > 0 && (
          <Section className="border-t border-black/5 bg-[#f8f6f1]/20 py-20">
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
            >
              {otherPosts.map((post) => (
                <motion.div key={post.id} variants={fadeInUp}>
                  <Link to={`/blog/${post.id}`} className="block group h-full">
                    <div className="bg-[#f8f6f1] border border-black/10 rounded-[20px] p-6 md:p-8 flex flex-col h-full hover:border-[#ff7633]/30 transition-all duration-300">
                      {post.category && (
                        <span className="pill-accent w-fit mb-4">{post.category}</span>
                      )}
                      <h3 className="text-xl font-serif text-black font-bold mb-3 group-hover:text-[#ff7633] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-[#251B18]/70 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-light font-sans">
                        {post.summary || post.content.substring(0, 100) + '...'}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#251B18]/50 pt-4 border-t border-black/5 font-sans">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-[#ff7633]" />
                          {formatDate(post.created_at)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#ff7633]" />
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
        <Section className="border-t border-black/5 relative overflow-hidden bg-white py-24">
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >

              <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
                Get insights delivered to your inbox
              </h2>
              <p className="text-[#251B18]/70 text-lg max-w-xl mx-auto leading-relaxed font-light font-sans">
                Join our newsletter for the latest on AI automation, system design, and operational efficiency.
              </p>
              <Link to="/contact" className="btn-gold group inline-flex font-sans uppercase font-bold text-xs mt-4">
                Subscribe to Newsletter
                <ArrowRight className="ml-2.5 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </Section>
      </PageLayout>
    </div>
  );
};

export default Blog;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  summary: string | null;
  content: string;
  category: string | null;
  image_url: string | null;
  created_at: string;
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchPost();
    }
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('id, title, summary, content, category, image_url, created_at')
      .eq('id', id)
      .eq('published', true)
      .maybeSingle();

    if (!error && data) {
      setPost(data);
    }
    setIsLoading(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const estimateReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (isLoading) {
    return (
      <PageLayout>
        <Section className="pt-32">
          <div className="flex justify-center py-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
            />
          </div>
        </Section>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout>
        <Section className="pt-32">
          <div className="text-center py-16 max-w-md mx-auto">
            <p className="text-sm uppercase tracking-widest font-medium text-muted-foreground mb-4">
              404
            </p>
            <h1 className="text-3xl font-semibold mb-4">Post not found</h1>
            <p className="text-muted-foreground mb-8">
              This blog post doesn't exist or has been unpublished.
            </p>
            <Link to="/blog">
              <Button variant="hero">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </Section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero-bg" />
        <div className="floating-orb w-[600px] h-[600px] bg-primary/20 -top-40 -left-40" />
        <div className="floating-orb w-[400px] h-[400px] bg-accent/20 -top-20 -right-20" style={{ animationDelay: "-7s" }} />
        
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto"
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            {post.category && (
              <span className="category-tag mb-4 inline-block">{post.category}</span>
            )}
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.created_at)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {estimateReadTime(post.content)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image_url && (
        <Section className="pt-0 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto"
          >
            <div className="aspect-[21/9] rounded-2xl overflow-hidden">
              <img 
                src={post.image_url} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </Section>
      )}

      {/* Content */}
      <Section className="pt-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto prose prose-lg dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:underline"
        >
          <div 
            className="whitespace-pre-wrap text-foreground/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.article>
      </Section>

      {/* Back to Blog CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/blog">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Button>
          </Link>
        </motion.div>
      </Section>
    </PageLayout>
  );
};

export default BlogPost;

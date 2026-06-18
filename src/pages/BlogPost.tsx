import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import DOMPurify from "dompurify";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
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
        <Section className="py-32 bg-white text-center">
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="h-8 w-8 border-2 border-[#ff7633] border-t-transparent rounded-full"
            />
          </div>
        </Section>
      </PageLayout>
    );
  }

  if (!post) {
    return (
      <PageLayout>
        <Section className="py-32 bg-white text-center">
          <div className="max-w-md mx-auto space-y-6">
            <span className="font-sans text-xs uppercase tracking-widest text-[#ff7633] font-bold">404 Error</span>
            <h1 className="text-4xl font-serif text-black">Article not found</h1>
            <p className="text-[#251B18]/70 text-sm font-sans font-light">
              This blog post doesn't exist or has been unpublished.
            </p>
            <Link to="/blog" className="btn-gold font-sans uppercase font-bold text-xs inline-flex">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </Section>
      </PageLayout>
    );
  }

  return (
    <div className="bg-white text-black min-h-screen relative overflow-hidden font-sans">
      <PageLayout>
        {/* Header */}
        <section className="relative min-h-[40vh] flex items-center justify-center bg-white pt-32 pb-16">
          <div className="container-wide px-6 text-center z-10">
            <div className="max-w-3xl mx-auto space-y-6">
              <Link 
                to="/blog" 
                className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#ff7633] hover:underline font-sans"
              >
                <ArrowLeft className="mr-2 h-3.5 w-3.5" />
                Back to Blog
              </Link>
              
              {post.category && (
                <div className="block">
                  <span className="pill-accent">{post.category}</span>
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-serif text-black leading-tight tracking-tight font-medium">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-center gap-4 text-xs text-[#251B18]/50 font-sans">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#ff7633]" />
                  {formatDate(post.created_at)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#ff7633]" />
                  {estimateReadTime(post.content)}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image_url && (
          <Section className="py-0 bg-white">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[21/9] rounded-[20px] border border-black/5 overflow-hidden">
                <img 
                  src={post.image_url} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Section>
        )}

        {/* Content */}
        <Section className="py-16 bg-white font-sans">
          <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-black prose-p:text-[#251B18]/80 prose-p:leading-relaxed prose-p:font-light prose-p:text-base prose-a:text-[#ff7633] prose-a:no-underline hover:prose-a:underline">
            <div 
              className="whitespace-pre-wrap text-[#251B18]/80 leading-relaxed font-light text-base md:text-lg"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
            />
          </article>
        </Section>

        {/* Back to Blog CTA */}
        <Section className="bg-white border-t border-black/5 py-16 text-center">
          <Link to="/blog" className="btn-ghost-bone inline-flex font-sans uppercase font-semibold text-xs">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all articles
          </Link>
        </Section>
      </PageLayout>
    </div>
  );
};

export default BlogPost;

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Plus, Trash2, Edit, Save, X, Upload, LogOut, Eye, EyeOff, ImagePlus, Loader2 } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  summary: string | null;
  content: string;
  category: string | null;
  image_url: string | null;
  published: boolean | null;
  created_at: string;
  updated_at: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
};

const BlogAdmin = () => {
  const { toast } = useToast();
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [serverVerified, setServerVerified] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    summary: "",
    content: "",
    category: "",
    image_url: "",
    published: false,
  });

  // Server-side admin verification
  useEffect(() => {
    const verifyAdminServer = async () => {
      if (!user) {
        setVerifying(false);
        return;
      }

      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.access_token) {
          setVerifying(false);
          navigate('/admin-auth');
          return;
        }

        const { data, error } = await supabase.functions.invoke('verify-admin', {
          headers: {
            Authorization: `Bearer ${session.access_token}`
          }
        });

        if (error || !data?.isAdmin) {
          toast({
            title: "Access Denied",
            description: "You don't have admin privileges.",
            variant: "destructive",
          });
          navigate('/admin-auth');
          return;
        }

        setServerVerified(true);
      } catch (err) {
        toast({
          title: "Verification Failed",
          description: "Could not verify admin status.",
          variant: "destructive",
        });
        navigate('/admin-auth');
      } finally {
        setVerifying(false);
      }
    };

    if (!loading && user && isAdmin) {
      verifyAdminServer();
    } else if (!loading && (!user || !isAdmin)) {
      setVerifying(false);
      navigate('/admin-auth');
    }
  }, [user, isAdmin, loading, navigate, toast]);

  useEffect(() => {
    if (serverVerified) {
      fetchPosts();
    }
  }, [serverVerified]);

  const fetchPosts = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching posts",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
    setIsLoading(false);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setIsEditing(null);
    setFormData({
      title: "",
      summary: "",
      content: "",
      category: "",
      image_url: "",
      published: false,
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(post.id);
    setIsCreating(false);
    setFormData(post);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.content) {
      toast({
        title: "Missing fields",
        description: "Title and content are required.",
        variant: "destructive",
      });
      return;
    }

    if (isCreating) {
      const { error } = await supabase.from('blog_posts').insert({
        title: formData.title,
        summary: formData.summary || null,
        content: formData.content,
        category: formData.category || null,
        image_url: formData.image_url || null,
        published: formData.published || false,
        author_id: user?.id,
      });

      if (error) {
        toast({
          title: "Error creating post",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Post created",
          description: "Your blog post has been created successfully.",
        });
        fetchPosts();
      }
    } else if (isEditing) {
      const { error } = await supabase
        .from('blog_posts')
        .update({
          title: formData.title,
          summary: formData.summary,
          content: formData.content,
          category: formData.category,
          image_url: formData.image_url,
          published: formData.published,
        })
        .eq('id', isEditing);

      if (error) {
        toast({
          title: "Error updating post",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Post updated",
          description: "Your blog post has been updated successfully.",
        });
        fetchPosts();
      }
    }

    setIsCreating(false);
    setIsEditing(null);
    setFormData({});
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id);

    if (error) {
      toast({
        title: "Error deleting post",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Post deleted",
        description: "The blog post has been deleted.",
      });
      fetchPosts();
    }
  };

  const handleTogglePublished = async (id: string, currentState: boolean) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ published: !currentState })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error updating post",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: currentState ? "Post unpublished" : "Post published",
        description: currentState 
          ? "The post is now hidden from the public."
          : "The post is now visible to everyone.",
      });
      fetchPosts();
    }
  };

  const handleCancel = () => {
    setIsCreating(false);
    setIsEditing(null);
    setFormData({});
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload an image smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('blog-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
      
      toast({
        title: "Image uploaded",
        description: "Your image has been uploaded successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload image.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading || verifying) {
    return (
      <PageLayout>
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
          />
        </div>
      </PageLayout>
    );
  }

  if (!user || !isAdmin || !serverVerified) {
    return null;
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="floating-orb w-[500px] h-[500px] bg-primary-foreground/10 -top-40 -right-40" />
        </div>
        <div className="container-wide px-6 md:px-12 lg:px-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium tracking-wide bg-primary-foreground/10 text-primary-foreground mb-8">
              Admin Panel
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-primary-foreground">
              Blog Management
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 leading-relaxed">
              Create, edit, and manage your blog posts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admin Content */}
      <Section className="bg-background">
        <div className="max-w-4xl mx-auto">
          {/* Action Bar */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <h2 className="text-2xl font-semibold">All Posts ({posts.length})</h2>
            <div className="flex gap-3">
              <Button onClick={handleCreate} className="rounded-full">
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
              <Button variant="outline" onClick={handleSignOut} className="rounded-full">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>

          {/* Create/Edit Form */}
          {(isCreating || isEditing) && (
            <motion.div {...fadeInUp} className="mb-8">
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{isCreating ? "Create New Post" : "Edit Post"}</span>
                    <Button variant="ghost" size="icon" onClick={handleCancel}>
                      <X className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="title">Title *</Label>
                      <Input
                        id="title"
                        value={formData.title || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, title: e.target.value })
                        }
                        placeholder="Enter post title"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Input
                        id="category"
                        value={formData.category || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, category: e.target.value })
                        }
                        placeholder="e.g., AI Trends, Engineering"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Featured Image</Label>
                    <div className="flex flex-col gap-4">
                      {formData.image_url && (
                        <div className="relative w-full max-w-md rounded-lg overflow-hidden border border-border">
                          <img 
                            src={formData.image_url} 
                            alt="Preview" 
                            className="w-full h-48 object-cover"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute top-2 right-2 h-8 w-8 rounded-full"
                            onClick={() => setFormData({ ...formData, image_url: "" })}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                      <div className="flex gap-3 items-center">
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => fileInputRef.current?.click()}
                          disabled={isUploading}
                          className="rounded-full"
                        >
                          {isUploading ? (
                            <>
                              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                              Uploading...
                            </>
                          ) : (
                            <>
                              <ImagePlus className="h-4 w-4 mr-2" />
                              Upload Image
                            </>
                          )}
                        </Button>
                        <span className="text-sm text-muted-foreground">or</span>
                        <Input
                          placeholder="Paste image URL"
                          value={formData.image_url || ""}
                          onChange={(e) =>
                            setFormData({ ...formData, image_url: e.target.value })
                          }
                          className="flex-1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="published"
                      checked={formData.published || false}
                      onCheckedChange={(checked) =>
                        setFormData({ ...formData, published: checked })
                      }
                    />
                    <Label htmlFor="published">Publish immediately</Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary">Summary</Label>
                    <Textarea
                      id="summary"
                      value={formData.summary || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, summary: e.target.value })
                      }
                      placeholder="Brief description for the post card"
                      rows={2}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={formData.content || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, content: e.target.value })
                      }
                      placeholder="Full article content..."
                      rows={8}
                    />
                  </div>

                  <div className="flex gap-3 justify-end">
                    <Button variant="outline" onClick={handleCancel} className="rounded-full">
                      Cancel
                    </Button>
                    <Button onClick={handleSave} className="rounded-full">
                      <Save className="h-4 w-4 mr-2" />
                      {isCreating ? "Create Post" : "Save Changes"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Posts List */}
          {isLoading ? (
            <div className="flex justify-center py-16">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full"
              />
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-card !p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        {post.category && (
                          <span className="category-tag">{post.category}</span>
                        )}
                        <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                          post.published 
                            ? 'bg-green-500/20 text-green-600' 
                            : 'bg-yellow-500/20 text-yellow-600'
                        }`}>
                          {post.published ? <Eye className="h-3 w-3" /> : <EyeOff className="h-3 w-3" />}
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2">
                        {post.summary || 'No summary'}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleTogglePublished(post.id, post.published || false)}
                        className="rounded-full"
                        title={post.published ? 'Unpublish' : 'Publish'}
                      >
                        {post.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(post)}
                        className="rounded-full"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(post.id)}
                        className="rounded-full text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}

              {posts.length === 0 && (
                <div className="text-center py-16 text-muted-foreground">
                  <Upload className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No blog posts yet. Create your first post!</p>
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </PageLayout>
  );
};

export default BlogAdmin;

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Trash2, Edit, Save, X, Upload } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  date: string;
  image?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
};

const BlogAdmin = () => {
  const { toast } = useToast();
  const [posts, setPosts] = useState<BlogPost[]>([
    {
      id: "1",
      title: "The Future of AI Automation",
      summary: "How AI is transforming business operations in 2024 and beyond.",
      content: "Full article content here...",
      category: "AI Trends",
      date: "2024-01-15",
    },
    {
      id: "2",
      title: "Building Scalable Systems",
      summary: "Best practices for building automation systems that grow with your business.",
      content: "Full article content here...",
      category: "Engineering",
      date: "2024-01-10",
    },
  ]);

  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    summary: "",
    content: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  });

  const handleCreate = () => {
    setIsCreating(true);
    setIsEditing(null);
    setFormData({
      title: "",
      summary: "",
      content: "",
      category: "",
      date: new Date().toISOString().split("T")[0],
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsEditing(post.id);
    setIsCreating(false);
    setFormData(post);
  };

  const handleSave = () => {
    if (!formData.title || !formData.summary || !formData.content || !formData.category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (isCreating) {
      const newPost: BlogPost = {
        id: Date.now().toString(),
        title: formData.title!,
        summary: formData.summary!,
        content: formData.content!,
        category: formData.category!,
        date: formData.date || new Date().toISOString().split("T")[0],
        image: formData.image,
      };
      setPosts([newPost, ...posts]);
      toast({
        title: "Post created",
        description: "Your blog post has been created successfully.",
      });
    } else if (isEditing) {
      setPosts(
        posts.map((post) =>
          post.id === isEditing ? { ...post, ...formData } as BlogPost : post
        )
      );
      toast({
        title: "Post updated",
        description: "Your blog post has been updated successfully.",
      });
    }

    setIsCreating(false);
    setIsEditing(null);
    setFormData({});
  };

  const handleDelete = (id: string) => {
    setPosts(posts.filter((post) => post.id !== id));
    toast({
      title: "Post deleted",
      description: "The blog post has been deleted.",
    });
  };

  const handleCancel = () => {
    setIsCreating(false);
    setIsEditing(null);
    setFormData({});
  };

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
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold">All Posts ({posts.length})</h2>
            <Button onClick={handleCreate} className="rounded-full">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
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
                      <Label htmlFor="category">Category *</Label>
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

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="date">Publish Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">Image URL (optional)</Label>
                      <Input
                        id="image"
                        value={formData.image || ""}
                        onChange={(e) =>
                          setFormData({ ...formData, image: e.target.value })
                        }
                        placeholder="https://..."
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="summary">Summary *</Label>
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
                    <div className="flex items-center gap-3 mb-2">
                      <span className="category-tag">{post.category}</span>
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.summary}
                    </p>
                  </div>
                  <div className="flex gap-2">
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
        </div>
      </Section>
    </PageLayout>
  );
};

export default BlogAdmin;

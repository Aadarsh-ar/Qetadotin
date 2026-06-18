import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, ArrowLeft } from 'lucide-react';
import { PageLayout } from '@/components/layout/PageLayout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const authSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const AdminAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAdmin, signIn } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user && isAdmin) {
      navigate('/blog-admin');
    }
  }, [user, isAdmin, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const validation = authSchema.safeParse({ email, password });
    if (!validation.success) {
      toast({
        title: 'Validation Error',
        description: validation.error.errors[0].message,
        variant: 'destructive',
      });
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await signIn(email, password);
      if (error) {
        toast({
          title: 'Login Failed',
          description: error.message === 'Invalid login credentials'
            ? 'Invalid email or password. Please try again.'
            : error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Welcome back!',
          description: 'Redirecting to admin panel…',
        });
      }
    } catch {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-white pt-36 pb-16">
        <div className="container-wide text-center relative z-10 space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-sans text-[11px] uppercase tracking-[0.22em] text-[#ff7633] font-bold"
          >
            Admin access
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif tracking-tight text-black"
          >
            Sign in to admin panel.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-[#251B18]/60 font-sans font-light"
          >
            Manage blog posts, contact submissions, and site content.
          </motion.p>
        </div>
      </section>

      {/* Login Form */}
      <section className="bg-white py-16 border-t border-black/5">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-[#f8f6f1] border border-black/8 rounded-[28px] p-10 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-widest font-semibold text-[#251B18]/60">
                    Email address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#251B18]/30" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@qeta.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-11 h-12 bg-white border-black/10 focus:border-[#ff7633] focus-visible:ring-1 focus-visible:ring-[#ff7633] rounded-[10px] text-sm text-black"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-xs uppercase tracking-widest font-semibold text-[#251B18]/60">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#251B18]/30" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-11 h-12 bg-white border-black/10 focus:border-[#ff7633] focus-visible:ring-1 focus-visible:ring-[#ff7633] rounded-[10px] text-sm text-black"
                      required
                      autoComplete="current-password"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-gold justify-center flex gap-2.5 items-center h-12 font-sans uppercase font-bold text-xs"
                >
                  {isLoading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-4 w-4 border-2 border-current border-t-transparent rounded-full inline-block"
                      />
                      Signing in…
                    </>
                  ) : (
                    <>
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 pt-6 border-t border-black/8 text-center space-y-3">
                <p className="text-xs text-[#251B18]/45 font-sans">
                  Admin access is invite-only. Contact the site owner to request access.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center gap-1.5 text-xs text-[#251B18]/50 hover:text-black transition-colors font-sans"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Back to site
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminAuth;

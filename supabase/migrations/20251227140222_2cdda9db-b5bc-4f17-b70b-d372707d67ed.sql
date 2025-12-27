-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Anyone can subscribe to the newsletter
CREATE POLICY "Anyone can subscribe to newsletter"
ON public.newsletter_subscriptions
FOR INSERT
WITH CHECK (true);

-- Only admins can view subscriptions
CREATE POLICY "Admins can view newsletter subscriptions"
ON public.newsletter_subscriptions
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete subscriptions
CREATE POLICY "Admins can delete newsletter subscriptions"
ON public.newsletter_subscriptions
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));
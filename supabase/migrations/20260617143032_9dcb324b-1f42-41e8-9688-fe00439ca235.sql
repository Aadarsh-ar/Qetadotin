
DROP POLICY IF EXISTS "Only admins can delete roles" ON public.user_roles;
DROP POLICY IF EXISTS "Only admins can insert roles" ON public.user_roles;
DROP POLICY IF EXISTS "Only admins can update roles" ON public.user_roles;

CREATE POLICY "Only admins can delete roles" ON public.user_roles
  FOR DELETE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can insert roles" ON public.user_roles
  FOR INSERT TO authenticated
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Only admins can update roles" ON public.user_roles
  FOR UPDATE TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can delete contact submissions" ON public.contact_submissions;
DROP POLICY IF EXISTS "Admins can view contact submissions" ON public.contact_submissions;
CREATE POLICY "Admins can delete contact submissions" ON public.contact_submissions
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

DROP POLICY IF EXISTS "Admins can delete newsletter subscriptions" ON public.newsletter_subscriptions;
DROP POLICY IF EXISTS "Admins can view newsletter subscriptions" ON public.newsletter_subscriptions;
CREATE POLICY "Admins can delete newsletter subscriptions" ON public.newsletter_subscriptions
  FOR DELETE TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));
CREATE POLICY "Admins can view newsletter subscriptions" ON public.newsletter_subscriptions
  FOR SELECT TO authenticated USING (has_role(auth.uid(), 'admin'::app_role));

import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";
import Index from "@/pages/Index";

// Lazy load non-critical pages to reduce initial bundle size
const Solutions = lazy(() => import("@/pages/Solutions"));
const UseCases = lazy(() => import("@/pages/UseCases"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const BlogAdmin = lazy(() => import("@/pages/BlogAdmin"));
const AdminAuth = lazy(() => import("@/pages/AdminAuth"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/solutions" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><Solutions /></PageTransition>
            </Suspense>
          } />
          <Route path="/use-cases" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><UseCases /></PageTransition>
            </Suspense>
          } />
          <Route path="/about" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><About /></PageTransition>
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><Contact /></PageTransition>
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><Blog /></PageTransition>
            </Suspense>
          } />
          <Route path="/blog/:id" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><BlogPost /></PageTransition>
            </Suspense>
          } />
          <Route path="/blog-admin" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><BlogAdmin /></PageTransition>
            </Suspense>
          } />
          <Route path="/admin-auth" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><AdminAuth /></PageTransition>
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<PageLoader />}>
              <PageTransition><NotFound /></PageTransition>
            </Suspense>
          } />
        </Routes>
      </AnimatePresence>
    </>
  );
};

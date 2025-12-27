import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./PageTransition";
import { ScrollToTop } from "./ScrollToTop";
import Index from "@/pages/Index";
import Solutions from "@/pages/Solutions";
import UseCases from "@/pages/UseCases";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogAdmin from "@/pages/BlogAdmin";
import AdminAuth from "@/pages/AdminAuth";
import NotFound from "@/pages/NotFound";
export const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/solutions" element={<PageTransition><Solutions /></PageTransition>} />
          <Route path="/use-cases" element={<PageTransition><UseCases /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:id" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/blog-admin" element={<PageTransition><BlogAdmin /></PageTransition>} />
          <Route path="/admin-auth" element={<PageTransition><AdminAuth /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
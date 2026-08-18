import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Admissions from "./pages/Admissions";
import Programmes from "./pages/Programmes";
import EarlyYears from "./pages/EarlyYears";
import PrimaryYears from "./pages/PrimaryYears";
import CambridgePrimary from "./pages/CambridgePrimary";
import ProgrammeOfInquiry from "./pages/ProgrammeOfInquiry";
import Sports from "./pages/Sports";
import Policies from "./pages/Policies";
import FAQs from "./pages/FAQs";
import ParentHandbook from "./pages/ParentHandbook";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";

import Admin from "./pages/Admin";
import Login from "./admin/auth/Login.tsx";
import NotFound from "./pages/NotFound";

import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/BlogDetails";

import ScrollToTop from "./components/layout/ScrollToTop";

// ==========================================
// ADMIN
// ==========================================

import DasboardLayout from "./admin/DashboardLayout";
import Dashboard from "./admin/Dashboard";

// ==========================================
// POST
// ==========================================

import Blogs from "./admin/post/Blogs";
import AddPost from "./admin/post/AddPost";
import EditPost from "./admin/post/EditPost";

// ==========================================
// CATEGORY
// ==========================================

import AddCategory from "./admin/category/AddCategory";
import ViewCategory from "./admin/category/ViewCategory";
import EditCategory from "./admin/category/EditCategory";

// ==========================================
// PROTECTED ROUTE
// ==========================================

import ProtectedRoute from "./admin/auth/ProtectedRoute.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* ========================================
              ADMIN LOGIN
          ======================================== */}

          <Route path="/admin/login" element={<Admin />} />
          <Route path="/superadmin/login" element={<Login />} />

          {/* ========================================
              PROTECTED ADMIN ROUTES
          ======================================== */}

          <Route
            path="/superadmin"
            element={
              <ProtectedRoute>
                <DasboardLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />

            {/* ===============================
                BLOG
            =============================== */}

            <Route path="blogs/add" element={<AddPost />} />

            <Route path="blogs/view" element={<Blogs />} />

            <Route path="blogs/edit/:id" element={<EditPost />} />

            {/* ===============================
                CATEGORY
            =============================== */}

            <Route path="category/add" element={<AddCategory />} />

            <Route path="category/view" element={<ViewCategory />} />

            <Route path="category/edit/:id" element={<EditCategory />} />
          </Route>

          {/* ========================================
              PUBLIC WEBSITE
          ======================================== */}

          <Route path="/" element={<Index />} />

          <Route path="/about" element={<About />} />

          <Route path="/about/story" element={<About />} />

          <Route path="/programmes" element={<Programmes />} />

          <Route path="/programmes/early-years" element={<EarlyYears />} />

          <Route path="/programmes/primary-years" element={<PrimaryYears />} />

          <Route
            path="/programmes/cambridge-primary"
            element={<CambridgePrimary />}
          />

          <Route path="/admissions" element={<Admissions />} />

          <Route path="/programmes/inquiry" element={<ProgrammeOfInquiry />} />

          <Route path="/about/policies" element={<Policies />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/resources/faqs" element={<FAQs />} />

          <Route path="/resources/handbook" element={<ParentHandbook />} />

          <Route path="/programmes/sports" element={<Sports />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/careers" element={<Careers />} />

          {/* ========================================
              PUBLIC BLOG
          ======================================== */}

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/blog/:slug" element={<BlogDetails />} />

          {/* ========================================
              404
          ======================================== */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

// src/app/page.tsx

'use client'; // Add this directive to make the component a Client Component

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AwardsTimeline from "@/components/home/awards-timeline";
import Blog from "@/components/home/blog";
import Explore from "@/components/home/explore";
import GraphicWebSection from "@/components/home/graphic-web-section";
import Hero from "@/components/home/hero";
import ProjectsSecondSection from "@/components/home/projects-second-section";
import ProjectsShowcase from "@/components/home/ProjectsShowcase";
import Services from "@/components/home/services";
import Testimonials from "@/components/home/testimonials";
import WebLayout from "@/components/layouts/web.layout";
import AboutUs from "@/pages/about-us/AbouUs";  // Import About Us page

export default function Page() {
  return (
    <Router>
      <WebLayout>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <GraphicWebSection />
                <Explore />
                <ProjectsShowcase />
                <ProjectsSecondSection />
                <AwardsTimeline />
                <Testimonials />
                <Blog />
              </>
            }
          />
          
          {/* About Us Route */}
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </WebLayout>
    </Router>
  );
}

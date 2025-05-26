import React from 'react';
import LogoSection from "@/components/home/LogoSection";
import Services from '@/components/home/services';
import GraphicWebSection from '@/components/home/graphic-web-section';
import Explore from '@/components/home/explore';
import ProjectsShowcase from '@/components/home/ProjectsShowcase';
import Testimonials from '@/components/home/testimonials';
import Blog from '@/components/home/blog';

const AboutUs = () => {
  return (
    <>
      {/* Background Section */}
      <section className="relative w-full h-[500px] bg-cover bg-center text-white text-center flex justify-center items-center"
        style={{ backgroundImage: "url('/dist/banners/bg1.png')" }}>
        <div className="text-container">
          <h1 className="font-serif text-xl font-light italic mb-2">Business Models you can Consider</h1>
          <h2 className="font-serif text-9xl font-extrabold">About Us</h2>
        </div>
      </section>

      {/* Logo Section */}
      <LogoSection /> 
      <Services />
      <GraphicWebSection />
      <Explore />
      <ProjectsShowcase />
      <Testimonials />
      <Blog />
    </>
  );
};

export default AboutUs;

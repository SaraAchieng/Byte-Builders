import React from 'react'
import HeroSection from '../components/home/HeroSection';
import CompanyOverview from "../components/home/CompanyOverview";
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';



const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CompanyOverview />
      <ServicesPreview />
      <FeaturedProjects />
    </div>
  );
}

export default Home
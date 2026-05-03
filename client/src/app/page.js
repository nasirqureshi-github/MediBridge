"use client"

import CTASection from "./components/ui/mainpages/Homepage/CTASection";
import DoctorCarousel from "./components/ui/mainpages/Homepage/DoctorCarousel";
import Hero from "./components/ui/mainpages/Homepage/Hero";
import HowItWorks from "./components/ui/mainpages/Homepage/HowItWorks";
import HeroSearch from "./components/ui/mainpages/Homepage/Search";
import StatsSection from "./components/ui/mainpages/Homepage/StatsSection";
import Testimonials from "./components/ui/mainpages/Homepage/testimonials";
import WhyChooseUs from "./components/ui/mainpages/Homepage/WhyChooseUs ";


const Home = () => {
  return (
    <div>
    <Hero/>
    <HeroSearch/>
    <StatsSection/>
    <DoctorCarousel/>
    <HowItWorks/>
     <Testimonials/>
    <WhyChooseUs/>
    <CTASection/>    
     </div>
  );
}

export default Home;
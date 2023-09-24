import FAQs from "@/layout/FAQs";
import Footer from "@/layout/Footer";
import Hero from "@/layout/Hero";
import Introduction from "@/layout/Introduction";
import Judging from "@/layout/Judging";
import Navbar from "@/layout/Navbar";
import PrivacyPolicy from "@/layout/PrivacyPolicy";
import Rules from "@/layout/Rules";
import Testimonial from "@/layout/Testimonial";
import Timeline from "@/layout/Timeline";
import React from "react";

const HomePage = () => {
  return (
    <div className="text-pryColor bg-bgColor h-full w-full relative">
      <Navbar specialStyle={true} />
      <Hero />
      <Introduction />
      <Rules />
      <Judging />
      <FAQs />
      <Timeline />
      <Testimonial />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default HomePage;

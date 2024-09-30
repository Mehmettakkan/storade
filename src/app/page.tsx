"use client";
import React, { useState, useEffect } from "react";
import Header from "@/components/header/header";
import MobileHeader from "@/components/header/mobile-header";
import HomeSlider from "@/components/home-slider/home-slider";
import FooterNavigation from "@/components/footer/footer-navigation";
import FooterContainer from "@/components/footer/footer-container";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white sticky flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        {isMobile ? <MobileHeader /> : <Header />}
      </div>
      
      <main className={`flex-grow ${isMobile ? "mt-[60px]" : "mt-[80px]"}`}>
        <HomeSlider />
        <FooterContainer/>
        {/* Diğer bileşenlerinizi buraya ekleyin */}
      </main>
    </div>
  );
}
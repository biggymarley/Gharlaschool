import React, { useEffect, useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { LoadingSpinner } from "./components/Loading";
import { Map } from "./components/Map";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";
import { Contact } from "./components/Contactus";

const SkateSchool = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Hero />
      <About />
      <Pricing />
      <Reviews />
      <Gallery />
      <Contact/>
      <Map />
      <Footer />
    </div>
  );
};

export default SkateSchool;
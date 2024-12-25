import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import {
  Check,
  Instagram,
  Mail,
  MailIcon,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import about from "/assets/about.jpg";
import action1 from "/assets/action1.jpeg";
import action2 from "/assets/action2.jpeg";
import action3 from "/assets/action3.jpg";
import action4 from "/assets/action4.jpg";
import hero from "/assets/hero.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";
// import { Navigation, Pagination, Scrollbar } from "swiper";

const LoadingSpinner = () => (
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
    <div className="relative w-[600px] h-[600px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <DotLottieReact
          src="https://lottie.host/1734c84b-d01e-4b87-b541-02fa104cfb86/RFFD4XNPug.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  </div>
);

const SkateSchool = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  const staff = [
    {
      name: "Tony Rodriguez",
      role: "Head Coach",
      experience: "15+ years",
      specialty: "Street & Vert",
    },
    {
      name: "Sarah Chen",
      role: "Junior Coach",
      experience: "8 years",
      specialty: "Technical Street",
    },
    {
      name: "Mike Wilson",
      role: "Advanced Coach",
      experience: "12 years",
      specialty: "Park & Bowl",
    },
  ];

  const reviews = [
    {
      name: "Siri",
      rating: 5,
      comment:
        "Shoutout to Gharla at Gharla Skate School! Had an amazing time learning from him. Their skill, patience, and focus on safety made the experience outstanding. Fast progress, great community vibe. Highly recommend!",
      image: "/api/placeholder/400/300",
    },
    {
      name: "Dench",
      rating: 5,
      comment:
        "Got my skate mojo back thanks to my great teacher @youness_gharla with @gharla_skate_school",
      image: "/api/placeholder/400/300",
    },
    {
      name: "Ana",
      rating: 5,
      comment: "Thanks a lot, it was so much fun",
      image: "/api/placeholder/400/300",
    },
  ];

  const pricing = [
    {
      tier: "Basic",
      price: "$30",
      features: [
        "2 hours Session",
        "Basic Trick Fundamentals",
        "Access to Practice Area",
      ],
    },
    {
      tier: "Standard",
      price: "$25/lesson",
      features: [
        "1 to 5 Private Lessons",
        "Advanced Trick Training",
        "Access to Practice Area",
      ],
    },
    {
      tier: "Deluxe",
      price: "$20/lesson",
      features: [
        "1 to 10 Private Lessons",
        "Pro-Level Training",
        "Access to Practice Area",
      ],
    },
  ];
  const actions = [action1, action2, action3, action4];
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Rest of the component remains unchanged */}
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-black/60">
          <img
            src={hero}
            alt="Skatepark"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-6xl font-bold mb-4 uppercase font">
            gharla skate school
          </h1>
          <p className="text-xl mb-8">Push Your Limits. Master The Board.</p>
          <button className="font bg-yellow-500 hover:yellow-yellow-700 text-black px-8 py-3 rounded-full text-lg font-bold transition-all">
            Start Skating
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font">
            About Our School
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg">
                Founded by pro skaters with a passion for teaching, Radical
                Skate School has been turning beginners into rippers since 2010.
                Our state-of-the-art facility and experienced coaches create the
                perfect environment for progression at any skill level.
              </p>
            </div>
            <div>
              <img
                src={about}
                alt="Skate facility"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font">
            Choose Your Path
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((tier) => (
              <div key={tier.tier} className="bg-gray-900 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  {tier.tier}
                </h3>
                <p className="text-3xl font-bold text-yellow-500 text-center mb-6">
                  {tier.price}
                </p>
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-yellow-400 hover:bg-yellow-700 text-black py-3 rounded-lg mt-8 transition-all">
                  Choose {tier.tier}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font">
            Skater Reviews
          </h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="bg-gray-800 p-6 rounded-lg min-h-[350px] mt-4">
                  <div className="flex items-center mb-4">
                    {/* <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full mr-4"
                    /> */}
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">{review.comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Gallery Section */}

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font">
            The Action
          </h2>
          <div className="hidden md:flex">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={false}
              loop
              modules={[EffectCoverflow, Pagination]}
              // className="mySwiper"
            >
              {actions.map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="flex justify-center">
                    <img
                      src={_}
                      alt={`Skating action ${i + 1}`}
                      className="rounded-lg hover:opacity-75 transition-opacity cursor-pointer w-[90%] md:w-[350px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex md:hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={false}
              loop
              modules={[EffectCoverflow, Pagination]}
              // className="mySwiper"
            >
              {actions.map((_, i) => (
                <SwiperSlide key={i}>
                  <div className="flex justify-center">
                    <img
                      src={_}
                      alt={`Skating action ${i + 1}`}
                      className="rounded-lg hover:opacity-75 transition-opacity cursor-pointer w-[90%] md:w-[350px]"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-800 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center text-yellow-500">
                  <MapPin className="w-6 h-6 mr-4 text-yellow-500" />
                  <p>SkatePark Taghazout, Agadir</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  <MailIcon className="w-6 h-6 mr-4 text-yellow-500" />
                  <p>younesswahid123@gmail.com</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Phone className="w-6 h-6 mr-4 text-yellow-500" />
                  <p>+212 634-654666</p>
                </div>
                <div className="flex items-center text-yellow-500">
                  <Mail className="w-6 h-6 mr-4 text-yellow-500" />
                  <p>test@test.com</p>
                </div>
              </div>
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.instagram.com/gharla_skate_school/"
                  target="_blank"
                  className="flex text-yellow-500 "
                >
                  <Instagram className="w-6 h-6 mr-4 cursor-pointer  " />
                  <span>@gharla_skate_school</span>
                </a>
                {/* <Youtube className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition-colors" /> */}
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-gray-900 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-900 rounded-lg"
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full p-3 bg-gray-900 rounded-lg"
                ></textarea>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 relative">
        <div className="absolute inset-0 bg-gray-900/20">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5708.83809806148!2d-9.713270599999998!3d30.548160199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb24d5b3f6946a3%3A0xe3a3e15064c029af!2sSkatePark%20Taghazout!5e1!3m2!1sen!2sma!4v1735079003947!5m2!1sen!2sma"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter brightness-90"
            title="Radical Skate School Location"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Radical Skate School. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SkateSchool;

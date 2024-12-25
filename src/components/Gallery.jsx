import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../data/data";

export const Gallery = () => {
  const actions = Object.values(images.action);

  return (
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
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
          >
            {actions.map((action, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center">
                  <img
                    src={action}
                    alt={`Skating action ${i + 1}`}
                    className="rounded-lg hover:opacity-75 transition-opacity cursor-pointer w-[90%] h-[350px] object-cover"
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
           
            autoplay={{
              delay: 2500,
            }}
            loop={true}
            modules={[EffectCoverflow, Autoplay]}
          >
            {actions.map((action, i) => (
              <SwiperSlide key={i}>
                <div className="flex justify-center">
                  <img
                    src={action}
                    alt={`Skating action ${i + 1}`}
                    className="rounded-lg hover:opacity-75 transition-opacity cursor-pointer w-[90%] h-[350px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

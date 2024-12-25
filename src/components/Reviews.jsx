import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { reviews } from "../data/data";

export const Reviews = () => {

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center font">
          Skater Reviews
        </h2>
        <div className="hidden md:flex">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
        
            modules={[Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="bg-gray-800 p-6 rounded-lg min-h-[300px] mt-4">
                  <div className="flex items-center mb-4">
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
        <div className="flex md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
        
            modules={[Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="bg-gray-800 p-6 rounded-lg min-h-[350px] mt-4">
                  <div className="flex items-center mb-4">
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
      </div>
    </section>
  );
};

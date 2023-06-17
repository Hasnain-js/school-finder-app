import { SwiperSlide, Swiper } from "swiper/react";
import { SchoolCard } from "../SchoolCard";
import { Autoplay, Navigation, Pagination } from "swiper";

export const SchoolCardSection = () => {
  const schoolCardData = {
    image: "/images/banner-2.jpg",
    category: "UI/UX Design",
    title: "UI/UX Design for Beginners",
    ratings: [1, 2, 3, 5],
  };
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className=" flex-col">
        <h2 className="text-black text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight">
          Our Schools
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={3000}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="custom-swiper"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((items) => {
            return (
              <SwiperSlide key={items}>
                <SchoolCard
                  category={schoolCardData.category}
                  title={schoolCardData.title}
                  image={schoolCardData.image}
                  ratings={schoolCardData.ratings}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

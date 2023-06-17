// import { Inter } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Review } from "@/components/Review";
import { HeroicSection } from "@/components/home/HeroicSection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { SchoolCardSection } from "@/components/home/SchoolCardSection";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ReviewData = {
    titleHead: "Shooting Stars",
    titlePara:
      "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  };
  return (
    <>
      <main>
        {/* Heroic Section */}
        <HeroicSection />
        {/* Heroic Section end */}

        {/* lower banner section */}
        <FeatureSection />
        {/* lower banner section end */}

        {/* Our schools */}
        <SchoolCardSection />
        {/* End Our schools */}

        {/* cookies section */}
        <section class="bg-almond">
          <div class="mx-auto max-w-7xl px-6 grid items-center lg:grid-cols-2 gap-20">
            <div class="relative pt-14">
              <Image
                class="w-full max-w-xs mx-auto"
                src={"/images/girl_books.png"}
                alt="girl_books.png"
                width={475}
                height={550}
              />
            </div>
            <div className="space-y-4">
              <h2 class="text-3xl font-bold leading-tight text-gunMetal sm:text-4xl lg:text-5xl lg:leading-tight">
                Premium <span className="text-rustyRed">Learning</span>{" "}
                Experience
              </h2>
              <div className="flex flex-col items-stretch gap-5">
                <div className="flex gap-5 items-start">
                <span className="w-12 h-12 bg-gunMetal rounded"></span>
                  <span className="text-gunMetal space-y-1">
                  <h6 className="text-base font-semibold">Easily Accessible</h6>
                  <p class="text-sm text-silverGrey">
                      Learning Will fell Very Comfortable With Courslab.
                    </p>
                  </span>
                </div>
                <div className="flex gap-5 items-start">
                  <span className="w-12 h-12 bg-gunMetal rounded"></span>
                  <span className="text-gunMetal space-y-1">
                    <h6 className="text-base font-semibold">Fun learning expe</h6>
                    <p class="text-sm text-silverGrey">
                    Learning Will fell Very Comfortable With Courslab.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* review component */}

        <section className="relative py-24 px-6 max-w-7xl mx-auto">
          <div className=" flex-col flex items-center">
            <h2 className="text-black text-center text-3xl font-semibold leading-tight mb-5 sm:text-4xl lg:text-5xl lg:leading-tight">
              Our Reviews
            </h2>
            <p className="text-[#8A8A8A] text-[24px]">
              Lorem Ipsum is simply dummy text of the printing.
            </p>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
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
              {[1, 2, 3, 4].map((items) => {
                return (
                  <SwiperSlide key={items}>
                    <Review
                      titleHead={ReviewData.titleHead}
                      titlePara={ReviewData.titlePara}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <Image
            width={120}
            height={68}
            className="absolute bottom-10 right-0 opacity-100"
            src="/images/planet.png"
            alt="Banner image"
          />
          <Image
            width={120}
            height={68}
            className="absolute bottom-10 left-0 opacity-100"
            src="/images/orange-arrow.png"
            alt="Banner image"
          />
        </section>
      </main>
    </>
  );
}

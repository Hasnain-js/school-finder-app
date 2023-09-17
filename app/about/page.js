import Image from "next/image";
import { HeroicSection } from "@/components/HeroicSection";

const About = () => {
  return (
    <>
      {/* about us section */}
      <section>
        <HeroicSection>
          <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
            About Us
          </h1>
        </HeroicSection>
        <div className="mx-auto max-w-7xl p-6 lg:p-8">
          <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
            <div className="relative lg:mb-12">
              <Image
                className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
                src={"/images/dots-pattern.svg"}
                alt="dot-pattern"
                width={200}
                height={200}
              />
              <div className="pl-12 pr-6">
                <Image
                  className=" object-cover z-10 relative"
                  src={"/images/about-feature-image.png"}
                  alt="about-feature-image"
                  width={500}
                  height={500}
                />
              </div>
              <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20 z-20">
                <div className="max-w-xs bg-rustyRed rounded-lg sm:max-w-md xl:max-w-md">
                  <div className="px-3 py-4 sm:px-5 sm:py-8">
                    <div className="flex items-start">
                      <blockquote className="ml-5">
                        <p className="text-sm font-medium text-white sm:text-lg">
                          “Our goal is to be your trusted companion in the search for educational excellence.”
                        </p>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="2xl:pl-16">
              <h2 className="text-3xl font-bold leading-tight text-blaxck sm:text-4xl lg:text-5xl lg:leading-tight">
                We make things easy for projects.
              </h2>
              <p className="text-xl leading-relaxed text-gray-900 mt-9">
                Welcome to School Finder Application, your reliable source for finding and exploring educational institutions around to your nearest areas in karachi. We understand the importance of education in shaping the future of individuals, and our mission is to empower students, parents, and educators with comprehensive information and resources to make informed decisions about schools.
              </p>
              <p className="text-xl leading-relaxed text-gray-900 mt-9">
                At School Finder, we believe that every student deserves access to quality education. Whether you're searching for a primary school, high school, college, or specialized educational program, our platform is designed to assist you in finding the right fit for your educational needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* about us section end */}
    </>
  );
};

export default About;

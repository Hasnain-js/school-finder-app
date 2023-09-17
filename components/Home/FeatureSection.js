import Image from "next/image";
import searchMagnifier from "@/public/images/home/search-magnifier.svg";
import exploration from "@/public/images/home/exploration.svg";
import enrollment from "@/public/images/home/enrollment.svg";
export const FeatureSection = () => {
  const featureSectionData = [
    {
      title: "Discover Your Educational Path:",
      description:
        "Finding the right school is a critical decision that can shape your educational journey and future success. At School Finder, we understand the importance of making informed choices about education. Our platform is designed to empower students, parents, and educators by providing comprehensive information and resources to simplify the school search process.",
      image: searchMagnifier,
    },
    {
      title: "Personalized Search Experience:",
      description:
        "We believe that every student is unique, and finding the right school involves considering individual needs and preferences. Our advanced search filters allow you to customize your search based on location, curriculum, language of instruction, extracurricular activities, and more. ",
      image: exploration,
    },
    {
      title: "Ratings and Reviews:",
      description:
        "Hearing from others who have experienced a particular school can be invaluable in making your decision. School Finder provides a platform for students, parents, to share their insights and reviews about schools. Read authentic ratings and reviews to gain a deeper understanding of a school's culture, teaching quality, and overall student satisfaction.",
      image: enrollment,
    },
  ];
  return (
    <>
      <section className="bg-gunMetal text-white body-font">
        <div className="max-w-7xl lg:px-6 lg:py-16 mx-auto pt-14 pb-14 pl-8 pr-8">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
            {featureSectionData.map((feature, index) => {
              return (
                <div className="lg:p-6 lg:text-left text-center lg:flex lg:flex-row items-start flex-col" key={feature.title}>
                  <div className="w-12 h-12 inline-flex items-center justify-center rounded-lg bg-roseWhite bg-opacity-20 mb-4 flex-shrink-0">
                    <Image
                      src={feature.image}
                      width={32}
                      height={32}
                      alt="search"
                    />
                  </div>
                  <div className="lg:flex-grow lg:pl-6 text-roseWhite flex-col">
                    <h2 className=" text-lg title-font font-medium mb-2">
                      {feature.title}
                    </h2>
                    <p className="leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

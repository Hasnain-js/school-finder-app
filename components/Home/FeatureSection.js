import Image from "next/image";
import searchMagnifier from "@/public/images/home/search-magnifier.svg";
import exploration from "@/public/images/home/exploration.svg";
import enrollment from "@/public/images/home/enrollment.svg";
export const FeatureSection = () => {
  const featureSectionData = [
    {
      title: "Search and Discovery",
      description:
        "Find Schools that Match Your RequirementsUse our search feature to find schools that match your location, grade level, and academic program requirements. You can easily filter and sort search results to find the schools that are the best fit for you.",
      image: searchMagnifier,
    },
    {
      title: "Exploration and Evaluation",
      description:
        "Explore Schools and Evaluate ThemOnce you have a list of potential schools, explore their profiles and evaluate them based on their academic offerings, extracurricular activities, and location. We provide detailed information about each school to help you make an informed decision. You can also compare different schools side by side to find the best one for you.",
      image: exploration,
    },
    {
      title: "Application and Enrollment",
      description:
        "Apply and Enroll in Your Chosen SchoolAfter you have evaluated different schools and made a decision, you can apply to the school directly through our website or contact the school to learn more. We provide information on how to apply and enroll in the chosen school, as well as any additional resources or support that may be helpful during the application process. Were here to help you every step of the way!",
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

import { HeroicSection } from "@/components/HeroicSection";
import { SchoolCard } from "@/components/SchoolCard";
export default function OurSchool() {
	const schoolCardData = {
		image: "/images/banner-2.jpg",
		category: "UI/UX Design",
		title: "UI/UX Design for Beginners",
		ratings: [1, 2, 3, 5],
	  };
  return (
    <div>
      {/* Heroic Section */}
      <section>
        <HeroicSection>
          <div className="flex flex-col items-center lg:gap-12 gap-6">
            <h1 className="text-4xl font-bold text-black md:text-6xl lg:text-7xl">
              Our Schools
            </h1>
            {/* Search functionality */}
            <form className="relative max-w-[400px] flex items-center lg:text-lg text-xs justify-between shadow-2xl shadow-silverGrey w-full p-2 text-black rounded-2xl bg-white">
              <div className="flex w-full items-center gap-3">
                <span className="w-fit h-fit">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="lg:w-9 w-5 lg:mx-4 mx-2 h-auto"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6125 15.4923C18.7935 13.8795 19.4999 11.8985 19.4999 9.75096C19.4999 4.375 15.1259 0.000976562 9.74993 0.000976562C4.37398 0.000976562 0 4.375 0 9.75096C0 15.1269 4.37403 19.5009 9.74998 19.5009C11.8975 19.5009 13.8787 18.7944 15.4915 17.6134L21.8789 24.0008L24 21.8798C24 21.8797 17.6125 15.4923 17.6125 15.4923ZM9.74998 16.5009C6.02781 16.5009 3.00001 13.4731 3.00001 9.75096C3.00001 6.02879 6.02781 3.00099 9.74998 3.00099C13.4721 3.00099 16.4999 6.02879 16.4999 9.75096C16.4999 13.4731 13.4721 16.5009 9.74998 16.5009Z"
                      fill="#949494"
                    />
                  </svg>
                </span>
                <input
                  type="search"
                  id="default-search"
                  className="bg-transparent w-full outline-none flex-grow"
                  placeholder="Search your dream school here.."
                  required
                />
              </div>

              <button
                type="submit"
                className="text-white bg-rustyRed w-fit hover:bg-blueStone focus:ring-4 focus:outline-none  font-medium rounded-2xl flex-shrink-0 lg:px-9 px-4 lg:py-4 py-2"
              >
                Search
              </button>
            </form>
          </div>
        </HeroicSection>
      </section>
      <div className="max-w-7xl px-6 mx-auto py-16 space-y-12 bg-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 max-w-7xl mx-auto gap-5">
          {[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((items) => {
            return (
				<SchoolCard key={items}
				category={schoolCardData.category}
				title={schoolCardData.title}
				image={schoolCardData.image}
				ratings={schoolCardData.ratings}
			  />
            );
          })}
        </div>
      </div>
    </div>
  );
}

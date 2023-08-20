import Image from "next/image";
import React from "react";

export const HeroicSection = () => {
    return (
        <div className='relative bg-almond overflow-hidden bg-contain bg-center' style={{backgroundImage: "url('/images/Heroic-Banner.png')"}}>
        <div className="mx-auto max-w-7xl lg:px-6 items-center md:justify-center text-center p-20 lg:p-10 justify-center">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 justify-items-center ">
            <div className="flex flex-col lg:gap-9 md:text-center lg:text-left items-center md:items-center ">
              <h1 className="font-bold text-black lg:text-7xl text-3xl md:text-4xl ">
                Get
                <span className="text-rustyRed "> Schools</span>
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0"></span>
                  <div className=" flex flex-wrap relative text-3xl font-bold left-3 lg:left-0 text-black lg:text-7xl md:text-4xl">
                    Inside
                    {/* -top-2 mt-3 relative */}
                    <span className="w-fit relative -mt-1">
                      <h2 className="text-rustyRed -rotate-[10deg] lg:text-7xl absolute top-1 left-3 md:text-4xl">
                        Scoop!
                      </h2>
                      <svg
                        className="absolute -top-4 hidden lg:block"
                        width="260"
                        height="130"
                        viewBox="0 0 361 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M343.352 7.26863C343.43 9.52688 342.251 11.5372 340.442 12.6243L354.424 112.112C357.08 112.653 359.119 114.955 359.218 117.782C359.334 121.094 356.743 123.872 353.431 123.988C351.352 124.061 349.484 123.067 348.352 121.498L29.3684 166.328C28.6252 168.683 26.4634 170.427 23.8542 170.518C20.5425 170.634 17.7641 168.043 17.6485 164.731C17.5635 162.298 18.9395 160.153 20.9888 159.14L7.05065 59.965C4.16714 59.6164 1.8865 57.2116 1.78195 54.2178C1.66631 50.9061 4.25721 48.1277 7.5689 48.0121C10.0437 47.9257 12.2207 49.3507 13.2112 51.4585L331.4 6.74003C331.753 3.86141 334.156 1.5861 337.146 1.48168C340.457 1.36604 343.236 3.95694 343.352 7.26863ZM13.7653 54.4101L331.786 9.71523C332.698 11.9839 334.95 13.552 337.532 13.4754L351.417 112.268C348.908 113.058 347.129 115.445 347.225 118.201C347.23 118.343 347.24 118.483 347.255 118.622L29.5154 163.278C28.9587 160.636 26.673 158.657 23.9323 158.529L10.0251 59.5736C12.1175 58.7287 13.6117 56.7422 13.7653 54.4101Z"
                          fill="#D15125"
                        />
                        <g filter="url(#filter0_d_214_87)">
                          <path
                            d="M185.526 133.125C185.475 132.301 186.388 131.773 187.077 132.23L209.403 147.033C210.21 147.568 209.862 148.823 208.895 148.866L196.518 149.418C196.193 149.432 195.896 149.604 195.72 149.878L189.024 160.345C188.503 161.159 187.243 160.833 187.183 159.868L185.526 133.125Z"
                            fill="#2B3240"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_d_214_87"
                            x="182.524"
                            y="131.061"
                            width="30.3284"
                            height="34.7461"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="2" />
                            <feGaussianBlur stdDeviation="1.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.45 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_214_87"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_214_87"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                    </span>
                  </div>
                </div>
              </h1>
              <section className="space-y-4 ">
                <p className="lg:mt-8 text-base text-black sm:text-xl">
                  Find the perfect school for your child with just a few taps
                  using our intuitive school finder app.
                </p>
                <div className="relative m-auto lg:float-left md:m-auto max-w-md flex items-center justify-between shadow-2xl shadow-[#B1B1B1] w-full p-1 text-sm rounded-full bg-white">
                  <div className="flex w-full items-center gap-3">
                    <span className="w-fit h-fit ml-5">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
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
                      className="bg-transparent outline-none flex-grow"
                      placeholder="Search your dream school here.."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-rustyRed hover:bg-blueStone focus:ring-4 focus:outline-none  font-medium rounded-full text-sm px-9 py-3"
                  >
                    Search
                  </button>
                </div>
              </section>
            </div>
            <Image
              width={776}
              height={475}
              className="opacity-100 w-full z-20 relative lg:block hidden"
              src="/images/Home-banner-img.png"
              alt="Banner image"
            />
          </div>
        </div>
      </div>
    );
}
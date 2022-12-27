import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className='bg-gradient-to-b from-green-50 to-green-100'>
				<section className='py-10 sm:py-16 lg:py-24'>
					<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
						<div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
							<div>
								<h1 className='text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
									Collaborate remotely, with
									<div className='relative inline-flex'>
										<span className='absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]'></span>
										<h1 className='relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
											Postcrafts.
										</h1>
									</div>
								</h1>

								<p className='mt-8 text-base text-black sm:text-xl'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat.
								</p>

								<div className='mt-10 sm:flex sm:items-center sm:space-x-8'>
									<a
										href='#'
										title=''
										className='inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600'
										role='button'>
										{" "}
										Start exploring{" "}
									</a>

									<a
										href='#'
										title=''
										className='inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80'>
										<svg
											className='w-10 h-10 mr-3'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												fill='#F97316'
												stroke='#F97316'
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
											/>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='1.5'
												d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
										Watch video
									</a>
								</div>
							</div>

							<div>
								<img
									className='w-full'
									src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png'
									alt=''
								/>
							</div>
						</div>
					</div>
				</section>
			</div>


			<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20">
            <div className="pr-12 sm:pr-0">
                <div className="relative max-w-xs mb-12">
                    <img className="object-bottom rounded-md" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg" alt="" />

                    <img className="absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12" src="https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg" alt="" />
                </div>
            </div>

            <div>
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Grow business with Celebration.</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
        </div>
    </div>
</section>

<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
         
        </div>

        <div className="grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12">
            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>

            <div className="transition-all duration-200 bg-white hover:shadow-xl">
                <div className="py-10 px-9">
                    <svg className="w-16 h-16 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h3 className="mt-8 text-lg font-semibold text-black">Secured Payments</h3>
                    <p className="mt-4 text-base text-gray-600">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                </div>
            </div>
        </div>
    </div>
</section>


<section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6">
            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png" alt="" />
            </div>

            <div>
                <img className="object-contain w-auto mx-auto h-14" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png" alt="" />
            </div>
        </div>
    </div>
</section>


<section className="py-10 bg-white sm:py-16 lg:py-24">
    <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
           
        </div>

        <div className="grid grid-cols-1 mt-16 text-center md:mt-24 md:grid-cols-2 gap-y-10 gap-x-24">
            <div>
                <div className="flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                </div>
                <blockquote className="mt-7">
                    <p className="text-xl leading-relaxed text-gray-800">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”</p>
                </blockquote>

                <img className="w-auto h-8 mx-auto mt-6 md:mt-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/6/slack.svg" alt="" />
            </div>

            <div>
                <div className="flex items-center justify-center">
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                    <svg className="w-8 h-8 text-orange-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>
                </div>
                <blockquote className="mt-7">
                    <p className="text-xl leading-relaxed text-gray-800">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam”</p>
                </blockquote>

                <img className="w-auto h-8 mx-auto mt-6 md:mt-10" src="https://cdn.rareblocks.xyz/collection/celebration/images/testimonials/6/trivago.svg" alt="" />
            </div>
        </div>
    </div>
</section>

		</div>

        
	);
};
export default Home;

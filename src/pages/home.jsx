import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		// banner
		<div>
			<div className='bg-white'>
				<section className='bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24'>
					<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
						<div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
							<div>
								<p className='text-base font-semibold tracking-wider text-blue-600 uppercase'>
									A social media for learners
								</p>
								<h1 className='mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl'>
									Connect & learn from the experts
								</h1>
								<p className='mt-4 text-base text-black lg:mt-8 sm:text-xl'>
									Grow your career fast with right mentor.
								</p>

								<a
									href='#'
									title=''
									className='inline-flex items-center px-6 py-4 mt-8 font-semibold text-white transition-all duration-200 bg-blue-700 rounded-full lg:mt-16 hover:#2A58DA focus:blue-700'
									role='button'>
									Join for free
									<svg
										className='w-6 h-6 ml-8 -mr-2'
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='1.5'
											d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</a>

								<p className='mt-5 text-gray-600'>
									Already joined us?{" "}
									<a
										href='#'
										title=''
										className='text-black transition-all duration-200 hover:underline'>
										Log in
									</a>
								</p>
							</div>
							<div>
								<img
									className='w-full'
									src='https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png'
									alt=''
								/>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* lower section */}
			<section className='py-10 bg-white sm:py-16 lg:py-24'>
				<div className='max-w-5xl px-4 mx-auto sm:px-6 lg:px-8'>
					<div className='grid items-center md:grid-cols-2 gap-y-10 md:gap-x-20'>
						<div className='pr-12 sm:pr-0'>
							<div className='relative max-w-xs mb-12'>
								<img
									className='object-bottom rounded-md'
									src='https://cdn.rareblocks.xyz/collection/celebration/images/features/4/man-eating-noodles.jpg'
									alt=''
								/>

								<img
									className='absolute origin-bottom-right scale-75 rounded-md -bottom-12 -right-12'
									src='https://cdn.rareblocks.xyz/collection/celebration/images/features/4/smiling-businessman.jpg'
									alt=''
								/>
							</div>
						</div>

						<div>
							<div className='h-1.5 w-24 bg-blue-700 rounded-full'></div>
							<br />

							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
								Grow business with Celebration.
							</h2>
							<p className='mt-4 text-base leading-relaxed text-gray-600'>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat duis enim velit mollit.
								Exercitation veniam consequat sunt nostrud amet.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='flex justify-center items-center h-screen py-10 bg-gray-50 sm:py-16 lg:py-24'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='max-w-xl mx-auto text-center'>
						<div>
							<div className='h-1.5 w-24 bg-blue-700 rounded-full'></div>
							<br />

							<h2 className='text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl'>
								Our Services
							</h2>
						</div>
					</div>

					<div className='grid grid-cols-1 gap-5 mt-12 sm:grid-cols-3 lg:mt-20 lg:gap-x-12'>
						<div className='transition-all duration-200 bg-white hover:shadow-xl'>
							<div className='py-10 px-9'>
								<svg
									className='w-16 h-16 text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
									/>
								</svg>
								<h3 className='mt-8 text-lg font-semibold text-black'>
									Secured Payments
								</h3>
								<p className='mt-4 text-base text-gray-600'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>

						<div className='transition-all duration-200 bg-white hover:shadow-xl'>
							<div className='py-10 px-9'>
								<svg
									className='w-16 h-16 text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z'
									/>
								</svg>
								<h3 className='mt-8 text-lg font-semibold text-black'>
									Secured Payments
								</h3>
								<p className='mt-4 text-base text-gray-600'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>

						<div className='transition-all duration-200 bg-white hover:shadow-xl'>
							<div className='py-10 px-9'>
								<svg
									className='w-16 h-16 text-gray-400'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='1'
										d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
									/>
								</svg>
								<h3 className='mt-8 text-lg font-semibold text-black'>
									Secured Payments
								</h3>
								<p className='mt-4 text-base text-gray-600'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className='py-10 bg-gray-50 sm:py-16 lg:py-24'>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid items-center grid-cols-2 gap-10 sm:gap-y-16 sm:grid-cols-3 xl:grid-cols-6'>
						<div>
							<img
								className='object-contain w-auto mx-auto h-14'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-1.png'
								alt=''
							/>
						</div>

						<div>
							<img
								className='object-contain w-auto mx-auto h-14'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-2.png'
								alt=''
							/>
						</div>

						<div>
							<img
								className='object-contain w-auto mx-auto h-14'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-3.png'
								alt=''
							/>
						</div>

						<div>
							<img
								className='object-contain w-auto mx-auto h-14'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-4.png'
								alt=''
							/>
						</div>

						<div>
							<img
								className='object-contain w-auto mx-auto h-14'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-5.png'
								alt=''
							/>
						</div>

						<div>
							<img
								className='object-contain w-auto mx-auto h-14'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/logos/1/logo-6.png'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Home;

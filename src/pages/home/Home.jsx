import React from "react";
import Navbar from "components/Navbar/Navbar";
import AboutusImage from "../../assets/images/schoolchlid.jpg";
import BannerImage from "../../assets/images/banner.png";
import SearchImages from "../../assets/images/big-search.png";
import SmallImages from "../../assets/images/house.png";
import icomImages from "../../assets/images/icon-search.png";

const Home = () => {
	return (
		<>
			<Navbar />
			{/* Heroic Section */}

			<div className='relative bg-gradient-to-b bg-[#FFF7F4]'>
				<img
					className=' absolute opacity-20 right-30 left-80  bottom-5 w-14 z-1'
					src={SmallImages}
					alt='Banner image'
				/>
				<img
					className=' absolute opacity-20 left-20 top-10  bottom-5 w-14 z-1'
					src={SmallImages}
					alt='Banner image'
				/>
				<img
					className=' absolute opacity-20 left-[600px] top-20  bottom-5 w-14 z-1'
					src={icomImages}
					alt='Banner image'
				/>
				<section className='py-10 sm:py-16 lg:py-24'>
					<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
						<div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2'>
							<div>
								<h1 className='text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
									Get
									<span className='text-rustyRed'> Schools</span>
									<div className='relative inline-flex'>
										<span className='absolute inset-x-0 bottom-0'></span>
										<h1 className=' flex relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
											Inside
											<span className='text-rustyRed -rotate-6'> Scoop!</span>
										</h1>
									</div>
								</h1>

								<p className='mt-8 text-base text-black sm:text-xl'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat.
								</p>

								<form>
									<label
										for='default-search'
										className=' mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
										Search
									</label>
									<div className='relative'>
										<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
											<svg
												aria-hidden='true'
												className='w-5 h-5 text-gray-500 '
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													stroke-width='2'
													d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
											</svg>
										</div>
										<input
											type='search'
											id='default-search'
											className='shadow-lg shadow-[#B1B1B1]  block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[40px] bg-gray-50 dark:border-slate-200 dark:placeholder-gray-400 '
											placeholder='Search your dream school here..'
											required
										/>
										<button
											type='submit'
											className='text-white absolute right-3 bottom-1 bg-rustyRed hover:bg-blueStone focus:ring-4 focus:outline-none  font-medium rounded-[40px] text-sm px-9 py-3'>
											Search
										</button>
									</div>
								</form>
							</div>

							<div>
								<img
									className='absolute top-0 left-auto opacity-20 top-20 right-40 z-0 h-60'
									src={SearchImages}
									alt=''
								/>

								<img
									className='opacity-100 w-full z-1'
									src={BannerImage}
									alt='Banner image'
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
			{/* Heroic Section end */}

			{/* lower banner section */}
			<section className='bg-blueStone text-white body-font'>
				<div className='container px-36 py-12 mx-auto'>
					<div className='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-2 md:space-y-0 space-y-6'>
						<div className='p-4 md:w-1/3 flex'>
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-rustyRed text-white  mb-4 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-6 h-6'
									viewBox='0 0 24 24'>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
								</svg>
							</div>
							<div className='flex-grow pl-6'>
								<h2 className=' text-lg title-font font-medium mb-2'>
									Shooting Stars
								</h2>
								<p className='leading-relaxed text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard ugh iceland kickstarter tumblr
									live-edge tilde.
								</p>
							</div>
						</div>
						<div className='p-4 md:w-1/3 flex'>
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-rustyRed text-white  mb-4 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-6 h-6'
									viewBox='0 0 24 24'>
									<circle cx='6' cy='6' r='3'></circle>
									<circle cx='6' cy='18' r='3'></circle>
									<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
								</svg>
							</div>
							<div className='flex-grow pl-6'>
								<h2 className='text-lg title-font font-medium mb-2'>
									The Catalyzer
								</h2>
								<p className='leading-relaxed text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard ugh iceland kickstarter tumblr
									live-edge tilde.
								</p>
							</div>
						</div>
						<div className='p-4 md:w-1/3 flex'>
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-rustyRed text-white  mb-4 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									className='w-6 h-6'
									viewBox='0 0 24 24'>
									<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
							</div>
							<div className='flex-grow pl-6'>
								<h2 className=' text-lg title-font font-medium mb-2'>
									Neptune
								</h2>
								<p className='leading-relaxed text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard ugh iceland kickstarter tumblr
									live-edge tilde.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* lower banner section end */}

			{/* about us section */}
			<section class='py-10 bg-white sm:py-16 lg:py-24'>
				<div class='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div class='grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12'>
						<div class='relative lg:mb-12'>
							<img
								class='absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg'
								alt=''
							/>
							<div class='pl-12 pr-6'>
								<img class='relative ' src={AboutusImage} alt='' />
							</div>
							<div class='absolute left-0 pr-12 bottom-8 xl:bottom-20'>
								<div class='max-w-xs bg-rustyRed rounded-lg sm:max-w-md xl:max-w-md'>
									<div class='px-3 py-4 sm:px-5 sm:py-8'>
										<div class='flex items-start'>
											<blockquote class='ml-5'>
												<p class='text-sm font-medium text-white sm:text-lg'>
													“You made it so simple. My new site is so much faster
													and easier to work with than my old site.”
												</p>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class='2xl:pl-16'>
							<h2 class='text-3xl font-bold leading-tight text-blaxck sm:text-4xl lg:text-5xl lg:leading-tight'>
								We make things easy for projects.
							</h2>
							<p class='text-xl leading-relaxed text-gray-900 mt-9'>
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia conse duis enim velit mollit.
								Exercitation veniam.
							</p>
							<p class='mt-6 text-xl leading-relaxed text-gray-900'>
								Velit officia conse duis enim velit mollit. Exercit ation veniam
								consequat sunt nostrud amet.
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* about us section end */}
		</>
	);
};

export default Home;

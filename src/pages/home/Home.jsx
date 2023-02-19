import React from "react";
import Navbar from "components/Navbar/Navbar";
import AboutusImage from "../../assets/images/schoolchlid.jpg";
import BannerImage from "../../assets/images/banner.png";
import SearchImages from "../../assets/images/big-search.png";
import SmallImages from "../../assets/images/house.png";
import icomImages from "../../assets/images/icon-search.png";
import TrackImage from "../../assets/images/banner-2.jpg";
import TrackImage2 from "../../assets/images/girl.jpg";
import TrackImage3 from "../../assets/images/banner-3.jpg";
import Carousel from "../../components/Carousel"


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
									<div className='relative w-4/5'>
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
											className='text-white absolute right-1 bottom-1 bg-rustyRed hover:bg-blueStone focus:ring-4 focus:outline-none  font-medium rounded-[40px] text-sm px-9 py-3'>
											Search
										</button>
									</div>
								</form>
							</div>

							<div>
								<img
									className='absolute left-auto opacity-20 top-20 right-40 z-0 h-60'
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

			{/* Our tracks */}
			<section className='body-font'>
				<div className='container px-36 py-24 mx-auto'>
					<h2 className='text-center text-3xl font-semibold leading-tight text-blaxck sm:text-4xl lg:text-5xl lg:leading-tight'>
						Our Tracks
					</h2>

					<p className='text-center mt-8 text-base text-black sm:text-xl'>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do
					</p>
					<br />
					<div className='flex flex-wrap -m-4'>
						<div className='p-4 md:w-1/3'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<img
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={TrackImage}
									alt='blog'
								/>
								<div className='p-6 '>
									<h2 className='flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
										CATEGORY
										<span className=' text-rustyRed inline-flex pl-52'>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
										</span>
									</h2>
									<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
										The Catalyzer
									</h1>
									<p className='leading-relaxed mb-3'>
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>

									<div className='flex items-center flex-wrap '>
										<button className='flex items-center bg-rustyRed px-12 py-2 rounded-full text-white'>
											Profile
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='p-4 md:w-1/3'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<img
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={TrackImage}
									alt='blog'
								/>
								<div className='p-6 '>
									<h2 className='flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
										CATEGORY
										<span className=' text-rustyRed inline-flex pl-52'>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
										</span>
									</h2>
									<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
										The Catalyzer
									</h1>
									<p className='leading-relaxed mb-3'>
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>

									<div className='flex items-center flex-wrap '>
										<button className='flex items-center bg-rustyRed px-12 py-2 rounded-full text-white'>
											Profile
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className='p-4 md:w-1/3'>
							<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
								<img
									className='lg:h-48 md:h-36 w-full object-cover object-center'
									src={TrackImage}
									alt='blog'
								/>
								<div className='p-6 '>
									<h2 className='flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
										CATEGORY
										<span className=' text-rustyRed inline-flex pl-52'>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
											<ion-icon name='star'></ion-icon>
										</span>
									</h2>
									<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
										The Catalyzer
									</h1>
									<p className='leading-relaxed mb-3'>
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>

									<div className='flex items-center flex-wrap '>
										<button className='flex items-center bg-rustyRed px-12 py-2 rounded-full text-white'>
											Profile
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div>
      <div className='p-10'>
        <div className='flex justify-center items-center gap-2 '>
          <Carousel />
        </div>
      </div>
    </div>

{/* extra */}



		</>
	);
};

export default Home;

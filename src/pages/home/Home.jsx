import React from "react";
import Navbar from "components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutusImage from "../../assets/images/schoolchlid.jpg";
import BannerImage from "../../assets/images/banner.png";
import SearchImages from "../../assets/images/big-search.png";
import SmallImages from "../../assets/images/house.png";
import icomImages from "../../assets/images/icon-search.png";
import TrackImage from "../../assets/images/banner-2.jpg";
import TrackImage2 from "../../assets/images/girl.jpg";
import TrackImage3 from "../../assets/images/banner-3.jpg";
import Carousel from "../../components/Carousel";
import TopFooter from "../../assets/images/footertop.png";
import TopFooter2 from "../../assets/images/footertop2.png";

const Home = () => {
	const SchoolCardSliderData = [
		{
			idx: 1,
			pos: 1,
			text: "1",
			cardTitle: "Card Tittle-1",
			cardDes: "card description",
			cardRating: [1, 2],
			cardImage: TrackImage,
			active: true,
		},
		{
			idx: 2,
			pos: 2,
			text: "2",
			cardTitle: "Card Tittle-2",
			cardDes: "card description",
			cardRating: [1, 2, 3, 4],
			cardImage: TrackImage2,
			active: true,
		},
		{
			idx: 3,
			pos: 3,
			text: "3",
			cardTitle: "Card Tittle-3",
			cardDes: "card description",
			cardRating: [1, 2, 3, 5],
			cardImage: TrackImage3,
			active: true,
		},
		{
			idx: 4,
			pos: 4,
			text: "4",
			cardTitle: "Card Tittle-4",
			cardDes: "card description",
			cardRating: [1, 2, 3],
			cardImage: TrackImage,
			active: false,
		},
	];
	return (
		<>
			<Navbar />
			{/* Heroic Section */}
			<div
				className='relative bg-gradient-to-b bg-[#FFF7F4]'
				style={{ height: "calc(100vh - 105px)" }}>
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
						<div className='grid items-center grid-cols-1 gap-12 lg:grid-cols-2 justify-items-center'>
							<div className='space-y-4'>
								<h1 className='text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
									Get
									<span className='text-rustyRed'> Schools</span>
									<div className='relative inline-flex'>
										<span className='absolute inset-x-0 bottom-0'></span>
										<h1 className=' flex relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
											Inside
											<span className='w-fit'>
												<svg
													className='relative -top-2 ml-3'
													height='100'
													viewBox='0 0 361 172'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M72.7823 70.0114C66.771 66.0393 59.6454 65.1322 52.5155 66.1342C40.1272 67.8753 29.4415 76.557 31.3328 90.0147C34.2889 111.048 63.0013 100.651 64.6296 112.237C65.2559 116.693 60.4764 119.546 55.9311 120.185C51.2966 120.836 46.349 119.259 42.971 115.917L34.6063 128.181C41.3542 132.867 48.8224 134.271 56.9327 133.132C69.9448 131.303 80.3241 123.028 78.3451 108.946C75.2387 86.8433 47.2239 98.324 45.6081 86.8269C44.9442 82.1034 50.1303 79.5568 54.0518 79.0057C57.4385 78.5297 62.0826 79.2403 64.7115 81.7791L72.7823 70.0114ZM122.424 82.9384C117.634 79.2491 111.272 78.5983 106.192 79.3122C92.8229 81.1911 83.3806 91.6065 85.322 105.421C87.2635 119.235 99.211 126.644 112.58 124.766C117.66 124.052 123.596 121.672 127.184 116.806L117.058 108.777C115.793 110.772 113.867 112.588 110.926 113.001C104.242 113.941 99.605 110.048 98.6907 103.542C97.7763 97.0359 101.161 92.016 107.845 91.0766C110.608 90.6883 113.304 91.7636 114.904 93.4473L122.424 82.9384ZM128.05 99.4157C129.992 113.23 141.939 120.639 155.308 118.76C168.676 116.882 178.119 106.466 176.177 92.6519C174.236 78.8377 162.288 71.4284 148.92 73.3072C135.551 75.186 126.109 85.6015 128.05 99.4157ZM141.419 97.5369C140.504 91.0309 143.889 86.011 150.573 85.0716C157.257 84.1322 161.894 88.0247 162.809 94.5308C163.723 101.037 160.339 106.057 153.654 106.996C146.97 107.936 142.333 104.043 141.419 97.5369ZM182.447 91.7707C184.389 105.585 196.336 112.994 209.705 111.115C223.073 109.237 232.516 98.8212 230.574 85.0069C228.633 71.1927 216.685 63.7833 203.317 65.6622C189.948 67.541 180.506 77.9565 182.447 91.7707ZM195.816 89.8919C194.901 83.3858 198.286 78.366 204.97 77.4266C211.654 76.4871 216.291 80.3797 217.206 86.8858C218.12 93.3918 214.736 98.4117 208.051 99.3511C201.367 100.291 196.73 96.398 195.816 89.8919ZM245.596 125.702L258.964 123.824L255.457 98.8688L255.635 98.8437C259.254 102.607 264.636 103.395 270.162 102.619C282.461 100.89 288.395 88.7867 286.704 76.7549C284.862 63.6537 275.093 55.5747 262.259 57.3784C256.199 58.2301 251.543 62.6107 249.931 66.0181L249.753 66.0432L248.952 60.3392L236.652 62.0678L245.596 125.702ZM251.995 81.9964C251.081 75.4903 254.465 70.4705 261.15 69.531C267.834 68.5916 272.471 72.4842 273.385 78.9902C274.299 85.4963 270.915 90.5162 264.231 91.4556C257.547 92.395 252.91 88.5024 251.995 81.9964ZM310.508 31.5117L297.139 33.3905L303.077 75.6353L316.445 73.7565L310.508 31.5117ZM303.415 89.0386C304.054 93.584 308.222 96.7245 312.767 96.0857C317.312 95.4469 320.453 91.2793 319.814 86.7339C319.175 82.1886 315.008 79.0481 310.462 79.6869C305.917 80.3257 302.776 84.4933 303.415 89.0386Z'
														fill='#F05F2D'
													/>
													<path
														fillRule='evenodd'
														clipRule='evenodd'
														d='M343.351 7.26863C343.43 9.52688 342.251 11.5372 340.442 12.6243L354.424 112.112C357.08 112.653 359.119 114.955 359.218 117.782C359.334 121.094 356.743 123.872 353.431 123.988C351.352 124.061 349.484 123.067 348.352 121.498L29.3683 166.328C28.6252 168.683 26.4634 170.427 23.8542 170.518C20.5425 170.634 17.7641 168.043 17.6485 164.731C17.5635 162.298 18.9394 160.153 20.9888 159.14L7.05062 59.965C4.16711 59.6164 1.88647 57.2116 1.78192 54.2178C1.66628 50.9061 4.25718 48.1277 7.56887 48.0121C10.0437 47.9257 12.2207 49.3507 13.2112 51.4585L331.4 6.74003C331.753 3.86141 334.156 1.5861 337.146 1.48168C340.457 1.36604 343.236 3.95694 343.351 7.26863ZM13.7653 54.4101L331.786 9.71523C332.698 11.9839 334.95 13.552 337.532 13.4754L351.417 112.268C348.908 113.058 347.129 115.445 347.225 118.201C347.23 118.343 347.24 118.483 347.255 118.622L29.5154 163.278C28.9587 160.636 26.673 158.657 23.9323 158.529L10.0251 59.5736C12.1174 58.7287 13.6116 56.7422 13.7653 54.4101Z'
														fill='#D15125'
													/>
												</svg>
											</span>
										</h1>
									</div>
								</h1>
								<p className='mt-8 text-base text-black sm:text-xl'>
									Amet minim mollit non deserunt ullamco est sit aliqua dolor do
									amet sint. Velit officia consequat duis enim velit mollit.
									Exercitation veniam consequat.
								</p>

								<form>
									<div className='relative max-w-md flex items-center justify-between shadow-2xl shadow-[#B1B1B1] w-full p-1 text-sm text-gray-900 rounded-[40px] bg-gray-50'>
										<div className='flex w-full items-center gap-3'>
											<span className='w-fit h-fit ml-5'>
												<svg
													width='20'
													height='20'
													viewBox='0 0 24 24'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'>
													<path
														d='M17.6125 15.4923C18.7935 13.8795 19.4999 11.8985 19.4999 9.75096C19.4999 4.375 15.1259 0.000976562 9.74993 0.000976562C4.37398 0.000976562 0 4.375 0 9.75096C0 15.1269 4.37403 19.5009 9.74998 19.5009C11.8975 19.5009 13.8787 18.7944 15.4915 17.6134L21.8789 24.0008L24 21.8798C24 21.8797 17.6125 15.4923 17.6125 15.4923ZM9.74998 16.5009C6.02781 16.5009 3.00001 13.4731 3.00001 9.75096C3.00001 6.02879 6.02781 3.00099 9.74998 3.00099C13.4721 3.00099 16.4999 6.02879 16.4999 9.75096C16.4999 13.4731 13.4721 16.5009 9.74998 16.5009Z'
														fill='#949494'
													/>
												</svg>
											</span>

											<input
												type='search'
												id='default-search'
												className='bg-transparent outline-none flex-grow'
												placeholder='Search your dream school here..'
												required
											/>
										</div>

										<button
											type='submit'
											className='text-white bg-rustyRed hover:bg-blueStone focus:ring-4 focus:outline-none  font-medium rounded-[40px] text-sm px-9 py-3'>
											Search
										</button>
									</div>
								</form>
							</div>
							<div className='relative'>
								<img
									className='absolute left-auto opacity-20 -top-5 right-0 z-10 h-60'
									src={SearchImages}
									alt=''
								/>
								<img
									className='opacity-100 w-full z-20 relative'
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
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-lg bg-rustyRed text-white  mb-4 flex-shrink-0'>
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
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-lg bg-rustyRed text-white  mb-4 flex-shrink-0'>
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
							<div className='w-12 h-12 inline-flex items-center justify-center rounded-lg bg-rustyRed text-white  mb-4 flex-shrink-0'>
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
									<h1 className='title-font text-lg font-medium text-gray-900'>
										The Catalyzer
									</h1>
									<p className='leading-relaxed'>
										Photo booth fam kinfolk cold-pressed sriracha leggings
										jianbing microdosing tousled waistcoat.
									</p>

									<div className='flex items-center justify-center'>
										<button className='hover:bg-blueStone bg-rustyRed px-12 py-2 rounded-full text-white'>
											Profile
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className='flex flex-wrap -m-4'>
						<Carousel carousalData={[...SchoolCardSliderData]} />
					</div> */}
				</div>
			</section>

			{/* Card slider */}
			<div>
				<div className='p-10'>
					<div className='flex justify-center items-center gap-2 '>
						<Carousel />
					</div>
				</div>
			</div>

			{/* Above footer section */}
			<div className=' flex items-center pl-40 pr-40 pb-24'>
				<div className='relative bg-blueStone w-[100%] pl-40 pr-40 py-20 flex items-center flex-col'>
					<h2 className='text-white text-center text-3xl font-semibold leading-tight text-blaxck sm:text-4xl lg:text-5xl lg:leading-tight'>
						Our Tracks
					</h2>
					<p className='text-center  text-base text-white sm:text-xl'>
						Amet minim mollit non deserunt ullamco est sit aliqua dolor do
					</p>

					<form className='mt-5 w-[50%]'>
						<label
							for='default-search'
							className=' mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
							Search
						</label>
						<div className='relative'>
							<input
								type='search'
								id='default-search'
								className=' shadow-lg  block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-[40px] bg-gray-50 dark:border-slate-200 dark:placeholder-gray-400 '
								placeholder='Email Address..'
								required
							/>
							<button
								type='submit'
								className='text-white absolute right-1 bottom-1 bg-rustyRed hover:bg-blueStone focus:ring-4 focus:outline-none  font-medium rounded-[40px] text-sm px-9 py-3'>
								Send
							</button>
						</div>
					</form>
					<div className='absolute left-[6rem] top-[152px]  '>
						<img className='w-36' src={TopFooter} alt='' />
					</div>

					<div className='absolute right-[10rem] top-[152px]  '>
						<img className='w-36' src={TopFooter2} alt='' />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;

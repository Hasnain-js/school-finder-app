import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>School Finder app</title>
				<meta name='description' content='Door to the future' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				{/* Heroic Section */}
				<div
					className='relative bg-gradient-to-b bg-[#FFF7F4]'
					style={{ height: "calc(100vh - 105px)" }}>
					<img
						className=' absolute opacity-20 right-30 left-80  bottom-5 w-14 z-1'
						src='/images/house.png'
						alt='Banner image'
					/>
					<img
						className=' absolute opacity-20 left-20 top-10  bottom-5 w-14 z-1'
						src='/images/house.png'
						alt='Banner image'
					/>
					<img
						className=' absolute opacity-20 left-[600px] top-20  bottom-5 w-14 z-1'
						src='/images/icon-search.png'
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
										Amet minim mollit non deserunt ullamco est sit aliqua dolor
										do amet sint. Velit officia consequat duis enim velit
										mollit. Exercitation veniam consequat.
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
										src='/images/big-search.png'
										alt=''
									/>
									<img
										className='opacity-100 w-full z-20 relative'
										src='images/banner.png'
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
										Blue bottle crucifix vinyl post-ironic four dollar toast
										vegan taxidermy. Gastropub indxgo juice poutine, ramps
										microdosing banh mi pug VHS try-hard ugh iceland kickstarter
										tumblr live-edge tilde.
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
										Blue bottle crucifix vinyl post-ironic four dollar toast
										vegan taxidermy. Gastropub indxgo juice poutine, ramps
										microdosing banh mi pug VHS try-hard ugh iceland kickstarter
										tumblr live-edge tilde.
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
										Blue bottle crucifix vinyl post-ironic four dollar toast
										vegan taxidermy. Gastropub indxgo juice poutine, ramps
										microdosing banh mi pug VHS try-hard ugh iceland kickstarter
										tumblr live-edge tilde.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* lower banner section end */}

				{/* Our schools */}
				<section className='body-font pt-40 pb-40 '>
					<div className=' flex-col'>
						<h2 className='text-black text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight'>
							Our Schools
						</h2>
						<div className=' pt-20 pl-48 pr-48 flex items-center flex-row '>
							<div className='p-3 border rounded-lg w-96 h-[58vh]'>
								<img className='rounded-lg' src='/images/banner-2.jpg' alt='' srcset='' />
								<div className='flex items-center pt-3'>
									<p className='grow text-LightGreyText text-base	'>
										UI UX Design
									</p>
									<div className='flex items-center justify-between space-x-[2px] '>
										<svg
											width='14'
											height='14'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40116 13.6524C8.15018 13.5206 7.85014 13.5206 7.59916 13.6524L3.98998 15.5498C3.35786 15.8822 2.61894 15.3452 2.73975 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.1813 9.85967L0.261322 7.01345C-0.249984 6.51482 0.032035 5.6464 0.738919 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54342 0.189248 8.45657 0.189248 8.77263 0.829716Z'
												fill='#FFA135'
											/>
										</svg>
										<svg
											width='14'
											height='14'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40116 13.6524C8.15018 13.5206 7.85014 13.5206 7.59916 13.6524L3.98998 15.5498C3.35786 15.8822 2.61894 15.3452 2.73975 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.1813 9.85967L0.261322 7.01345C-0.249984 6.51482 0.032035 5.6464 0.738919 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54342 0.189248 8.45657 0.189248 8.77263 0.829716Z'
												fill='#FFA135'
											/>
										</svg>
										<svg
											width='14'
											height='14'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40116 13.6524C8.15018 13.5206 7.85014 13.5206 7.59916 13.6524L3.98998 15.5498C3.35786 15.8822 2.61894 15.3452 2.73975 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.1813 9.85967L0.261322 7.01345C-0.249984 6.51482 0.032035 5.6464 0.738919 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54342 0.189248 8.45657 0.189248 8.77263 0.829716Z'
												fill='#FFA135'
											/>
										</svg>
										<svg
											width='14'
											height='14'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40116 13.6524C8.15018 13.5206 7.85014 13.5206 7.59916 13.6524L3.98998 15.5498C3.35786 15.8822 2.61894 15.3452 2.73975 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.1813 9.85967L0.261322 7.01345C-0.249984 6.51482 0.032035 5.6464 0.738919 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54342 0.189248 8.45657 0.189248 8.77263 0.829716Z'
												fill='#FFA135'
											/>
										</svg>
										<svg
											width='14'
											height='14'
											viewBox='0 0 16 16'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'>
											<path
												d='M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40117 13.6524C8.15019 13.5206 7.85014 13.5206 7.59916 13.6524L3.98999 15.5498C3.35786 15.8822 2.61894 15.3452 2.73976 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.18131 9.85967L0.261325 7.01345C-0.24998 6.51482 0.0320388 5.6464 0.738922 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54343 0.189248 8.45657 0.189248 8.77263 0.829716Z'
												fill='#F9D4AB'
											/>
										</svg>
									</div>
								</div>

								<div className='pb-2'>
									<h5 className='text-black font-semibold leading-8 text-xl	'>
										UI/UX Design for Beginners
									</h5>
									<p className='text-base text-rustyRed font-bold'>$98</p>
								</div>
								<div className=' border border-dashed border-t-LightGreyText	'></div>

								<div className='flex items-center pt-2'>
									<svg
										width='14'
										height='14'
										viewBox='0 0 19 19'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<g clip-path='url(#clip0_35_8497)'>
											<path
												d='M9.50011 0C4.2619 0 0.000457764 4.26167 0.000457764 9.49989C0.000457764 14.7383 4.2619 19 9.50011 19C14.7383 19 19 14.7383 19 9.49989C19 4.26167 14.7381 0 9.50011 0ZM9.50011 17.6265C5.01937 17.6265 1.37371 13.9809 1.37371 9.49989C1.37371 5.01892 5.01914 1.37348 9.50011 1.37348C13.9811 1.37348 17.6265 5.01892 17.6265 9.49989C17.6265 13.9809 13.9811 17.6265 9.50011 17.6265Z'
												fill='black'
											/>
											<path
												d='M12.2487 10.3744C12.245 10.3744 12.2418 10.3744 12.2381 10.3744L10.1866 10.405V5.0361C10.1866 4.6568 9.87919 4.34937 9.49988 4.34937C9.12057 4.34937 8.81314 4.6568 8.81314 5.0361V11.1023C8.81314 11.1037 8.8136 11.105 8.8136 11.1064C8.8136 11.1087 8.81314 11.1108 8.81314 11.1126C8.8136 11.1405 8.81886 11.1668 8.82253 11.1936C8.82482 11.2103 8.82504 11.2275 8.82825 11.244C8.83443 11.2735 8.84473 11.301 8.85457 11.3287C8.85961 11.3431 8.86281 11.3582 8.86877 11.372C8.88067 11.4001 8.89669 11.4257 8.91203 11.4521C8.91913 11.4637 8.92439 11.4766 8.93195 11.488C8.94934 11.5134 8.97018 11.5361 8.99078 11.5592C8.99948 11.5688 9.00657 11.5798 9.01573 11.5892C9.03793 11.6112 9.06289 11.6297 9.08784 11.6487C9.09791 11.6563 9.10684 11.6654 9.11714 11.6725C9.14415 11.6908 9.17368 11.7053 9.20321 11.7194C9.21351 11.7243 9.22267 11.7311 9.2332 11.7355C9.26753 11.7499 9.30416 11.76 9.34124 11.7689C9.34811 11.7705 9.35452 11.7737 9.36162 11.7751C9.40603 11.784 9.45204 11.789 9.49919 11.789C9.50263 11.789 9.50629 11.789 9.50972 11.789L12.2585 11.7478C12.6376 11.7421 12.9404 11.4299 12.9349 11.0508C12.9297 10.6751 12.6232 10.3744 12.2487 10.3744Z'
												fill='black'
											/>
										</g>
										<defs>
											<clipPath id='clip0_35_8497'>
												<rect width='19' height='19' fill='white' />
											</clipPath>
										</defs>
									</svg>
									<p className='pl-2  text-LightGreyText text-[13px]	'>
										22hr 30min
									</p>
									<svg
										className='ml-2'
										width='20'
										height='20'
										viewBox='0 0 28 28'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z'
											fill='#212121'
										/>
									</svg>

									<p className='pl-2 text-LightGreyText text-[13px]	'>
										34 Courses
									</p>
									<svg
										className='ml-2'
										width='14'
										height='14'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M16.8961 12.0023C16.4988 12.0023 16.1789 12.3222 16.1789 12.7195V16.1789H1.82109V12.7195C1.82109 12.3222 1.50117 12.0023 1.10391 12.0023C0.706641 12.0023 0.386719 12.3222 0.386719 12.7195V16.8961C0.386719 17.2933 0.706641 17.6133 1.10391 17.6133H16.8961C17.2934 17.6133 17.6133 17.2933 17.6133 16.8961V12.7195C17.6133 12.3222 17.2934 12.0023 16.8961 12.0023Z'
											fill='black'
										/>
										<path
											d='M8.47266 12.8531C8.87696 13.261 9.37266 13.036 9.52383 12.8531L13.6477 8.41643C13.9184 8.12463 13.9008 7.67112 13.609 7.40041C13.3172 7.12971 12.8637 7.14729 12.5965 7.43909L9.71719 10.5364V1.21292C9.71719 0.815649 9.39727 0.495728 9 0.495728C8.60274 0.495728 8.28282 0.815649 8.28282 1.21292V10.5399L5.40352 7.4426C5.13281 7.15081 4.6793 7.13674 4.3875 7.40393C4.09571 7.67463 4.08164 8.12815 4.34883 8.41995L8.47266 12.8531Z'
											fill='black'
										/>
									</svg>
									<p className='pl-2 text-LightGreyText text-[13px]	'>
										250 Sales
									</p>
								</div>
								<div className='flex items-center justify-center relative mt-3 '>
									<button className=' pt-2 pb-2 pl-10 pr-10 bg-rustyRed text-white rounded-full '>
										Profile
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Card slider */}
				{/* <div>
				<div className='p-10'>
					<div className='flex justify-center items-center gap-2 '>
						<Carousel />
					</div>
				</div>
			</div> */}
				<section className='body-font pt-40 pb-40'></section>
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
							<img className='w-36' src='/images/footertop.png' alt='' />
						</div>

						<div className='absolute right-[10rem] top-[152px]  '>
							<img className='w-36' src='/images/footertop2.png' alt='' />
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
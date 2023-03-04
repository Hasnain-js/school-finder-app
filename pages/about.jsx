import React from "react";

const About = () => {
	return (
		<>
			{/* about us section */}
			<section>
				<div className='flex items-center'>
					<div className='flex items-center justify-center w-full h-96 bg-[#F2E1CE]'>
						<h1 className='text-4xl font-bold text-black sm:text-6xl lg:text-7xl'>
							About Us
						</h1>
					</div>
				</div>
				<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
					<div className='grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12'>
						<div className='relative lg:mb-12'>
							<img
								className='absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4'
								src='https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg'
								alt=''
							/>
							<div className='pl-12 pr-6'>
								<img
									className=' object-cover '
									src='images\about-feature-image.png'
									alt=''
								/>
							</div>
							<div className='absolute left-0 pr-12 bottom-8 xl:bottom-20'>
								<div className='max-w-xs bg-rustyRed rounded-lg sm:max-w-md xl:max-w-md'>
									<div className='px-3 py-4 sm:px-5 sm:py-8'>
										<div className='flex items-start'>
											<blockquote className='ml-5'>
												<p className='text-sm font-medium text-white sm:text-lg'>
													“You made it so simple. My new site is so much faster
													and easier to work with than my old site.”
												</p>
											</blockquote>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='2xl:pl-16'>
							<h2 className='text-3xl font-bold leading-tight text-blaxck sm:text-4xl lg:text-5xl lg:leading-tight'>
								We make things easy for projects.
							</h2>
							<p className='text-xl leading-relaxed text-gray-900 mt-9'>
								At School Spot, we're dedicated to simplifying the school search
								process for parents and students. Our user-friendly platform
								provides up-to-date information on schools in your area, and
								allows you to search based on a variety of criteria. We're
								passionate about education and committed to providing
								exceptional customer service. Contact us if you have any
								questions or feedback. Thanks for choosing School Spot!
							</p>
						</div>
					</div>
				</div>
			</section>
			{/* about us section end */}
		</>
	);
};

export default About;

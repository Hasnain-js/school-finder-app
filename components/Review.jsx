import React from "react";

export const Review = ({ titleHead, titlePara }) => {
	return (
		<>
			<section className='text-gray-600 body-font'>
				<div className='container py-8 mx-auto'>
					<div className='flex flex-col text-center w-full mb-10'></div>
					<div className='flex flex-wrap'>
						<div className='p-4 lg:w-full md:w-auto'>
							<div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col'>
								<div className='flex-grow'>
									<p className='leading-relaxed text-base'>{titlePara}</p>
								</div>
								<div className='flex items-center mt-10 mb-3'>
									<div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
										<svg
											fill='none'
											stroke='currentColor'
											stroke-linecap='round'
											stroke-linejoin='round'
											stroke-width='2'
											className='w-5 h-5'
											viewBox='0 0 24 24'>
											<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
										</svg>
									</div>
									<h2 className='text-gray-900 text-lg title-font font-medium'>
										{titleHead}
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

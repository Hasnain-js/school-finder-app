import Image from "next/image";

export const LearningExperienceSection = () => {
	return (
		<>
			<section className='bg-almond'>
				<div className='mx-auto lg:max-w-7xl lg:px-6 grid lg:items-center lg:grid-cols-2 gap-20 lg:grid justify-center'>
					<div className='relative lg:pt-14 p-0'>
						<Image
							className='w-full max-w-xs lg:max-w-xs mx-auto'
							src={"/images/girl_books.png"}
							alt='girl_books.png'
							width={475}
							height={550}
						/>
					</div>
					<div className='space-y-4  lg:text-left justify-center pt-0'>
						<h2 className='text-3xl font-bold leading-tight text-gunMetal sm:text-4xl lg:text-5xl lg:leading-tight '>
						Discover Your <span className='text-rustyRed'>Perfect</span> School
						</h2>
						<div className='flex flex-col items-stretch gap-5'>
							<div className='flex gap-5 items-start'>
								<span className='w-12 h-12 bg-dusk rounded'></span>
								<span className='text-gunMetal space-y-1'>
									<h6 className='text-base font-semibold'>Empowering Choices</h6>
									<p className='text-sm text-silverGrey'>
										Empower Yourself with the Ultimate School Search Tool
									</p>
								</span>
							</div>
							<div className='flex gap-5 items-start'>
								<span className='w-12 h-12 bg-dusk rounded'></span>
								<span className='text-gunMetal space-y-1'>
									<h6 className='text-base font-semibold'>User Reviews & Ratings</h6>
									<p className='text-sm text-silverGrey'>
									Read real feedback from parents and students to make informed decisions.
									</p>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

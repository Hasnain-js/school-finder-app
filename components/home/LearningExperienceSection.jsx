import Image from "next/image";

export const LearningExperienceSection = () => {
	return (
		<>
			<section class='bg-almond'>
				<div class='mx-auto max-w-7xl px-6 grid items-center lg:grid-cols-2 gap-20'>
					<div class='relative pt-14'>
						<Image
							class='w-full max-w-xs mx-auto'
							src={"/images/girl_books.png"}
							alt='girl_books.png'
							width={475}
							height={550}
						/>
					</div>
					<div className='space-y-4'>
						<h2 class='text-3xl font-bold leading-tight text-gunMetal sm:text-4xl lg:text-5xl lg:leading-tight'>
							Premium <span className='text-rustyRed'>Learning</span> Experience
						</h2>
						<div className='flex flex-col items-stretch gap-5'>
							<div className='flex gap-5 items-start'>
								<span className='w-12 h-12 bg-dusk rounded'></span>
								<span className='text-gunMetal space-y-1'>
									<h6 className='text-base font-semibold'>Easily Accessible</h6>
									<p class='text-sm text-silverGrey'>
										Learning Will fell Very Comfortable With Courslab.
									</p>
								</span>
							</div>
							<div className='flex gap-5 items-start'>
								<span className='w-12 h-12 bg-dusk rounded'></span>
								<span className='text-gunMetal space-y-1'>
									<h6 className='text-base font-semibold'>Fun learning expe</h6>
									<p class='text-sm text-silverGrey'>
										Learning Will fell Very Comfortable With Courslab.
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

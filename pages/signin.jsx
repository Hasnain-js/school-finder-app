import React from "react";

const Signin = () => {
	return (
		<>
			<div className='h-full bg-gradient-to-tl  w-full py-16 px-4'>
				<div className='flex flex-col items-center justify-center'>
					<div className='bg-white relative shadow-lg rounded lg:w-1/3  md:w-1/2 w-full p-7 mt-14'>
						<p
							tabindex='0'
							className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800'>
							Login to your account
						</p>
						<p
							tabindex='0'
							className='focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500'>
							Dont have account?{" "}
							<a
								href='javascript:void(0)'
								className='hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer'>
								{" "}
								Sign up here
							</a>
						</p>
						<button
							aria-label='Continue with google'
							role='button'
							className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10'>
							<img
								src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg'
								alt='google'
							/>
							<p className='text-base font-medium ml-4 text-gray-700'>
								Continue with Google
							</p>
						</button>
						<button
							aria-label='Continue with github'
							role='button'
							className='focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'>
							<img
								src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg'
								alt='github'
							/>
							<p className='text-base font-medium ml-4 text-gray-700'>
								Continue with Github
							</p>
						</button>
						<button
							aria-label='Continue with twitter'
							role='button'
							className='focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4'>
							<img
								src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg'
								alt='twitter'
							/>
							<p className='text-base font-medium ml-4 text-gray-700'>
								Continue with Twitter
							</p>
						</button>
						<div className='w-full flex items-center justify-between py-5'>
							<hr className='w-full bg-gray-400' />
							<p className='text-base font-medium leading-4 px-2.5 text-gray-400'>
								OR
							</p>
							<hr className='w-full bg-gray-400  ' />
						</div>
						<div>
							<label
								id='email'
								className='text-sm font-medium leading-none text-gray-800'>
								Email
							</label>
							<input
								aria-labelledby='email'
								type='email'
								placeholder='Your Email'
								className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
							/>
						</div>
						<div className='mt-6  w-full'>
							<label
								for='pass'
								className='text-sm font-medium leading-none text-gray-800'>
								Password
							</label>
							<div className='relative flex items-center justify-center'>
								<input
									id='pass'
									type='password'
									placeholder='Your Password'
									className='bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
								/>
								<div className='absolute right-0 mt-2 mr-3 cursor-pointer'>
									<img
										src='https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg'
										alt='viewport'
									/>
								</div>
							</div>
						</div>

						<div className='mt-8'>
							<button
								role='button'
								className='focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-rustyRed text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full'>
								Create my account
							</button>
						</div>
						<span className='absolute -top-10 -right-9 z-[-1]'>
							<svg
								width='100'
								height='100'
								viewBox='0 0 100 100'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
									fill='#F05F2D'
								/>
							</svg>
						</span>
						<span className='absolute -right-10 top-[90px] z-[-1]'>
							<svg
								width='34'
								height='134'
								viewBox='0 0 34 134'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle
									cx='31.9993'
									cy='132'
									r='1.66667'
									transform='rotate(180 31.9993 132)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 31.9993 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 31.9993 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='88'
									r='1.66667'
									transform='rotate(180 31.9993 88)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 31.9993 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='45'
									r='1.66667'
									transform='rotate(180 31.9993 45)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='16'
									r='1.66667'
									transform='rotate(180 31.9993 16)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='59'
									r='1.66667'
									transform='rotate(180 31.9993 59)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 31.9993 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 31.9993 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='132'
									r='1.66667'
									transform='rotate(180 17.3333 132)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 17.3333 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 17.3333 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='88'
									r='1.66667'
									transform='rotate(180 17.3333 88)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 17.3333 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='45'
									r='1.66667'
									transform='rotate(180 17.3333 45)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='16'
									r='1.66667'
									transform='rotate(180 17.3333 16)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='59'
									r='1.66667'
									transform='rotate(180 17.3333 59)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 17.3333 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 17.3333 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='132'
									r='1.66667'
									transform='rotate(180 2.66536 132)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 2.66536 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 2.66536 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='88'
									r='1.66667'
									transform='rotate(180 2.66536 88)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 2.66536 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='45'
									r='1.66667'
									transform='rotate(180 2.66536 45)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='16'
									r='1.66667'
									transform='rotate(180 2.66536 16)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='59'
									r='1.66667'
									transform='rotate(180 2.66536 59)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 2.66536 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 2.66536 1.66665)'
									fill='#217C58'
								/>
							</svg>
						</span>
						<span className='absolute -left-7 -bottom-7 z-[-1]'>
							<svg
								width='107'
								height='134'
								viewBox='0 0 107 134'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<circle
									cx='104.999'
									cy='132'
									r='1.66667'
									transform='rotate(180 104.999 132)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 104.999 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 104.999 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='88'
									r='1.66667'
									transform='rotate(180 104.999 88)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 104.999 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='45'
									r='1.66667'
									transform='rotate(180 104.999 45)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='16'
									r='1.66667'
									transform='rotate(180 104.999 16)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='59'
									r='1.66667'
									transform='rotate(180 104.999 59)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 104.999 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='104.999'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 104.999 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='132'
									r='1.66667'
									transform='rotate(180 90.3333 132)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 90.3333 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 90.3333 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='88'
									r='1.66667'
									transform='rotate(180 90.3333 88)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 90.3333 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='45'
									r='1.66667'
									transform='rotate(180 90.3333 45)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='16'
									r='1.66667'
									transform='rotate(180 90.3333 16)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='59'
									r='1.66667'
									transform='rotate(180 90.3333 59)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 90.3333 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='90.3333'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 90.3333 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='132'
									r='1.66667'
									transform='rotate(180 75.6654 132)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='132'
									r='1.66667'
									transform='rotate(180 31.9993 132)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 75.6654 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 31.9993 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 75.6654 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 31.9993 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='88'
									r='1.66667'
									transform='rotate(180 75.6654 88)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='88'
									r='1.66667'
									transform='rotate(180 31.9993 88)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 75.6654 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 31.9993 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='45'
									r='1.66667'
									transform='rotate(180 75.6654 45)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='45'
									r='1.66667'
									transform='rotate(180 31.9993 45)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='16'
									r='1.66667'
									transform='rotate(180 75.6654 16)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='16'
									r='1.66667'
									transform='rotate(180 31.9993 16)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='59'
									r='1.66667'
									transform='rotate(180 75.6654 59)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='59'
									r='1.66667'
									transform='rotate(180 31.9993 59)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 75.6654 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 31.9993 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='75.6654'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 75.6654 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='31.9993'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 31.9993 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='132'
									r='1.66667'
									transform='rotate(180 60.9993 132)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='132'
									r='1.66667'
									transform='rotate(180 17.3333 132)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 60.9993 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 17.3333 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 60.9993 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 17.3333 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='88'
									r='1.66667'
									transform='rotate(180 60.9993 88)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='88'
									r='1.66667'
									transform='rotate(180 17.3333 88)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 60.9993 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 17.3333 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='45'
									r='1.66667'
									transform='rotate(180 60.9993 45)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='45'
									r='1.66667'
									transform='rotate(180 17.3333 45)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='16'
									r='1.66667'
									transform='rotate(180 60.9993 16)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='16'
									r='1.66667'
									transform='rotate(180 17.3333 16)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='59'
									r='1.66667'
									transform='rotate(180 60.9993 59)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='59'
									r='1.66667'
									transform='rotate(180 17.3333 59)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 60.9993 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 17.3333 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='60.9993'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 60.9993 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='17.3333'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 17.3333 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='132'
									r='1.66667'
									transform='rotate(180 46.3333 132)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='132'
									r='1.66667'
									transform='rotate(180 2.66536 132)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 46.3333 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='117.333'
									r='1.66667'
									transform='rotate(180 2.66536 117.333)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 46.3333 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='102.667'
									r='1.66667'
									transform='rotate(180 2.66536 102.667)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='88'
									r='1.66667'
									transform='rotate(180 46.3333 88)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='88'
									r='1.66667'
									transform='rotate(180 2.66536 88)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 46.3333 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='73.3333'
									r='1.66667'
									transform='rotate(180 2.66536 73.3333)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='45'
									r='1.66667'
									transform='rotate(180 46.3333 45)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='45'
									r='1.66667'
									transform='rotate(180 2.66536 45)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='16'
									r='1.66667'
									transform='rotate(180 46.3333 16)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='16'
									r='1.66667'
									transform='rotate(180 2.66536 16)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='59'
									r='1.66667'
									transform='rotate(180 46.3333 59)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='59'
									r='1.66667'
									transform='rotate(180 2.66536 59)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 46.3333 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='30.6666'
									r='1.66667'
									transform='rotate(180 2.66536 30.6666)'
									fill='#217C58'
								/>
								<circle
									cx='46.3333'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 46.3333 1.66665)'
									fill='#217C58'
								/>
								<circle
									cx='2.66536'
									cy='1.66665'
									r='1.66667'
									transform='rotate(180 2.66536 1.66665)'
									fill='#217C58'
								/>
							</svg>
						</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signin;

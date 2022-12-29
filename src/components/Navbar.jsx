import React from "react";
export const Navbar = () => {
	return (
		<>
			<nav className='z-50 flex items-center fixed top-0 left-0 right-0 justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700'>
				<div className='flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0'>
					<div className='flex items-center flex-shrink-0 text-gray-800 mr-16'>
						<span className='font-semibold text-xl tracking-tight'>
							My Navbar
						</span>
					</div>
					<div className='block lg:hidden '>
						<button
							id='nav'
							className='flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700'>
							<svg
								className='fill-current h-3 w-3'
								viewBox='0 0 20 20'
								xmlns='http://www.w3.org/2000/svg'>
								<title>Menu</title>
								<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
							</svg>
						</button>
					</div>
				</div>

				<div className='menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8'>
					<div className='text-md font-bold text-blue-700 lg:flex-grow'>
						<a
							href='/'
							className='block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2'>
							Home
						</a>
						<a
							href='/about'
							className=' block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2'>
							About us
						</a>
						<a
							href='/school'
							className=' block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2'>
							Schools
						</a>
						<a
							href='/contact'
							className='block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2'>
							Contact Us
						</a>
					</div>
					<div className='relative mx-auto text-gray-600 lg:block hidden'>
						<input
							className='border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none'
							type='search'
							name='search'
							placeholder='Search'
						/>
						<button
							type='submit'
							className='absolute right-0 top-0 mt-3 mr-2'></button>
					</div>
					<div className='flex '>
						<a
							href='/sign-in'
							className='block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0'>
							Sign in
						</a>

						<a
							href='/contact'
							className=' block text-md px-4  ml-2 py-2 rounded text-blue-700 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0'>
							Register now
						</a>
					</div>
				</div>
			</nav>
		</>
	);
};

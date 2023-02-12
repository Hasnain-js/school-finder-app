import React from "react";
import logo from "../../assets/images/logo.svg";
const Navbar = () => {
	return (
		<>
			{/* navbar top */}
			<nav>
				<div className='max-md:grid-cols-2   py-1.5 px-14 grid grid-cols-8 grid-rows-1 bg-black	h-7'>
					<div className='flex text-justify text-white grid-cols-6'>
						<ion-icon name='mail-outline'></ion-icon>
						<a className='pl-2 text-xs' href='ramhas12@gmail.com'>
							ramhas12@gmail.com
						</a>
					</div>

					<div className='flex text-justify text-white grid-cols-6'>
						<ion-icon name='call-outline'></ion-icon>
						<a className='pl-2 text-xs' href='01020929929'>
							012345678789
						</a>
					</div>
				</div>
			</nav>

			<nav className='max-md:pl-7  pl-14 p-5 bg-white shadow md:flex md:items-center md:justify-between'>
				<div className='flex justify-between items-center '>
					<span className='text-2xl  cursor-pointer'>
						<img className='w-36 inline' src={logo} />
					</span>

					<span className='text-3xl cursor-pointer mx-2 md:hidden block'>
						<ion-icon name='menu' onclick='Menu(this)'></ion-icon>
					</span>
				</div>

				<ul className=' max-sm:items-center max-sm:bg-copper-red md:flex md:items-center z-[-1] md:z-auto md:static absolute lg:bg-white  w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500'>
					<li className='mx-4 my-6 md:my-0'>
						<a
							href='#'
							className='max-sm:text-white text text-xl hover:text-copper-red duration-500'>
							Home
						</a>
					</li>
					<li className='mx-4 my-6 md:my-0'>
						<a
							href='#'
							className='max-sm:text-white text-xl hover:text-copper-red duration-500'>
							About Us
						</a>
					</li>
					<li className='mx-4 my-6 md:my-0'>
						<a
							href='#'
							className='max-sm:text-white text-xl hover:text-copper-red duration-500'>
							Our Services
						</a>
					</li>
					<li className='mx-4 my-6 md:my-0'>
						<a
							href='#'
							className='max-sm:text-white text-xl hover:text-copper-red duration-500'>
							Contact
						</a>
					</li>
					<li className='mx-4 my-6 md:my-0'>
						<a
							href='#'
							className='max-sm:text-white text-xl hover:text-copper-red duration-500'>
							Schools
						</a>
					</li>

					<button className='flex items-center max-sm:text-copper-red max-sm:bg-white bg-copper-red text-white duration-500 px-6 py-2 mx-4 hover:bg-copper-red-lighter rounded '>
					<ion-icon name="log-in-outline"></ion-icon>
						 Sign in
					</button>
					<h2 className=''></h2>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;

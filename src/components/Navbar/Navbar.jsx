import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	let className =
		"lg:relative  transition-opacity lg:opacity-100 ease-linear duration-300 absolute left-0 lg:mt-0 mt-5 w-full lg:w-auto bg-copper-red lg:bg-transparent ";
	if (isOpen) {
		className += "lg:opacity-100 opacity-100";
	} else {
		className += "lg:opacity-100 opacity-0";
	}
	return (
		<>
			<nav className='bg-roseWhite bg-opacity-90 z-30 sticky top-0 left-0 right-0 lg:px-20'>
				<div className='container mx-auto px-5 py-2 lg:flex lg:items-center lg:justify-between'>
					<div className='flex justify-between items-center'>
						<a className='cursor-pointer'>
							<img className='w-40 h-auto inline cursor-pointer' src={logo} />
						</a>
						<span
							className='text-3xl cursor-pointer mx-2 lg:hidden block'
							onClick={() => setIsOpen(!isOpen)}>
							<ion-icon name='menu' onclick='Menu(this)'></ion-icon>
						</span>
					</div>
					<div className={className}>
						<ul className=' lg:space-x-3 container mx-auto p-5  text-xl duration-500 flex lg:items-center items-start lg:flex-row flex-col gap-5'>
							{["Home", "About Us", "Our Services", "Contact", "Schools"].map(
								(item, index) => {
									return (
										<li
											key={index}
											className='text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80'>
											<a
												href={index}
												className='text-white lg:text-black  hover:text-rustyRed'>
												{item}
											</a>
										</li>
									);
								}
							)}

							<div className='flex items-center gap-4 pl-24'>
								<li className='cursor-pointer text-base font-semibold border border-black px-12 py-3 rounded-full text-black transition-all duration-200 hover:text-opacity-80'>
									Login
								</li>
								<a
									href='#'
									className='text-base font-semibold border border-rustyRed bg-rustyRed px-12 py-3 rounded-full text-white transition-all duration-200 hover:bg-blueStone'>
									Sigup
								</a>
							</div>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

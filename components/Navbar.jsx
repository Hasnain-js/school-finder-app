import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Signin from "@/pages/signin";
import Signup from "@/pages/signup";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	let className =
		"lg:relative transition-opacity lg:opacity-100 ease-linear duration-300 absolute left-0 lg:mt-0 mt-2 w-full lg:w-auto bg-almond bg-opacity-95 lg:bg-transparent ";
	if (isOpen) {
		className += "lg:opacity-100 opacity-100";
	} else {
		className += "lg:opacity-100 opacity-0";
	}

	const navLink = [
		{
			page: "Home",
			link: "/",
		},
		{
			page: "About",
			link: "/about",
		},
		{
			page: "Our Schools",
			link: "/our-schools",
		},
		{
			page: "Contact",
			link: "/contact",
		},
		{
			page: "Profile",
			link: "/profile",
		},
	];
	return (
		<>
			<nav className='bg-almond bg-opacity-95 z-30 sticky top-0 left-0 right-0'>
				<div className='px-6 py-2 lg:flex lg:items-center lg:justify-between max-w-7xl lg:mx-auto'>
					<div className='flex justify-between items-center'>
						<Link href={"/"} className='cursor-pointer'>
							<Image
								className='w-40 h-auto inline cursor-pointer'
								width={160}
								height={65.27}
								src='/images/logo.svg'
								alt='logo'
							/>
						</Link>
						<span
							className='text-3xl cursor-pointer mx-2 lg:hidden block'
							onClick={() => setIsOpen(!isOpen)}>
							<ion-icon name='menu'></ion-icon>
						</span>
					</div>
					<div className={className}>
						<div className='flex lg:flex-row flex-col gap-x-14 gap-y-5 lg:py-0 py-4 lg:px-0 px-6'>
							<div className='flex lg:items-center items-start lg:flex-row flex-col gap-5'>
								{navLink.map((item, index) => {
									return (
										<Link
											key={index}
											href={item.link}
											className='whitespace-nowrap font-medium text-base text-black  hover:text-rustyRed'>
											{item.page}
										</Link>
									);
								})}
							</div>
							<div className='flex items-center gap-5'>
								<Link
									href={"/Signin"}
									className='cursor-pointer text-base font-semibold border border-black px-7 py-2 rounded-full text-black transition-all duration-200 hover:text-opacity-80'>
									Login
								</Link>
								<Link
									href={"/Signup"}
									className='text-base font-semibold border border-rustyRed bg-rustyRed px-8 py-2 rounded-full text-white transition-all duration-200 hover:bg-blueStone'>
									Sigup
								</Link>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

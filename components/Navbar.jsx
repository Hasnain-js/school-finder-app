import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import burgerMenuIcon from "/public/burger-menu.svg";
import cancelIcon from "/public/x-mark.svg";
import { signIn, useSession } from "next-auth/react"

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const session = useSession();
	let mobileNavDynamicClass =
		"lg:relative transition-opacity lg:opacity-100 ease-linear duration-300 absolute left-0 lg:mt-0 mt-2 w-full lg:w-auto bg-almond bg-opacity-95 lg:bg-transparent ";
	if (isOpen) {
		mobileNavDynamicClass += "lg:opacity-100 opacity-100 lg:block block";
	} else {
		mobileNavDynamicClass += "lg:opacity-100 opacity-0 lg:block hidden";
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
							{!isOpen ? (
								<Image src={burgerMenuIcon} width={24} height={24} alt="burger-menu" />

							) : (
							<Image src={cancelIcon} width={24} height={24} alt="cancelIcon" />
							)}
						</span>
					</div>
					<div className={mobileNavDynamicClass}>
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
							<div className='flex items-center gap-3'>
							{
							 (session?.data?.user) ? (
								<>
									<img className="rounded-full h-9" src={session?.data?.user?.image} />
									<span className="font-bold text-sm">{session?.data?.user?.name} </span>
								</>
							 ) : (
								<button
									onClick={() => signIn()}
									className='cursor-pointer text-base font-semibold border border-black px-7 py-2 rounded-full text-black transition-all duration-200 hover:text-opacity-80'>
									Login
								</button>
							 )
							}
							</div>

						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;

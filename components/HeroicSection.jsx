import React from "react";

export const HeroicSection = ({ children }) => {
	return (
		<>
			{/*   HEROIC SETION */}
			<div className='bg-roseWhite relative'>
				Heroic Section
				<img
					src='/images/Heroic-Banner.png'
					alt='banner'
					className='object-cover object-center absolute top-0 bottom-0 left-0 right-0'
				/>
				{children}
			</div>
		</>
	);
};

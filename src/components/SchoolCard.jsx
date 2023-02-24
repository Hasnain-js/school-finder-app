import React from "react";

export default function SchoolCard({
	cardTitle,
	cardDes,
	CardRating = [1, 2, 3, 4, 5],
	cardImage,
}) {
	return (
		<>
			<div className='p-4 md:w-1/3'>
				<div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
					<img
						className='lg:h-48 md:h-36 w-full object-cover object-center'
						src={cardImage}
						// src={TrackImage}
						alt='blog'
					/>
					<div className='p-6 '>
						<h2 className='flex items-center tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
							CATEGORY
							<span className=' text-rustyRed inline-flex pl-52'>
								{CardRating.forEach((element) => {
									return <ion-icon name='star'></ion-icon>;
								})}
							</span>
						</h2>
						<h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
							{cardTitle}
						</h1>
						<p className='leading-relaxed mb-3'>{cardDes}</p>

						<div className='flex items-center flex-wrap '>
							<button className='flex items-center hover:bg-blueStone bg-rustyRed px-12 py-2 rounded-full text-white'>
								Profile
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

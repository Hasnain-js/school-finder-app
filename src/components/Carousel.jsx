import React, { useState } from "react";
import Card from "./Card";
import SchoolCard from "./SchoolCard";

export const initalState = [
	{ idx: 1, pos: 1, text: "1", active: true },
	{ idx: 2, pos: 2, text: "2", active: true },
	{ idx: 3, pos: 3, text: "3", active: true },
	{ idx: 4, pos: 4, text: "4", active: false },
];
function Carousel({ carousalData }) {
	console.log(carousalData);
	const [cards, setCards] = useState(carousalData);

	const handleLeftClick = (isLeft) => {
		const prevState = [...cards];
		// find next inactive card index - top
		const nextCardIdx = prevState
			.filter((ft) => ft.active === true)
			.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;
		// reset
		prevState.find((f) => f.active === false).active = true;
		// update
		prevState.find((f) => f.idx === nextCardIdx).active = false;
		// maximize pos
		prevState.find((f) => f.idx === nextCardIdx).pos =
			Math.max.apply(
				null,
				prevState.map(function (o) {
					return o.pos;
				})
			) + 1;

		// update state
		setCards(prevState);
	};

	const handleRightClick = () => {
		const prevState = [...cards];
		// find next inactive card index - bottom
		const nextCardIdx = prevState
			.filter((ft) => ft.active === true)
			.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
			.pop(1).idx;
		// minimize pos
		prevState.find((f) => f.active === false).pos =
			Math.min.apply(
				null,
				prevState.map(function (o) {
					return o.pos;
				})
			) - 1;
		// reset
		prevState.find((f) => f.active === false).active = true;
		// update
		prevState.find((f) => f.idx === nextCardIdx).active = false;

		// update state
		setCards(prevState);
	};

	return (
		<div className='flex items-center justify-center mx-auto'>
			<div
				className='text-xl md:text-5xl cursor-pointer'
				onClick={() => handleLeftClick()}>
				{"<"}
			</div>
			{cards
				?.filter((f) => f.active === true)
				?.sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
				?.map((card, index) => (
					<SchoolCard
						key={index}
						cardTitle={card.cardTitle}
						cardDes={card.cardDes}
						cardRating={[...card.cardRating]}
						cardImage={card.cardImage}
					/>
				))}
			<div
				className='text-xl md:text-5xl cursor-pointer'
				onClick={() => handleRightClick()}>
				{">"}
			</div>
		</div>
	);
}

export default Carousel;

"use client"
import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Review } from "@/components/Review";
import { HeroicSection } from "@/components/Home/HeroicSection";
import { FeatureSection } from "@/components/Home/FeatureSection";
import { SchoolCardSection } from "@/components/Home/SchoolCardSection";
import { LearningExperienceSection } from "@/components/Home/LearningExperienceSection";
import { Swiper, SwiperSlide } from "swiper/react";


export default function Home() {
	const ReviewData = [
		{
			userReviews: "Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself",
			userName: "Hasnain Saeed",
			userTitle: "Web Developer",
			userImage: "/images/hasnain-saeed.jpeg",
		},
		{
			userReviews: "Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots",
			userName: "Ramsha Naseer",
			userTitle: "Web Developer",
			userImage: "/images/ramsha.jpg",
		},
		{
			userReviews: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
			userName: "Yawar ali",
			userTitle: "Web Developer",
			userImage: "/images/yawar.jpg",
		},
		{
			userReviews: "Teachings of the great explore of truth, the master-builder of human happiness.no one rejects,dislikes, or avoids pleasure itself, pleasure itself",
			userName: "Hasnain Saeed",
			userTitle: "Web Developer",
			userImage: "/images/hasnain-saeed.jpeg",
		},

	];
	return (
		<>
			<main>
				{/* Heroic Section */}
				<HeroicSection />
				{/* Heroic Section end */}
				{/* lower banner section */}
				<FeatureSection />
				{/* lower banner section end */}
				{/* Our schools */}
				{/* <SchoolCardSection /> */}
				{/* End Our schools */}
				{/* Learning Experience section */}
				<LearningExperienceSection />
				{/* review component */}
				<section className='relative py-24 px-6 max-w-7xl mx-auto'>
					<div className=' flex-col gap-5 flex items-center'>
						<h2 className='text-gunMetal text-center text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl lg:leading-tight'>
							What student’s say
						</h2>
						<Swiper
							slidesPerView={1}
							spaceBetween={10}
							navigation={true}
							breakpoints={{
								640: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 40,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 50,
								},
							}}
							pagination={{
								dynamicBullets: true,
							}}
							modules={[Navigation, Autoplay, Pagination]}
							className='custom-swiper'>
							{ReviewData.map((review, index) => {
								return (
									<SwiperSlide key={index}>
										<Review
											userReviews={review.userReviews}
											userName={review.userName}
											userTitle={review.userTitle}
											userImage={review.userImage}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<Image
						width={120}
						height={68}
						className='absolute bottom-10 right-0 opacity-100'
						src='/images/planet.png'
						alt='Banner image'
					/>
					<Image
						width={120}
						height={68}
						className='absolute bottom-10 left-0 opacity-100'
						src='/images/orange-arrow.png'
						alt='Banner image'
					/>
				</section>
			</main>
		</>
	);
}

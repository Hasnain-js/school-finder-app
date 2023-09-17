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
			userReviews: "This app made finding the right school for my child a breeze! The detailed information, user reviews, and personalized recommendations were incredibly helpful. Highly recommended!",
			userName: "Sarah",
		},
		{
			userReviews: "The school finder app saved me so much time. Instead of visiting multiple schools, I narrowed down my options easily and made an informed choice. It's a game-changer for parents!",
			userName: "Emily",
		},
		{
			userReviews: "I love how I can compare schools side by side and read reviews from other parents. It gave me peace of mind knowing that I made the right decision for my daughter's education.",
			userName: "Michael",
		},
		{
			userReviews: "As a teacher, I find this app incredibly useful for recommending schools to my students' parents. It's a valuable resource for both educators and families.",
			userName: "Lisa",
		},
		{
			userReviews: "This app is a must-have for anyone looking for the best education options. The alerts for school events and deadlines are a lifesaver!",
			userName: "David",
		},
		{
			userReviews: "The school finder app helped me discover a hidden gem of a school that I would have otherwise missed. My child is thriving there, and I'm grateful for this app!",
			userName: "Rachel",
		},
		{
			userReviews: "I can't imagine navigating the school search without this app. It's user-friendly, informative, and made finding a school for my son a joyful experience.",
			userName: "Mark",
		},
		{
			userReviews: "This app is a game-changer for parents like me who value their children's education. It's like having a personal assistant for school hunting!",
			userName: "Amanda",
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
											userImage={'/images/avatar.jpeg'}
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

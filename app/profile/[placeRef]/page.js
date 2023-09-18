"use client"
import GlobalApi from '@/Shared/GlobalApi';
import { HeroicSection } from '@/components/HeroicSection';
import { useEffect, useState, useContext } from "react";
import { UserLocationContext } from "@/context/UserLocationContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Review } from "@/components/Review";
import Image from 'next/image';




export default function Profile({ params }) {
    const { placeRef } = params
    const [profileDetails, setProfileDetails] = useState([])
    const { userLocation, setUserLocation } = useContext(UserLocationContext);

    useEffect(() => {
        getGooglePlaceDetails();
    }, [placeRef])

    const getGooglePlaceDetails = () => {
        GlobalApi.getGooglePlaceDetail(placeRef).then(resp => {
            const { productDetails } = resp.data;
            console.log('productDetails.result ==>', productDetails.result);
            setProfileDetails(productDetails.result);
        })
    }
    const onDirectionClick = () => {
        window.open(
            "https://www.google.com/maps/dir/?api=1&origin=" +
            userLocation.lat +
            "," +
            userLocation.lng +
            "&destination=" +
            profileDetails.geometry.location.lat +
            "," +
            profileDetails.geometry.location.lng +
            "&travelmode=driving"
        );
    };
    return (
        <>
            <HeroicSection>
                <h1 className="text-4xl font-bold text-center text-black sm:text-6xl lg:text-7xl">
                    {profileDetails?.name}
                </h1>
            </HeroicSection>
            <section className='bg-white'>
                <div class="container mx-auto p-5 flex flex-col items-stretch gap-5">
                    <div class="flex md:flex-row flex-col gap-5">
                        {/* <!-- Left Side --> */}
                        <div class="w-full md:w-3/12">
                            {/* <!-- Profile Card --> */}
                            <div class="bg-roseWhite p-3 border-t-4 border-rustyRed rounded-md">
                                <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{profileDetails?.name}</h1>
                                <a href={profileDetails.website} target='_blank' class="text-rustyRed font-lg text-semibold text-sm leading-6">{profileDetails.website}</a>
                                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                                    {profileDetails.formatted_address}
                                </p>
                                <ul
                                    class="bg-white text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                                    <li class="flex items-center py-3">
                                        <span>Ratings</span>
                                        <span class="ml-auto">
                                            <div className="flex items-center justify-between space-x-[2px] w-24">
                                                {[1, 2, 3, 4, 5].map((values) => {
                                                    return values < Math.ceil(profileDetails.rating) ? (
                                                        <svg
                                                            key={values}
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40116 13.6524C8.15018 13.5206 7.85014 13.5206 7.59916 13.6524L3.98998 15.5498C3.35786 15.8822 2.61894 15.3452 2.73975 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.1813 9.85967L0.261322 7.01345C-0.249984 6.51482 0.032035 5.6464 0.738919 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54342 0.189248 8.45657 0.189248 8.77263 0.829716Z"
                                                                fill="#FFA135"
                                                            />
                                                        </svg>
                                                    ) : (
                                                        <svg
                                                            key={values}
                                                            width="14"
                                                            height="14"
                                                            viewBox="0 0 16 16"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40117 13.6524C8.15019 13.5206 7.85014 13.5206 7.59916 13.6524L3.98999 15.5498C3.35786 15.8822 2.61894 15.3452 2.73976 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.18131 9.85967L0.261325 7.01345C-0.24998 6.51482 0.0320388 5.6464 0.738922 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54343 0.189248 8.45657 0.189248 8.77263 0.829716Z"
                                                                fill="#F9D4AB"
                                                            />
                                                        </svg>
                                                    );
                                                })}
                                            </div>
                                        </span>
                                    </li>
                                    <li class="flex items-center py-3">
                                        <button
                                            onClick={() => onDirectionClick()}
                                            className="pt-2 pb-2 px-10 bg-rustyRed text-white rounded-full text-sm ml-auto"
                                        >
                                            Get Direction
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- End of profile card --> */}
                        </div>
                        {/* <!-- Right Side --> */}
                        <div class="w-full md:w-9/12">
                            {/* <!-- About Section --> */}
                            <div class="bg-roseWhite p-3 shadow-sm rounded-md h-full">
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide">About</span>
                                </div>
                                <div class="text-gray-700">
                                    <div class="grid md:grid-cols-2 text-sm">
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Total user ratings</div>
                                            <div class="px-4 py-2">{profileDetails.user_ratings_total}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Contact No.</div>
                                            <div class="px-4 py-2">{profileDetails.international_phone_number}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Current Address</div>
                                            <div class="px-4 py-2">{profileDetails.formatted_address}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Rating</div>
                                            <div class="px-4 py-2">{profileDetails.rating}</div>
                                        </div>
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">Website.</div>
                                            <div class="px-4 py-2">
                                                <a class="text-blue-800" href={profileDetails.website} target='_blank'>{profileDetails.website}</a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* <!-- End of about section --> */}

                        </div>
                    </div>
                    <div class="flex no-wrap">
                        <div class="bg-roseWhite p-3 shadow-sm rounded-md w-full">
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
                                    {profileDetails?.reviews?.map((review, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="flex flex-col items-start gap-y-5 p-8 shadow rounded-lg bg-white">
                                                <div className="flex items-center justify-between space-x-[2px] ">
                                                                {/* <span className="mr-2 text-sm">{business.rating}</span> */}
                                                                {[1, 2, 3, 4, 5].map((values) => {
                                                                    return values < Math.ceil(review.rating) ? (
                                                                        <svg
                                                                            key={values}
                                                                            width="14"
                                                                            height="14"
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40116 13.6524C8.15018 13.5206 7.85014 13.5206 7.59916 13.6524L3.98998 15.5498C3.35786 15.8822 2.61894 15.3452 2.73975 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.1813 9.85967L0.261322 7.01345C-0.249984 6.51482 0.032035 5.6464 0.738919 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54342 0.189248 8.45657 0.189248 8.77263 0.829716Z"
                                                                                fill="#FFA135"
                                                                            />
                                                                        </svg>
                                                                    ) : (
                                                                        <svg
                                                                            key={values}
                                                                            width="14"
                                                                            height="14"
                                                                            viewBox="0 0 16 16"
                                                                            fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                d="M8.77263 0.829716L10.5772 4.48629C10.7027 4.7406 10.9453 4.91682 11.226 4.95754L15.2614 5.54394C15.9683 5.64674 16.2503 6.51516 15.739 7.01345L12.819 9.85967C12.6161 10.0576 12.5233 10.3429 12.5714 10.6223L13.2606 14.6413C13.3814 15.3452 12.6425 15.8819 12.0103 15.5498L8.40117 13.6524C8.15019 13.5206 7.85014 13.5206 7.59916 13.6524L3.98999 15.5498C3.35786 15.8822 2.61894 15.3452 2.73976 14.6413L3.42895 10.6223C3.47701 10.3429 3.38423 10.0576 3.18131 9.85967L0.261325 7.01345C-0.24998 6.51482 0.0320388 5.6464 0.738922 5.54394L4.7743 4.95754C5.05498 4.91682 5.29762 4.7406 5.42311 4.48629L7.2277 0.829716C7.54343 0.189248 8.45657 0.189248 8.77263 0.829716Z"
                                                                                fill="#F9D4AB"
                                                                            />
                                                                        </svg>
                                                                    );
                                                                })}
                                                            </div>
                                                    <q className="leading-relaxed text-base text-balticSea">{review.text ? review.text : 'very good'}</q>
                                                    <div className="flex items-center justify-start gap-5">
                                                        <Image src='/images/avatar.jpeg' className="rounded-full object-contain object-center" width={45} height={45} alt="userImage" />
                                                        <span>
                                                            <h5 className="text-gunMetal text-lg font-medium">{review.author_name}</h5>
                                                            <p className="text-gray-500 text-sm">{review.relative_time_description}</p>

                                                        </span>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

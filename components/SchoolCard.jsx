import Image from "next/image";
import { UserLocationContext } from "@/context/UserLocationContext";
import React, { useContext, useEffect, useState } from "react";
export const SchoolCard = ({ business }) => {
  const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  const photo_ref = business?.photos
    ? business?.photos[0]?.photo_reference
    : "";
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  const [distance, setDistance] = useState();
  useEffect(() => {
    calculateDistance(
      business.geometry.location.lat,
      business.geometry.location.lng,
      userLocation.lat,
      userLocation.lng
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const earthRadius = 6371; // in kilometers

    const degToRad = (deg) => {
      return deg * (Math.PI / 180);
    };

    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;

    setDistance(distance.toFixed(1));
    return distance.toFixed(2); // Return the distance with 2 decimal places
  };

  const onDirectionClick = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&origin=" +
        userLocation.lat +
        "," +
        userLocation.lng +
        "&destination=" +
        business.geometry.location.lat +
        "," +
        business.geometry.location.lng +
        "&travelmode=driving"
    );
  };

  return (
    <>
      <div className="p-3 pb-12 rounded-lg bg-white shadow-md hover:shadow-lg mb-4 relative w-full">
        <div className="h-36 w-full relative">
          <Image
            fill
            className="rounded-lg h-12 object-cover object-center"
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo_ref}&key=${GOOGLE_API_KEY}`}
            alt={business.name}
          />
        </div>
        <div>
          <div className="flex items-center pt-3">
            <p className="grow text-LightGreyText text-base	">
              {business.rating}
            </p>
            {/* Ratting */}

            <div className="flex items-center justify-between space-x-[2px] ">
              <span className="mr-2 text-sm">{business.rating}</span>
              {[1, 2, 3, 4, 5].map((values) => {
                return values < Math.ceil(business.rating) ? (
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
          </div>

          <div className="pb-2">
            <h5 className="text-black font-semibold leading-8 text-lg">
              {business.name}
            </h5>
            <p className="text-sm text-LightGreyText font-light">
              {business.formatted_address}
            </p>
          </div>
          <div className=" border-t border-dashed	border-LightGreyText"></div>

          <div className="flex items-center pt-2">
            <svg
              width="14"
              height="14"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_35_8497)">
                <path
                  d="M9.50011 0C4.2619 0 0.000457764 4.26167 0.000457764 9.49989C0.000457764 14.7383 4.2619 19 9.50011 19C14.7383 19 19 14.7383 19 9.49989C19 4.26167 14.7381 0 9.50011 0ZM9.50011 17.6265C5.01937 17.6265 1.37371 13.9809 1.37371 9.49989C1.37371 5.01892 5.01914 1.37348 9.50011 1.37348C13.9811 1.37348 17.6265 5.01892 17.6265 9.49989C17.6265 13.9809 13.9811 17.6265 9.50011 17.6265Z"
                  fill="black"
                />
                <path
                  d="M12.2487 10.3744C12.245 10.3744 12.2418 10.3744 12.2381 10.3744L10.1866 10.405V5.0361C10.1866 4.6568 9.87919 4.34937 9.49988 4.34937C9.12057 4.34937 8.81314 4.6568 8.81314 5.0361V11.1023C8.81314 11.1037 8.8136 11.105 8.8136 11.1064C8.8136 11.1087 8.81314 11.1108 8.81314 11.1126C8.8136 11.1405 8.81886 11.1668 8.82253 11.1936C8.82482 11.2103 8.82504 11.2275 8.82825 11.244C8.83443 11.2735 8.84473 11.301 8.85457 11.3287C8.85961 11.3431 8.86281 11.3582 8.86877 11.372C8.88067 11.4001 8.89669 11.4257 8.91203 11.4521C8.91913 11.4637 8.92439 11.4766 8.93195 11.488C8.94934 11.5134 8.97018 11.5361 8.99078 11.5592C8.99948 11.5688 9.00657 11.5798 9.01573 11.5892C9.03793 11.6112 9.06289 11.6297 9.08784 11.6487C9.09791 11.6563 9.10684 11.6654 9.11714 11.6725C9.14415 11.6908 9.17368 11.7053 9.20321 11.7194C9.21351 11.7243 9.22267 11.7311 9.2332 11.7355C9.26753 11.7499 9.30416 11.76 9.34124 11.7689C9.34811 11.7705 9.35452 11.7737 9.36162 11.7751C9.40603 11.784 9.45204 11.789 9.49919 11.789C9.50263 11.789 9.50629 11.789 9.50972 11.789L12.2585 11.7478C12.6376 11.7421 12.9404 11.4299 12.9349 11.0508C12.9297 10.6751 12.6232 10.3744 12.2487 10.3744Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_35_8497">
                  <rect width="19" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="pl-2  text-LightGreyText text-[13px]	">22hr 30min</p>
            {/* <svg
              className="ml-2"
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25 5.5C3.45507 5.5 2 6.95508 2 8.75V19.25C2 21.0449 3.45507 22.5 5.25 22.5H15.7523C17.5472 22.5 19.0023 21.0449 19.0023 19.25V17.6707L23.5434 20.7824C24.3729 21.3508 25.4999 20.7568 25.4999 19.7512V8.24842C25.4999 7.24298 24.3732 6.64898 23.5436 7.21708L19.0023 10.3272V8.75C19.0023 6.95508 17.5472 5.5 15.7523 5.5H5.25ZM19.0023 15.8524V12.1452L23.9999 8.72263V19.2769L19.0023 15.8524ZM17.5023 8.75V19.25C17.5023 20.2165 16.7187 21 15.7523 21H5.25C4.2835 21 3.5 20.2165 3.5 19.25V8.75C3.5 7.7835 4.2835 7 5.25 7H15.7523C16.7188 7 17.5023 7.7835 17.5023 8.75Z"
                fill="#212121"
              />
            </svg>

            <p className="pl-2 text-LightGreyText text-[13px]	">34 Courses</p>
            <svg
              className="ml-2"
              width="14"
              height="14"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8961 12.0023C16.4988 12.0023 16.1789 12.3222 16.1789 12.7195V16.1789H1.82109V12.7195C1.82109 12.3222 1.50117 12.0023 1.10391 12.0023C0.706641 12.0023 0.386719 12.3222 0.386719 12.7195V16.8961C0.386719 17.2933 0.706641 17.6133 1.10391 17.6133H16.8961C17.2934 17.6133 17.6133 17.2933 17.6133 16.8961V12.7195C17.6133 12.3222 17.2934 12.0023 16.8961 12.0023Z"
                fill="black"
              />
              <path
                d="M8.47266 12.8531C8.87696 13.261 9.37266 13.036 9.52383 12.8531L13.6477 8.41643C13.9184 8.12463 13.9008 7.67112 13.609 7.40041C13.3172 7.12971 12.8637 7.14729 12.5965 7.43909L9.71719 10.5364V1.21292C9.71719 0.815649 9.39727 0.495728 9 0.495728C8.60274 0.495728 8.28282 0.815649 8.28282 1.21292V10.5399L5.40352 7.4426C5.13281 7.15081 4.6793 7.13674 4.3875 7.40393C4.09571 7.67463 4.08164 8.12815 4.34883 8.41995L8.47266 12.8531Z"
                fill="black"
              />
            </svg>
            <p className="pl-2 text-LightGreyText text-[13px]	">250 Sales</p> */}
          </div>
        </div>
        <div className="flex items-center justify-center absolute bottom-4 inset-x-0">
          <button
            onClick={() => onDirectionClick()}
            className="pt-2 pb-2 pl-10 pr-10 bg-rustyRed text-white rounded-full absolute -bottom-8"
          >
            Get Direction
          </button>
        </div>
      </div>
    </>
  );
};

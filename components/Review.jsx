import Image from "next/image";
import React from "react";

export const Review = ({ userReviews, userName, userTitle, userImage = '/images/hasnain-saeed.jpeg' }) => {
  return (
    <>
          <div className="flex flex-col items-start gap-y-5 p-8 shadow rounded-lg">
            	<q className="leading-relaxed text-base text-balticSea">{userReviews}</q>
				<div className="flex items-center justify-start gap-5">
					<Image src={userImage} className="rounded-full object-contain object-center" width={45} height={45} alt="userImage" />
					<span>
						<h5 className="text-gunMetal text-lg font-medium">{userName}</h5>
					</span>
				</div>
          </div>
    </>
  );
};

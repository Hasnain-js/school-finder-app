import Data from '@/Shared/Data'
import React, { useState } from 'react'

function SelectRating({ onRatingChange }) {
    const [selectedRating, setSelectedRating] = useState([]);

    const onSelectRating = (isChecked, value) => {
        if (isChecked) {
            setSelectedRating([...selectedRating, value]);
        }
        else {
            setSelectedRating(selectedRating.filter((n) => n !== value));
        }
        console.log(selectedRating);
        onRatingChange(selectedRating)
    }
    return (
        <div className='px-2 mt-5 space-y-4'>
            <h2 className='font-bold'>Select Rating</h2>
            <div className='space-y-4'>
                {Data.ratingList.map((item, index) => (
                    <div key={index} className='flex items-stretch gap-4 w-full'>
                        <input type='checkbox' id={'rating-'+ index}
                            className='accent-black w-4 h-4 cursor-pointer'
                            onChange={(e) => onSelectRating(e.target.checked, item.name)}
                        />
                        <label className='flex items-center cursor-pointer gap-2' for={'rating-'+ index}>
                        {[1, 2, 3, 4, 5].map((values) => {
                            return values < (index + 2) ? (
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
                        })}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectRating

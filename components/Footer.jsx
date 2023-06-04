import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="text-white body-font bg-darkGrey pl-40 pr-40 ">
        <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center ">
              <Image
                className="w-[200px] h-[82px]"
                width={100}
                height={100}
                src="/images/white-Logo.png"
                alt="logo"
              />
            </a>
            <p className="mt-2 text-sm text-[#949494]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy a type
              specimen book.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#949494] hover:text-white ">First Link</a>
                </li>
                <li>
                  <a className=" text-[#949494] hover:text-white">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" text-[#949494] hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className=" text-[#949494] hover:text-white">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#949494] hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#949494] hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#949494] hover:text-white">First Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Second Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Third Link</a>
                </li>
                <li>
                  <a className="text-[#949494] hover:text-white">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center bg-darkGrey border-t-[0.5px] border-[#B7B7B7] py-4">
        <p className="text-[#606060]">BookStore All Right Reserved, 2022</p>
      </div>
    </>
  );
}

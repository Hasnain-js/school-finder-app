import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-white body-font bg-gunMetal lg:pl-40 lg:pr-40 md:pl-6 md:pr-6">
        <div className="container lg:px-5 pt-8 pb-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center md:justify-start justify-center "
            >
              <Image
                className="w-40 h-auto inline cursor-pointer"
                width={160}
                height={65.27}
                src="/images/white-Logo.png"
                alt="logo"
              />
            </Link>
            <p className="mt-2 text-sm text-[#949494]">
              Find the perfect schools for your children effortlessly with the
              School Finder App. Search by location, type, fees, and
              performance, and access detailed information to make informed
              decisions. Discover public, private, and specialized schools all
              in one user-friendly platform.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                QUICK LINKS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/"} className="text-[#949494] hover:text-white">Home</Link>
                </li>
                <li>
                  <a href={"/about"} className="text-[#949494] hover:text-white">About</a>
                </li>
                <li>
                  <a href={"/our-schools"} className="text-[#949494] hover:text-white">Find your school</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href={"/"} className="text-[#949494] hover:text-white ">FAQs</Link>
                </li>
                <li>
                  <Link href={"/"} className=" text-[#949494] hover:text-white">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href={"/"} className=" text-[#949494] hover:text-white">Help center</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium  tracking-widest text-sm mb-3">
                CONTACT US
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a href="tel:03122023432" className="text-[#949494] hover:text-white">03122023432</a>
                </li>
                <li>
                  <a href="mailto:ihasnain4@gmail.com" className="text-[#949494] hover:text-white">
                    ihasnain4@gmail.com
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-sm bg-gunMetal border-t  border-[#94a3b8] py-4">
        <p className="text-white">BookStore All Right Reserved, 2023</p>
      </div>
    </>
  );
}

import React from "react";
import logo from "../../assets/images/logo.svg";
const Navbar = () => {
  return (
    <>
      {/* top Banner */}
      <nav className="text-white bg-black">
        <div className="container mx-auto py-1 px-5 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <ion-icon name="mail-outline"></ion-icon>
            <a className="text-xs" href="mailto:ramhas12@gmail.com">
              ramhas12@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <ion-icon name="call-outline"></ion-icon>
            <a className="text-xs" href="01020929929">
              012345678789
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-white shadow z-30 relative">
        <div className="container mx-auto p-5 lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-between items-center">
            <a className="cursor-pointer">
              <img className="w-36 h-auto inline cursor-pointer" src={logo} />
            </a>
            <span className="text-3xl cursor-pointer mx-2 lg:hidden block">
              <ion-icon name="menu" onclick="Menu(this)"></ion-icon>
            </span>
          </div>
          <div className="lg:relative absolute left-0 lg:mt-0 mt-5 w-full lg:w-auto bg-copper-red lg:bg-transparent">
            <ul className="container mx-auto p-5 lg:text-black text-white hover:text-copper-red text-xl duration-500 flex lg:items-center items-start lg:flex-row flex-col gap-5">
              {["Home", "About Us", "Our Services", "Contact", "Schools"].map(
                (item, index) => {
                  return (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  );
                }
              )}
              <button className="flex items-center gap-2 whitespace-nowrap text-copper-red lg:text-white bg-white lg:bg-copper-red duration-500 px-6 py-2 hover:bg-copper-red-lighter rounded ">
                <ion-icon name="log-in-outline"></ion-icon>
                Sign in
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

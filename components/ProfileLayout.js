import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Navbar />
      <section className="">
        <div className="w-full h-56 bg-frenchBlue"></div>
        <div className="flex items-start justify-start gap-5">
          <aside className="flex flex-col pl-10 max-w-sm w-full h-screen px-4 pb-8  bg-transparent">
            <div className="flex flex-col items-start gap-1 -mt-12">
              <img
                className="object-cover w-24 h-24 mx-2 rounded-full"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="avatar"
              />
              <h3 className="text-gunMetal text-center text-xl font-semibold leading-tight">
                Hayat ul islam
              </h3>
              <h4 className="font-medium text-gray-800">Secondary school</h4>
              <p className="text-sm font-medium text-LightGreyText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Labore, error? Iste corporis eveniet nihil nam earum eligendi
                repudiandae aspernatur? Consequuntur ut omnis accusamus non
                tenetur veritatis neque officiis nobis molestiae!
              </p>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 border gap-y-4 p-5 mt-4 border-romance rounded-lg">
              <div className="border-b border-romance pb-4">
                <h4 className="font-medium text-gray-800 dark:text-gray-200">
                  3.5k
                </h4>
                <p className="text-sm font-medium text-LightGreyText">
                  Followers
                </p>
              </div>
              <div className="border-b border-romance pb-4">
                <h4 className="font-medium text-gray-800 dark:text-gray-200">
                  3.6k
                </h4>
                <p className="text-sm font-medium text-LightGreyText">Post</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">
                  3.8k
                </h4>
                <p className="text-sm font-medium text-LightGreyText">
                  Collection
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 dark:text-gray-200">
                  4.1k
                </h4>
                <p className="text-sm font-medium text-LightGreyText">
                  Followers
                </p>
              </div>
            </div>
          </aside>
          <aside className="mt-12 w-full">
            {/* Tabs buttons */}
            <div className="flex items-end justify-between overflow-x-auto overflow-y-hidden border-b-2 border-b-romance whitespace-nowrap dark:border-gray-700">
              <div className="flex">
                <Link
                  href="/profile/"
                  className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center hover:font-semibold text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:border-rustyRed focus:text-rustyRed"
                >
                  Profile
                </Link>

                <Link
                  href="/profile/account"
                  className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center hover:font-semibold text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:border-rustyRed focus:text-rustyRed"
                >
                  Account
                </Link>

                <Link
                  href="/profile/notification"
                  className="inline-flex items-center h-10 px-4 -mb-px text-sm text-center hover:font-semibold text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base whitespace-nowrap cursor-base focus:border-rustyRed focus:text-rustyRed"
                >
                  Notification
                </Link>
              </div>
              <div className="flex px-4 pb-2">
                <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Primary
                </button>
              </div>
            </div>
            {/* Tabs body */}
            <div className="">{children}</div>
          </aside>
        </div>
      </section>
      <Footer />
    </>
  );
}

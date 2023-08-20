import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";

export default function ProfileLayout({ children }) {
  return (
    <>
      <Navbar />
        <div className="w-full lg:h-56 h-16 bg-frenchBlue"></div>
      <section className="container mx-auto pb-12 px-4">
        <div className="flex items-start justify-start gap-5">
          <div className="flex flex-row items-end gap-5 -mt-12">
            <Image
              className="object-cover w-24 h-24 rounded-full"
              src="/images/hasnain-saeed.jpeg"
              alt="avatar"
              width={96}
              height={96}
            />
            <div className="text-start">
              <h3 className="text-gunMetal text-center text-xl font-semibold leading-tight">
                Hayat ul islam
              </h3>
              <h4 className="font-medium text-gray-800">Secondary school</h4>
            </div>
          </div>
        </div>
        <aside className="mt-5 w-full">
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
            
          </div>
          {/* Tabs body */}
          <div className="">{children}</div>
        </aside>
      </section>
      <Footer />
    </>
  );
}

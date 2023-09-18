"use client"
import GlobalApi from '@/Shared/GlobalApi';
import { HeroicSection } from '@/components/HeroicSection';
// import BusinessList from '@/components/Home/BusinessList';
import CategoryList from '@/components/Home/CategoryList';
// import GoogleMapView from '@/components/Home/GoogleMapView';
import RangeSelect from '@/components/Home/RangeSelect';
import SelectRating from '@/components/Home/SelectRating';
import { SchoolCard } from '@/components/SchoolCard';
import SkeltonLoading from '@/components/SkeltonLoading';
import { UserLocationContext } from '@/context/UserLocationContext';
import { signOut, useSession } from 'next-auth/react'
// import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react'

export default function Home() {
  const { data: session } = useSession();
  const [category, setCategory] = useState('schools');
  const [radius, setRadius] = useState(2500);
  const [businessList, setBusinessList] = useState([])
  const [businessListOrg, setBusinessListOrg] = useState([])
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  //   useEffect(()=>{
  //     if(!session?.user){
  //       router.push('/Login')
  //     }
  //   },[session])

  useEffect(() => {
    getGooglePlace();
  }, [category, radius])

  const getGooglePlace = () => {
    if (category) {
      setLoading(true)

      GlobalApi.getGooglePlace(category, radius, userLocation.lat, userLocation.lng).then(resp => {
        // console.log(resp.data.product.results);
        setBusinessList(resp.data.product.results);
        setBusinessListOrg(resp.data.product.results);
        setLoading(false)
      })
    }

  }

  const onRatingChange = (rating) => {
    if (rating.length == 0) {
      setBusinessList(businessListOrg);
    }
    const result = businessList.filter(item => {
      for (let i = 0; i < rating.length; i++) {
        if (item.rating >= rating[i]) {
          return true;

        }
        return false
      }
    })

  }
  return (
    <>
      <HeroicSection>
        <div className='flex flex-col w-full items-center lg:gap-12 gap-6'>
          <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
            Find schools here
          </h1>
          {/* Search functionality */}
          {/* <div className="relative max-w-2xl flex items-center lg:text-lg text-xs justify-between shadow-2xl shadow-silverGrey w-full p-2 text-black rounded-2xl bg-white">
            <div className="flex w-full items-center gap-3">
              <span className="w-fit h-fit">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="lg:w-9 w-5 lg:mx-4 mx-2 h-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.6125 15.4923C18.7935 13.8795 19.4999 11.8985 19.4999 9.75096C19.4999 4.375 15.1259 0.000976562 9.74993 0.000976562C4.37398 0.000976562 0 4.375 0 9.75096C0 15.1269 4.37403 19.5009 9.74998 19.5009C11.8975 19.5009 13.8787 18.7944 15.4915 17.6134L21.8789 24.0008L24 21.8798C24 21.8797 17.6125 15.4923 17.6125 15.4923ZM9.74998 16.5009C6.02781 16.5009 3.00001 13.4731 3.00001 9.75096C3.00001 6.02879 6.02781 3.00099 9.74998 3.00099C13.4721 3.00099 16.4999 6.02879 16.4999 9.75096C16.4999 13.4731 13.4721 16.5009 9.74998 16.5009Z"
                    fill="#949494"
                  />
                </svg>
              </span>
              <input
                type="search"
                id="default-search"
                className="bg-transparent w-full outline-none flex-grow"
                placeholder="Search your dream school here.."
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-rustyRed w-fit hover:bg-rustyRed focus:ring-4 focus:outline-none  font-medium rounded-2xl flex-shrink-0 lg:px-9 px-4 lg:py-4 py-2"
            >
              Search
            </button>
          </div> */}
        </div>
      </HeroicSection>
      <section className='bg-roseWhite'>
        <div className="py-24 px-6 flex lg:flex-row flex-col items-stretch gap-6">
          <div className='lg:max-w-xs min-w-max w-full block'>
            <div className='lg:sticky relative lg:top-28'>
              <div className='p-5 relative rounded-lg bg-white'>
                <CategoryList onCategoryChange={(value) => setCategory(value)} />
                <RangeSelect onRadiusChange={(value) => setRadius(value)} />
                <SelectRating onRatingChange={(value) => onRatingChange(value)} />
              </div>
            </div>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            {console.log('businessList', businessList)}
            {businessList.map((item, index) => {
              return (
                <SchoolCard business={item} key={index} />
              )
            })}
          </div>
        </div>
      </section>
      {/* <div className='grid
    grid-cols-1
    md:grid-cols-4 relative'>
        <div className='p-3'>
          <CategoryList onCategoryChange={(value) => setCategory(value)} />
          <RangeSelect onRadiusChange={(value) => setRadius(value)} />
          <SelectRating onRatingChange={(value) => onRatingChange(value)} />
        </div>
        <div className=' col-span-3'>
          <GoogleMapView businessList={businessList} />
          <div className='md:absolute mx-2 w-[90%] md:w-[74%]
           bottom-36 relative md:bottom-3'>
            {!loading ? <BusinessList businessList={businessList} />
              :
              <div className='flex gap-3'>
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <SkeltonLoading key={index} />
                ))}
              </div>
            }

          </div>
        </div>

      </div> */}
    </>
  )
}

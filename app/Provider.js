"use client"
import React from 'react'
import { SessionProvider } from "next-auth/react"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Provider({children}) {
  return (
    <SessionProvider>
            {children}
    </SessionProvider>
  )
}

export default Provider

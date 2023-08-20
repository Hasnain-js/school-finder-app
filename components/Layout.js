import { SessionProvider } from "next-auth/react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
      <SessionProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </SessionProvider>
    )
  }
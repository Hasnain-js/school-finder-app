import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from "next-auth/react";

export default function Layout({ children }) {
  return (
    <SessionProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </SessionProvider>
  );
}

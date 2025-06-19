import Image from "next/image";
import Navbar from "@/components/myComp/Navbar/Navbar";
import Banner from "@/components/myComp/Banner/Banner";
import Banner2 from "@/components/myComp/Banner/Banner2";
import ServicesComponent from "@/components/myComp/services/ServicesComponent";
import AboutUs from "@/components/myComp/AboutUs";
import Footer from "@/components/myComp/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Banner2 />
      <ServicesComponent />
      <AboutUs />
      <Footer />
    </div>
  );
}

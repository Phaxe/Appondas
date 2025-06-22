import Image from "next/image";
import Navbar from "@/components/myComp/Navbar/Navbar";
import Banner2 from "@/components/myComp/Banner/Banner2";
import ServicesComponent from "@/components/myComp/services/ServicesComponent";
import AboutUs from "@/components/myComp/AboutUs";
import Footer from "@/components/myComp/Footer";
import OurWork from "@/components/myComp/OurWork/OurWork";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner2 />
      <ServicesComponent />
      <AboutUs />
      <OurWork />
      <Footer />
    </div>
  );
}

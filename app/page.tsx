import Image from "next/image";
import Products from "./components/Products";
import ContactUs from "./contact/page";
import Testimonial from "./components/Testimonial";
import HomeContact from "./components/HomeContact";

export default function Home() {
  return (
   <>
   <Products/>
   <Testimonial/>
<HomeContact/>
   </>
  );
}

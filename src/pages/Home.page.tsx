import { useState } from "react";
import FeaturedProduct from "../components/home/FeaturedProduct.component";
import FeaturedService from "../components/home/FeaturedService.component";
import HeroSection from "../components/home/HeroSection.component";
import Instagram from "../components/home/Instagram.component";

const Home = () => {
  const [showBooking, setShowBooking] = useState<boolean>(false);

  // const handleBookingButtonClick = () => {
  //   setShowBooking(true);
  // };

  // useEffect(() => {
  //   const script1 = document.createElement("script");
  //   script1.src =
  //     "https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/2.8.3/iframeResizer.min.js";
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement("script");
  //   script2.type = "text/javascript";
  //   script2.innerHTML = `iFrameResize({checkOrigin: false}, '#reservationIframe85203');`;
  //   document.body.appendChild(script2);

  //   return () => {
  //     document.body.removeChild(script1);
  //     document.body.removeChild(script2);
  //   };
  // }, []);
  return (
    <div>
      {showBooking ? (
        <div className=" items-center h-screen w-auto mt-[94px]">
          <button
            onClick={() => setShowBooking(false)}
            className="m-4 bg-gray-800 text-white font-semibold border border-gray-800 px-4 py-2 rounded-sm"
          >
            Close
          </button>
        </div>
      ) : (
        <div>
          <HeroSection />
          <FeaturedService />
          <FeaturedProduct />
          <Instagram />
        </div>
      )}
    </div>
  );
};

export default Home;

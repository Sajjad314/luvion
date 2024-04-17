import { useNavigate } from "react-router-dom";
import img from "../../assets/images/hero-img.jpg";
import { uiPaths } from "../../paths/uiPaths";
import PaymentModal from "../../modals/common/Payment.modal";
import { useEffect } from "react";
import { getConfigurationByName } from "../../apis/configuration/getConfiguration";
const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getConfigurationByName("heroText");
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen w-auto">
      <div className="absolute inset-0">
        {/* This div will contain your background image */}
        <div
          className="absolute inset-0 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </div>
      {/* Your content goes here */}
      <div className="relative flex flex-col gap-20 items-center justify-center">
        <h1 className="text-5xl text-white px-10 text-center font-EBG font-semibold">
          Always Make Room for a Little Beauty in Your Life
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row md:flex-row ">
          <PaymentModal />
          <button
            onClick={() => {
              navigate(uiPaths.Services);
            }}
            className="border border-white text-white text-lg font-semibold px-4 py-2 rounded hover:bg-white hover:text-black hover:border-0"
          >
            See Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

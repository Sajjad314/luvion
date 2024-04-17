// import { useState } from "react";
// import beardTrim from "../../assets/images/beardtrim.png";
// import hairCut from "../../assets/images/haircut.png";
// import mustacheTrim from "../../assets/images/mustache.png";
// import shaving from "../../assets/images/shaving.png";

const FeaturedService = () => {
  // const handleServiceClick = (service: string) => {
  //   setSelectedServce(service);
  //   let desc = "";
  //   serviceList.find((serviceObj) => {
  //     if (serviceObj.serviceName === service)
  //       return (desc = serviceObj.description);
  //   });
  //   setSelectedServiceDesc(desc);
  // };

  // const serviceList: {
  //   serviceName: string;
  //   icon: string;
  //   description: string;
  //   price: string;
  // }[] = [
  //   {
  //     serviceName: "Beard Trim",
  //     icon: beardTrim,
  //     description:
  //       "Get your nails done for great mood. Simple pleasures can make your week, not just day.",
  //     price: "$30",
  //   },
  //   {
  //     serviceName: "Mustache Trim",
  //     icon: mustacheTrim,
  //     description:
  //       "Brows can change it all. Try out styling and tinting your brows and see the difference.",
  //     price: "$25",
  //   },
  //   {
  //     serviceName: "Hair Cut",
  //     icon: hairCut,
  //     description:
  //       "Stylish hair cuts, gorgeous styling, incredible color services and best hair treatments. Choose your dream service!",
  //     price: "$65",
  //   },
  //   {
  //     serviceName: "Shaving",
  //     icon: shaving,
  //     description:
  //       "Indulge a little longer with a customized facial to help achieve your skin goals in 60-90 minutes.",
  //     price: "$45",
  //   },
  // ];
  return (
    <div className=" m-8 mt-20 ">
      <div className="max-w-screen-sm mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-700 border-b-2 border-gray-700 pb-8 m-10 w-auto">
          {" "}
          Our Services
        </h2>
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="text-5xl text-gray-900 font-bold mb-8 animate-pulse text-center">
            Coming Soon
          </h1>
          <p className="text-gray-900 text-lg mb-8 text-center">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
        {/* <div className="flex flex-row gap-12 items-center justify-center flex-wrap">
          {serviceList.map((service, index) => {
            return (
              <div
                key={service.serviceName}
                className=" flex flex-col gap-5 items-center cursor-pointer"
                onClick={() => {
                  setSelectedServce(service.serviceName);
                  setSelectedServiceIdx(index);
                }}
              >
                <img
                  src={service.icon}
                  alt={service.serviceName}
                  className=" h-12 w-12"
                />

                <p
                  className={`text-base text-gray-500 font-medium ${
                    selectedService === service.serviceName &&
                    " border-gray-500 text-gray-700 border-b-2 pb-2"
                  }`}
                >
                  {service.serviceName}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4">
          <p className=" tex-black text-lg font-thin text-center">
            {serviceList[selectedServiceIdx].description}
          </p>
          <p className=" text-[#AA9144] text-3xl font-semibold text-center">
            {serviceList[selectedServiceIdx].price}
          </p>
        </div>
        <button className=" bg-black text-lg text-white font-semibold px-8 py-3 ">
          View Service Menu
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedService;

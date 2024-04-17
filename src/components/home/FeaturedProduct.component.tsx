// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Product from "./Product";
// import { productData, responsive } from "./data";
// import ComingSoonComponent from "../common/ComingSoon";

const FeaturedProduct = () => {
  // const product = productData.map((item) => (
  //   <Product
  //     key={item.name}
  //     name={item.name}
  //     url={item.imageurl}
  //     price={item.price}
  //     description={item.description}
  //   />
  // ));
  return (
    <div className="  my-10 p-10 bg-[#F6EBE7] ">
      <div className="max-w-screen-sm mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-3xl font-semibold text-gray-700 border-b-2 border-gray-700 pb-8 m-10 w-auto">
          {" "}
          Our Products
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-5xl text-gray-900 font-bold mb-8 animate-pulse text-center">
          Coming Soon
        </h1>
        <p className="text-gray-900 text-lg mb-8 text-center">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>

      {/* <div className=" mx-10">
        <Carousel showDots={false} responsive={responsive}>
          {product}
        </Carousel>
      </div>
      <div className=" flex items-center justify-center">
        <button className=" bg-inherit text-black font-semibold border border-gray-800 px-4 py-2">
          View All
        </button>
      </div> */}
    </div>
  );
};

export default FeaturedProduct;

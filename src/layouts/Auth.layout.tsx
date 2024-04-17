import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { LoaderComponent } from "./components";
import logo from "../assets/luvion-logo.jpg";

const AuthLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <Suspense fallback={<LoaderComponent />}>
        <div className="w-full max-w-full text-center">
          <div className=" flex flex-col gap-1 bg-white shadow-md w-full mx-auto lg:flex-row lg:w-2/3 md:flex-row md:w-2/3">
            <div className=" flex items-center justify-center w-full  lg:w-1/2  md:w-1/2">
              <img src={logo} alt="" />
            </div>
            <div className="bg-gradient-to-b from-gray-600 to-gray-900 p-5  w-full lg:w-1/2 md:w-1/2">
              <Outlet />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default AuthLayout;

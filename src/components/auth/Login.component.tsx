import { useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { uiPaths } from "../../paths/uiPaths";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILoginPayload } from "../../interface/auth";
import { loginValidationSchema } from "../../constants/auth";
import { useState } from "react";
import SpinnerComponent from "../common/SpinnerComponent";

const LoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>({
    resolver: yupResolver(loginValidationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<ILoginPayload> = (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      navigate(uiPaths.Home);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-3 w-full"
    >
      <div className=" flex flex-col items-start justify-start gap-2 ">
        <label className=" text-sm font-medium text-white">
          Email <span className=" ml-1 text-red-500">*</span>
        </label>
        <Input
          {...register("email")}
          type="text"
          placeholder="Email"
          className=" w-full bg-inherit text-white border-gray-200 "
        />
        <small className="text-red-500">{errors.email?.message}</small>
      </div>
      <div className=" flex flex-col items-start justify-start gap-2 ">
        <label className=" text-sm font-medium text-white">
          Password <span className=" ml-1 text-red-500">*</span>
        </label>
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          className=" bg-inherit text-white border-gray-200 "
        />
        <small className="text-red-500">{errors.password?.message}</small>
      </div>
      <div className=" w-full items-center mt-5 flex flex-col gap-2">
        <button
          type="submit"
          className="flex items-center justify-center bg-white w-full text-black font-semibold rounded-md  border border-gray-800 px-4 py-2 hover:bg-white hover:text-black hover:border-none"
        >
          Submit {isLoading && <SpinnerComponent />}
        </button>
        <button className=" bg-green-500 text-white font-semibold rounded-md w-full px-4 py-2">
          Continue with Google
        </button>
        <p className=" text-gray-200 text-sm font-normal">
          {" "}
          Forgot Your Password?{" "}
          <span
            className=" text-blue-500 underline cursor-pointer"
            onClick={() => navigate(uiPaths.ForgetPassword)}
          >
            Click Here
          </span>
        </p>
      </div>
    </form>
  );
};

export default LoginComponent;

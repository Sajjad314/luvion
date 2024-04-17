import { FC, useState } from "react";
import { Input } from "../../components/components/ui/input";
import { useNavigate } from "react-router-dom";
import { uiPaths } from "../../paths/uiPaths";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { forgetPasswordValidationSchema } from "../../constants/auth/forgetPasswordValidationSchema";
import SpinnerComponent from "../../components/common/SpinnerComponent";

const ForgetPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(forgetPasswordValidationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<{ email: string }> = (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      navigate(uiPaths.ResetPassword);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className=" flex flex-col items-start justify-start gap-8 ">
      <div className=" w-full flex flex-row items-center justify-center  gap-4">
        <p className="bg-inherit  text-lg font-semibold py-2border-white border-b-2 text-white ">
          Forget Password
        </p>
      </div>
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
        <div className=" w-full items-center mt-5 flex flex-col gap-2">
          <button
            type="submit"
            className="flex items-center justify-center bg-white w-full text-black font-semibold rounded-md  border border-gray-800 px-4 py-2 hover:bg-white hover:text-black hover:border-none"
          >
            Submit {isLoading && <SpinnerComponent />}
          </button>
          <button
            className=" bg-green-500 text-white font-semibold rounded-md w-full px-4 py-2"
            onClick={() => navigate(uiPaths.Login)}
          >
            Go Back To Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;

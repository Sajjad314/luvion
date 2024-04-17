import { FC, useState } from "react";
import { Input } from "../../components/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { IResetPassword } from "../../interface/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPasswordValidationSchema } from "../../constants/auth/resetPasswordValidationSchema";
import { useNavigate } from "react-router-dom";
import { uiPaths } from "../../paths/uiPaths";
import SpinnerComponent from "../../components/common/SpinnerComponent";

const ResetPassword: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IResetPassword>({
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin: SubmitHandler<IResetPassword> = (data) => {
    setIsLoading(true);
    console.log(data);
    setTimeout(() => {
      navigate(uiPaths.Login);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className=" flex flex-col items-start justify-start gap-8 ">
      <div className=" w-full flex flex-row items-center justify-center  gap-4">
        <p className="bg-inherit  text-lg font-semibold py-2border-white border-b-2 text-white ">
          Reset Password
        </p>
      </div>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-3 w-full"
      >
        <div className=" flex flex-col items-start justify-start gap-2 ">
          <label className=" text-sm font-medium text-white">
            Token <span className=" ml-1 text-red-500">*</span>
          </label>
          <Input
            {...register("token")}
            type="text"
            placeholder="token"
            className=" w-full bg-inherit text-white border-gray-200 "
          />
          <small className="text-red-500">{errors.token?.message}</small>
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
        <div className=" flex flex-col items-start justify-start gap-2 ">
          <label className=" text-sm font-medium text-white">
            Confirm Password <span className=" ml-1 text-red-500">*</span>
          </label>
          <Input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className=" bg-inherit text-white border-gray-200 "
          />

          <small className="text-red-500">
            {errors.confirmPassword?.message}
          </small>
        </div>
        <div className=" w-full items-center mt-5 flex flex-col gap-2">
          <button
            type="submit"
            className="flex items-center justify-center bg-white w-full text-black font-semibold rounded-md  border border-gray-800 px-4 py-2 hover:bg-white hover:text-black hover:border-none"
          >
            Submit {isLoading && <SpinnerComponent />}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;

import { FC, useState } from "react";
import LoginComponent from "../../components/auth/Login.component";
import SignupComponent from "../../components/auth/Signup.component";

const LoginPage: FC = () => {
  const [loginSelected, setLoginSelected] = useState<boolean>(true);

  return (
    <div className=" flex flex-col items-start justify-start gap-8 ">
      <div className=" w-full flex flex-row items-center justify-center  gap-4">
        <button
          className={` bg-inherit  text-lg font-semibold py-2 ${
            loginSelected
              ? "border-white border-b-2 text-white"
              : " text-gray-400"
          } `}
          onClick={() => setLoginSelected(true)}
        >
          Sign In
        </button>
        <button
          className={` bg-inherit  text-lg font-semibold py-2 ${
            !loginSelected
              ? "border-white border-b-2 text-white"
              : " text-gray-400"
          } `}
          onClick={() => setLoginSelected(false)}
        >
          Sign Up
        </button>
      </div>
      {loginSelected ? <LoginComponent /> : <SignupComponent />}
    </div>
  );
};

export default LoginPage;

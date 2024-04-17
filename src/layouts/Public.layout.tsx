import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TopNavbar } from "./components";

export const PublicLayout: FC = () => {
  return (
    <div>
      <TopNavbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center"></div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

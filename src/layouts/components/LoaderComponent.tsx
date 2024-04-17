import { FC } from "react";

export const LoaderComponent: FC = () => {
  return (
    <div
      className="animate-spin rounded-full border-t-2 border-b-2 border-gray-900 h-8 w-8 bg-gray-900 mx-auto"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

import { FC } from "react";
import { Link } from "react-router-dom";
import notfoundImg from "../assets/images/notfound.svg";

const NotFoundPage: FC = () => {
  return (
    <main>
      <div className="container mx-auto">
        <section className="min-h-screen flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-3">404</h1>
            <h3 className="text-xl mb-3">
              The page you are looking for doesn't exist.
            </h3>
            <Link className="text-blue-500 hover:underline" to="/">
              Back to home
            </Link>
            <img
              src={notfoundImg}
              className="w-full max-w-md py-8"
              alt="Page Not Found"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default NotFoundPage;

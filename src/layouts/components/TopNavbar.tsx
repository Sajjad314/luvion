import { useState } from "react";
import { navLinks } from "../../constants/NavLinks";
import { useNavigate } from "react-router-dom";
import shopLogo from "../../assets/luvion-logo.jpg";
import { uiPaths } from "../../paths/uiPaths";

export const TopNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // const [isScrolling, setIsScrolling] = useState<boolean>(
  //   !(window.scrollY === 0)
  // );
  const [selectedPage, setIsSelectedPage] = useState<string>("Home");
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolling(!(window.scrollY === 0));
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [window.scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`p-4 py-4 w-full fixed bg-[#232323] top-0 z-10 `}>
      <div className="relative max-w-7xl mx-auto ">
        <div className="flex justify-between">
          <div className="flex-shrink-0">
            <div
              className=" flex gap-2 cursor-pointer"
              onClick={() => navigate(uiPaths.Home)}
            >
              <img src={shopLogo} alt="logo" className=" w-14" />
            </div>
          </div>
          <div className="hidden md:block ">
            <div className="flex gap-10">
              {navLinks.map(({ link, name }) => {
                return (
                  <p
                    key={link}
                    className={`text-sm ${
                      selectedPage === name ? "text-[#B2B2B2]" : " text-white"
                    } cursor-pointer`}
                    onClick={() => {
                      setIsSelectedPage(name);
                      navigate(link);
                    }}
                  >
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16V5H4v1zm0 6h16v-1H4v1zm0 6h16v-1H4v1z"
                />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          // <div className="md:hidden absolute left-0 w-full bg-[#232323]">
          <div className="max-w-7xl px-4 pt-4 md:hidden">
            <div className="flex flex-col gap-4 mx-4">
              {navLinks.map(({ link, name }) => {
                return (
                  <p
                    key={link}
                    className={`text-sm ${
                      selectedPage === name ? "text-[#B2B2B2]" : " text-white"
                    } cursor-pointer`}
                    onClick={() => {
                      setIsSelectedPage(name);
                      navigate(link);
                    }}
                  >
                    {name}
                  </p>
                );
              })}
            </div>
          </div>
          // </div>
        )}
      </div>
    </nav>
  );
};

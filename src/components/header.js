import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import { useState,} from "react";

function Header() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  return (
    <header className="sticky z-20 top-0 my-5 px-8 md:px-16 lg:px-20 text-gray-600 body-font bg-white">
      <Router>
        <nav className="flex flex-wrap justify-between">
          <NavHashLink
            smooth
            to="#top"
            className="flex title-font font-medium items-center text-gray-900 my-4 mb-0 lg:my-0 lg:mb-4 md:mb-0"
          >
            <img
              className="h-auto w-36 md:w-44 lg:w-52"
              src="/image/lpug.png"
              alt="lpug-logo"
            />
          </NavHashLink>

          <div className="ml-auto">

          <button
          className="inline-flex p-3 hover:bg-purple-300 rounded lg:hidden text-black hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        </div>

        <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >

          <div className="lg:inline-flex lg:flex-wrap lg:flex-row flex flex-col items-center w-full h-auto lg:h-24 my-8 space-y-4 lg:my-0 space-x-0 lg:space-x-10 lg:space-y-0">
            <div className="md:ml-auto flex flex-col lg:flex-row items-center text-base justify-center space-y-4 space-x-0 lg:space-x-10 lg:space-y-0">
              <HashLink
                smooth
                to="#beranda"
                className="hover:text-gray-900 text-sm lg:text-base"
              >
                Beranda
              </HashLink>
              <HashLink smooth to="#alur" className="hover:text-gray-900 text-sm lg:text-base">
                Alur Pendaftaran
              </HashLink>
              <HashLink
                smooth
                to="#kursus"
                className="hover:text-gray-900 text-sm lg:text-base"
              >
                Materi Kursus
              </HashLink>
              <HashLink
                smooth
                to="#tentang"
                className="hover:text-gray-900 text-sm lg:text-base"
              >
                Tentang
              </HashLink>
              <HashLink
                smooth
                to="#pengumuman"
                className="hover:text-gray-900 text-sm lg:text-base"
              >
                Pengumuman
              </HashLink>
              <HashLink
                smooth
                to="#kontak"
                className="hover:text-gray-900 text-sm lg:text-base"
              >
                Kontak
              </HashLink>
            </div>
            <button className="inline-flex items-center justify-center bg-purple-300 border-0 rounded-xl w-24 h-8 lg:w-40 lg:h-11 focus:outline-none hover:bg-gray-200 text-white text-sm lg:text-base hover:text-black">
              Login
            </button>
          </div>

        </div>
        </nav>
      </Router>
    </header>
  );
}

export default Header;

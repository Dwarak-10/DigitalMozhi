import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/digitalmozhi_logo.png";
import { useState } from "react";

const LandingNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <div className="bg-white my-10 mx-10 sm:mx-20">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold">Digitalமொழி</span>
            <img src={Logo} alt="DigitalMozhi_Logo" className="w-10" />
          </div>

          <ul className="hidden sm:flex justify-between gap-16">
            <li className="cursor-pointer text-sm font-medium">About Us</li>
            <li className="cursor-pointer text-sm font-medium">Services</li>
            <li className="cursor-pointer text-sm font-medium">OurBlogs</li>
            <li className="cursor-pointer text-sm font-medium">Contact Us</li>
            <li className="cursor-pointer text-sm font-medium">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
          </ul>

          <div className="sm:hidden block text-xl cursor-pointer">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          </div>
        </div>

        {toggleMenu && (
          <ul className="flex flex-col m-4">
            <li>About Us</li>
            <li>Services</li>
            <li>OurBlogs</li>
            <li>Contact Us</li>
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default LandingNavbar;

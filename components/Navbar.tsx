import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import NavbarItems from "./NavbarItems";
import AccordionMenu from "./AccordionMenu";

const TOP_OFFESET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFESET) setShowBackground(true);
      else setShowBackground(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);
  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <div className="w-full fixed z-40">
      <div
        className={`${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        } px-4 md:px-16 py-6 flex items-center transition duration-500`}
      >
        <Image src="/images/logo.png" alt="logo" width="100" height="0" />
        <div className="ml-8 gap-7 hidden lg:flex">
          <NavbarItems label="Home" />
          <NavbarItems label="Series" />
          <NavbarItems label="Films" />
          <NavbarItems label="New & Popular" />
          <NavbarItems label="My List" />
          <NavbarItems label="Browse by language" />
        </div>
        <div className="lg:hidden flex items-center gap-2 ml-8 cursor-pointer">
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-gray-400 hover:text-gray-200 transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
            onClick={toggleMobileMenu}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex ml-auto gap-7 items-center">
          <div className="text-gray-400 hover:text-gray-200 cursor-pointer transition">
            <BsSearch />
          </div>
          <div className="text-gray-400 hover:text-gray-200 cursor-pointer transition">
            <BsBell />
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <Image
                src="/images/default-blue.png"
                alt="profile"
                width="100"
                height="0"
              />
            </div>
            <BsChevronDown
              className={`text-gray-400 hover:text-gray-200 transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccordionMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import logo from "../assets/icons/getlinked.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import hamburger from "../assets/icons/hamburger.svg";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";

interface NavbarProps {
  customClassName?: string; // Use a different prop name
  specialStyle?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ customClassName }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    // Function to update the window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navbarClasses = `your-existing-class ${
    windowWidth <= 900 ? "hidden-mobile" : ""
  }`;

  const router = useRouter();

  const [showNav, setShowNav] = useState<boolean>(false);

  const handleToggle = () => {
    setShowNav(!showNav);
  };

  const handleRegister = () => {
    router.push("/Register");
  };
  return (
    <>
      <nav className="2xl:px-[128px] xl:px-[100px] hidden lg:px-[60px] lg:flex justify-between items-center h-[90px] border-[#ffffff18] border-b-[1px] fixed left-0 top-0 w-[100%] bg-bgColor z-50">
        <Link href="/">
          <Image
            src={logo}
            alt="getlinked"
            loading="lazy"
            className="lg:scale-75"
          />
        </Link>
        <div className="flex justify-center items-center">
          <ul className="flex justify-start items-center gap-[56px] lg:gap-[30px] xl:gap-[60px] 2xl:gap-[70px] 2xl:mr-[121px] xl:mr-[100px] lg:mr-[64px] mr-[121px]">
            <Link
              href="#"
              className="text-pryColor text-[16px] leading-[19.5px] font-normal"
            >
              Timeline
            </Link>
            <Link
              href="#"
              className="text-pryColor text-[16px] leading-[19.5px] font-normal"
            >
              Overview
            </Link>
            <Link
              href="#"
              className="text-pryColor text-[16px] leading-[19.5px] font-normal"
            >
              FAQs
            </Link>
            <Link
              href="/Contact"
              className={
                router.pathname === "/Contact" ||
                router.pathname === "/Register"
                  ? `bg-gradient-to-r text-transparent bg-clip-text from-[#903AFF] to-[#FF26B9]`
                  : `text-pryColor text-[16px] leading-[19.5px] font-normal`
              }
            >
              Contact
            </Link>
          </ul>
          <Button
            onClick={handleRegister}
            text="Register"
            specialStyle={true}
            isSpecialPage
          />
        </div>
      </nav>
      <nav
        className={`${navbarClasses} ${customClassName} px-[30px] py-[28px] flex flex-col lg:hidden justify-between items-start h-[69px] border-[#ffffff18] border-b-[1px] fixed left-0 top-0 w-[100%] bg-bgColor z-50`}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="getlinked"
            loading="lazy"
            className="w-[100%] h-[20px]"
          />
        </Link>
        <div
          onClick={handleToggle}
          className="absolute top-[47%] right-[10%] z-50 cursor-pointer"
        >
          {showNav ? (
            <GiCancel className="w-[24px] h-[24px] text-[#fff]" />
          ) : (
            <Image
              src={hamburger}
              alt="getlinked"
              className="w-[19px] h-[14px] object-contain"
            />
          )}
        </div>
        {showNav && (
          <div
            className={
              showNav
                ? `flex flex-col justify-center items-start px-[47px] absolute top-0 left-0 z-30 w-[100%] h-[80dvh] bg-[#150e28] transition-transform duration-1000 transform translate-x-[0] ease-in-out`
                : `transition-transform duration-1000 transform translate-x-[-100%] ease-in-out`
            }
          >
            <ul className="flex flex-col justify-start items-start gap-[10vh]">
              <Link
                href="#"
                className="text-pryColor text-[18px] leading-[19.5px] font-normal"
              >
                Timeline
              </Link>
              <Link
                href="#overview"
                className="text-pryColor text-[18px] leading-[19.5px] font-normal"
              >
                Overview
              </Link>
              <Link
                href="#Faqs"
                className="text-pryColor text-[18px] leading-[19.5px] font-normal"
              >
                FAQs
              </Link>
              <Link
                href="/Contact"
                className={
                  router.pathname === "/Contact" ||
                  router.pathname === "/Register"
                    ? `bg-gradient-to-r text-transparent bg-clip-text from-[#903AFF] to-[#FF26B9]`
                    : `text-pryColor text-[18px] leading-[19.5px] font-normal`
                }
              >
                Contact
              </Link>
            </ul>
            <Button
              onClick={handleRegister}
              text="Register"
              className="mt-[20%]"
              specialStyle={true}
              isSpecialPage
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

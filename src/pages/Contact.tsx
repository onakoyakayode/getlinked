import Navbar from "@/layout/Navbar";
import React from "react";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import Button from "@/components/Button";
import purpleBg from "../assets/images/Purple-Lens-Flare-PNG.svg";
import Image from "next/image";
import styles from "../styles/style.module.css";
import { IoIosArrowBack } from "react-icons/io";

const Contact = () => {
  const containerStyle: React.CSSProperties = {
    width: "23px",
    height: "23px",
    position: "relative",
    top: "31px",
    left: "25px",
    zIndex: "67",
  };

  const borderStyle: React.CSSProperties = {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    border: "2px solid transparent",
    borderImage: "linear-gradient(#903aff, #FF26B9)",
    borderImageSlice: "1",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
  };

  const handleSubmit = () => {
    console.log();
  };

  return (
    <div className="bg-bgColor text-pryColor min-h-screen h-[100%] md:min-h-[100dvh] relative w-[100%] pb-[62%] md:pb-[72px] lg:pb-0 overflow-hidden">
      <Link href="/" className="block lg:hidden" style={containerStyle}>
        <div
          className="flex lg:hidden justify-center items-center"
          style={borderStyle}
        >
          <IoIosArrowBack />
        </div>
      </Link>
      <Image
        src={purpleBg}
        alt="getlinked"
        className="absolute right-0 lg:right-[-10%] bottom-0 md:bottom-[0%] opacity-80 mix-blend-lighten w-[100% h-[100%] -z-0 md:w-[500px] md:h-[500px]"
      />
      <Navbar
        specialStyle={true}
        customClassName={`${styles.hiddenMobile} hidden lg:block`}
      />
      <div className=" flex flex-col lg:flex-row justify-center items-start lg:items-center px-[25px] md:px-[50px] lg:px-[80px] xl:px-[120px] 2xl:px-[180px] pt-[100px] lg:py-[72px] w-[100%] h-[100%]">
        <div
          className={`w-[100%] hidden md:block lg:w-[50%] xl:w-[45%] 2xl:w-[40%] relative`}
        >
          <Image
            src={purpleBg}
            alt="getlinked"
            className="absolute left-[-50%] top-[-30%] opacity-70 mix-blend-hard-light"
          />
          <h1 className="text-terColor text-[32px] leading-[130%] font-semibold font-clashDisplay mb-[17px]">
            Get in touch
          </h1>
          <p className="w-[96px] md:w-[80%] lg:w-[100%] xl:w-[100%] 2xl:w-[96px] text-[16px] leading-[19.5px] mb-[17px]">
            Contact Information
          </p>
          <p className="w-[119px] md:w-[50%] lg:w-[119px] xl:w-[60%] text-[16px] leading-[19.5px] mb-[21px]">
            27, Alara Street Yaba, 100012 Lagos State
          </p>
          <p className="text-[16px] leading-[19.5px] mb-[22px]">
            Call Us : <Link href="tel:07067981819">07067981819</Link>
          </p>
          <p className="w-[70%] md:w-[50%] lg:w-[80%] xl:w-[70%] text-[16px] leading-[19.5px] mb-[35px]">
            we are open from Monday-Friday 08:00am - 05:00pm
          </p>
          <div className="md:mb-[40px] lg:mb-0">
            <p className="text-terColor text-[16px] leading-[19.5px] font-semibold mb-[14px]">
              Share on
            </p>
            <div className="flex justify-start items-center gap-[16px]">
              <Link href="/">
                <FaInstagram className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/">
                <RiTwitterXLine className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/">
                <FaInstagram className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/">
                <FaLinkedinIn className="w-[24px] h-[24px]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="py-[10px] px-[0px] md:py-[50px] lg:py-[60px] xl:py-[72px] md:px-[50px] lg:px-[60px] xl:px-[72px] w-[100%] md:w-[617px] lg:w-[60%] h-[442px] md:h-[611px] shadow-md shadow-slate-900 bg-[#fff] bg-opacity-0 md:bg-opacity-5 rounded-[12px] border-[1px] border-[#ffffff05]">
          <h4 className="text-[20px] leading-[130%] font-clashDisplay text-terColor mb-[7px] font-semibold">
            Questions or need assistance?
          </h4>
          <h4 className="text-[20px] leading-[130%] font-clashDisplay text-terColor font-semibold mb-[34px]">
            Let us know about it!
          </h4>
          <p className="block lg:hidden text-[12px] leading-[130%] w-[85%] mb-[30px]">
            Email us below to any question related to our event
          </p>
          <form className="flex flex-col items-start justify-start">
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              required
              className="w-[100%] h-[47px] bg-transparent border-[1px] border-[#ffffff] rounded-[4px] px-[29px] text-[16px] leading-[19.5px] mb-[42px] focus:outline-none placeholder:text-pryColor placeholder:py-[13px]"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Mail"
              required
              className="w-[100%] h-[47px] bg-transparent border-[1px] border-[#ffffff] rounded-[4px] px-[29px] text-[16px] leading-[19.5px] mb-[39px] focus:outline-none placeholder:text-pryColor placeholder:py-[13px]"
            />
            <textarea
              placeholder="Message"
              className="h-[119px] w-[100%] bg-transparent border-[1px] border-[#fff] rounded-[4px] px-[20px] py-[6px] text-[16px] leading-[19.5px] mb-[51px] md:mb-[31px] focus:outline-none placeholder:text-pryColor"
            ></textarea>
            <Button
              onClick={handleSubmit}
              isSpecialPage
              text="Submit"
              className="mx-auto w-[172px] md:w-[172px] md:h-[53px] h-[53px] text-[16px] leading-[19.5px]"
              specialStyle
            />
          </form>
          <div className="flex flex-col bg-inherit items-center mt-[41px] gap-[5px] md:hidden">
            <p className="text-terColor text-[16px] leading-[19.5px] font-semibold mb-[14px]">
              Share on
            </p>
            <div className="flex justify-start items-center gap-[16px]">
              <Link href="/">
                <FaInstagram className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/">
                <RiTwitterXLine className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/">
                <FaInstagram className="w-[24px] h-[24px]" />
              </Link>
              <Link href="/">
                <FaLinkedinIn className="w-[24px] h-[24px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

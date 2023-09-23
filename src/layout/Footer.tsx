import Image from "next/image";
import React from "react";
import logo from "../assets/icons/getlinked.svg";
import Link from "next/link";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";

const Footer = () => {
  return (
    <div className="h-auto lg:h-auto xl:h-[393px] w-full px-[40px] py-[50px] lg:py-[50px] lg:px-[100px] xl:px-[120px] 2xl:px-[168px] relative flex flex-col justify-center items-center">
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[16px] h-[21px] text-[#FFF] absolute top-[18%] left-[8%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[16px] h-[21px] text-[#D434FE] absolute bottom-[25%] left-[50%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[16px] h-[21px] text-[#fff] absolute bottom-[25%] right-[10%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[12px] h-[14px] text-[#666] absolute top-[15%] right-[33%]`}
      />
      <div className="h-auto lg:h-[201px] w-[95%] md:w-[100%] lg:w-[100%] flex md:flex-wrap md:flex-row flex-col justify-between items-start gap-[40px] lg:gap-[80px]">
        <div className="w-[100%] lg:w-[33%] xl:w-[40%] 2xl:w-[60%] justify-center">
          <Link href="/">
            <Image
              src={logo}
              alt="getlinked"
              className="mb-[20px] w-[95px] h-[25px] lg:scale-80 md:h-auto md:w-auto"
            />
          </Link>
          <p className="text-[12px] leading-[130%] xl:text-[13px] w-[100%] md:w-[60%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%] mb-[40px] lg:mb-[62px]">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className="flex justify-start items-center gap-[5px] md:gap-[10px] text-[12px] md:text-[14px]">
            <Link href="/">Terms of Use</Link>
            <div className="w-[3px] md:h-[20px] h-[15px] bg-[#D434FE]"></div>
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] lg:w-[20%]">
          <h4 className="text-[#d434fe] text-[14px] xl:text-[15px] leading-[150%] font-semibold mb-[20px]">
            Useful Links
          </h4>
          <ul className="flex flex-col items-start justify-start gap-[11px] text-[12px] leading-[20.69px]">
            <Link href="/">Overview</Link>
            <Link href="/">Timeline</Link>
            <Link href="/">FAQs</Link>
            <Link href="/Register">Register</Link>
            <div className="flex justify-start items-center gap-[16px]">
              <p className="text-[#d434fe] text-[12px] leading-[14.63px] w-[60px]">
                Follow us
              </p>
              <div className="flex justify-start items-center gap-[16px]">
                <Link href="/">
                  <FaInstagram className="md:w-[24px] w-[19px] h-[17px] lg:w-[20px] lg:h-[20px] md:h-[24px]" />
                </Link>
                <Link href="/">
                  <RiTwitterXLine className="md:w-[24px] md:h-[24px] lg:w-[20px] lg:h-[20px] h-[17px] w-[19px]" />
                </Link>
                <Link href="/">
                  <FaFacebookF className="md:w-[24px] md:h-[24px] h-[17px] w-[19px] lg:w-[20px] lg:h-[20px]" />
                </Link>
                <Link href="/">
                  <FaLinkedinIn className="w-[19px] md:w-[24px] h-[17px] md:h-[24px] lg:w-[20px] lg:h-[20px]" />
                </Link>
              </div>
            </div>
          </ul>
        </div>
        <div className="w-[100%] md:w-[40%] lg:w-[20%]">
          <h4 className="text-[#d434fe] text-[14px] xl:text-[15px] leading-[150%] font-semibold mb-[20px]">
            Contact Us
          </h4>
          <div className="flex justify-start items-center gap-[16px] mb-[22px]">
            <BiPhoneCall className="w-[12px] h-[12px]" />
            <Link
              href="tel:+234 6707653444"
              className="text-[12px] leading-[14.63px]"
            >
              +234 6707653444
            </Link>
          </div>
          <div className="flex justify-start items-center gap-[16px]">
            <HiLocationMarker className="w-[12px] h-[12px]" />
            <Link
              href="https://maps.app.goo.gl/gwLdUkkomW9wVB9G9"
              className="text-[12px] leading-[120%] w-[89px] lg:w-[100px]"
            >
              27, Alara Street Yaba 100012 Lagos State
            </Link>
          </div>
        </div>
      </div>
      <p className="text-[12px] leading-[14.63px] mt-[80px]">
        All rights reserved. © getlinked Ltd.
      </p>
    </div>
  );
};

export default Footer;

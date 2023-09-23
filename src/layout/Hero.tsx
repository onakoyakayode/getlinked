import React from "react";
import { Typewriter } from "react-simple-typewriter";
import typeLine from "../assets/icons/Vector4.png";
import Image from "next/image";
import styles from "../styles/style.module.css";
import title from "../assets/images/Title.svg";
import Button from "@/components/Button";
import getLinkedImg from "../assets/images/Image1.png";
import man from "../assets/images/man-wearing-smart-glasses-touching-virtual-screen1.png";
import { PiStarFourFill } from "react-icons/pi";
import purpleStamp from "../assets/images/Purple-Lens-Flare-PNG.svg";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/Register");
  };
  return (
    <div className=" mt-[20px] lg:mt-[32px] xl:mt-[24px] h-[89dvh] md:h-full lg:h-full xl:h-[80dvh] 2xl:h-[88dvh] border-[#ffffff18] border-b-[1px] flex flex-col items-start xl:items-center 2xl:justify-center 2xl:items-center justify-start relative">
      <div className="self-end relative h-24 pl-[30px] pr-[33px] md:pl-[108px] lg:pl-[128px] xl:pl-[10px] xl:pr-[70px] md:pr-[30px] lg:pr-[55px]">
        <div className="text-pryColor relative font-bold italic text-[15px] leading-[19.5px] md:text-[26px] lg:text-[29px] xl:text-[36px] md:leading-[36.3px] lg:leading-[43.88px]">
          <Typewriter
            words={["Igniting a Revolution in HR Innovation"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>
        <div className="">
          <Image
            src={typeLine}
            alt="getlinked"
            className="absolute right-[10%] mt-[12px] md:mt-[-5%] md:right-[5%] lg:right-[8%] xl:right-[12%] top-[20%] md:top-[83%] lg:top-[10vh] xl:top-[95%] w-[35%] md:w-[30%] lg:w-[30%]"
          />
        </div>
      </div>
      <Image
        src={purpleStamp}
        alt="purple"
        className="w-[300px] h-[300px] absolute top-0 md:top-[0px] lg:top-[15%] xl:top-[7%] left-[10%] md:left-[5%]  lg:left-[5%] xl:left-[5%] opacity-70 mix-blend-hard-light"
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[26px] h-[32px] absolute left-[185px] top-[168px]`}
      />
      <div className="flex flex-col lg:flex-row justify-center md:justify-start md:items-start lg:items-center items-center mt-[35px] md:mt-[35px] w-[100%] relative">
        <PiStarFourFill
          className={`${styles.fadeInOut} w-[26px] h-[32px] absolute top-0 left-[45%] text-[#696969]`}
        />
        <PiStarFourFill
          className={`${styles.fadeInOut} w-[26px] h-[32px] absolute bottom-[76px] left-[30%] text-[#696969]`}
        />
        <div className="w-[100%] md:w-[100%] lg:w-[40%] pl-[30px] pr-[33px] lg:pl-[70px] xl:pl-[100px] 2xl:pl-[128px] lg:pr-[0px] xl:pr-[30px] 2xl:pr-[0px] relative flex flex-col justify-start items-center md:items-start">
          <Image
            src={title}
            alt="getlinked"
            loading="lazy"
            className="w-[289px] h-[91px] md:h-[259px] lg:h-[210px] xl:h-[236px] md:w-[543px] lg:w-[722px] xl:w-[100%] mb-[9px] md:mb-[9px] lg:mb-[0]"
          />
          <p className="font-normal text-[13px] leading-[130%] md:text-[16px] lg:text-[15px] xl:text-[20px] md:text-left lg:text-left text-center w-[264px] md:w-[82%] mb-[41px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button
            onClick={handleClick}
            text="Register"
            className="mb-[37px]"
            specialStyle
            isSpecialPage
          />
          <div className="text-[48px] md:text-[56px] lg:text-[60px] xl:text-[64px] font-normal leading-[133%] font-unicalOne flex justify-start items-center gap-4">
            <p>
              00
              <span className="text-[14px] font-normal leading-[133%]">H </span>
            </p>
            <p>
              00
              <span className="text-[14px] font-normal leading-[133%]">M</span>
            </p>
            <p>
              00
              <span className="text-[14px] font-normal leading-[133%]">s</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[100%] 2xl:w-[60%] h-[362px] md:h-[520px] lg:h-[550px] xl:h-[570px] 2xl:h-[720px] relative overflow-hidden">
          <Image
            src={getLinkedImg}
            alt="getlinked"
            loading="lazy"
            className="absolute z-10 top-0 left-0 w-[100%] object-cover"
          />
          <Image
            src={man}
            alt="getlinked"
            loading="lazy"
            className="absolute top-[4%] md:top-0 z-0 left-0 w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

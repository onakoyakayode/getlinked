import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import typeLine from "../assets/icons/Vector4.png";
import Image from "next/image";
import styles from "../styles/style.module.css";
import title from "../assets/images/Title.png";
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
  const [countdown, setCountdown] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    const targetDate = new Date("2023-09-26T12:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeRemaining = targetDate - now;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-[30px] lg:mt-[42px] xl:pt-[0px] h-[90dvh] sm:h-[100dvh] xl:pl-[0px] 2xl:pl-[128px] md:h-full lg:h-full xl:h-[90dvh] 2xl:h-[100dvh] border-[#ffffff18] border-b-[1px] flex flex-col items-start xl:items-end 2xl:justify-start 2xl:pt-[100px] 2xl:items-center justify-start relative top-[90px]">
      <div className="self-end relative h-6 pl-[30px] pr-[33px] md:pl-[108px] xl:pl-[0px] xl:pr-[70px] md:pr-[30px] lg:pr-[55px]">
        <div className="2xl:text-[55px] 2xl:mb-[200px] text-pryColor relative font-bold italic text-[15px] leading-[150%] md:text-[26px] lg:text-[29px] xl:text-[36px]">
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
            className="absolute right-[10%] mt-[12px] md:mt-[3%] md:right-[5%] lg:right-[8%] xl:right-[12%] top-[1.5vh] md:top-[83%] lg:top-[10vh] xl:top-[10.5vh] w-[35%] md:w-[30%] lg:w-[30%] 2xl:top-[10vh]"
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
      <div className="flex flex-col lg:flex-row justify-center md:justify-start md:items-start lg:items-center items-center mt-[60px] md:mt-[35px] xl:mt-[16vh] w-[100%] relative">
        <PiStarFourFill
          className={`${styles.fadeInOut} w-[26px] h-[32px] absolute top-0 left-[45%] text-[#696969]`}
        />
        <PiStarFourFill
          className={`${styles.fadeInOut} w-[26px] h-[32px] absolute bottom-[76px] left-[30%] text-[#696969]`}
        />
        <div className="w-[100%] md:w-[100%] lg:w-[40%] xl:w-[100%] pl-[30px] pr-[33px] lg:pl-[70px] xl:pl-[128px] 2xl:w-[50%] 2xl:pl-[0px] lg:pr-[0px] xl:pr-[30px] 2xl:pr-[0px] relative flex flex-col justify-start items-center md:items-start">
          <Image
            src={title}
            alt="getlinked"
            loading="lazy"
            className="w-[100%] h-[100px] scale-110 md:scale-100 md:h-[259px] sm:w-[100%] lg:h-[210px] xl:h-[236px] 2xl:h-[100%] md:w-[543px] lg:w-[722px] xl:w-[100%] mb-[9px] md:mb-[9px] lg:mb-[0]"
          />
          <p className="font-normal text-[13px] leading-[130%] 2xl:text-[36px] md:text-[16px] lg:text-[15px] xl:text-[20px] md:text-left lg:text-left text-center w-[264px] md:w-[82%] mb-[41px]">
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>
          <Button
            onClick={handleClick}
            text="Register"
            className="mb-[37px] h-[53px] !w-[120px] !2xl:h-[100px] 2xl:w-[300px]"
            specialStyle
            isSpecialPage
          />
          <div className="text-[48px] md:text-[56px] lg:text-[60px] xl:text-[64px] 2xl:text-[96px] font-normal leading-[133%] font-unicalOne flex justify-start items-center gap-4">
            <p>
              {countdown.hours.toString().padStart(2, "0")}
              <span className="text-[14px] font-normal leading-[133%]">H </span>
            </p>
            <p>
              {countdown.minutes.toString().padStart(2, "0")}
              <span className="text-[14px] font-normal leading-[133%]">M</span>
            </p>
            <p>
              {countdown.seconds.toString().padStart(2, "0")}
              <span className="text-[14px] font-normal leading-[133%]">s</span>
            </p>
          </div>
        </div>
        <div className="w-[100%] md:w-[100%] lg:w-[60%] xl:w-[100%] 2xl:w-[50%] h-[170vh] md:h-[520px] lg:h-[550px] xl:h-[60vh] 2xl:h-[67vh] relative overflow-hidden">
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

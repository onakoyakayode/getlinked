import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";
import Button from "@/components/Button";
import Image from "next/image";
import lock from "../assets/images/Vector.png";
import privacyImg from "../assets/images/08 1.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const PrivacyPolicy = () => {
  const handleClick = () => {
    console.log();
  };
  return (
    <div
      className={` min-h-[100dvh] w-full px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[168px] pt-[72px] pb-[150px] lg:py-[100px] relative border-[#ffffff18] border-b-[1px]`}
    >
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[30px] h-[36px] text-[#D434FE] absolute bottom-[25%] left-[5%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] h-[22px] text-[#888] absolute top-[8%] left-[35%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] h-[22px] text-[#D434FE] absolute top-[20%] left-[50%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[12px] h-[16px] text-[#FFF] absolute top-[21%] right-[20%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[22px] h-[26px] text-[#555] absolute bottom-[25%] right-[5%]`}
      />
      <div className="w-[100%] flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-[20px] md:gap-[50px] lg:gap-[60px] xl:gap-[103px] relative">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="w-[100%] lg:w-[50%] xl:w-[50%]"
        >
          <h1 className="text-[20px] md:text-[26px] lg:text-[32px] leading-[130%] mx-auto md:mx-0 font-clashDisplay font-bold w-[188px] md:w-[300px] mb-[17px]">
            Privacy Policy and <span className="text-[#D434FE]">Terms</span>
          </h1>
          <p className="text-[#FFFFFF75] text-[12px] md:text-[14px] leading-[130%] w-[221px] md:w-auto mx-auto mb-[30px]">
            Last updated on September 12, 2023
          </p>
          <p className="text-[12px] md:text-[14px] leading-[26px] w-[100%] text-center md:text-left md:w-[438px] lg:w-[90%] mb-[69px]">
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
          <div className="flex flex-col items-start w-[100%] lg:w-[100%] xl:w-[569px] h-[608px] lg:h-auto border-[#d434fe] border-[1px] rounded-[5px] py-[45px] md:py-[59px] px-[15px] md:px-[72px] lg:py-[30px] lg:px-[30px]">
            <p className="text-[12px] text-center md:text-left md:text-[14px] leading-[30px] mb-[24px]">
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <h3 className="text-[#D434FE] text-[13px] md:text-[16px] leading-[150%] font-bold">
              Licensing Policy
            </h3>
            <p className="text-[12px] md:text-[14px] leading-[30px] mb-[18px] font-bold">
              Here are terms of our Standard License:
            </p>
            <ul className={`${styles.privacyListItems}`}>
              <li className="text-[13px] md:text-[14px] leading-[150%] mb-[14px]">
                The Standard License grants you a non-exclusive right to
                navigate and register for our event
              </li>
              <li className="text-[13px] md:text-[14px] leading-[150%] mb-[30px]">
                You are licensed to use the item available at any free source
                sites, for your project developement
              </li>
            </ul>
            <div className="self-center">
              <Button
                text="Read More"
                onClick={handleClick}
                isSpecialPage
                specialStyle
              />
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="relative h-auto w-[100%] lg:w-[50%] xl:w-[50%]"
        >
          <Image
            src={lock}
            alt="getlinked"
            className="absolute w-[249px] md:w-[300px] lg:w-[380px] xl:w-[400px] h-[311px] md:h-[380px] lg:h-[400px] xl:h-[488px] object-cover top-[70px] md:top-[30px] lg:top-[-20%] xl:top-[-70px] left-[75px] md:left-[30%] lg:left-[10%] xl:right-[0px] z-0"
          />
          <Image
            src={privacyImg}
            alt="getlinked"
            className="relative top-[150px] left-[50px] lg:left-0 z-10 md:top-[100px] w-[252px] h-[351px] lg:w-[420px] xl:w-[459px] md:w-[400px] md:h-[440px] lg:h-[540px] xl:h-[549px] md:left-[20%]"
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

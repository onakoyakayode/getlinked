import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import rulesImg from "../assets/images/74501591.png";
import Image from "next/image";
import purpleBg from "../assets/images/Purple-Lens-Flare-PNG.svg";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";

const Rules = () => {
  return (
    <div className="h-[80dvh] md:h-[85dvh] lg:h-[80dvh] xl:h-[80dvh] 2xl:h-[85dvh] w-full px-[30px] py-[30px] md:px-[50px] lg:px-[100px] xl:px-[100px] 2xl:px-[168px] md:py-[62px] lg:py-[75px] 2xl:py-[100px] relative border-[#ffffff18] border-b-[1px]">
      <PiStarFourFill
        className={` ${styles.fadeInOut} absolute text-[#696969] w-[26px] h-[32px] top-[140px] left-[30%]`}
      />
      <PiStarFourFill
        className={` ${styles.fadeInOut} absolute text-[#fffff] w-[26px] h-[32px] bottom-[100px] left-[50%]`}
      />
      <Image
        src={purpleBg}
        alt="pruple-getlinked"
        className="absolute w-[600px] h-[600px] top-[-40px] left-[20%] opacity-40 scale-110"
      />
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-[48px] lg:gap-[45px] xl:gap-[48px] w-[100%]">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="w-[100%] md:w-[35%] lg:w-[40%] xl:w-[50%] 2xl:w-[50%]"
        >
          <h3 className="font-bold text-[20px] mx-auto md:mx-0 self-center leading-[130%] md:text-[29px] lg:text-[32px] 2xl:w-[40%] 2xl:text-[36px] font-clashDisplay w-[107px] md:w-[170px] mb-[9px] md:mb-[16px]">
            Rules and <span className="text-[#D434FE]">Guidelines</span>
          </h3>
          <p className="text-[13px] md:text-[14px] lg:text-[15px] w-[95%] mx-auto text-center xl:text-[15px] 2xl:text-[16px] 2xl:w-[80%] leading-[150%]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apos;re all about!
          </p>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="w-[100%] md:w-[65%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%] 2xl:h-[700px]"
        >
          <Image src={rulesImg} alt="getlinked" className="w-[100%] h-[100%]" />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Rules;

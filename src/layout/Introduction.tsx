import Image from "next/image";
import React from "react";
import ideaImg from "../assets/images/Thebigidea.png";
import "animate.css";
import styles from "../styles/style.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import arrow from "../assets/icons/arrow.svg";
import { PiStarFourFill } from "react-icons/pi";

const Introduction = () => {
  return (
    <div
      id="#overview"
      className="h-[100vh] mt-[33vh] md:mt-[19vh] lg:mt-0 sm:h-[100dvh] md:h-[50dvh] lg:h-[100dvh] xl:h-[100dvh] 2xl:h-[100dvh] w-full px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[168px] py-[40px] md:py-[32px] lg:py-[80px] xl:py-[80px] relative border-[#ffffff18] border-b-[1px] overflow-hidden top-[100px] md:top-0"
    >
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[21px] h-[25px] text-[#D434FE] absolute top-[40%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[30px] h-[36px] text-[#D434FE] absolute right-[100px] top-[30%]`}
      />
      <Image
        src={arrow}
        alt="getlinked"
        className="absolute bottom-[45%] left-[40%] scale-50 md:scale-75 lg:scale-100 md:bottom-15 lg:bottom-[15%] lg:left-[40%] xl:bottom-10 xl:left-[45%]"
      />
      <div className="h-[100%] flex flex-col lg:flex-row  justify-center items-center gap-[28px] md:gap-[55px] xl:gap-[60px] 2xl:gap-[109px] w-[100%]">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="w-[100%] md:w-[350px] lg:w-[450px] xl:w-[50%] h-auto md:h-[350px] lg:h-[100%]"
        >
          <Image
            src={ideaImg}
            alt="getlinken-idea"
            className="w-[100%] h-[100%] object-cover scale-75"
          />
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="w-[100%] lg:w-[50%] xl:w-[50%] h-auto"
        >
          <h2 className="w-[90%] h-[54px] mx-auto xl:mx-0 md:w-[60%] md:h-[77px] lg:w-[450px] xl:w-[80%] 2xl:w-[50%] lg:h-[86px] text-center lg:text-left text-[22px] leading-[120%] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] mb-[16px] text-pryColor font-bold font-clashDisplay">
            Introduction to getlinked{" "}
            <span className="text-[#D434FE]">tech Hackathon 1.0</span>
          </h2>
          <p className="w-[100%] 2xl:mx-auto text-left md:w-[90%] md:mx-auto lg:mx-0 lg:w-[100%] xl:w-[100%] 2xl:w-[85%] md:h-[165px] 2xl:text-[16px] md:text-left text-[14px] md:text-[13.5px] lg:text-[15px] xl:text-[17px] font-normal leading-[150%]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you&apos;re a
            coding genius, a design maverick, or a concept wizard, you&apos;ll
            have the chance to transform your ideas into reality. Solving
            real-world problems, pushing the boundaries of technology, and
            creating solutions that can change the world, that&apos;s what
            we&apoas;re all about!
          </p>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Introduction;

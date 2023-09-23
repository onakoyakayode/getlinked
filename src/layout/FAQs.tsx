import React from "react";
import Accordion from "@/components/Accordion";
import Image from "next/image";
import faqImg from "../assets/images/cwok_casual_211.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";

const FAQs: React.FC = () => {
  return (
    <div className="border-[#ffffff18] border-b-[1px] w-full px-[35px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[168px] pt-[60px] md:pt-[90px] lg:pt-[110px] xl:pt-[120px] pb-[100px] relative">
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[22px] lg:w-[36px] h-[22px] lg:h-[36px] text-[#D434FE] absolute top-[5%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[15px] lg:w-[21px] h-[16px] lg:h-[25px] text-[#D434FE] absolute top-[3%] right-[35%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[15px] lg:w-[21px] h-[16px] lg:h-[25px] text-[#D434FE] absolute top-[26%] left-[53%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[15px] lg:w-[21px] h-[16px] lg:h-[25px] text-[#3a3a3a] absolute top-[55%] left-[45%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[20px] lg:w-[26px] h-[24px] lg:h-[32px] text-[#FFF] absolute bottom-[5%] right-[20%]`}
      />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-24 xl:gap-[50px] w-[100%]">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          className="w-[100%] md:w-[45%] lg:w-[40%] xl:w-[50%] 2xl:w-[45%] mb-[40px] lg:mb-0"
        >
          <h2 className="text-[20px] text-center md:text-left mx-auto md:mx-0 md:text-[26px] lg:text-[32px] font-bold font-clashDisplay leading-[130%] w-[158px] h-[54px] md:w-[40%] md:h-[68px] lg:h-[86px] lg:w-[253px] mb-[16px]">
            Frequently Ask <span className="text-[#D434FE]">Question</span>
          </h2>
          <p className="text-[12px] text-center md:text-center md:text-[13px] lg:text-[15px] leading-[140%] md:w-[80%] lg:w-[100%] w-[342px] mb-[68px]">
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </p>
          <div>
            <Accordion
              className="mb-[13px]"
              title="Can I work on a project I started before the hackathon?"
              content="Can I work on a project I started before the hackathon?"
            />
            <Accordion
              className="mb-[13px]"
              title="What happens if I need help during the hackathon?"
              content="Can I work on a project I started before the hackathon?"
            />
            <Accordion
              className="mb-[13px]"
              title="What happens if I don't have an idea for a project?"
              content="What happens if I don't have an idea for a project?"
            />
            <Accordion
              className="mb-[13px]"
              title="Can I join a team or do I have to come with one?"
              content="Can I join a team or do I have to come with one?"
            />
            <Accordion
              className="mb-[13px]"
              title="What happens after the hackathon ends"
              content="What happens after the hackathon ends"
            />
            <Accordion
              className="mb-[13px]"
              title="Can I work on a project I started before the hackathon?"
              content="Can I work on a project I started before the hackathon?"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="w-[100%] md:w-[55%] lg:w-[60%] xl:w-[50%]"
        >
          <Image
            src={faqImg}
            alt="getlinked"
            className="w-[100%] h-auto md:h-[450px] md:w-[450px] lg:w-[400px] xl:w-[100%] lg:h-[450px] xl:h-[100%] object-cover md:mx-auto"
          />
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default FAQs;

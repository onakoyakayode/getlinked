import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Timeline = () => {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInUp"
      className="w-full px-[30px] md:px-[50px] lg:px-[60px] xl:px-[128px] py-[80px] md:py-[72px] lg:py-[50px] relative border-[#ffffff18] border-b-[1px] flex flex-col justify-start items-center"
    >
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[20px] lg:w-[30px] h-[24px] lg:h-[36px] text-[#D434FE] absolute top-[10%] left-[20%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] lg:w-[26px] h-[20px] lg:h-[32px] text-[#FFF] absolute top-[45%] right-[20%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] lg:w-[26px] h-[20px] lg:h-[32px] text-[#999] absolute bottom-[5%] left-[20%]`}
      />
      <h1 className="font-bold font-clashDisplay text-[20px] md:text-[26px] lg:text-[28px] xl:text-[32px] leading-[130%] mb-[12px]">
        Timeline
      </h1>
      <p className="text-[13px] md:text-[14px] xl:text-[15px] leading-[130%] xl:w-[35%] w-[292px] md:w-[346px] h-[48px] text-center mb-[17%] ">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      <div className="w-[100%] flex flex-col items-start">
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end xl:items-end w-[100%] m-auto mb-[30px] lg:mb-[100px] xl:mb-[120px]">
          <div className="text-left lg:text-right w-[100%] md:w-[80%] lg:w-[50%] xl:w-[50%] 2xl:w-[515px] relative">
            <h3 className="text-[#D434FE] text-[12px] leading-[130%] md:text-[20px] xl:text-[26px] 2xl:text-[30px] font-bold mb-[12px] w-[100%]">
              Hackathon Announcement
            </h3>
            <p className="text-[12px] md:text-[13px] xl:text-[14px] leading-[130%] ">
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div
            className={`${styles.num} w-[19.32px] h-[19.32px] md:w-[26px] md:h-[26px] lg:w-[40px] lg:h-[32px] xl:w-[45px] xl:h-[38px] 2xl:w-[53px] 2xl:h-[53px] rounded-full flex justify-center items-center ml-[-8%] mr-auto md:ml-[-5%] lg:ml-[10%] xl:ml-[86px] md:mr-[0] lg:mr-[70px] xl:mr-[92px]`}
          >
            <p className="font-bold text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px] leading-[130%]">
              1
            </p>
          </div>
          <h3 className="text-[#D434FE] mt-[-5%] md:mt-[-3%] lg:mt-0 lg:w-[50%] text-[12px] leading-[130%] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold">
            November 18, 2023
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-start items-start lg:items-end xl:items-end w-[100%] ml-0 md:ml-0 lg:ml-[9%] xl:ml-[-3.3%] 2xl:ml-[-5%] mb-[30px] lg:mb-[120px] xl:mb-[140px]">
          <h3 className="text-[#D434FE] mt-[-5%] md:mt-[-3%] lg:mt-[0] w-[100%] md:w-[100%] lg:w-[50%] 2xl:w-[50%] text-left lg:text-right text-[12px] leading-[130%] md:text-[16px] lg:text-[20px] xl:text-[24px] font-bold">
            November 18, 2023
          </h3>
          <div
            className={`${styles.num} w-[19.32px] md:w-[26px] lg:w-[50px] xl:w-[46px] h-[19.32px] md:h-[26px] lg:h-[32px] xl:h-[40px] 2xl:h-[53px] rounded-full flex justify-center items-center ml-[-8%] md:ml-[-5%] lg:ml-[10%] xl:ml-[92px] mr-auto md:mr-0 lg:mr-[8%] xl:mr-[86px]`}
          >
            <p className="font-bold text-[12px] md:text-[16px] lg:text-[18px] xl:text-[24px] leading-[130%]">
              2
            </p>
          </div>
          <div className="text-left w-[100%] md:w-[100%] lg:w-[80%] xl:w-[515px] relative">
            <h3 className="text-[#D434FE] text-[12px] md:text-[20px] leading-[130%] xl:text-[24px] font-bold mb-[12px] w-[100%]">
              Teams Registration begins
            </h3>
            <p className="text-[12px] md:text-[13px] xl:text-[14px] leading-[130%] text-left w-[100%] md:w-[80%] lg:w-[70%] xl:w-[425px]">
              Interested teams can now show their interest in the getlinked tech
              hackathon 1.0 2023 by proceeding to register
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end xl:items-center w-[100%] mb-[30px] lg:mb-[80px] xl:mb-[80px]">
          <div className="text-left lg:text-right w-[100%] md:w-[515px] lg:w-[50%] flex flex-col lg:items-end items-start">
            <h3 className="text-[#D434FE] text-[12px] md:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[130%] font-bold mb-[12px] w-[100%]">
              Teams Registration ends
            </h3>
            <p
              className={`${styles.text} text-[12px] leading-[130%] h-[42px] lg:h-[100%] md:text-[14px] xl:text-[15px] w-[90%] xl:w-[388px]`}
            >
              Interested Participants are no longer Allowed to register
            </p>
          </div>
          <div
            className={`${styles.num} w-[19.32px] h-[19.32px] md:h-[26px] md:w-[26px] lg:w-[40px] lg:h-[32px] xl:h-[40px] xl:w-[52px] 2xl:w-[53px] 2xl:h-[53px] rounded-full flex justify-center items-center ml-[-8%] md:ml-[-5%] lg:ml-[10%] md:mr-0 xl:ml-[86px]  mr-auto lg:mr-[9%] xl:mr-[92px]`}
          >
            <p className="font-bold text-[12px] md:text-[16px] xl:text-[24px] leading-[130%]">
              3
            </p>
          </div>
          <h3 className="text-[#D434FE] mt-[-5%] md:mt-[-4%] lg:mt-0 text-[12px] md:text-[18px] lg:text-[20px] leading-[130%] xl:text-[24px] font-bold lg:w-[50%]">
            November 18, 2023
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-start items-start lg:items-end xl:items-end 2xl:items-center w-[100%] ml-0 md:ml-[0] xl:ml-[-7px] 2xl:ml-[2.8%] mb-[30px] lg:mb-[100px] xl:mb-[90px]">
          <h3 className="text-[#D434FE] w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[515px] mt-[-5%] md:mt-[-3%] lg:mt-0 text-left lg:text-right text-[12px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-[130%] font-bold">
            November 18, 2023
          </h3>
          <div
            className={`${styles.num} w-[19.32px] h-[19.32px] md:w-[26px] md:h-[26px] lg:w-[40px] lg:h-[32px] xl:h-[40px] xl:w-[50px] 2xl:w-[53px] 2xl:h-[53px] rounded-full flex justify-center items-center ml-[-8%] md:ml-[-5%] lg:ml-[92px] mr-auto md:mr-0 lg:mr-[86px]`}
          >
            <p className="font-bold text-[12px] md:text-[16px] xl:text-[24px] leading-[130%]">
              4
            </p>
          </div>
          <div className="text-left xl:text-right w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[515px]">
            <h3 className="text-[#D434FE] text-left text-[12px] md:text-[20px] xl:text-[24px] 2xl:text-[32px] leading-[130%] font-bold mb-[12px] w-[100%]">
              Announcement of the accepted teams and ideas
            </h3>
            <p className="text-[12px] md:text-[14px] leading-[130%] text-left h-[55px] md:h-[42px] lg:h-auto">
              All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-start items-start lg:items-end 2xl:items-center w-[100%] lg:ml-[-3.5%] xl:ml-[2.7%]  mb-[40px] lg:mb-[100px] xl:mb-[120px]">
          <div className="text-left lg:text-right w-[100%] lg:w-[50%] xl:w-[515px] flex flex-col items-start lg:items-end">
            <h3 className="text-[#D434FE] text-[12px] md:text-[20px] xl:text-[24px] leading-[130%] font-bold mb-[12px] w-[100%]">
              Getlinked Hackathon 1.0 Offically Begins
            </h3>
            <p
              className={`${styles.text} text-[12px] leading-[130%] md:text-[14px] w-[100%] lg:w-[388px] h-[42px] lg:h-auto`}
            >
              Accepted teams can now proceed to build their ground breaking
              skill driven solutions
            </p>
          </div>
          <div
            className={`${styles.num} w-[19.32px] md:w-[26px] lg:w-[40px] 2xl:w-[53px] h-[19.32px] md:h-[26px] lg:h-[32px] xl:h-[42px] xl:w-[50px] 2xl:h-[53px] rounded-full flex justify-center items-center ml-[-8%] md:ml-[-5%] lg:ml-[86px] mr-auto md:mr-0 lg:mr-[92px]`}
          >
            <p className="font-bold text-[12px] md:text-[16px] xl:text-[24px] leading-[130%]">
              5
            </p>
          </div>
          <h3 className="text-[#D434FE] mt-[-5%] md:mt-[-4%] lg:mt-0 text-[12px] leading-[130%] lg:w-[50%] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold">
            November 18, 2023
          </h3>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-start items-start lg:items-end 2xl:items-center w-[100%] xl:ml-[-3.6%] 2xl:ml-[2.8%] mb-[30px] lg:mb-[100px] xl:mb-[120px]">
          <h3 className="text-[#D434FE] w-[100%] mt-[-5%] md:mt-[-4%] lg:mt-0 lg:w-[50%] 2xl:w-[515px] text-left lg:text-right text-[12px] md:text-[18px] lg:text-[20px] xl:text-[24px] leading-[130%] font-bold">
            November 18, 2023
          </h3>
          <div
            className={`${styles.num} w-[19.32px] h-[19.32px] md:h-[26px] md:w-[26px] lg:w-[40px] lg:h-[32px] xl:w-[48px] xl:h-[40px] 2xl:w-[53px] 2xl:h-[53px] rounded-full flex justify-center items-center ml-[-8%] md:ml-[-5%] lg:ml-[92px] mr-auto md:mr-0 lg:mr-[86px]`}
          >
            <p className="font-bold text-[12px] md:text-[16px] xl:text-[24px] leading-[130%]">
              6
            </p>
          </div>
          <div className="text-left lg:text-right w-[100%] lg:w-[50%] xl:w-[515px]">
            <h3 className="text-[#D434FE] text-left text-[12px] md:text-[20px] lg:text-[24px] leading-[130%] font-bold mb-[12px] w-[100%]">
              Demo Day
            </h3>
            <p className="text-[12px] leading-[130%] md:text-[14px] text-left h-[55px] md:h-[45px] lg:h-auto">
              Teams get the opportunity to pitch their projects to judges. The
              winner of the hackathon will also be announced on this day
            </p>
          </div>
        </div>
      </div>
    </AnimationOnScroll>
  );
};

export default Timeline;

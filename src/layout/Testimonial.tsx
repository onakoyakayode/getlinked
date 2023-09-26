import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";
import cup from "../assets/images/9486889.png";
import Image from "next/image";
import reward from "../assets/images/Rewards.png";
import libertyAssured from "../assets/images/Libertycompanylogowhitecolour.png";
import line12 from "../assets/images/Line12.png";
import wisperLogo from "../assets/images/wisperlogowhite.png";
import libertyPay from "../assets/images/Libertycompanylogowhite.png";
import winwise from "../assets/images/WinwiselogoWhitecolour1.png";
import payBox from "../assets/images/Paybox.png";
import visualPlus from "../assets/images/VizualPlus.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Testimonial = () => {
  return (
    <div
      className={` min-h-[100dvh] w-full px-[30px] md:px-[50px] lg:px-[80px] xl:px-[100px] py-[72px] lg:py-[100px] relative border-[#ffffff18] border-b-[1px]`}
    >
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] h-[26px] text-[#D434FE] absolute top-[5%] left-[20%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[24px] h-[31px] text-[#FFF] absolute top-[15%] left-[50%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] h-[26px] text-[#D434FE] absolute top-[8%] right-[20%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[24px] h-[31px] text-[#FFF] absolute top-[20%] right-[7%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[18px] h-[26px] text-[#777] absolute top-[40%] right-[23%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[14px] h-[21px] text-[#FFF] absolute top-[43%] left-[17%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[25px] h-[36px] text-[#D434FE] absolute top-[60%] left-[20%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[14px] h-[21px] text-[#d434fe] absolute top-[70%] right-[44%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} w-[25px] h-[36px] text-[#FFF] absolute top-[90%] right-[44%]`}
      />
      <div className="flex flex-col items-center lg:items-start justify-center lg:justify-start w-full">
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          className="self-center md:self-center lg:self-end xl:self-end mb-[20px] lg:mb-[70px] lg:ml-[60%]"
        >
          <h2 className="text-[20px] md:text-center lg:text-left md:text-[26px] lg:text-[32px] font-bold leading-[140%] mx-auto lg:mx-0 font-clashDisplay w-[109px] md:w-[55%] lg:w-[60%] mb-[10px] md:mb-[20px]">
            Prizes and <span className="text-[#D434FE]">Rewards</span>
          </h2>
          <p className="w-[80%] mx-auto md:w-[70%] lg:w-[90%] text-[12px] md:text-[14px] lg:text-[15px] leading-[130%] md:mx-auto lg:mx-0 text-center lg:text-left">
            Highlight of the prizes or rewards for winners and for participants
          </p>
        </AnimationOnScroll>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-[60px] w-[100%] mb-[100px] lg:mb-[100px]">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            className={`${styles.testimonialCup} w-[100%] md:w-[400px] md:h-[400px] lg:w-[50%]`}
          >
            <Image src={cup} alt="getlinked" />
          </AnimationOnScroll>
          <AnimationOnScroll
            animateIn="animate__fadeInRight"
            className={`${styles.testimonialReward} w-[100%] md:w-[80%] lg:w-[50%]`}
          >
            <Image src={reward} alt="getlinked-reward" />
          </AnimationOnScroll>
        </div>
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          className="self-center w-[100%]"
        >
          <h1 className="text-[20px] md:text-[26px] lg:text-[32px] leading-[140%] font-bold font-clashDisplay mb-[15px] lg:mb-[22px] text-center">
            Partners and Sponsors
          </h1>
          <p className="text-[12px] 2xl:mx-auto md:text-[14px] leading-[140%] w-[100%] md:w-[70%] lg:w-[452px] text-center mx-auto mb-[65px]">
            Getlinked Hackathon 1.0 is honored to have the following major
            companies as its partners and sponsors
          </p>
          <div
            className={` h-[148px] md:h-[400px] lg:h-[560px] 2xl:w-[60%] 2xl:mx-auto w-[100%] border-[#D434FE] border-[1px] rounded-[5px] flex justify-center items-center`}
          >
            <div className="flex justify-center items-center gap-[10px] md:gap-[60px]">
              <div className="flex flex-col items-center justify-start gap-[12px] md:gap-[24px]">
                <div className={`${styles.line17}`}>
                  <Image
                    src={libertyAssured}
                    alt="libertyAssured-getlinked"
                    className="w-[54.9px] h-[39.23px] md:w-[120px] md:h-[113px] lg:w-[147px] lg:h-[109px]"
                  />
                </div>
                <Image
                  src={line12}
                  alt="libertyAssured-getlinked"
                  className="w-[75%] md:w-[100%] lg:w-[180px]"
                />
                <div
                  className={`${styles.lineBottom} h-[39.06px] md:h-[97px] lg:h-[113px] w-[52.01px] md:w-[120px] lg:w-[147px]`}
                >
                  <Image
                    src={wisperLogo}
                    alt="libertyAssured-getlinked"
                    className="h-[100%] w-[100%] object-cover"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center justify-start gap-[12px] lg:gap-[24px]">
                <div className={`${styles.lineLiberty}`}>
                  <div className="lg:h-[113px] md:h-[113px] md:w-[120px] lg:w-[213px] h-[39px] w-[45.57px] flex justify-center items-center">
                    <Image
                      src={libertyPay}
                      alt="libertyAssured-getlinked"
                      className="object-cover"
                    />
                  </div>
                </div>
                <Image
                  src={line12}
                  alt="libertyAssured-getlinked"
                  className="w-[95%] md:w-[100%]"
                />
                <div
                  className={`${styles.lineLiberty} md:h-[113px] lg:h-[113px] w-[45.23px] h-[39px] md:w-[113px] lg:w-[213px] flex justify-center items-center`}
                >
                  <Image src={payBox} alt="libertyAssured-getlinked" />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start gap-[12px] lg:gap-[24px]">
                <div className="md:h-[97px] lg:h-[113px] w-[40.92px] h-[24.48px] md:w-[120px] lg:w-[131px] flex justify-center items-center">
                  <Image
                    src={winwise}
                    alt="libertyAssured-getlinked"
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
                <Image
                  src={line12}
                  alt="libertyAssured-getlinked"
                  className="w-[90%]"
                />
                <div className="md:h-[97px] lg:h-[113px] w-[60px] h-[21px] md:w-[120px] lg:w-[231px] flex justify-center items-center">
                  <Image
                    src={visualPlus}
                    alt="libertyAssured-getlinked"
                    className="w-[100%] h-[100%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
};

export default Testimonial;

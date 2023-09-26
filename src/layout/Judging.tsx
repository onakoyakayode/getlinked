import Image from "next/image";
import React from "react";
import judgeImg from "../assets/images/80465541.png";
import Button from "@/components/Button";
import ellipse from "../assets/images/Ellipse2.svg";
import { PiStarFourFill } from "react-icons/pi";
import styles from "../styles/style.module.css";
import purpleBg from "../assets/images/Purple-Lens-Flare-PNG.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Judging = () => {
  const handleClick = () => {
    console.log();
  };
  return (
    <div className="border-[#ffffff18] border-b-[1px] w-ful 2xl:h-[90dvh] px-[30px] md:px-[50px] lg:px-[60px] xl:px-[100px] 2xl:px-[108px] pt-[74px] md:pt-[13vh] lg:pt-[70px] xl:pt-[62px] 2xl:pt-[100px] pb-[100px] relative">
      <Image
        src={purpleBg}
        alt="getlinked"
        className="opacity-50 absolute left-0 top-[30%] w-[50%] h-[50%] z-0"
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} absolute z-10 text-[#3a3a3a] w-[22px] h-[26px] top-[45%] left-[32%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} absolute text-[#D434FE] w-[30px] h-[36px] top-[60px] left-[16%]`}
      />
      <PiStarFourFill
        className={`${styles.fadeInOut} absolute text-[#fff] w-[22px] h-[26px] bottom-[12%] left-[45%]`}
      />
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        className="mt-[16vh] md:mt-0 flex flex-col lg:flex-row justify-center items-center gap-[40px] md:gap-[53px] relative"
      >
        <Image
          src={judgeImg}
          alt="getlinked"
          className="h-[100%] md:h-[70%] lg:w-[55%] lg:h-[100%] xl:h-[500px] 2xl:h-[100%] w-[100%] md:w-[70%] xl:w-[50%] 2xl:w-[55%] object-cover z-10"
        />
        <Image
          src={ellipse}
          alt="getlinked"
          className="absolute hidden xl:block top-[10%] left-[6%] z-0 w-[134px] h-[134px] 2xl:top-[-3%] 2xl:left-[8%] object-cover"
        />
        <div className="w-[100%] lg:w-[45%] xl:w-[50%] flex flex-col items-center md:items-start">
          <h3 className="text-[20px] text-center md:text-left md:text-[28px] lg:text-[32px] 2xl:text-[35px] 2xl:w-[40%] leading-[140%] w-[167px] md:w-[267px] mx-auto md:mx-0 font-clashDisplay font-bold mb-[16px] md:mb-[21px]">
            Judging Criteria{" "}
            <span className="text-[#D434FE]">Key attributes</span>
          </h3>
          <p className="text-[13px] md:text-[14px] 2xl:text-[16px] leading-[160%] text-left md:text-left mb-[22px]">
            <span className="text-[#FF26B9] font-bold text-[12px] md:text-[16px] leading-[140%]">
              Innovation and Creativity:
            </span>{" "}
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </p>
          <p className="text-[13px] md:text-[14px] leading-[160%] 2xl:text-[16px] text-left md:text-left mb-[22px]">
            <span className="text-[#FF26B9] font-bold text-[12px] md:text-[16px] leading-[140%]">
              Functionality:
            </span>{" "}
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </p>
          <p className="text-[13px] md:text-[14px] leading-[160%] text-left 2xl:text-[16px] md:text-left mb-[22px]">
            <span className="text-[#FF26B9] font-bold text-[12px] md:text-[16px] leading-[140%]">
              Impact and Relevance:
            </span>{" "}
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </p>
          <p className="text-[13px] md:text-[14px] leading-[160%] text-left md:text-left 2xl:text-[16px] mb-[22px]">
            <span className="text-[#FF26B9] font-bold text-[12px] md:text-[16px] leading-[140%]">
              Technical Complexity:
            </span>{" "}
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </p>
          <p className="text-[13px] md:text-[14px] leading-[160%] text-left md:text-left mb-[55px] 2xl:text-[16px]">
            <span className="text-[#FF26B9] font-bold text-[12px] md:text-[16px] leading-[140%]">
              Adherence to Hackathon Rules:
            </span>{" "}
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </p>
          <Button
            onClick={handleClick}
            isSpecialPage
            specialStyle
            text="Read More"
            className="h-[41px] !w-[120px] text-[16px] md:text-[17px] leading-[150%]"
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Judging;

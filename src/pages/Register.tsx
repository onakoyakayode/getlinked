import Navbar from "@/layout/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import regImg from "../assets/images/3d-graphic-designershowingthumbsup-png.png";
import regImg1 from "../assets/images/1f6b6-2640.png";
import regImg2 from "../assets/images/image_processing20200511-10310-13mnlsx.png";
import Button from "@/components/Button";
import purpleBg from "../assets/images/Purple-Lens-Flare-PNG.svg";
import styles from "../styles/style.module.css";
import successImg from "../assets/images/congratulation.png";
import axios from "axios";

interface Props {
  isSpecialPage: boolean;
  isRegistered: boolean;
}

const Register: React.FC<Props> = ({ isSpecialPage, isRegistered }) => {
  const initialFormData = {
    TeamsName: "",
    phone: "",
    email: "",
    projectTopic: "",
    category: "",
    groupSize: "",
  };

  const [data, setData] = useState<any>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchDataApi = async () => {
      try {
        const response = await axios.get("https://backend.getlinked.ai/");
        console.log(response);
        const myData = response.data;
        setData(myData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchDataApi();
  }, []);

  //   console.log(data);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setShowModal(true);
    console.log();
  };

  const handleModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-bgColor w-[100%] min-h-screen relative overflow-hidden">
      <Navbar
        specialStyle={false}
        customClassName={`${styles.hiddenMobile} hidden`}
      />
      <Image
        src={purpleBg}
        alt="getlinked"
        className="absolute left-0 lg:left-0 top-[10%] lg:top-[27%] w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] mix-blend-hard-light"
      />
      <Image
        src={purpleBg}
        alt="getlinked"
        className="hidden lg:absolute right-[-5%] bottom-[1%] w-[400px] h-[400px] mix-blend-hard-light "
      />
      <div className="flex flex-col lg:flex-row justify-start items-center w-[100%] py-[65px] px-[30px] md:py-[50px] md:px-[50px] lg:px-[70px] xl:px-[120px] 2xl:px-[100px] gap-[50px]">
        <div className="w-[100%] md:w-[75%] lg:w-[35%] xl:w-[40%]">
          <Image src={regImg} alt="getlinked" />
        </div>
        <div className="w-[100%] lg:w-[65%] xl:w-[60%] text-left text-[#fff] h-auto py-[0] px-0 lg:py-[40px] xl:py-[65px] lg:px-[40px] xl:px-[61px]  shadow-md shadow-slate-900 bg-[#fff] bg-opacity-0 lg:bg-opacity-5 rounded-[12px] border-[1px] border-[#ffffff05]">
          <h4 className="text-terColor text-[15px] md:text-[24px] lg:text-[32px] leading-[130%] absolute top-[24px] left-[47px] lg:relative lg:top-auto lg:left-auto font-bold font-clashDisplay mb-[29px]">
            Register
          </h4>
          <p className="text-[12px] md:text-[14px] xl:text-[15px] leading-[130%] relative mb-[7px] md:mb-[11px] lg:mb-[19px]">
            Be part of this movement!
            <span className="text-terColor ml-1">_________________</span>
            <Image
              src={regImg1}
              alt="getlinked"
              className="absolute left-[48vw] top-[-12px] md:left-[30%] lg:left-[46%] xl:left-[47%] 2xl:left-[40%] lg:top-[-12px] w-[23px] h-[23px] md:w-[26px] md:h-[26px] object-cover"
            />
            <Image
              src={regImg2}
              alt="getlinked"
              className="absolute left-[52vw] top-[-15px] md:left-[34%] lg:left-[50%] xl::left-[51%] 2xl:left-[44%] md:top-[-15px] w-[26px] h-[26px] md:w-[30px] md:h-[30px] object-cover"
            />
          </p>
          <h2 className="text-[20px] leading-[130%] md:text-[24px] xl:text-[30px] font-semibold mb-[23px] lg:mb-[33px]">
            CREATE YOUR ACCOUNT
          </h2>
          <form
            onSubmit={handleSubmit}
            className="w-[100%] flex flex-col items-start justify-start"
          >
            <div className="flex flex-col md:flex-row items-center justify-start gap-[18px] md:gap-[32px] w-[100%] mb-[18px] md:mb-[29px]">
              <div className="w-[100%] ]">
                <label
                  htmlFor=""
                  className="w-[100%] text-[13px] leading-[15px] md:text-[14px] md:leading-[17.07px] font-normal"
                >
                  Team&apos;s Name
                </label>
                <input
                  type="text"
                  name="teamsName"
                  id="teamsName"
                  placeholder="Enter the name of your group"
                  className="w-[100%] h-[39px] md:h-[47px] mt-[5px] md:mt-[11px] bg-transparent rounded-[4px] border-[1px] border-[#fff] focus:outline-none pl-[15px] placeholder:text-[#FFFFFF25] placeholder:text-[13px]"
                />
              </div>
              <div className="w-[100%]">
                <label
                  htmlFor="phone"
                  className="w-[100%] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px] font-normal"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number "
                  className="w-[100%] h-[39px] md:h-[47px] mt-[5px] md:mt-[11px] bg-transparent rounded-[4px] border-[1px] border-[#fff] focus:outline-none pl-[15px] placeholder:text-[#FFFFFF25] placeholder:text-[13px]"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-start gap-[18px] md:gap-[32px] w-[100%] mb-[18px] md:mb-[29px]">
              <div className="w-[100%] ]">
                <label
                  htmlFor="email"
                  className="w-[100%] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px] font-normal"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-[100%] h-[39px] md:h-[47px] mt-[5px] md:mt-[11px] bg-transparent rounded-[4px] border-[1px] border-[#fff] focus:outline-none pl-[15px] placeholder:text-[#FFFFFF25] placeholder:text-[13px]"
                />
              </div>
              <div className="w-[100%]">
                <label
                  htmlFor="project-topic"
                  className="w-[100%] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px] font-normal "
                >
                  Project Topic
                </label>
                <input
                  type="tel"
                  name="project-topic"
                  id="project-topic"
                  placeholder="What is your group project topic"
                  className="w-[100%] h-[39px] md:h-[47px] mt-[5px] md:mt-[11px] bg-transparent rounded-[4px] border-[1px] border-[#fff] focus:outline-none pl-[15px] placeholder:text-[#FFFFFF25] placeholder:text-[13px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-[18px] md:gap-[32px] w-[100%] mb-[23px]">
              <div className="w-[100%]">
                <label
                  htmlFor="category"
                  className="w-[100%] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px]] font-normal"
                >
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  placeholder="Enter your email address"
                  className="w-[100%] h-[39px] md:h-[47px] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px] mt-[11px] bg-transparent rounded-[4px] border-[1px] border-[#fff] focus:outline-none px-[5px] md:px-[15px] placeholder:text-[#FFFFFF25] placeholder:text-[13px]"
                >
                  <option
                    value=""
                    className="text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px]"
                  >
                    Select your category
                  </option>
                </select>
              </div>
              <div className="w-[70%] md:w-[100%] ">
                <label
                  htmlFor="group"
                  className="w-[100%] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px] font-normal "
                >
                  Group Size
                </label>
                <select
                  name="group"
                  id="group"
                  placeholder="What is your group project topic"
                  className="w-[100%] h-[39px] md:h-[47px] mt-[11px] text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px] bg-transparent rounded-[4px] border-[1px] border-[#fff] focus:outline-none px-[5px] md:px-[15px] placeholder:text-[#FFFFFF25] placeholder:text-[13px]"
                >
                  <option
                    value=""
                    className="text-[13px] md:text-[14px] leading-[15px] md:leading-[17.07px]"
                  >
                    Select
                  </option>
                </select>
              </div>
            </div>
            <p className="text-[#FF26B9] text-[9px] md:text-[12px] leading-[10.9px] md:leading-[14.63px] italic mb-[12px] md:mb-[16px]">
              Please review your registration details before submitting
            </p>
            <div className="flex items-center justify-start gap-[10px] mb-[22px]">
              <input
                type="checkbox"
                name="check"
                id="check"
                className="w-[14px] h-[14px] bg-transparent bg-opacity-0"
              />
              <p className="text-[10px] md:text-[12px] leading-[12px] md:leading-[14.63px]">
                I agreed with the event terms and conditions and privacy policy
              </p>
            </div>
            <Button
              onClick={handleSubmit}
              isSpecialPage={false}
              text="Submit"
              specialStyle={isRegistered}
              className="w-[172px] h-[53px] md:w-[100%] mx-auto self-center text-[16px] leading-[19px]"
            />
          </form>

          {isSubmitted && (
            <div
              className={
                showModal
                  ? ` w-[100%] h-full fixed top-[90px] left-0 bg-bgColor bg-opacity-80 flex justify-center items-center`
                  : `opacity-0 w-[100%] absolute top-0 left-0 bg-bgColor bg-opacity-50 flex justify-center items-center`
              }
            >
              <div className="w-[85%] md:w-[60%] h-auto lg:w-[500px] xl:w-[599px] lg:h-[468px] xl:h-[564px] rounded-[5px] border-terColor border-[1px] pt-[20px] md:pt-[34px] pb-[25px] md:pb-[43px] px-[15px] md:px-[65px] flex flex-col items-center justify-start">
                <Image
                  src={successImg}
                  alt="getlinked"
                  className="h-[210px] w-[210px] md:w-[250px] md:h-[250px] xl:w-[387px] xl:h-[291px] object-cover"
                />
                <h3 className="text-[16px] leading-[130%] md:text-[26px] lg:text-[29px] xl:text-[32px] font-medium w-[178px] md:w-[100%] lg:w-[552px] text-center mb-[29px] md:mb-[13px]">
                  Congratulations you have successfully Registered!
                </h3>
                <p className="text-[12px] leading-[14.6px] md:leading-[17.07px] text-center font-medium w-[202px] md:w-[240px] mb-[19px]">
                  Yes, it was easy and you did it! check your mail box for next
                  step
                </p>
                <Button
                  isSpecialPage={true}
                  text="Back"
                  specialStyle={true}
                  onClick={handleModal}
                  className=" w-[253px] h-[53px] lg:h-[53px] lg:w-[100%] mx-0 lg:mx-0"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

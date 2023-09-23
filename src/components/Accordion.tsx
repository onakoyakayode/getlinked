import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

interface AccordionProps {
  title: string;
  content: string;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-auto">
      <div className="accordion h-full mb-[27px]">
        <div
          className={`text-[12px] md:text-[14px] 2xl:text-[16px] leading-[130%] flex justify-between items-center cursor-pointer w-[100%] lg:w-[427px] 2xl:w-[90%] h-[42.4px] lg:h-[41px] accordion-header
            ${
              isOpen
                ? "open border-[#d634fe4f] border-b-[1px]"
                : "border-[#D434FE] border-b-[1px]"
            }
            ${className}`}
          onClick={toggleAccordion}
        >
          {title}
          {isOpen ? (
            <AiOutlineMinus className="text-[#D434FE] w-[12px] h-[28px]" />
          ) : (
            <AiOutlinePlus className="text-[#D434FE] w-[12px] h-[28px]" />
          )}
        </div>
        {isOpen && (
          <div
            className={
              isOpen
                ? `accordion-content h-auto text-[13px] leading-[24px] border-[#D434FE] border-b-[1px] w-[100%] lg:w-[427px]`
                : ``
            }
          >
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;

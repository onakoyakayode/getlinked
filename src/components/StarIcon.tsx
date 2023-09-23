import Image from "next/image";
import React from "react";
import star from "../assets/icons/star.svg";
import styles from "../styles/style.module.css";

interface StarIconProps {
  className?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ className }) => {
  return (
    <div>
      <Image
        src={star}
        alt="getlinked"
        className={`text-pryColor  ${className}`}
      />
    </div>
  );
};

export default StarIcon;

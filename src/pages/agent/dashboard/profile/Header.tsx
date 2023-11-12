import React from "react";
import Image from "next/image";
const randomImageFromUnsplash = "https://source.unsplash.com/random/1200x300/?bangladesh";
const Header = () => {
  return (
    <div className="relative h-[150px] w-full md:h-[300px]">
      <Image src={randomImageFromUnsplash} alt="nahid" layout="fill" style={{ objectFit: "cover" }} />
    </div>
  );
};

export default Header;

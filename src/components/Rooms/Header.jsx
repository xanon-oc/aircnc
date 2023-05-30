import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title={"Dynamic hbe pore apatoto dekho"}
        subtitle={"Pera nai mama"}
        center={false}
      />
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl mt-4">
        <img
          className="object-cover w-full"
          src="https://i.ibb.co/G9Kn6qY/Room3.webp"
          alt="header image"
        />
      </div>
    </>
  );
};

export default Header;

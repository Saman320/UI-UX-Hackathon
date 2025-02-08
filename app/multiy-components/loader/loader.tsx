import React from "react";
import "./loader.css"; // Ensure you import this CSS file

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[700px]  bg-[#FAFAFA]">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
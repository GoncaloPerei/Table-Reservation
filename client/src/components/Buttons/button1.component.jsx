// import React from "react";

const button1 = (props) => {
  return (
    <div>
      <a
        href={props.href}
        className="hover:before:bg-blackborder-black-500 relative w-fit text-4xl font-montserrat font-bold rounded-xl px-10 py-5 overflow-hidden border border-black bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:rounded-xl before:duration-500 hover:text-white hover:rounded-xl hover:before:left-0 hover:before:w-full"
      >
        <span className="relative z-10">{props.name}</span>
      </a>
    </div>
  );
};

export default button1;

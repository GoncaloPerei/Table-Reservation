import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form action="" className="flex flex-col gap-12">
        <div className="w-full flex flex-col gap-5">
          <label
            htmlFor=""
            className="block font-raleway font-light text-lg w-full"
          >
            email
            <input
              type="email"
              placeholder="example@gmail.com"
              className="block mt-1.5 text-normal border-b border-solid border-black/20 w-full outline-none py-4"
            />
          </label>
          <label
            htmlFor=""
            className="block font-raleway font-light text-lg w-full"
          >
            password
            <input
              type="password"
              placeholder="example123_"
              className="block mt-1.5 text-normal border-b border-solid border-black/20 w-full outline-none py-4"
            />
          </label>
        </div>
        <input
          type="submit"
          value="Sign In"
          className="w-full text-center text-normal font-montserrat font-bold uppercase bg-[#75B09C] text-white py-3.5 rounded-xl cursor-pointer"
        />
      </form>
    );
  }
}

export default LoginForm;

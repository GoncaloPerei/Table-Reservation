import { PersonFill } from "react-bootstrap-icons";

import { Header, Footer } from "../../layout";

import { Identifier } from "./components";

import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";

const Profile = () => {
  const { authState } = useContext(AuthContext);

  return (
    <>
      <Header />
      <div className="w-full h-fit px-20 py-28 flex items-center gap-12">
        <div className="w-fit h-fit flex flex-col gap-3.5 my-12 items-center">
          <PersonFill className="w-fit h-fit p-12 border border-solid border-black rounded-full text-7xl" />
          <span className="text-center uppercase font-montserrat font-bold text-3xl tracking-wider">
            {authState.firstname} {authState.lastname}
            <br />
            <span className="font-raleway font-thin text-2xl">customer</span>
          </span>
        </div>
        <div className="w-full h-fit py-9 px-7 border border-solid border-[#EBEBEE] rounded-xl">
          <div className="w-full h-fit border border-solid border-[#EBEBEE] rounded-xl p-4 flex flex-col gap-5">
            <Identifier
              title="First Name"
              user={authState.firstname ? authState.firstname : "null"}
            />
            <Identifier
              title="Last Name"
              user={authState.lastname ? authState.lastname : "null"}
            />
            <Identifier
              title="Email"
              user={authState.email ? authState.email : "null"}
            />
            <Identifier title="Password" user="***************" />
            <Identifier
              title="Phone Number"
              user={authState.phonenumber ? authState.phonenumber : "null"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;

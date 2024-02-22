import { Label, Submit } from "../../../components";
import { useState } from "react";
import useRegisterFetcher from "../../hooks/useRegisterFetcher.hook";

const Main = () => {
  return (
    <>
      <span className="w-full text-center text-lg font-raleway font-light">
        insert your credentials bellow
        <br />
        to sign up...
      </span>
      <div className="w-full h-full flex flex-col gap-12 overflow-y-scroll no-scrollbar">
        <div className="w-full h-fit flex flex-col gap-12">
          <Register />
        </div>
      </div>
    </>
  );
};

const Register = () => {
  const { register } = useRegisterFetcher();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    register(firstName, lastName, phoneNumber, email, password);
  };

  return (
    <>
      <form className="h-full flex flex-col gap-12" onSubmit={handleSubmit}>
        <div className="w-full flex flex-col gap-6">
          <Label input="First Name" type="text" onChange={setFirstName} />
          <Label input="Last Name" type="text" onChange={setLastName} />
          <Label input="Phone Number" type="number" onChange={setPhoneNumber} />
          <Label input="Email" type="email" onChange={setEmail} />
          <Label input="Password" type="password" onChange={setPassword} />
        </div>
        <Submit value="Sign Up" />
      </form>
    </>
  );
};

export default Main;

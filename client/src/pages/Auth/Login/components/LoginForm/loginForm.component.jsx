import { Label, Submit } from "../../../components";
import useLoginFetcher from "../../hooks/useLoginFetcher";
import { useState } from "react";

function LoginForm() {
  const { postContent } = useLoginFetcher();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    postContent(email.trim(), password.trim());
  };

  return (
    <form action="" className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-6">
        <Label input="Email" type="email" onChange={setEmail} />
        <Label input="Password" type="password" onChange={setPassword} />
      </div>
      <Submit value="Sign In" />
    </form>
  );
}

export default LoginForm;

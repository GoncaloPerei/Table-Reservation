import emailjs from "@emailjs/browser";
import React from "react";

function checkIfEmpty(name, email, message) {
  if (name === "" || email === "" || message === "") {
    alert("some field is empty!");
    return false;
  }
  return true;
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameValue: "", emailValue: "", messageValue: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  async handleSubmit(event) {
    try {
      const check = await checkIfEmpty(
        this.state.nameValue,
        this.state.emailValue,
        this.state.messageValue
      );
      if (check) {
        const templateParams = {
          from_name: this.state.nameValue,
          message: this.state.messageValue,
          email: this.state.emailValue,
        };
        emailjs
          .send(
            "service_n39opom",
            "template_54yu89f",
            templateParams,
            "CUkwmEvZlGF9-m3r7"
          )
          .then(
            (response) => {
              alert("Email sent.");
              console.log("sent ", response.status, response.text);
            },
            (error) => {
              console.log("error ", error);
            }
          );
        this.setState({ nameValue: "", emailValue: "", messageValue: "" });
      }
      event.preventDefault();
    } catch (e) {
      console.log(e);
    }
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="w-full bg-white flex flex-col px-7 py-12 border border-black/10 rounded-xl gap-10 items-end"
      >
        <div className="w-full flex flex-col gap-5">
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="name" className="font-raleway text-lg">
              Name
            </label>
            <input
              name="nameValue"
              type="text"
              placeholder="Your name"
              className="font-raleway text-normal rounded-xl min-h-16 px-5 bg-[#EAEAEA] placeholder-[#000000]"
              onChange={this.handleChange}
              value={this.state.nameValue}
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="email" className="font-raleway text-lg">
              Email
            </label>
            <input
              name="emailValue"
              type="email"
              placeholder="youremail@email.com"
              className="font-raleway text-normal rounded-xl min-h-16 px-5 bg-[#EAEAEA] placeholder-[#000000]"
              onChange={this.handleChange}
              value={this.state.emailValue}
            />
          </div>
          <div className="w-full flex flex-col gap-2.5">
            <label htmlFor="message" className="font-raleway text-lg">
              Message
            </label>
            <textarea
              name="messageValue"
              placeholder="My table wasn't reserved"
              className="w-full font-raleway text-normal rounded-xl min-h-60 px-5 py-5 bg-[#EAEAEA] placeholder-[#000000] resize-none"
              onChange={this.handleChange}
              value={this.state.messageValue}
            ></textarea>
          </div>
        </div>
        <input
          className="w-fit px-10 py-5 bg-transparent flex items-center gap-5 uppercase font-raleway font-bold text-[#998650] border border-solid border-[#998650] rounded-xl text-raleway cursor-pointer transition ease-in duration-200 hover:bg-[#998650] hover:text-white"
          type="submit"
          value="Send"
        />
      </form>
    );
  }
}

export default ContactForm;

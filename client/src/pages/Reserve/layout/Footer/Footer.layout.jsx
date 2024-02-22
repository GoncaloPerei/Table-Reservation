import { Label, Submit, Line } from "../../../../components";

import { useState, useContext } from "react";

import { AuthContext } from "../../../../context/Auth.context";

import useReservationFetcher from "../../hooks/useReservationFetcher.hook";

const Footer = () => {
  return (
    <div className="relative w-full flex gap-2.5 justify-center">
      <div className="relative w-full border border-solid border-black/20 rounded-xl">
        <div className="flex flex-col m-6 gap-2.5 tracking-wider leading-relaxed uppercase">
          <span className="text-2xl font-montserrat font-bold">
            book a table
          </span>
          <span className="text-lg font-raleway font-light">
            Just reserve, sit and eat
          </span>
        </div>
        <Line />
        <div className="flex flex-col m-6 gap-2.5 tracking-wider leading-relaxed">
          <ReserveForm />
        </div>
      </div>
      <Map />
    </div>
  );
};

const ReserveForm = () => {
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  const { authState } = useContext(AuthContext);

  const { postContent, loading } = useReservationFetcher();

  const handleSubmit = (event) => {
    event.preventDefault();
    postContent(date.trim(), number.trim(), message.trim());
    clearFields();

    if (!loading) {
      console.log("asap");
    }
  };

  const clearFields = () => {
    setDate("");
    setMessage("");
    setNumber("");
  };

  return (
    <>
      <form action="" className="flex flex-col gap-12" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <Label
            input="Email"
            type="email"
            value={authState.email}
            disable={true}
          />
          <Label
            input="Name"
            type="text"
            value={`${authState.firstname} ${authState.lastname}`}
            disable={true}
          />
          <Label
            input="Date"
            type="date"
            onChange={setDate}
            value={date}
            disable={!authState.status}
          />
          <Label
            input="Persons"
            type="number"
            onChange={setNumber}
            value={number}
            disable={!authState.status}
          />
          <Label
            input="Message"
            type="text"
            onChange={setMessage}
            value={message}
            disable={!authState.status}
          />
        </div>
        <Submit value="Reserve" disable={!authState.status} />
      </form>
    </>
  );
};

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.207485868805!2d-8.553153499999999!3d41.17364149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463977ed1c7a5%3A0xff5873155d97676d!2sChurrascaria%20Ch%C3%A3o%20Verde!5e0!3m2!1spt-PT!2spt!4v1708310681786!5m2!1spt-PT!2spt"
      className="relative w-full"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default Footer;

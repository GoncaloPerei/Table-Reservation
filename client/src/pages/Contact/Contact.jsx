import { Heading } from "./components";
import { ContactForm } from "./layout";
import { Header, Footer } from "../../layout";

function Contact() {
  return (
    <>
      <Header />
      <div className="flex items-center gap-12 my-28 mx-20 px-12 py-10 rounded-xl bg-[#FBF751] shadow-[0px_49px_0px_-27px_rgba(153,134,80,1)]">
        <Heading />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;

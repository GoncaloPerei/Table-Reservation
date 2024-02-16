import { Heading } from "./layout";
import { ContactForm } from "./components";
import { Header, Footer } from "../../layout";

function Contact() {
  return (
    <>
      <Header />
      <div className="flex items-center gap-12 my-28 mx-20 px-12 py-10 rounded-xl bg-[#FBF751] shadow-[20px_20px_0px_0px_rgba(153,134,80,1)]">
        <Heading />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default Contact;

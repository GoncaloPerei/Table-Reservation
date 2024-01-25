import UsersCount from "../components/layout/home/homeUsersCount";
import UsersForm from "../components/layout/home/homeContactForm";

function Home() {
  return (
    <>
      <div className="w-full h-screen bg-[#FBF751] flex flex-col items-center justify-center uppercase gap-16 tracking-wider">
        <span className="font-raleway text-center font-thin text-5xl">
          Yes, a table
          <br />
          <span className="font-montserrat font-bold text-9xl leading-tight">
            reservation
            <br />
          </span>
          system
        </span>
        <a
          href="/book"
          className="hover:before:bg-blackborder-black-500 relative w-fit text-4xl font-montserrat font-bold rounded-xl px-10 py-5 overflow-hidden border border-black bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-10">book now</span>
        </a>
      </div>
      <div className="w-full flex justify-between items-center px-20 py-40 uppercase tracking-wider border-b border-[#808080]/20">
        <span className="text-4xl font-raleway font-thin">
          fun and easy way
          <br />
          <span className="text-7xl font-montserrat font-bold leading-tight">
            to have your
            <br />
            table <span className="text-[#75B09C]">ready!</span>
          </span>
        </span>
        <div className="flex flex-col items-center gap-7">
          <img src={"./table.svg"} alt="" />
          <a
            href="/book"
            className="hover:before:bg-blackborder-black-500 relative w-fit text-4xl font-montserrat font-bold rounded-xl px-10 py-5 overflow-hidden border border-black bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10">book now</span>
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col px-20 py-40 gap-20">
        <span className="w-full text-center text-7xl uppercase font-montserrat font-bold">
          but, <span className="text-[#998650]">why?</span>
          <br />
          <span className="text-4xl font-raleway leading-10 font-thin">
            everybody been asking...
          </span>
        </span>
        <div className="flex justify-between">
          <div className="w-96 flex flex-col px-12 py-14 border border-solid border-black/10 rounded-xl items-center gap-7 text-center justify-center hover:shadow-xl transition-all duration-500">
            <img className="w-20" src={"./handshake.svg"} alt="" />
            <div>
              <h1 className="font-montserrat font-bold uppercase text-3xl text-[#75B09C] leading-relaxed mb-1.5">
                simplicity
              </h1>
              <span className="font-raleway font-thin text-black text-2xl leading-normal tracking-wider">
                Very easy to get into to. Hard to mess things up.
              </span>
            </div>
          </div>
          <div className="w-96 flex flex-col px-12 py-14 border border-solid border-black/10 rounded-xl items-center gap-7 text-center hover:shadow-xl transition-all duration-500">
            <img className="w-20" src={"./arrange.svg"} alt="" />
            <div>
              <h1 className="font-montserrat font-bold uppercase text-3xl text-[#75B09C] leading-relaxed mb-1.5">
                arranje
              </h1>
              <span className="font-raleway font-thin text-black text-2xl leading-normal tracking-wider">
                Reserve your table before getting to the restaurant.
              </span>
            </div>
          </div>
          <div className="w-96 flex flex-col px-12 py-14 border border-solid border-black/10 rounded-xl items-center gap-7 text-center hover:shadow-xl transition-all duration-500">
            <img className="w-20" src={"./time.svg"} alt="" />
            <div>
              <h1 className="font-montserrat font-bold uppercase text-3xl text-[#75B09C] leading-relaxed mb-1.5">
                waiting
              </h1>
              <span className="font-raleway font-thin text-black text-2xl leading-normal tracking-wider">
                Reserving before makes you wait less and eat more.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center bg-[#FBF751] px-20 py-40">
        <span className="text-4xl font-raleway leading-loose tracking-widest">
          With this software you can
          <br />
          skip waiting in line to get
          <br />
          your table at the restaurant.
          <br />
          You simply{" "}
          <span className="font-bold">
            get in, sit and
            <br />
            enjoy your delicious food.
          </span>
        </span>
        <UsersCount />
      </div>
      <div className="w-full flex px-20 py-40 uppercase border-b border-[#808080]/20">
        <span className="text-7xl uppercase font-montserrat font-bold">
          try <span className="text-[#75B09C]">it...</span>
          <br />
          <span className="font-raleway font-thin text-4xl">
            you, won’t be disapointed
          </span>
        </span>
      </div>
      <UsersForm />
    </>
  );
}

export default Home;

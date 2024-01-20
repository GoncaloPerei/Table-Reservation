import { Send } from 'react-bootstrap-icons';

const UsersForm = () => {
    
    return (
        <>
            <div className="w-full flex flex-col px-40 py-40 gap-20 items-center">
                <span className="text-7xl font-montserrat font-bold uppercase text-center">
                    get in <span className="text-[#75B09C]">touch</span><br />
                    <span className="text-4xl font-raleway font-thin">ask us anything...</span>
                </span>
                <div className="w-full flex flex-col px-7 py-12 border border-black/10 rounded-xl gap-10 items-end shadow-[-70px_70px_0px_0px_rgba(153,134,80,1)]">
                    <div className="w-full flex flex-col gap-2.5">
                        <div className="w-full flex gap-2.5 py-2.5">
                            <div className="w-full flex flex-col gap-2.5">
                                <label htmlFor="Name" className="font-raleway text-xl">Name</label>
                                <input name="name" type="text" placeholder="Your name" className="font-raleway text-lg rounded-xl min-h-16 px-5 bg-[#EAEAEA] placeholder-[#A8A8A8]"/>
                            </div>
                            <div className="w-full flex flex-col gap-2.5">
                                <label htmlFor="Email" className="font-raleway text-xl">Email</label>
                                <input name="email" type="email" placeholder="youremail@email.com" className="font-raleway text-lg rounded-xl min-h-16 px-5 bg-[#EAEAEA] placeholder-[#A8A8A8]"/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2.5 py-2.5">
                            <label htmlFor="message" className="font-raleway text-xl">Message</label>
                            <textarea name="message" placeholder="My table wasn't reserved" className="w-full font-raleway text-lg rounded-xl min-h-60 px-5 py-5 bg-[#EAEAEA] placeholder-[#A8A8A8] resize-none"></textarea>
                        </div>
                    </div>
                    <button className='w-fit px-10 py-5 bg-transparent flex items-center gap-5 uppercase font-montserrat font-bold text-[#998650] border border-solid border-[#998650] rounded-xl text-lg'>
                        <Send className='text-2xl'/>submit
                    </button>
                </div>
            </div>
        </>
    );

}

export default UsersForm;
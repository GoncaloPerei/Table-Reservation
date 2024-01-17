function Home(){
    return (
        <>
            <div className="w-full h-screen bg-[#FBF751] flex flex-col items-center justify-center uppercase gap-16 tracking-wider">
                <span className="font-raleway text-center font-thin text-5xl">
                    Yes, a table<br />
                    <span className="font-montserrat font-bold text-9xl leading-tight">reservation<br /></span>
                    system
                </span>
                <a href="/book" className="text-4xl font-montserrat font-bold border border-black rounded-xl px-10 py-5">book now</a>
            </div>
            <div className="w-full flex px-40 py-20 uppercase tracking-wider">
                <span className="text-4xl font-raleway font-thin">
                    fun and easy way<br />
                    <span className="text-7xl font-montserrat font-bold leading-tight">to have your<br />table <span className="text-[#75B09C]">ready!</span></span>
                </span>
                <div className="flex flex-col">
                    <a href="/book" className="text-4xl font-montserrat font-bold border border-black rounded-xl px-10 py-5">book now</a>
                </div>
            </div>
        </>
    );
}

export default Home
function Home(){
    return (
        <>
            <div className="w-full h-screen bg-[#FBF751] flex flex-col items-center justify-center uppercase gap-16">
                <span className="font-raleway text-center font-thin text-5xl">
                    Yes, a table<br />
                    <span className="font-montserrat font-bold text-9xl leading-tight">reservation<br /></span>
                    system
                </span>
                <a href="/book" className="text-4xl font-montserrat font-bold border border-black rounded-xl px-10 py-5">book now</a>
            </div>
        </>
    );
}

export default Home
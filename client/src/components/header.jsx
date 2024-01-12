import {useState, useEffect, useRef} from "react";

import { Hourglass, ShopWindow, QuestionCircle, Facebook, Instagram, PersonFill } from 'react-bootstrap-icons';

const Header = () => {

    const [nav, setNav] = useState(false);
    
    const handleNav = () => {
        setNav(!nav);
    }

    let menuRef = useRef();

    try{
        useEffect(() => {
            const handleOutsideClick = (event) => {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setNav(false);
                }
            };
            document.addEventListener('mousedown', handleOutsideClick);
    
            return () => {
                document.removeEventListener('mousedown', handleOutsideClick);
            };
        });
    } catch (e) {
        console.log(e);
    }

    return (
        <div ref={menuRef} className='w-full h-fit bg-[#FBF751] flex flex-row items-center justify-between px-20 py-4'>
            <div className="relative flex flex-row items-center gap-5">
                <Hourglass id='navbar-hamburguer' onClick={handleNav} className='text-3xl cursor-pointer' />
                <img src={"./tr.svg"} alt=""/>
            </div>
            <a href="/login/">
                <button className="w-fit h-fit rounded-full border border-black border-solid p-4 cursor-pointer">
                    <PersonFill className="text-2xl"/>
                </button>
            </a>
            {
                nav ? (
                    <div className='absolute top-0 left-0 z-[100] bg-[#FBF751] flex flex-col items-center justify-between gap-8 w-[20%] h-screen font-raleway uppercase py-12'>
                        <img src={"./tr.svg"} alt="" className="w-10"/>
                        <div className=' flex flex-col gap-8'>
                            <a href="/home" className='relative flex justify-center'>
                                <span className="text-3xl">home</span>
                            </a>
                            <a href="/about" className='relative flex justify-center'>
                                <span className="text-3xl">about us</span>
                            </a>
                            <a href="/reserve" className='relative flex justify-center'>
                                <span className="text-3xl">reserve</span>
                            </a>
                            <a href="/contact" className='relative flex justify-center'>
                                <span className="text-3xl">contact</span>
                            </a>
                        </div>
                        <button className='relative flex justify-center w-full text-2xl pt-3 pb-3 underline uppercase border-y border-black border-solid'>login</button>
                        <div className="relative w-full">
                            <a href="" className="relative flex items-center gap-5 w-full border-y border-black border-solid pl-6 pr-6 pt-4 pb-4">
                                <ShopWindow className="text-xl"/>
                                <span className="text-base">affiliate your restaurant</span>
                            </a>
                            <a href="" className="relative flex items-center gap-5 w-full border-y border-t-0 border-black border-solid pl-6 pr-6 pt-4 pb-4">
                                <QuestionCircle className="text-xl"/>
                                <span className="text-base">help</span>
                            </a>
                        </div>
                        <div className="relative flex gap-12">
                            <a href="#">
                                <Facebook className="text-3xl"/>
                            </a>
                            <a href="#">
                                <Instagram className="text-3xl"/>
                            </a>
                        </div>
                    </div>
                )
                : (
                    <></>
                )
            }
        </div>
    );
}

export default Header;
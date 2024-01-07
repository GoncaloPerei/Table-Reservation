import {useState, useEffect, useRef} from "react"

import { Hourglass, ShopWindow, QuestionCircle, Facebook, Instagram, PersonFill, X } from 'react-bootstrap-icons'

const Header = () => {

    const [nav, setNav] = useState(false);
    const [login, setLogin] = useState(false);

    const handleNav = (event) => {
        if(event.currentTarget.id === 'navbar-hamburguer'){
            setNav(!nav);
            setLogin(false);
        }
        else{
            setLogin(!login);
            setNav(false);
        }
    }

    let menuRef = useRef();

    try{
        useEffect(() => {
            const handleOutsideClick = (event) => {
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setNav(false);
                    setLogin(false);
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
            <div href="" id='login-hamburguer' onClick={handleNav} className="w-fit h-fit rounded-full border border-black border-solid p-4 cursor-pointer">
                <PersonFill className="text-2xl"/>
            </div>
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
                : login ? (
                    <div className="absolute top-0 right-0 w-[20%] h-screen bg-white flex flex-col items-center">
                        <div className="relative w-full flex flex-row items-center justify-end px-6 py-4">
                            <X className="text-4xl cursor-pointer"/>
                        </div>
                        <div className="relative w-full h-screen flex flex-col justify-between items-center pb-12 font-raleway uppercase">
                            <img src={"./tr.svg"} alt="" className="w-10"/>
                            <div className="relative w-full px-6 flex flex-col gap-6">
                                <span className="text-center">insert your email bellow...</span>
                                <div className="relative flex flex-col gap-12">
                                    <div className="relative flex flex-col gap-1">
                                        <span>email<span className="text-red-500 ">*</span></span>
                                        <input type="email" placeholder="example@gmail.com" className="py-3 px-1 border-b border-solid border-black/20 focus:outline-none"/>
                                    </div>
                                    <div className="relative flex flex-col gap-5">
                                        <button className="w-full bg-[#75B09C] rounded-lg text-white font-montserrat font-bold uppercase py-3">continue</button>
                                        <div>

                                        </div>
                                        <div className="font-montserrat font-bold flex flex-col gap-2.5">
                                            <div className="relative flex flex-row gap-3.5 items-center rounded-lg bg-[#4267B2] px-3.5 py-3 text-white cursor-pointer">
                                                <Facebook className="text-xl"/>
                                                <span className="text-sm">entrar com o facebook</span>
                                            </div>
                                            <div className="relative flex flex-row gap-3.5 items-center rounded-lg px-3.5 py-3 border border-solid border-black/20 cursor-pointer">
                                                <img src={"./googlelogo.svg"} alt="google logo" className="w-5"/>
                                                <span className="text-sm">entrar com o google</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full">
                                <a href="" className="relative flex items-center gap-5 w-full border-y border-black/40 border-solid pl-6 pr-6 pt-4 pb-4 text-black/40">
                                    <ShopWindow className="text-xl"/>
                                    <span className="text-base">affiliate your restaurant</span>
                                </a>
                                <a href="" className="relative flex items-center gap-5 w-full border-y border-t-0 border-black/40 border-solid pl-6 pr-6 pt-4 pb-4 text-black/40">
                                    <QuestionCircle className="text-xl"/>
                                    <span className="text-base">help</span>
                                </a>
                            </div>              
                        </div>
                    </div>
                )
                : (
                    <></>
                )
            }
        </div>
    )
}

export default Header
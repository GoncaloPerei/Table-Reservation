import { Facebook, Instagram } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
            <div className="w-full h-fit flex justify-between bg-[#FBF751] px-20 py-12 uppercase items-center">
                <img src={"./tr.svg"} alt=""/>
                <div className="flex flex-col text-3xl leading-loose font-raleway">
                    <a href="">
                        home
                    </a>
                    <a href="">
                        about tr - table reservation
                    </a>
                    <a href="">
                        book a table
                    </a>
                    <a href="">
                        affiliate your restaurant
                    </a>
                </div>
                <div className='flex flex-col gap-3 font-montserrat font-bold'>
                    <div className='flex gap-12'>
                        <a href="#">
                            <Facebook className="text-3xl"/>
                        </a>
                        <a href="#">
                            <Instagram className="text-3xl"/>
                        </a>
                    </div>
                    <span className='text-2xl'>© 2023 gonçalo pereira e pedro neves<br />
                        – todos os direitos reservados</span>
                </div>
            </div>
        </>
    );
}

export default Footer;
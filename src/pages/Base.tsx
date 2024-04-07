import { Outlet } from "react-router-dom";
import ScrollToAnchor from "../components/ScrollAnchor";
import NavBarComponent from "../components/NavBarComponent";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const BaseView = () => {

    return <>
        <ScrollToAnchor />
        <div className="bg-main w-full h-screen text-foreground overflow-y-auto overflow-x-hidden  ">
            <NavBarComponent />

            <Outlet />

            {/* Footer Section */}
            <footer className="flex justify-between items-start py-[10vh] gap-10 lg:gap-5 flex-col lg:flex-row mx-auto w-[70%]">
                <div className='lg:w-[25%] flex flex-col justify-center items-start gap-2'>
                    <h3 className='text-xl font-action'>[Website Name]</h3>
                    <div className='flex justify-center items-center gap-5 mt-5'>
                        <FaFacebook className='text-2xl cursor-pointer' />
                        <FaInstagram className='text-2xl cursor-pointer' />
                        <BsTwitterX className='text-2xl cursor-pointer' />
                    </div>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-xl font-medium'>About Us</h3>
                    <br />
                    <ul className='flex gap-3 flex-col'>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Company Information</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Our Exports</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Manufacturing Facilities</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Sitemap</a>
                    </ul>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-xl font-medium'>Other Links</h3>
                    <br />
                    <ul className='flex gap-3 flex-col'>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Metallic Ceramic Tiles</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Wood Wall Tiles</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Where To Buy</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Corporate Office</a>
                    </ul>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-xl font-medium'>Helpful Links</h3>
                    <br />
                    <ul className='flex gap-3 flex-col'>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Contact Us</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>FAQs</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Meet an expert</a>
                    </ul>
                </div>
            </footer>
        </div>
    </>
}
export default BaseView
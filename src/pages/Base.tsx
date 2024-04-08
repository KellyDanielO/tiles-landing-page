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
            <footer className="flex justify-between items-start py-[10vh] gap-10 lg:gap-5 flex-col lg:flex-row mx-auto lg:w-[70%] w-[80%]">
                <div className='lg:w-[25%] flex flex-col justify-center items-start gap-2'>
                    <h3 className='text-xl font-action'>[Nom du site web]</h3>
                    <div className='flex justify-center items-center gap-5 mt-5'>
                        <FaFacebook className='text-2xl cursor-pointer' />
                        <FaInstagram className='text-2xl cursor-pointer' />
                        <BsTwitterX className='text-2xl cursor-pointer' />
                    </div>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-xl font-medium'>A propos de nous</h3>
                    <br />
                    <ul className='flex gap-3 flex-col'>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Informations sur la societe</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Nos exportations</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Installations de fabrications</a>
                    </ul>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-xl font-medium'>D'autres liens</h3>
                    <br />
                    <ul className='flex gap-3 flex-col'>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Carreaux de ceramique metalliques</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Carrelage mural en bois</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Ou acheter</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Siege social</a>
                    </ul>
                </div>
                <div className='lg:w-[15%]'>
                    <h3 className='text-xl font-medium'>Liens utiles</h3>
                    <br />
                    <ul className='flex gap-3 flex-col'>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Contactez nous</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Questions frequemment posees</a>
                        <a href="#" className='hover:font-bold transition-all ease-linear hover:text-foreground text-sm'>Rencontrer un expert</a>
                    </ul>
                </div>
            </footer>
        </div>
    </>
}
export default BaseView
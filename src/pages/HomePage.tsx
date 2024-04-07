import { MdOutlineKitchen, MdOutlineWarehouse } from 'react-icons/md'
import Tiles1 from '../assets/images/tiles-1.jpg'
import Tiles2 from '../assets/images/tiles-2.jpg'
import Tiles3 from '../assets/images/tiles-3.jpg'
import Tiles4 from '../assets/images/tiles-4.jpg'
import Tiles5 from '../assets/images/tiles-5.jpg'
import Tiles6 from '../assets/images/tiles-6.jpg'
import Floor1 from '../assets/images/floor-1.jpg'
import Floor2 from '../assets/images/floor-2.jpg'
import Floor3 from '../assets/images/floor-3.jpg'
import { FaBed } from 'react-icons/fa6'
import { PiArmchair } from 'react-icons/pi'
import { FaShoppingCart } from 'react-icons/fa'

const HomePage = () => {
    return <>
        <section className=' w-full mx-auto  bg-hero-background bg-cover bg-center bg-fixed'>
            <div className='flex justify-center items-start w-full py-10 pt-40 gap-10  flex-col px-[20em] text-white h-[80vh] bg-black/45'>

                <h1 className='text-4xl'>Welcome to <span className='font-action'>[Website Name]</span>  </h1>
                <p className='text-lg w-[60%]'>Discover elegance and style with our premium tile collection. From kitchen to bathroom, we have the perfect tiles to bring your vision to life. Explore our range of ceramic, porcelain, and natural stone tiles in various colors and finishes. Welcome home to beautiful spaces.</p>
                <button className='uppercase px-4 py-2 bg-green-500/40 hover:bg-green-500 transition-all ease-in-out text-white font-medium text-lg'>Order Now</button>
            </div>
        </section>


        {/* Our Wall tiles */}
        <section className='flex mx-auto justify-center items-center py-10 gap-5 bg-gray-100/95 w-full'>
            <div className='w-full lg:w-[70%] mx-auto flex justify-center items-center py-10 gap-5 flex-col lg:flex-row'>
                <div className='w-[90%] lg:w-[45%] flex flex-col items-start justify-center gap-2'>
                    <h3 className='text-3xl'>Explore Our Wall Tiles</h3>
                    <p className='text-sm mt-2 text-gray-500' >
                        [Website Name] brings to you premium wall tiles that are detailed with perfection. Each tile is made using state of the art technology making them strong, durable & easy to maintain.
                    </p>
                    <div className='lg:h-40 flex gap-2  w-full'>
                        <img src={Tiles1} alt="" className='h-[10vh]  lg:h-full' />
                        <img src={Tiles2} alt="" className='h-[10vh]  lg:h-full' />
                        <img src={Tiles3} alt="" className='h-[10vh]  lg:h-full' />
                    </div>

                    <button className='uppercase px-5 py-2 bg-green-500 text-white font-medium text-sm'>Explore</button>
                </div>
                <div className='grid grid-cols-2 w-[90%] lg:w-[45%] gap-1'>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2 bg-white'>
                        <FaBed className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Bathroom Wall Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2 bg-white'>
                        <MdOutlineKitchen className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Kitchen Wall Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-white'>
                        <MdOutlineWarehouse className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Outdoor Wall Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-white'>
                        <PiArmchair className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Living Room Wall Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                </div>
            </div>
        </section>

        {/* Our Floor tiles */}
        <section className='flex mx-auto justify-center items-center py-10 gap-5 w-full '>
            <div className='w-full lg:w-[70%] mx-auto flex justify-center items-center py-10 gap-5 flex-col lg:flex-row'>
                <div className='w-[90%] lg:w-[45%] flex flex-col items-start justify-center gap-2'>
                    <h3 className='text-3xl'>Explore Our Floor Tiles</h3>
                    <p className='text-sm mt-2 text-gray-500' >
                        [Website Name] range of luxurious floor tiles integrates technological expertise with exquisite designs. Each tile is crafted using ultra-modern technology to ensure high quality.
                    </p>
                    <div className='lg:h-40 flex gap-2  w-full'>
                        <img src={Floor1} alt="" className='h-[10vh] lg:max-w-[10vw] lg:h-full' />
                        <img src={Floor2} alt="" className='h-[10vh]  lg:max-w-[10vw] lg:h-full' />
                        <img src={Floor3} alt="" className='h-[10vh]  lg:max-w-[10vw] lg:h-full' />
                    </div>

                    <button className='uppercase px-5 py-2 bg-green-500 text-white font-medium text-sm'>Explore</button>
                </div>
                <div className='grid grid-cols-2 w-[90%] lg:w-[45%] gap-1'>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-gray-100/95'>
                        <FaBed className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Bathroom Floor Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-gray-100/95'>
                        <MdOutlineKitchen className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Kitchen Floor Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2   bg-gray-100/95'>
                        <MdOutlineWarehouse className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Outdoor Floor Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                    <div className='w-full h-[20vh] flex flex-col justify-center items-center gap-2   bg-gray-100/95'>
                        <PiArmchair className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Living Room Floor Tiles</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explore Now</a>
                    </div>
                </div>
            </div>
        </section>
        {/* For Sale */}
        <section className='flex mx-auto justify-center items-start py-10 gap-5 w-[70%] flex-col'>
            <h1 className='text-3xl font-medium'>Top Products</h1>
            <div className='flex justify-between items-center flex-wrap'>
                <div className='bg-white p-3 hover:shadow-lg w-[30%] flex flex-col items-start justify-center gap-2 rounded-lg transition-all ease-in-out '>
                    <img src={Tiles4} alt="" height="20vh" width="100%" className='rounded-sm' />
                    <h1 className='text-lg font-semibold'>[Tile Name] - 120x240 cm</h1>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae repellendus corrupti eos, beatae a error ducimus doloremque nulla corporis? Recusandae beatae minus aliquam dicta et doloribus aut saepe ratione!</p>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-1 justify-center items-start flex-col'>
                            <span className='text-lg font-bold'>CFA 5,000</span>
                            <span className='text-sm font-bold line-through italic'> CFA 10,000</span>

                        </div>
                        <button className='uppercase px-4 py-2 bg-green-500 transition-all ease-in-out text-white font-medium text-sm flex justify-center items-center gap-2'>
                            <FaShoppingCart />
                            <span> Cart</span></button>
                    </div>
                </div>
                <div className='bg-white p-3 hover:shadow-lg w-[30%] flex flex-col items-start justify-center gap-2 rounded-lg transition-all ease-in-out '>
                    <img src={Tiles5} alt="" height="20vh" width="100%" className='rounded-sm' />
                    <h1 className='text-lg font-semibold'>[Tile Name] - 120x240 cm</h1>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae repellendus corrupti eos, beatae a error ducimus doloremque nulla corporis? Recusandae beatae minus aliquam dicta et doloribus aut saepe ratione!</p>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-1 justify-center items-start flex-col'>
                            <span className='text-lg font-bold'>CFA 12,000</span>
                            <span className='text-sm font-bold line-through italic'> CFA 17,500</span>

                        </div>
                        <button className='uppercase px-4 py-2 bg-green-500 transition-all ease-in-out text-white font-medium text-sm flex justify-center items-center gap-2'>
                            <FaShoppingCart />
                            <span> Cart</span></button>
                    </div>
                </div>
                <div className='bg-white p-3 hover:shadow-lg w-[30%] flex flex-col items-start justify-center gap-2 rounded-lg transition-all ease-in-out '>
                    <img src={Tiles6} alt="" height="20vh" width="100%" className='rounded-sm' />
                    <h1 className='text-lg font-semibold'>[Tile Name] - 120x240 cm</h1>
                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae repellendus corrupti eos, beatae a error ducimus doloremque nulla corporis? Recusandae beatae minus aliquam dicta et doloribus aut saepe ratione!</p>
                    <div className='flex justify-between items-center w-full'>
                        <div className='flex gap-1 justify-center items-start flex-col'>
                            <span className='text-lg font-bold'>CFA 15,000</span>
                            <span className='text-sm font-bold line-through italic'> CFA 20,000</span>

                        </div>
                        <button className='uppercase px-4 py-2 bg-green-500 transition-all ease-in-out text-white font-medium text-sm flex justify-center items-center gap-2'>
                            <FaShoppingCart />
                            <span> Cart</span></button>
                    </div>
                </div>
            </div>
        </section>



    </>
}

export default HomePage
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
import { ReavealAnimation } from '../components/Reveal'
import { useInView, useAnimation, motion } from 'framer-motion'
import { useRef, useEffect } from 'react'

const HomePage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);
    return <>
        <section className=' w-full mx-auto  bg-hero-background bg-cover bg-center bg-fixed'>
            <div className='flex justify-center items-center w-full py-10 pt-40 gap-10  flex-col px-10 lg:px-[20em] text-white h-[90vh] lg:h-[80vh] bg-black/45'>

                <h1 className='text-4xl text-center'>Bienvenue a <span className='font-action'>[Nom du site web]</span>  </h1>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    whileInView="visible"
                    transition={{ delay: 0.25, duration: 0.5 }} className='text-lg text-center'>Decouvrez l'elegance et le style avec notre collection de carreaux haut de gamme. Dela cuisine a la salle de bain, nous avons les carreaux partfaits pour donner vie a votre vision. Explorez notre gamme de carreaux de ceramique, de porcelaine et de pierre naturelle dans differentes couleurs et finitions. Bienvenue chez vous dans de beaux espaces.</motion.p>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    whileInView="visible"
                    transition={{ delay: 0.25, duration: 0.5 }} className='flex justify-center items-center gap-2 lg:gap-5 flex-col lg:flex-row  '>
                    <button className='uppercase px-4 py-2 bg-green-500/40 hover:bg-green-500 transition-all ease-in-out text-white font-medium text-lg'>Order Now</button>
                    <button className='uppercase px-4 py-2 border-2 border-green-500 hover:bg-green-500 transition-all ease-in-out text-white font-medium text-lg'>Contact Us</button>
                </motion.div>
            </div>
        </section>


        {/* Our Wall tiles */}
        <motion.section
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate={mainControls}
            whileInView="visible"
            transition={{ delay: 0.25, duration: 0.5 }} className='flex mx-auto justify-center items-center py-10 gap-5 bg-gray-100/95 w-full'>
            <div className='w-full lg:w-[70%] mx-auto flex justify-center items-center py-10 gap-5 flex-col lg:flex-row'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    whileInView="visible"
                    transition={{ delay: 0.25, duration: 0.5 }} className='w-[90%] lg:w-[45%] flex flex-col items-start justify-center gap-2'>

                    <h3 className='text-3xl'>Decouvrez nos carrelages muraux</h3>

                    <p className='text-sm mt-2 text-gray-500' >
                        [Nom du site web] vous propose des carreaux muraux haut de gamme detailles a la perfection. Chaque carreau est fabrique a l'aide d'une technologie de pointe, ce qui les rend solides, durables et faciles a entretenir.
                    </p>
                    <ReavealAnimation>
                        <div className='lg:h-40 flex gap-2  w-full'>
                            <img src={Tiles1} alt="" className='h-[10vh]  lg:h-full' />
                            <img src={Tiles2} alt="" className='h-[10vh]  lg:h-full' />
                            <img src={Tiles3} alt="" className='h-[10vh]  lg:h-full' />
                        </div>
                    </ReavealAnimation>

                    <motion.button
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='uppercase px-5 py-2 bg-green-500 text-white font-medium text-sm'>Explorer</motion.button>
                </motion.div>
                <div className='grid grid-cols-2 w-[90%] lg:w-[45%] gap-1'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2 bg-white'>
                        <FaBed className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage mural de salle de bain</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2 bg-white'>
                        <MdOutlineKitchen className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage mural de cuisine</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-white'>
                        <MdOutlineWarehouse className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage mural exterieur</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-white'>
                        <PiArmchair className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage mural de salon</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                </div>
            </div>
        </motion.section>

        {/* Our Floor tiles */}
        <section className='flex mx-auto justify-center items-center py-10 gap-5 w-full '>
            <div className='w-full lg:w-[70%] mx-auto flex justify-center items-center py-10 gap-5 flex-col lg:flex-row'>
                <div className='w-[90%] lg:w-[45%] flex flex-col items-start justify-center gap-2'>
                    <motion.h3
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='text-3xl'>Decouvrez nos carrelages</motion.h3>
                    <p className='text-sm mt-2 text-gray-500' >
                        [Nom du site web] vous propose des carreaux muraux haut de gamme detailles a la perfection. Chaque carreau est fabrique a l'aide d'une technologie de pointe, ce qui les rend solides, durables et faciles a entretenir.
                    </p>
                    <ReavealAnimation>
                        <div className='lg:h-40 flex gap-2  w-full'>
                            <img src={Floor1} alt="" className='h-[10vh] lg:max-w-[10vw] lg:h-full' />
                            <img src={Floor2} alt="" className='h-[10vh]  lg:max-w-[10vw] lg:h-full' />
                            <img src={Floor3} alt="" className='h-[10vh]  lg:max-w-[10vw] lg:h-full' />
                        </div>
                    </ReavealAnimation>

                    <button className='uppercase px-5 py-2 bg-green-500 text-white font-medium text-sm'>Explorer</button>
                </div>
                <div className='grid grid-cols-2 w-[90%] lg:w-[45%] gap-1'>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-gray-100/95'>
                        <FaBed className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage de salle de bain</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2  bg-gray-100/95'>
                        <MdOutlineKitchen className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage de cuisine</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: -75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2   bg-gray-100/95'>
                        <MdOutlineWarehouse className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage exterieur</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, x: 75 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='w-full h-[20vh] flex flex-col justify-center items-center gap-2   bg-gray-100/95'>
                        <PiArmchair className='text-4xl' />
                        <p className='text-sm lg:text-lg'>Carrelage de salon</p>
                        <a href="#" className='hover:text-green-500 text-sm'>Explorer Maintenant</a>
                    </motion.div>
                </div>
            </div>
        </section>
        {/* For Sale */}
        <section className='flex mx-auto justify-center items-start py-10 gap-5 w-[90%] lg:w-[70%] flex-col'>
            <h1 className='text-3xl font-medium'>Produits Phares</h1>
            <div className='flex justify-between items-center flex-wrap w-full'>
                <div className='bg-white p-3 hover:shadow-lg w-full mb-5 lg:mb-0 lg:w-[30%] flex flex-col items-start justify-center gap-2 rounded-lg transition-all ease-in-out '>
                    <ReavealAnimation>
                        <img src={Tiles4} alt="" height="20vh" width="100%" className='rounded-sm' />
                    </ReavealAnimation>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='text-lg font-semibold'>[Nom de la tuile] - 120x240 cm</motion.h1>
                    <ReavealAnimation>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae repellendus corrupti eos, beatae a error ducimus doloremque nulla corporis? Recusandae beatae minus aliquam dicta et doloribus aut saepe ratione!</p>
                    </ReavealAnimation>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='flex justify-between items-center w-full'>
                        <div className='flex gap-1 justify-center items-start flex-col'>
                            <span className='text-lg font-bold'>CFA 5,000</span>
                            <span className='text-sm font-bold line-through italic'> CFA 10,000</span>

                        </div>
                        <button className='uppercase px-4 py-2 bg-green-500 transition-all ease-in-out text-white font-medium text-sm flex justify-center items-center gap-2'>
                            <FaShoppingCart />
                            <span> Chariot</span>
                        </button>
                    </motion.div>
                </div>
                <div className='bg-white p-3 hover:shadow-lg w-full mb-5 lg:mb-0 lg:w-[30%] flex flex-col items-start justify-center gap-2 rounded-lg transition-all ease-in-out '>
                    <ReavealAnimation>
                        <img src={Tiles5} alt="" height="20vh" width="100%" className='rounded-sm' />
                    </ReavealAnimation>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='text-lg font-semibold'>[Nom de la tuile] - 120x240 cm</motion.h1>
                    <ReavealAnimation>
                        <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae repellendus corrupti eos, beatae a error ducimus doloremque nulla corporis? Recusandae beatae minus aliquam dicta et doloribus aut saepe ratione!</p>
                    </ReavealAnimation>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='flex justify-between items-center w-full'>
                        <div className='flex gap-1 justify-center items-start flex-col'>
                            <span className='text-lg font-bold'>CFA 12,000</span>
                            <span className='text-sm font-bold line-through italic'> CFA 17,500</span>
                        </div>
                        <button className='uppercase px-4 py-2 bg-green-500 transition-all ease-in-out text-white font-medium text-sm flex justify-center items-center gap-2'>
                            <FaShoppingCart />
                            <span> Chariot</span></button>
                    </motion.div>
                </div>
                <div className='bg-white p-3 hover:shadow-lg w-full mb-5 lg:mb-0 lg:w-[30%] flex flex-col items-start justify-center gap-2 rounded-lg transition-all ease-in-out '>
                    <ReavealAnimation>
                        <img src={Tiles6} alt="" height="20vh" width="100%" className='rounded-sm' />
                    </ReavealAnimation>
                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='text-lg font-semibold'>[Nom de la tuile] - 120x240 cm</motion.h1>

                    <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat quae repellendus corrupti eos, beatae a error ducimus doloremque nulla corporis? Recusandae beatae minus aliquam dicta et doloribus aut saepe ratione!</p>
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        whileInView="visible"
                        transition={{ delay: 0.25, duration: 0.5 }} className='flex justify-between items-center w-full'>
                        <div className='flex gap-1 justify-center items-start flex-col'>
                            <span className='text-lg font-bold'>CFA 15,000</span>
                            <span className='text-sm font-bold line-through italic'> CFA 20,000</span>

                        </div>
                        <button className='uppercase px-4 py-2 bg-green-500 transition-all ease-in-out text-white font-medium text-sm flex justify-center items-center gap-2'>
                            <FaShoppingCart />
                            <span> Chariot</span></button>
                    </motion.div>
                </div>
            </div>
        </section>
    </>
}

export default HomePage
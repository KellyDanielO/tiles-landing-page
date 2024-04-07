import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface InnovationsComponentsProps {
    images: string,
    title: string,
    body: string
}
const InnovationsComponents = (props: InnovationsComponentsProps) => {
    const { images, title, body } = props;

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

    return <motion.div
        variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        whileInView="visible"
        transition={{ delay: 0.25, duration: 0.5 }} className='flex justify-between items-center gap-10 flex-col lg:flex-row z-10 my-5'>
        <div className="lg:w-[50%] flex flex-col items-start">
            <h2 className='text-xl lg:text-3xl mb-5 text-primary font-medium'>{title} </h2>
            <p className="text-sm lg:text-lg">{body} </p>
        </div>
        <div className="lg:w-[50%] lg:h-[30em]">
            <img src={images} className="w-[100%] h-[100%] object-cover" />
        </div>
    </motion.div>
}

export default InnovationsComponents
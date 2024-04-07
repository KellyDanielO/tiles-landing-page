import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
    children: any;
    width?: "fit-content" | "100%",
    className?: string;
}

export const ReavealAnimation = ({ children, className }: Props) => {
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

    return (
        <div ref={ref} style={{ position: 'relative', overflow: 'hidden', zIndex: '10' }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                whileInView="visible"
                transition={{ delay: 0.25, duration: 0.5 }}
            >
                {children}
                
            </motion.div>

            {/* A second set of animation just incase */}
            {/* <motion.div variants={{
                hidden: { left: 0 },
                visible: { left: "100%" }
            }}
                initial="hidden"
                animate={slideControls}
                whileInView="visible"
                transition={{ ease: 'easeIn', duration: 0.5 }}
                style={{ position: "absolute", top: 4, bottom: 4, left: 0, right: 0, zIndex: 20, background: '#521dc5' }}
            ></motion.div> */}
        </div>
    )
}
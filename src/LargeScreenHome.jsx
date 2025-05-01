import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion';

const LargeScreenHome = ({cakes,currentSlide}) => {
    return (
        <>
        <div className="homeContainerL">
            <div className="imgContainer1">
                <img src='/homepageCakes/Cake-1.png'/>
            </div>

            <div className="imgContainer2">
                <img src='/homepageCakes/Cake-2.png'/>
                <div className="box">
                    <Link to="/shopnow"><button className='button largeScreen'>Shop Now</button></Link>
                </div>
               
            </div>

            <div className="imgContainer3">
                <img src='/homepageCakes/Cake-4.png'/>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                key={`text-${cakes[currentSlide].id}`}
                className="textOverlay"
                initial={{ opacity: 0.2, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0.1, y: -20 }}
                transition={{ duration: 1.5 }}
                >
                    <div className='textContent'>
                        <h1>{cakes[currentSlide].text}</h1>
                        <p className='subText'><span>&ldquo;</span>{cakes[currentSlide].subText}<span>&rdquo;</span></p>
                        <p className='author'>{cakes[currentSlide].author}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
        </>
    );
};

export default LargeScreenHome;
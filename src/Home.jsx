import React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { Link } from 'react-router-dom';


const Home = () => {
    const cakes = [
        {id: 1, image: "/homepageCakes/Cake-2.png", text: "Cakes for happy ever after", subText: "Tómi's cakes are always the highlights of any wedding. Often unmatched", author: "—Kemi Adekemi, The Bridal Magazine"},
        {id: 2, image: "/homepageCakes/Cake-1.png", text: "Celebrating forever, in every step", subText: "You could taste the passion and love baked into every bite", author: "—Tunde Hastrop, Cake Review Lagos"},
        {id: 3, image: "/homepageCakes/Cake-4.png", text: "The art of cakes is an act of love", subText: "The smile on their faces always says it all", author: "—Tomiiwo Oke, Cakes & Pastry"},
        
    ]
    //{id: 3, image: "public/homepageCakes/Cake-3.png", text: "And baking loving memories, into every slice"}
    const [ currentSlide, setCurrentSlide ] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % cakes.length) //the modulo will always try to divide and give a remainder 
        }, 8000)
        return () => clearInterval(interval);
    }, [])

    const { navDrop } = useContext(AppContext);

    return (
        <>
    
            <div className="cakeSlider">
                <AnimatePresence mode="wait">

                    <motion.img
                    key={cakes[currentSlide].id}
                    src={cakes[currentSlide].image}
                    alt="Cake-Image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .9 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    />

                    <motion.div
                    key={`text-${cakes[currentSlide].id}`}
                    className={`textOverlay ${navDrop ? 'hidden' : ''}`}
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

            <Link to="/shopnow"><button className='button'>Shop Now</button></Link>

            <div className="horizontalL"></div>
            <div className="portraitsect">
                <div className="textBox">
                    
                    <p>
                        <span className='studio'>{"The Studio".toUpperCase()}. </span> 
                        Each cake is a unique craft, shaped by a personal aesthetic - the self. Its that existential project of continuously crafting one's own persona with passion. Why not bring that to the table and the dough? The cakes emerge engendered with love and forever. For every artist in the making, the blurred lines between service and the evolving self is the creation of enchantment and taste. Let's reframe: when i'm at the table, I ask myself " who am I? " <em>Magic? </em> 
                    </p>
                    
                    <Link to="/about"><button className='button'>About</button></Link>
                </div>
                <img className="portrait" src='/homepageCakes/Fifi.png'/>
                <div className="designBox"><h2 className="heading">Approaching the process</h2></div> 
            </div>

        
        </>
    );
};

export default Home;
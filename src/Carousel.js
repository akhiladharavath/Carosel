import React, { useState } from 'react';
import img1 from "./assets/image1.jpg";
import img2 from "./assets/image2.jpg";
import img3 from "./assets/image3.jpg";
import {AnimatePresence, motion, wrap} from "framer-motion";

const images = [img1, img2, img3];

const Carousel = () => {

    const [[page, direction], setPage] = useState([0,0]);
    const imageIndex = wrap(0,images.length,page);
    const paginate = (newD) => setPage([page + newD, newD]);
    

  return (
    <div className='carousel-container'>
        <AnimatePresence >
            <motion.img
            key = {page}
            src={images[imageIndex]}
            custom={direction}
            variants={{
                enter:(dir) =>({x: dir > 0 ? 1000: -1000, opacity:0}),
                center:{x:0, opacity:1},
               exit:(dir) =>({x: dir < 0 ? 1000: -1000, opacity:0}) 

            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{x:{type:"spring", stiffness:300, damping:30},
            opacity:{duration:0.2}}}
              
             />
          
        </AnimatePresence>
        <div className='next' onClick={()=> paginate(1)}>{"‣"}</div>
        <div className='prev' onClick={()=> paginate(-1)}>{"‣"}</div>
        <div className='dots'>
            {images.map((_,idx) =>(
                <div key={idx} 
                className={`dot ${imageIndex === idx ? "active":""}`} 
                onClick={() => setPage([idx, idx > page ? 1: -1])}/>
            ))}
            
            </div> 

    </div>
  )
}

export default Carousel;
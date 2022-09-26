import React from 'react'
import imageHeader from '../assets/header.webp'
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div className='header-wrapper'>
        <div className='main-info container'>
        <motion.div 
                initial={{x:500}}
                transition={{duration:1}}
                animate={{x:0}}
                className='circle'>
            <img src={imageHeader} className='img-header'/>
        </motion.div>
        <motion.div
                initial={{x:-500}}
                transition={{duration:1}}
                animate={{x:0}}
        >
        <h1>Hola! soy <span >Viki</span></h1>
        <p className='perfil text-white'>React/Front-End Developer</p>
        <p className='based text-white fs-3'>Córdoba, Argentina</p>
        </motion.div>
      </div>

    </div>
  )
}

export default Header

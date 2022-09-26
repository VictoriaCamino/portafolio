import React from 'react'
import down from '../assets/svg/down.svg'
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className='bg-work ' id='contacto'>
        {/* line */}
        <div className='container d-flex justify-content-center'>
          <div className='line-vertical'></div>
        </div>

        <div className='col-12 ' >
            <h3 className='text-light text-center text-work'>¡Trabajemos Juntos!</h3>
        </div>
        <div className='col-12 d-flex justify-content-center'>
            <a href='#'>
            <motion.img
             initial={{y:0}}
             transition={{repeat: Infinity, repeatType: 'reverse', duration: 1.3, velocity: 7 }}
             animate={{y:50}}

             src={down} 
             className='down' />
            </a>
        </div>
    </div>
  )
}

export default Contact

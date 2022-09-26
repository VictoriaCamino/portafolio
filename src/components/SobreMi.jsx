import React from 'react'
import memoji from '../assets/about.webp'

import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const SobreMi = () => {

    const {ref, inView} = useInView({
        threshold:0.2
    })
      const animation = useAnimation()
    
      useEffect(() => {
        if(inView){
          animation.start({
            x:0,
            transition: {
              type:'spring',
              duration:2
            }
          })
        }
        if(!inView){
          animation.start({x:'100vh'})
        }
      }, [inView])

  return (
    <div className='bg-about' id='sobreMi'>
      {/* LINES */}
      <div className='container d-flex justify-content-center'>
          <div className='line-vertical'></div>
        </div>
        <h2  className='text-center mt-5 mb-5 heading-about'>Sobre Mí</h2>

        <div className='container'>
            <div className='row'>
                <div className="card col-lg-6 card-about">
                    <div className="card-body bg-card-about">
                        <div className="card-text text-light about-text-card">
                            <p>Hice curso de Desarrollo web y JavaScript en CODERHOUSE, decidí seguir mis estudios autodidactas empezando con React.js, ya que me apasiona la idea de que todo lo que quiera saber se encuentra a dos clicks de distancia. Quiero seguir aprendiendo y disfrutando del proceso que un día nació como hobby.
                              </p>
                            
                            <p>Aparte de la programación... Que hago en mis tiempos libres? Jugar videojuegos, entrenar, el café y las buenas amistades.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 text-center' ref={ref}>
                <motion.img 
                animate={animation}
                className='img-skills' src={memoji}/>
                </div>
            </div>
        </div>
        {/* line */}
        <div className='container d-flex justify-content-center mt-5'>
          <div className='line-vertical'></div>
        </div>
    </div>
  )
}

export default SobreMi

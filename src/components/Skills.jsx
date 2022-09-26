import React from 'react'
import imgServices from '../assets/services.webp'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'
// iconos
import html from '../assets/svg/code.svg'
import bootstrap from '../assets/svg/bootstrap.svg'
import js from '../assets/svg/js.svg'
import github from '../assets/svg/github.svg'




const Skilss = () => {

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
      animation.start({x:-280})
    }

  }, [inView])


  const iconos = [
    {img: html, id: 1},
    {img: bootstrap, id: 2},
    {img: js, id: 3},
    {img: github, id: 4}
  ]

  return (
    <div className=' bg-services container-fluid'  >

    {/* LINES */}
        <div className='container d-flex justify-content-center'>
          <div className='line-vertical'></div>
        </div>
        <div className='container d-flex justify-content-start '>
          <div className='col-1'></div>
          <div className='line-horizontal'></div>
        </div>

      <div className='container d-flex justify-content-start'>
          <div className='col-1'></div>
          <div className='line-vertical'></div>
        </div>


      <div className='container-fluid row d-flex justify-content-between  alig-item-center' id='skills'>
        <div className='col-1'></div>
            <h2 className='mt-2 heading-skills'>Mis Habilidades</h2>
            <p className='text-light text-skills'>"Si se puede imaginar, se puede programar" :)</p>
        <div className='col-sm-6 text-center'>
            <motion.img 
            ref={ref}
            animate={animation}
            className='img-skills' src={imgServices}/>
        </div>
        <div className='col-sm-6 gy-5 '>
        <div className='d-flex  flex-column '>

          <div className='row gx-5 pb mb-5'>
            {iconos.map((ico) => (
                <motion.img 
                key={ico.id}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.9 }}
                className='col ico-skills' src={ico.img}/>
            ))
            }
          </div>

          <div className="card text-center d-flex align-items-end border-0 mb-5">
            <div className="card-body  bg-card">
              <h5 className="card-title fs-1 mb-3">Developer skills</h5>
              <p className="card-text text-light fs-5 pb-3">Conocimientos en HTML/CSS, Javascript y React.js. Hago aplicaciones web responsivas con distintos frameworks pero mi favorito es Bootstrap</p>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default Skilss

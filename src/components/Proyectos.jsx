import React from 'react'
import {motion} from 'framer-motion'
// imagenes
import space from '../assets/space.png'
import gastos from '../assets/gastos.png'
import crypto from '../assets/crypto.png'
import citas from '../assets/citas.png'
import estetic from '../assets/estetic.png'




const Proyectos = () => {

    const projects = [
      {img: space, link: 'https://victoriacamino.github.io/Space/', id: 1 },
      {img: gastos, link: 'https://glittering-dieffenbachia-61c8a1.netlify.app/', id: 2 },
      {img: crypto, link: 'https://neon-klepon-d3ff4b.netlify.app/', id: 3 },
      {img: citas, link: 'https://iridescent-dieffenbachia-a1605e.netlify.app/', id: 4 },
      {img: estetic, link: 'https://victoriacamino.github.io/amatista-estetic-camino/', id: 5 },
    ]

  return (
    <div className='bg-project' >

        {/* lines */}
        <div className='container d-flex justify-content-center'>
            <div className='col-6'></div>
            <div className='line-vertical'></div>
        </div>
      <div className='container d-flex justify-content-end'>
          <div className='line-horizontal'></div>
          <div className='col-2'></div>
        </div>
      <div className='container d-flex justify-content-center'>
        <div className='line-vertical'></div>
      </div>

        <div className='container-sm' id='proyectos'>
        <h2 className='heading-project text-center mb-5'>Mis Proyectos</h2>
        <p className='text-light text-project text-center'>Una selección de mis proyectos más recientes</p>
        <div className='row row-cols-1 row-cols-md-3 g-5 mt-5'>

            {projects.map((project) => (
                <div
                  key={project.id}
                 className='gx-5'>
                <a className='col' href={project.link} >
                    <motion.img 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.3 }}
                    className='img-project img-fluid' src={project.img} />
                </a>
                </div>
            ))}
        </div>
        <div className='text-center'>
            <h2 className='mt-5 text-light opacity-50'>Para ver el proceso</h2>
            <a href='https://github.com/VictoriaCamino' target='_blanck' className='fs-2 fw-bold card-title text-center'>Visitá mi Github</a>
        </div>

        </div>

        
    </div>
  )
}

export default Proyectos

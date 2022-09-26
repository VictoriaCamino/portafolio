import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-footer container-fluid border-top-footer'>
      <div className='row'>
        <div className='col-4'>
            <p className='footer-description'>© Victoria Camino</p>
        </div>
        <div className='col-2'>
            <p className='footer-description text-center'>React Developer</p>
        </div>
        <div className='col-6 text-center'>
            <a href='https://github.com/VictoriaCamino' className='footer-description'>Github</a>
            <a href='https://www.linkedin.com/in/victoria-camino-985604191/' className='footer-description'>Linkedin</a>
            <a href='mailto:vikicamino@gmail.com' className='footer-description'>Email</a>

        </div>

      </div>
    </footer>
  )
}

export default Footer

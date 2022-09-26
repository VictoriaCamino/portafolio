import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-footer container-fluid border-top-footer'>
      <div className='d-flex flex-wrap justify-content-between align-items-center container'>
        <div className='col-md-4 mb-0 text-muted'>
            <p className='footer-description'>© Victoria Camino</p>
        </div>
        <div className='col-md-2 mb-0'>
            <p className='footer-description text-center justify-content-center'>React Developer</p>
        </div>
        <div className='nav col-md-6 justify-content-end'>
            <a href='https://github.com/VictoriaCamino' className='footer-description'>Github</a>
            <a href='https://www.linkedin.com/in/victoria-camino-985604191/' className='footer-description'>Linkedin</a>
            <a href='mailto:vikicamino@gmail.com' className='footer-description'>Email</a>

        </div>

      </div>
    </footer>
  )
}

export default Footer

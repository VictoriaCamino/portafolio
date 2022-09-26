import React from 'react'
import memoji from '../assets/contact.webp'
import linkedin from '../assets/svg/linkedin.svg'
import twitter from '../assets/svg/twitter.svg'
import github from '../assets/svg/github.svg'


const ContactInfo = () => {
  return (
    <div className='bg-contact-info'>
      <div className='row container-fluid' >
        
        <div className='col-12 d-flex justify-content-center padding-contact'>
        <div className="card card-contact" >
            <div className='d-flex justify-content-center'>
                <img src={memoji} className="img-fluid img-contact" alt="..."/>
            </div>
            <div className="card-body">
                <h3 className='email-contact text-center fs-1'>
                    <a href='mailto:vikicamino@gmail.com' className='link-email text-light'>vikicamino@gmail.com</a>
                </h3>
                <div className="d-flex justify-content-evenly mt-5">
                    <a href='https://www.linkedin.com/in/victoria-camino-985604191/'><img src={linkedin} className='ico-contact'/></a>
                    <a href='https://github.com/VictoriaCamino'><img src={github} className='ico-contact'/></a>
                    <a href='https://twitter.com/home'><img src={twitter} className='ico-contact'/></a>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo

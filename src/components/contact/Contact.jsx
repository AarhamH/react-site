import React, {useEffect} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {SiDiscord} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9iayec3', 'template_gqeezhn', form.current, 'NPi9phWapB7SwP_Qr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5 data-aos='fade-up'>Say Hi</h5>
      <h2 data-aos='fade-up'>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article data-aos= 'fade-in' className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Personal Email</h4>
            <a href="mailto:aarham.haider@gmail.com"><h3>aarham.haider@gmail.com</h3></a>
          </article>

          <article data-aos= 'fade-in' className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>SFU Email</h4>
            <a href="mailto:aah13@sfu.ca"><h3>aah13@sfu.ca</h3></a>
          </article>

          <article data-aos= 'fade-in' className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <a href="https://m.me/aarham.haider"><h3>Aarham Haider</h3></a>
          </article>

          <article data-aos= 'fade-in' className='contact_option'>
            <SiDiscord className='contact_option-icon'/>
            <h4>Discord</h4>
            <a href="https://discordapp.com/users/138048010373431297"><h3>crazy_cactus_99#9783</h3></a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name = 'name' placeholder='Your Full Name' required />
          <input type="email" name = 'email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
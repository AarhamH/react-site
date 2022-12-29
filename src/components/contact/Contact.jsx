import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {SiDiscord} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
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
      <h5>Say Hi</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Personal Email</h4>
            <h5>aarham.haider@gmail.com</h5>
            <a href="mailto:aarham.haider@gmail.com">Send A Message</a>
          </article>

          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>SFU Email</h4>
            <h5>aah13@sfu.ca</h5>
            <a href="mailto:aah13@sfu.ca">Send A Message</a>
          </article>

          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>Aarham Haider</h5>
            <a href="https://m.me/aarham.haider">Send A Message</a>
          </article>

          <article className='contact_option'>
            <SiDiscord className='contact_option-icon'/>
            <h4>Discord</h4>
            <h5>crazy_cactus_99#9783</h5>
            <a href="https://discordapp.com/users/138048010373431297">Add Me</a>
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
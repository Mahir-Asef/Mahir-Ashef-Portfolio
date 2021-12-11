import React, { useRef,useEffect } from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css'
import Aos from 'aos'
import "aos/dist/aos.css";
import swal from 'sweetalert';

const ContactMe = () => {
    useEffect(() =>{
        Aos.init({
          duration: 1000
        })
      },[])
    const form = useRef();
    const sendEmail = e =>{
        e.preventDefault();
        emailjs.sendForm('service_qagq12i', 'template_en4zqzd', form.current, 'user_uILSm4xbeHJ14E3aTXvso')
        .then((result) => {
            if(result.text){
                swal({
                    title: "Thank you!",
                    text: "Successfully message send to Mahir Ashef",
                    icon: "success",
                    button: "OK",
                  });
            }
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
   
        return (
            <div   className='contact container' id='contact'>
                <div className='form-area'>
                <h1 data-aos="fade-right">Contact With Me</h1>
                <form data-aos="fade-left" ref={form} onSubmit={sendEmail}>
                    
                    <input placeholder='Name' type="text" required name="name" />
                    
                    <input placeholder="Email" type="email" required name="email" />
                    
                    <textarea placeholder='Write Something' required name="message" />
                   
                    <input style={{marginBottom:'20px',backgroundColor:'blue',color:'white'}} type="submit" value="Send" />
                </form>
                
                </div>
            </div>
            
        );
    };

    export default ContactMe;
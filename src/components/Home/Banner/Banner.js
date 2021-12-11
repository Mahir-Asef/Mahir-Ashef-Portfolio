import React, { useEffect } from 'react';
import './Banner.css'
// import pdf from '../../../pdf/mahir.pdf'
import img from '../../../images/banner.jpg'
import Aos from 'aos'
import "aos/dist/aos.css";

const Banner = () => {
    useEffect(() =>{
        Aos.init({
          duration: 2000
        })
      },[])
    return (
        <div className='banner'>
            <div className='header text-center'>
                <img className="rounded-circle " src={img} alt="" />
                <h1 data-aos="fade-left">Hi I am Mahir Ashef</h1>
                <h3 data-aos="fade-right" style={{ fontSize:"bolder" }} >I am a full-stack Web Developer</h3>
                <button data-aos="fade-up-right"><a rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1VWNcbsJFVc_X25sEIceQSK8t2CdSJRbB/view?usp=sharing">Resume</a></button>
            </div>
        </div>
    ); 
};

export default Banner;
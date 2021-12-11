import React, { useEffect } from 'react';
import './MySkill.css'
import Aos from 'aos'
import "aos/dist/aos.css";

const MySkills = () => {
    useEffect(() =>{
        Aos.init({
          duration: 1000
        })
      },[])
    return (
        <div className='flex container' id='skills' style={{marginTop:'40px',overflow:'hidden'}}>
            <h1 data-aos="fade-down-right" style={{marginTop:'40px'}}>My Skills</h1>
           <div className='myskill'>
               
               <div data-aos="flip-up" className='icon'>
                   <span><i class="fab fa-html5"></i></span>
                   <h5>html5</h5>
               </div>
               <div data-aos="flip-down" className='icon'>
                   <span><i class="fab fa-css3-alt"></i></span>
                   <h5>CSS</h5>
               </div>
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className='icon'>
                   <span><i class="fab fa-js"></i></span>
                   <h5>javaScript</h5>
               </div>
               <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className='icon'>
                   <span><i class="fab fa-react"></i></span>
                   <h5>React</h5>
               </div>
               <div data-aos="zoom-in-up" className='icon'>
                   <img src='https://cdn.dribbble.com/users/528264/screenshots/3140440/media/ffd94de89eccc1f7b1e76c999f1adeec.png' alt='' />
                   <h5>Firebase</h5>
               </div>
               <div data-aos="zoom-in-up" className='icon'>
               <img style={{width:'70px', marginTop:'15px'}} src='https://banner2.cleanpng.com/20180531/sas/kisspng-bootstrap-react-software-framework-javascript-fron-5b0f9b1ab26fd7.9058729715277494027309.jpg' alt='' />
                   <h5>React Bootstrap</h5>
               </div>
               <div data-aos="zoom-in-up" className='icon'>
               <img style={{marginTop:'15px'}} src='https://www.pngitem.com/pimgs/m/577-5779757_react-material-ui-logo-hd-png-download.png' alt='' />
                   <h5>Material Ui</h5>
               </div>
               <div data-aos="fade-left" className='icon'>
               <img style={{marginTop:'15px'}} src='https://w7.pngwing.com/pngs/777/698/png-transparent-node-js-javascript-software-developer-npm-github-angle-text-logo.png' alt='' />
                   <h5>Node.js</h5>
               </div>
               <div data-aos="fade-left" className='icon'>
               <img style={{marginTop:'15px',width:'70px'}} src='https://toppng.com/uploads/preview/9kib-354x415-unnamed-mongodb-logo-sv-11562860723mgempnmrq3.png' alt='' />
                   <h5>MongoDB</h5>
               </div>
           </div>
        </div>
    );
};

export default MySkills;
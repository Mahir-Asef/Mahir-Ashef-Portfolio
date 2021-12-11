import React from 'react';
import {useEffect} from 'react';
import {Carousel,Container} from 'react-bootstrap';
import bike1 from './../../images/bike1.png';
import bike2 from './../../images/bike2.png';
import bike3 from './../../images/bike3.png';
import {NavLink} from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css";
import './BikeZone.css';
// import NavBar from './NavBar/NavBar';
const BikeZone = () => {
    useEffect(() =>{
        Aos.init({
          duration: 1000
        })
      },[])
    return (
        <Container>
        {/* <NavBar></NavBar> */}
        <div className="container m-auto" >
            <Carousel variant="dark">
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={bike1}
            alt="First slide"
            />
            <Carousel.Caption>
            {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={bike2}
            alt="Second slide"
            />

            <Carousel.Caption>
            {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
            className="d-block w-100"
            src={bike3}
            alt="Third slide"
            />

            <Carousel.Caption>
            {/* <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
         </div>
         <h3 className=" text-start my-3">Technology Used </h3>
         <div data-aos="flip-up" className='span container'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>material ui</p></div>
                                            <div><p>bootstrap</p></div>
                                            <div><p>node.js</p></div>
                                            <div><p>express.js</p></div>
                                            <div><p>mongodb</p></div>
                                        </div>
                <div className="text-start">
                <h3>Overview:</h3>
                <h6>1.User friedly website.</h6>
                <h6>2.User can buy a bike also can cancel his order.</h6>
                <h6>3.Admin dasboard implemented.</h6>
                <h6>4.Admin can remove any order.</h6>
                <h6>5.User can add a review also rating and experience .</h6>
                </div>
                <div className="text-start pb-5">
                <div data-aos="flip-up" className='anchors'>
                <a rel="noreferrer" target='_blank' href="https://bike-zone-c2a12.web.app/">Live Site</a>
                <a rel="noreferrer" target='_blank' href="https://github.com/Mahir-Asef/Bike_Zone_Client_Side.git"><i class="fab fa-github"></i>Client Code</a>
                <a rel="noreferrer" target='_blank' href="https://github.com/Mahir-Asef/-Travel_Pro_Server_Side.git"><i class="fab fa-github"></i>Server Code</a>
                </div>
                </div>
                <div className="text-center mb-3">
                <NavLink className="btn btn-danger mt-2 text-center" to="/home">Back Home</NavLink>
                </div>
        </Container>
    );
};

export default BikeZone;
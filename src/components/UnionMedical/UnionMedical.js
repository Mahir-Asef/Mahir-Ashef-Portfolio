import React from 'react';
import {useEffect} from 'react';
import {Carousel,Container} from 'react-bootstrap';
import union1 from './../../images/union1.png';
import union2 from './../../images/union2.png';
import union3 from './../../images/union3.png';
import {NavLink} from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css";

const UnionMedical = () => {
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
            src={union1}
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
            src={union2}
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
            src={union3}
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
                                            <div><p>bootstrap</p></div>
                                        </div>
                <div className="text-start">
                <h3>Overview:</h3>
                <h6>1.It's a medical base website. </h6>
                <h6>2.Service stuff is well organished.</h6>
                <h6>3.You can easily access any kind of sevices.</h6>
                <h6>4.After login user appoinments with any doctor.</h6>
                <h6>5.After login varified customer can buy medical related equipments.</h6>
                </div>
                <div className="text-start pb-5">
                <div data-aos="flip-up" className='anchors'>
                <a rel="noreferrer" target='_blank' href="https://union-medical-db67b.web.app/">Live Site</a>
                <a rel="noreferrer" target='_blank' href="https://github.com/Mahir-Asef/Union-Medical.git"><i class="fab fa-github"></i>Client Code</a>
                </div>
                </div>
                <div className="text-center mb-3">
                <NavLink className="btn btn-danger mt-2 text-center" to="/home">Back Home</NavLink>
                </div>
        </Container>
    );
};

export default UnionMedical;
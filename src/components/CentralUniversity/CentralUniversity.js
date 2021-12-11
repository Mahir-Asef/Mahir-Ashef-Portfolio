import React from 'react';
import {useEffect} from 'react';
import {Carousel,Container} from 'react-bootstrap';
import university1 from './../../images/university1.png';
import university2 from './../../images/university2.png';
import university3 from './../../images/university3.png';
import {NavLink} from 'react-router-dom';
import Aos from 'aos'
import "aos/dist/aos.css";

const CentralUniversity = () => {
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
            src={university1}
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
            src={university2}
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
            src={university3}
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
                                            <div><p>bootstrap</p></div>
                                        </div>
                <div className="text-start">
                <h3>Overview:</h3>
                <h6>1.It is a demo website of a university.</h6>
                <h6>2.There is a bunch of demo courses added.</h6>
                <h6>3.Conection with others university also implemented.</h6>
                <h6>4.Everyone can access it very easily.</h6>
                </div>
                <div className="text-start pb-5">
                <div data-aos="flip-up" className='anchors'>
                <a rel="noreferrer" target='_blank' href="https://central-university.netlify.app/">Live Site</a>
                <a rel="noreferrer" target='_blank' href="https://github.com/Mahir-Asef/Central-University.git"><i class="fab fa-github"></i>Client Code</a>
                </div>
                </div>
                <div className="text-center mb-3">
                <NavLink className="btn btn-danger mt-2 text-center" to="/home">Back Home</NavLink>
                </div>
        </Container>
    );
};

export default CentralUniversity;
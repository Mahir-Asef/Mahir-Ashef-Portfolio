import React, {useEffect} from 'react';
import { Card, Col, Row,Container } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './Projects.css'
import first from '../../../images/1.png'
import second from '../../../images/2.png'
import third from '../../../images/3.png'
import university1 from '../../../images/university1.png'
import Aos from 'aos'
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() =>{
        Aos.init({
          duration: 1000
        })
      },[])
    return (
        <Container id='project' style={{overflow:'hidden', margin:'0 auto', marginTop:'50px'}}>
            <h1 data-aos="fade-down-right" style={{marginBottom:'30px'}}>My Projects</h1>
            <Row xs={1} md={2} sm={1} className="g-4">
                
                    <Col>
                        <Card data-aos="flip-left">
                            <Card.Img variant="top" src={first} />
                            <Card.Body className="d-flex justify-content-between align-midle">
                                <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Bike Zone</Card.Title>
                                <Card.Text>
                                    <NavLink className="btn btn-primary mt-2" to="/BikeZone">View Details</NavLink>
                                        {/* <div>
                                            <div data-aos="flip-up" className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://food-corner-fb438.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/food-corner-client-side-13"><i class="fab fa-github"></i>Client Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/food-corner-mongo-work-13"><i class="fab fa-github"></i>Server Site</a>
                                            </div>
                                        </div> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="flip-down">
                            <Card.Img variant="top" src={second} />
                            <Card.Body className="d-flex justify-content-between align-midle">
                            <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Travel  Pro</Card.Title>
                                <Card.Text>
                                <NavLink className="btn btn-primary mt-2" to="/TravelPro">View Details</NavLink>
                                {/* <div data-aos="flip-up" className='span'>
                                            <div ><p className="px-3">html</p></div>
                                            <div ><p className="px-3">css</p></div>
                                            <div ><p className="px-3">react</p></div>
                                            <div ><p className="px-3">firebase</p></div>
                                            <div ><p className="px-3">material ui</p></div>
                                            <div ><p className="px-3">node.js</p></div>
                                            <div ><p className="px-3">express.js</p></div>
                                            <div ><p className="px-3">mongodb</p></div>
                                        </div> */}
                                        {/* <div>
                                            <div className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://cars-house.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Car-house-client"><i class="fab fa-github"></i>Client Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/car-house-server"><i class="fab fa-github"></i>Server Site</a>
                                            </div>
                                        </div> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="fade-left">
                            <Card.Img variant="top" src={third} />
                            <Card.Body className="d-flex justify-content-between align-midle">
                            <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Union  Medical</Card.Title>
                                <Card.Text>
                                <NavLink className="btn btn-primary mt-2" to="/UnionMedical">View Details</NavLink>
                                {/* <div data-aos="flip-up" className='span'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>reactbootstrap</p></div>
                                            
                                        </div>
                                        <div>
                                            <div className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://medi-care-2438b.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Health-Care"><i class="fab fa-github"></i>Client Site</a>
                                            
                                            </div>
                                        </div> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card data-aos="fade-right">
                            <Card.Img variant="top" src={university1} />
                            <Card.Body className="d-flex justify-content-between align-midle">
                            <Card.Title style={{fontSize:'40px', fontWeight:'700',color:'#484048'}}>Central University</Card.Title>
                                <Card.Text>
                                <NavLink className="btn btn-primary mt-2" to="/CentralUniversity">View Details</NavLink>
                                {/* <div data-aos="flip-up" className='span'>
                                            <div><p>html</p></div>
                                            <div><p>css</p></div>
                                            <div><p>react</p></div>
                                            <div><p>firebase</p></div>
                                            <div><p>reactbootstrap</p></div>
                                            <div><p>node.js</p></div>
                                            <div><p>express.js</p></div>
                                            <div><p>mongodb</p></div>
                                        </div>
                                        <div>
                                            <div className='anchor'>
                                            <a rel="noreferrer" target='_blank' href="https://tourist-agency-3e0d4.web.app/">Live Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Tourist-Agency-Client"><i class="fab fa-github"></i>Client Site</a>
                                            <a rel="noreferrer" target='_blank' href="https://github.com/alamin937/Tourist-agancy"><i class="fab fa-github"></i>Server Site</a>
                                            </div>
                                        </div> */}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
               
            </Row>
        </Container>
    );
};

export default Projects;
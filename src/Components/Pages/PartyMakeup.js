import React from 'react'

import { Card, Col, Container,Row  ,CardImg  } from 'react-bootstrap'
import Footer from "../Footer/Footer"
import Review from '../Reviews/Review'
import './Style.css'

const PartyMakeup = () => {
  return (
    <>
    <div className='general-container container-fluid' style={{background:'url(images/partymakeup.jpeg) center center/cover no-repeat'}}>
      <div className='overlay'>
        <h1 style={{textAlign:'center' , marginTop:'5rem', textShadow:'0px 0px 3px #fff'}}>PARTY MAKEUP</h1>
       
      </div>
      </div>
      <Container className='mt-5 haircut'>
          <Row>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/saree.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>SHAREE DRAPING</h3>
                
                    <Card.Body>
                        <p>PRICE - 399</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for Saree drapping"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hairdo.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>HAIR DO/HAIR CURLY -Temp</h3>
                
                    <Card.Body>
                        <p>PRICE - 799</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for HAIR DO/HAIR CURLY -Temp"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/hairtemp.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>HAIR TEMP STRAIGHTNING</h3>
                
                    <Card.Body>
                        <p>PRICE - 899</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for HAIR TEMP STRAIGHTNING<"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/light.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>LIGHT MAKE UP</h3>
                
                    <Card.Body>
                        <p>PRICE - 1699</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for LIGHT MAKE UP"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
          </Row>
          <Row>
          <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/eng.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>ENGAGEMENT MAKE UP</h3>
                
                    <Card.Body>
                        <p>PRICE - 1999</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for ENGAGEMENT MAKE UP"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/recp.jpeg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>RECEPTION MAKE UP</h3>
                
                    <Card.Body>
                        <p>PRICE - 2999</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for RECEPTION MAKE UP"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
              <Col md={3} xs={6}>
                <Card>
                    <CardImg src='images/EyeMakeup.jpg' style={{borderRadius:'100%' , height:'100px', width:'100px'}}/>
                    
                        <h3>EYE MAKE UP</h3>
                
                    <Card.Body>
                        <p>PRICE - 799</p>
                       

              <a href='https://wa.me/9318818893?text=Hi%27, Golden Honey Salon, I would like you to book for Eye Make up"'><button className='btn btn-warning'>Book Now</button></a>
            </Card.Body>   
                </Card>
              </Col>
          </Row>
      </Container>
      <Review />
      <Footer/>

    </>
  )
}

export default PartyMakeup;
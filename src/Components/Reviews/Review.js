import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Review.css'
import { Card, Container } from 'react-bootstrap';
const Review = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }; 
  return (
    <div>
        <Container className='review' fluid>'
        <h2><img src="images/google.png" alt='google' style={{width:'40px', height:'40px'}} /> REVIEWS & <span>RATING</span></h2>
        
        <div className='rating'>
        
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star-half' />
                        <span className='text-muted h4'>4.6/5</span>
                    </div>
                    <br></br>
        <Carousel responsive={responsive} >
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Sunita Kumari <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>Golden Honey service is awesome and there beautician reached on time. Beautician Meena Sinha ka work is excellent and her nature is very good... I am very much impressed with *Golden Honey* services...  Every one just go for it...... </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Divya Mishra <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>I got makeup done for the first time.. and I am very happy & satisfied with golden honey work. Beautician was maintaining hygiene Everyone liked my makeup...I am very satisfied 😊👌 thankyou so much 💓 </Card.Text>
    
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Chris Mill <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>This salon is one of best kind. I've had best service. The behavior of the staff was amazing and well mannered. </Card.Text>
                    <br></br>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Vaani Mathur <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>Golden Honey beautician was very professional...Service was just awesome...The beautician arrived on time..she did all the services perfectly.. I like face massage specially..
I will recommend this to everyone 🙂 </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Munni ji <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> I never thought that salon will come to my home
I booked first time service with Golden Honey - Home Salon and i was amazed😃
Good job by Golden Honey - Home Salon</Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Neha Raj <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> I have small kid was not able to visit salon so i booked service from Golden Honey for my home service
Guess what service I really liked
Will not go parlour </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Puja Patel <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> 🏘🏘I never thought that salon will come to my home
I booked first time service with Golden Honey - Home Salon and i was amazed😃
Good job by Golden Honey - Home Salon😍😍🏘 </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Rohuni Chodury <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> Excellent service at home. I feel like getting service in salon
Good Job Golden Honey</Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Apoorva Patil <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> Like this wonderful and best home salon.i am fully satisfied and happy with this..it is highly recommended and best body waxing.... </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Rita Kumari <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> I liked the price as well as services
50% lesser cost  100% satisfied😊
Good work Golden Honey - Home Service.... </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Sunakhshi Khan <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> Golden Honey Home Services is best in patna
I have tried many other but best is Golden Honey
Good Job 👍</Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Binni Kumari <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>I took facial, haircut,so many times in this salon only beacause this salon is the best. (Maya) is one of the best staff for girls.Her work is mindblowing. I think Golden Honey is the best salon in Patna. So, from me 5 stars. </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Payal Singh<img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> All that fascinated me towards the group is, it's customer service.... Expectations with service came very true....  Worth being a part of the group... Surely would love to visit the group again..... </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Shobha Gupta <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> Golden Honey service is awesome and there beautician reached on time. Beautician Meena Sinha ka work is excellent and her nature is very good...</Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Sumedha Kohli <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text> ...Service was just awesome...The beautician arrived on time..she did all the services perfectly.. I like face massage specially..
I will recommend this to everyone
Will not go parlour </Card.Text>
                </Card>
            </div>
            <div>
                <Card>
                    <Card.Title><i className='fas fa-user' /> Ruchi Mittal <img src="images/google.png" alt='googlr' /></Card.Title>
                    <div className='rating'>
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                        <i className='fas fa-star' />
                    </div>
                    <Card.Text>Golden honey home salon is really excellent and outstanding
.its works very well.  Highly recommend
Will not go parlour </Card.Text>
                </Card>
            </div>
            </Carousel>
        </Container>
    </div>
  )
}

export default Review
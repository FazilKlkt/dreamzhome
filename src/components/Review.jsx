import { Carousel, Card } from 'react-bootstrap';
import './Review.css';

function Review() {
    return (
       <div >
           <div className='head'>Testimonials</div>
            <Carousel style={{ width: '50rem', height: '13rem',marginTop:'2rem' }} interval={5000} controls={true} indicators={false}>
            <Carousel.Item >
                <Card >
                    <Card.Body className='itm'>
                        <blockquote className="blockquote mb-0" >
                            <p>
                                {' '}
                                "Did a fabulous job with our home interiors. Good quality and on time delivery.Professional and reasonably priced."{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Robbi J
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item   >
                <Card>
                    <Card.Body className='itm'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                "Dreamz Home Studio did great interiors for our new home...if you want good quality & elegant interiors with on time execution ... go with them...Thanks Parvez & Vijaylakshmi... all the best!"{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Vinita g
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item >
                <Card>
                    <Card.Body className='itm'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                "One of Young Team interior designing, they know actual design concept and good workout on our requirements..They provide range of contemporary design options with 2D & 3D designs. they provide a view of our dream house.. Good and Professional interior designers with You can expect better finish on all work took place."{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Rakesh r
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item   >
                <Card>
                    <Card.Body className='itm'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
					            "Fabulous design company these guys are too good with all modern and a lot of varities. Really this is best interiors design company in Bangalore."
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                            Shah Alam
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item   >
                <Card>
                    <Card.Body className='itm'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                "We cancelled our contract with homelane and gave our dream house project to these young entrepreneurs  Parvez and Vijayshree . It was really worth the decision . They made our dream come true be it choice of material or paint colours or designing it would all just perfect . We strongly recommend them.""
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                            Shweta Sachdeva
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Carousel.Item>

            <Carousel.Item   >
                <Card>
                    <Card.Body className='itm'>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                "Good job done buy guys , they finished my flat design as well as complete execution work.. it has come out nice & I appreciate their co ordination till the end of project it was really hustle free."
                                {' '}
                            </p>
                            <footer className="blockquote-footer">
                            Deepika jain
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
       </div>
    );
}

export default Review;
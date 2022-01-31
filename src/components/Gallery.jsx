import { Card, CardImg, Carousel } from 'react-bootstrap';
import './Gallery.css';

function Gallery() {
    let imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <div className='gallery'>
            <div className="head" style={{ marginTop: '-0.5rem', marginBottom: '0.1rem' }}>Gallery</div>
            <Carousel style={{ width: '50rem', height: 'fit-content' }} interval={5000} controls={true} indicators={false}>
                {imgs.map((img) => {return (
                    <Carousel.Item >
                        <div>
                            <Card >
                                <CardImg style={{ height: '35rem'}} src={window.location.origin + "/images/" + img.toString() + ".png"}></CardImg>
                            </Card>
                        </div>
                    </Carousel.Item>)
                })}
            </Carousel>
        </div>
    );
}

export default Gallery;
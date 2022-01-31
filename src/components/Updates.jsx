import { useState } from 'react';
import { Carousel, Button, Card, Modal } from 'react-bootstrap';
import './Updates.css';

function Updates() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    return (
        <div className='update' >
            <a id='updates' href='#'></a>
            <div className="head" style={{ marginTop: '-0.5rem', marginBottom: '0.1rem' }}>Updates</div>
            <Carousel style={{ width: '50rem', height: 'max-content', }} interval={5000} controls={true} indicators={false}>
                <Carousel.Item >
                    <Card style={{ height: '14rem' }}>
                        <div style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '1rem' }}>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>6 Ways to Create an Entryway When There Isn't One.. Wondered what’s the first impression your guests make of your home, as you open the door and let them in? Are they greeted by an abrupt highback placed inside the living room, a large dining area or a daunting staircase?</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img style={{ width: '29rem' }} src={window.location.origin + "/images/up1.png"} alt="window"></img>
                                    <br></br><br></br>
                                    Wondered what's the first impression your guests make of your home, as you open the door and let them in? Are they greeted by an abrupt highback placed inside the living room, a large dining area or a daunting staircase? Believe it or not, an entrance can set a positive tone for the overall look feel of your home
                                    <br></br><br></br>
                                    1. A mirror creates space
                                    A mirror gives the illusion of extended space and makes a room seem bigger. When there isn't a proper entrance to a home, consider placing a large mirror (or more) a little ahead of the door, it'll give the perception of an extended space or an entryway that leads up to the living room.
                                    <br></br><br></br>
                                    2. A console is ideal…
                                    Hijack the corner next to your door with a furniture piece
                                    Or open shelves
                                    You could choose to install open storage shelves, too, on the wall next to the door…
                                    <br></br><br></br>
                                    3. Why not add a seat?
                                    Consider placing a chair or a bench opposite the front door.
                                    <br></br><br></br>
                                    4. Art always wins
                                    Create a dramatic and tasteful entrance by putting an artwork by the entrance.
                                    <br></br><br></br>
                                    5. Curtains are fantastic
                                    This style of drapes seems to give a curtain-raiser quality to the living room.
                                    <br></br><br></br>
                                    6. Sofa placement
                                    A rather subtle and unconventional way to create the illusion of an entrance is by placing a sofa along the length of a long room, with its back towards the front door.</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><p style={{ color: 'red', marginTop: '1rem' }}>Posted on May-23-2021</p>
                                <p>6 Ways to Create an Entryway When There Isn't One.. Wondered what's the first impression your guests make of your home, as you open the door and let them in? Are they greeted by an abrupt highback placed inside the living room, a large dining area or a daunting staircase? Believe it or not,  an entrance can set a positive tone for the overall look feel of your home</p>
                                <Button variant='primary' onClick={handleShow}>Show more</Button></div>

                        </div>
                    </Card>
                </Carousel.Item>

                <Carousel.Item >
                    <Card style={{ height: '14rem' }}>
                        <div style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '1rem' }}>
                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>How to Design a Home That Enhances Wellbeing Find out how science can help you create a home that’s good for your physical and mental health.</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img style={{ width: '29rem' }} src={window.location.origin + "/images/up2.png"} alt="health"></img>
                                    <br></br><br></br>
                                    Keep calm
                                    <br></br><br></br>
                                    “I suggest the most important neuroarchitectural principle is to design around people, and not the TV,” Eve Edelstein says. “Position yourself to enjoy the sun when it's out, make quiet spots for study, and create spaces that support the value of people coming together.”
                                    <br></br><br></br>
                                    Let there be light
                                    <br></br><br></br>
                                    Exposure to light is important for maintaining our body's natural rhythm, and sunlight during the day is key. “The science of vision informs us that daylight is more powerful than electric light,” Eve says. “Begin with the architecture and the location of windows for sunlight, and arrange furniture and shading to allow for morning light, to shade intense heat, and to provide darkness at night.
                                    <br></br><br></br>
                                    Be smart with space
                                    <br></br><br></br>
                                    The key is to design a room that feels spacious and functions well, rather than focusing on size or whether it's open-plan or not. This tiny living room, for example, has been designed with plenty of glazing to bring in a connection to the outside, and the layout ensures there's a feeling of flow.
                                    <br></br><br></br>
                                    Tone it down
                                    <br></br><br></br>
                                    Shut out the noise
                                    <br></br><br></br>
                                    Connect with nature
                                    <br></br><br></br>
                                    Cull the clutter
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>

                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p style={{ color: 'red', marginTop: '1rem' }}>Posted on Sep-04-2021</p>
                                <p>How to Design a Home That Enhances Wellbeing,Find out how science can help you create a home that’s good for your physical and mental health. Let there be light.Shut out the noise.Keep simple yet calming props that will keep your mind at ease.Keep books near you and get the dedication to be a productive person. </p>
                                <Button variant='primary' onClick={handleShow2}>Show more</Button>
                            </div>
                        </div>
                    </Card>
                </Carousel.Item>


                <Carousel.Item >
                    <Card style={{ paddingLeft: '3rem', paddingRight: '3rem', paddingBottom: '1rem', height: '14rem' }}>
                        <div >
                            <Modal show={show3} onHide={handleClose3}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Many people are drawn to the cool colours, clean lines and minimalist shapes that characterise a modern decor style. And some of these people want their kitchen to feel like a cozy and inviting gathering space too. So what do you do when you desire the cool vibes of modern style but also crave warmth? You plan a warm contemporary kitchen. Here’s our guide</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <img style={{ width: '29rem' }} src={window.location.origin + "/images/up3.png"} alt="kitchen"></img>
                                    <br></br><br></br>
                                    “The first thing you think of in contemporary kitchens is clean lines and not a lot of adornment or overly decorative features,” says Ginger Curtis of Urbanology Designs. Colour schemes can vary, but classic choices include white, cream, tan, beige, grey and black, and sometimes a mix of these colours. Palettes tend to be “slightly more monochromatic,” Curtis adds, while patterns tend to be more minimal or uniform.
                                    <br></br><br></br>
                                    Choose contemporary shapes-
                                    The secret to getting a warm contemporary kitchen is by building a foundation of shapes that embodies contemporary style. From there, you can add features – in the form of colour or material – that bring warmth to a kitchen. “Achieving a contemporary look that is also warm requires attention to balance, proportion and combinations of finishes, colours, textures that bring the space to life,” says, senior designer at Décor Dreamz... To get started, let’s look at the basic shapes and elements that set the stage.
                                    <br></br><br></br>
                                    please get in Touch with us for More Details on Design.. We are one click away.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose3}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}><p style={{ color: 'red', marginTop: '1rem' }}>Posted on Jan-23-2021</p>
                                <p>How to Design a Warm Contemporary Kitchen. Many people are drawn to the cool colours, clean lines and minimalist shapes that characterise a modern decor style. And some of these people want their kitchen to feel like a cozy and inviting gathering space too. So what do you do when you desire a good kitchen?</p>
                                <Button variant='primary' onClick={handleShow3}>Show more</Button></div>

                        </div>
                    </Card>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default Updates;
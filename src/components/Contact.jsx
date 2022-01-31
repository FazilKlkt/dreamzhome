import './Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <a id='contactus'></a>
            <div className="head" style={{ marginTop: '-0.5rem', marginBottom: '0.1rem' }}>Contact Us</div>
            <div style={{ display: 'flex', marginRight: '1rem' }}>
                <div>
                    <div>
                        <br />
                        <p className="topic">Mobile</p>
                        <p className="desc">082963 55552</p>
                        <br />
                    </div>
                    <div>
                        <br />
                        <p className="topic">Address</p>
                        <p className="desc">
                            Netaji road <br></br>
                            4th main<br></br>
                            Bengaluru, Karnataka 560028<br></br>
                            India</p>
                    </div>
                </div>
                <div>
                    <br />
                    <p className="topic">Working Hours</p>
                    <p className="desc">Mon-Sat : 10:00 am – 8:00 pm<br></br>Sun : Closed</p>
                </div>
                <div style={{ marginLeft: '1rem' }}>
                    <br />
                    <p className="topic">Google Map Location</p>
                    <a href="https://g.page/Topinteriors?share">
                    <img alt='loc' src={window.location.origin+'/images/map.png'}   style={{ height: '20rem' }} /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
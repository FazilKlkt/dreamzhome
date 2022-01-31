import './Header.css';

function Header() {
    return (
        <div className='header'>
            <div className='typo'>
                <span className='txt'>DREAMZ HOME</span>
                <span className='txt'>STUDIO</span>
                <span className='txt'>INTERIOR DESIGNS</span>
            </div>
            <div className='sep'></div>
            <div className='btns'>
                <a href="#updates" className='btn-child' >Updates</a>
                <a href="https://g.page/Topinteriors?share" className='btn-child' >About Us</a>
                <a href="#contactus" className='btn-child'>Contact Us</a>
            </div>
        </div>
    );
}

export default Header;

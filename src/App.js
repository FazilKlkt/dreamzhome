import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Review from './components/Review';
import Gallery from './components/Gallery';
import Updates from './components/Updates';
import Contact from './components/Contact';
import { Button, Form, FormText, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';

function App() {
    return (
        <div className='section'>
            
            <div className="content dark">
                <Header />
            </div>
            <div className="content mild" style={{ display: 'flex', justifyContent: 'center' }}>
                <Review />
            </div>
            <div className="content pale" style={{ display: 'flex', justifyContent: 'center' }}>
                <Gallery />
            </div>
            <div className="content mild" style={{ display: 'flex', justifyContent: 'center' }}>
                <Updates />
            </div>
            <div className="content dark" style={{ display: 'flex', justifyContent: 'center' }}>
                <Contact />
            </div>
        </div>
    );
}

export default App;

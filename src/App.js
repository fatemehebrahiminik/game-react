import HeaderSection from './components/HeaderSection';
import BodySection from './components/BodySection';
import FooterSection from './components/FooterSection';

import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Container>
                <HeaderSection />
                <BodySection />
                <FooterSection />
            </Container>
        </div>
    );
}

export default App;

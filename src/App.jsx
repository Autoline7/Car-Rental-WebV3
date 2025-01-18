import Nav from "./components/Nav.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home.jsx";
import Models from "./pages/Models.jsx";


function App(){
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/models" element={<Models/>}/>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
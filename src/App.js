import './App.css';
import { BrowserRouter as Router ,Routes, Route,} from 'react-router-dom';
import MainPage from './FrontEnd/MainPage';
import Contact from './FrontEnd/Contact/Contact';
import Services from './FrontEnd/Services/Services';
import About from './FrontEnd/About/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="Services" element={<Services/>} />
        <Route path="about" element={<About/>} />


      </Routes>
    </Router>
    </div>
  );
}

export default App;

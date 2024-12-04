import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Services from './Component/Services/Services';

function App() {
  return (
    <div className="App">
       <Navigation/>
       <About/>
       <Footer/>
    </div>
  );
}

export default App;

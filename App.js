import './App.css';
import About from './about/About';
import Footer from './footer/Footer';
import Home from './home/Home';
import Services from './services/Services';
import Work from './work/Work';

function App() {
  return (
    <div className="App">
   <Home/>
   <Work/>
   <About/>
   <Services/>
   <Footer/>
    </div>
  );
}

export default App;

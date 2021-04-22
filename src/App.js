import './App.css';
import Header from '../src/components/sections/Header.js';
import Herosection from './components/sections/HeroSection';
import About from './components/sections/About';

function App() {
  return (
    <div className="App">
      <Header/>
      <Herosection/>
      <About/>
    </div>
  );
}

export default App;

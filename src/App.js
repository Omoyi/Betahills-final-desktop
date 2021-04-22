import './App.css';
import Header from '../src/components/sections/Header.js';
import Herosection from './components/sections/HeroSection';
import About from './components/sections/About';
import Process from './components/sections/Process';

function App() {
  return (
    <div className="App">
      <Header/>
      <Herosection/>
      <About/>
      <Process/>
    </div>
  );
}

export default App;

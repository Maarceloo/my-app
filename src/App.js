import './App.css';
import { Component } from 'react';
import About from './Pages/About';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About/>
        <Footer />
      </div>
    )
  }
}

export default App;

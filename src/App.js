import logo from './logo.svg';
import './App.css';
import NavBar from './components/functionalComponents/NavBar';
import About from './components/functionalComponents/About'
import Skills from './components/functionalComponents/skills';
import Home from './components/functionalComponents/Home'
import Login from './components/functionalComponents/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element = {<Home/>}></Route>
        <Route path="/About" element = {<About/>}></Route>
        <Route path="/skills" element = {<Skills/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import SpellSearch from './components/SpellSearch/SpellSearch';

function App() {
  return (
    <>
      <img className='App-logo' src={logo} alt="" />
      <h1>React Dungeons and Dragons Practice</h1>
      <Routes>
        <Route path="/" element={<SpellSearch />}/>
      </Routes>
    </>
  );
}

export default App;

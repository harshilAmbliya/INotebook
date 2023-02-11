import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Contact from './Components/Contact';
import NoteState from './contaxt/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route index exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/contact' element={<Contact />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;

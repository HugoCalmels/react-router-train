import React from 'react';
import ReactDOM from 'react-dom';

// 1er composant du react-router-dom ( optionnel )
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Documentation from './pages/Documentation'
import NavBar from './components/Navbar'

const App = () => {


  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <main>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/documentation' element={<Documentation />} />
        </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
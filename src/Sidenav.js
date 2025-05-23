import React, { useState } from 'react';
import './App.css';
import './Sidenav.css'

function Sidenav() {
   const [isOpen, setIsOpen] = useState(false);

   return (
       <div>
           <button className="openbtn" onClick={() => setIsOpen(true)}>☰ Open Sidenav</button>
           <div className={`sidenav ${isOpen ? 'show' : ''}`}>
               <a href="#about">About</a>
               <a href="#projects">Projects</a>
               <a href="#contact">Contact</a>
               <a onClick={() => setIsOpen(false)}>Close</a>
           </div>
       </div>
   );
}

export default Sidenav;

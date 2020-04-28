import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Remote from "./remote/Remote";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

const App = () => (
    <div className='App'>
        <div className='portfolio'>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Remote/>
            <Contacts/>
            <Footer/>
        </div>
    </div>
);
export default App;

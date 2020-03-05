import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Slogan from "./components/Slogan";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => (
    <div className='App'>
        <div className='portfolio'>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Slogan/>
            <Contacts/>
            <Footer/>
        </div>
    </div>
);
export default App;

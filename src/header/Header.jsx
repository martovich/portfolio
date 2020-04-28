import React from 'react';
import s from './Header.module.css';
import Nav from "../nav/Nav";

const Header = () => (
    <div className={s.header}>
        <div className={s.container}>
            <Nav />
        </div>
    </div>
);
export default Header;

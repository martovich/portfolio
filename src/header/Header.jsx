import React from 'react';
import s from './Header.module.css';
import NavHeader from "../nav/navHeader/NavHeader";

const Header = () => (
    <div className={s.header}>
        <div className={s.container}>
            <NavHeader />
        </div>
    </div>
);
export default Header;

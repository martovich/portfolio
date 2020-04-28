import React from 'react';
import s from "./Footer.module.css";
import NavFooter from "../nav/navFooter/NavFooter";

const Footer = () => (
    <div className={s.footerBlock}>
        <div className={s.container}>
            <h2>Артём</h2>
            <div className={s.linksSocial}>
                <NavFooter />
            </div>
            <p> © 2020 Все права защищены.</p>
        </div>
    </div>
);
export default Footer;

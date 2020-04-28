import React from 'react';
import s from './Main.module.css';

const Main = () => (
    <div className={s.main}>
        <div className={s.container}>
            <div className={s.greeating}>
                <span>Привет!</span>
                <h1>Меня зовут...</h1>
                <p>Я Front-end...</p>
            </div>
            <div className={s.photo}>
                <img src="" alt=""/>
            </div>
        </div>
    </div>
);
export default Main;

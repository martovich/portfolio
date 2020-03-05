import React from 'react';
import styles from '../modules/Main.module.css';

const Main = () => (
    <div className={styles.main}>
        <div className={styles.container}>
            <div className={styles.greeating}>
                <span>Привет!</span>
                <span>Меня зовут...</span>
                <span>Я Front-end...</span>
            </div>
            <div className={styles.photo}>
                <img src="" alt=""/>
            </div>
        </div>
    </div>
);
export default Main;

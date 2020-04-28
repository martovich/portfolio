import React from 'react';
import s from "./Contacts.module.css";

const Contacts = () => (
    <div className={s.contactsBlock}>
        <div className={s.container}>
            <h2>Контакты</h2>
            <form className={s.contactForm} action="">
                <input type="text"/>
                <input type="text"/>
                <textarea>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, facere!</textarea>
            </form>
            <button>Нанять</button>
        </div>
    </div>
);
export default Contacts;

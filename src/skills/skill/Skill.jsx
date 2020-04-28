import React from 'react';
import s from "./Skill.module.css";

const Skill = (props) => (
    <div className={s.skillBlock}>
        <div className={s.icon}></div>
        <h3 className={s.text}>{props.title}</h3>
        <span className={s.description}>{props.description}</span>
    </div>

);
export default Skill;

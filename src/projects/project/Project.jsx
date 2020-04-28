import React from 'react';
import s from './Project.module.css';

const Project = (props) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.image}></div>
            <h3>{props.name}</h3>
            <span>{props.description}</span>
        </div>
    );
};
export default Project;

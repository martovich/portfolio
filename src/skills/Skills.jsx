import React from 'react';
import s from "./Skills.module.css";
import Skill from "./skill/Skill";

const Skills = () => (
    <div className={s.skillsBlock}>
        <div className={s.container}>
            <h2 className={s.title}>Мои скиллы</h2>
            <div className={s.skills}>
                <Skill title='js'
                       description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, nemo!'/>
                <Skill title='css'
                       description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur expedita molestias quidem ratione tempore veniam?'/>
                <Skill title='react' description='Lorem ipsum dolor sit amet, consectetur adipisicing.'/>
            </div>
        </div>
    </div>
);
export default Skills;

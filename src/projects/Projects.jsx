import React from 'react';
import s from './Projects.module.css';
import Project from "./project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={s.container}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.projects}>
                    <Project name='Test1'
                             description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi ea eaque est et excepturi, laudantium modi obcaecati totam velit. Asperiores assumenda autem commodi consectetur consequatur debitis dolorum eaque enim expedita harum illum impedit itaque iusto libero necessitatibus, nihil nostrum, perspiciatis provident quidem, quisquam similique suscipit tempore veritatis. Laboriosam, praesentium!'/>
                    <Project name='Test2'
                             description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut fugit inventore iste porro reiciendis similique. Dignissimos illo laboriosam nihil, pariatur provident ratione rem tempore.'/>
                </div>
            </div>
        </div>

    );
};
export default Projects;

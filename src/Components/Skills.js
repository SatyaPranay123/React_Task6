import React from 'react';
import './Skills.css';
import computer from './skills..jpeg';

function SkillCategory(props) {
  return (
    <div className={`col-4 skills-category ${props.bgColor}`}>
      <h2>{props.title}</h2>
      <ul className="skills-list">
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export function Skills() {
  const languageSkills = ['Java', 'Python', 'SQL', 'R'];
  const webDevelopmentSkills = ['HTML', 'CSS', 'JavaScript', 'Bootstrap Framework', 'React Framework'];
  const tools = ['VS Code', 'MySQL', 'MATLAB'];

  return (
    <div className="skills-container">
      <div className="row skills-header">
        <div className="col-4">
          <img src={computer} alt="Computer" className="skills-image" />
        </div>
        <div className="col-md-6 mx-auto d-flex align-items-center">
          <div className="text-center">
            <h1 className="skills-title">S K I L L S</h1>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <SkillCategory title="LANGUAGE SKILLS" bgColor="bg-warning" skills={languageSkills} />
        <SkillCategory title="WEB DEVELOPMENT" bgColor="bg-success" skills={webDevelopmentSkills} />
        <SkillCategory title="TOOLS" bgColor="bg-warning" skills={tools} />
      </div>
    </div>
  );
}

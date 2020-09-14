import Project from './projects';
import Elements from './elements';

const Logic = (() => {
  const nextprojectId = localStorage.length + 1;

  const validateProjectName = name => (name !== '');

  const addProject = name => {
    if (validateProjectName(name)) {
      const project = JSON.stringify(new Project(nextprojectId, name));
      localStorage.setItem(nextprojectId, project);
      return true;
    }
    return false;
  };

  const allProjects = () => {
    const projectsAll = localStorage;
    const allProjectsContainer = Elements.tag('div', '', 'p-list', 'p-list');
    for (let i = 1; i <= projectsAll.length; i += 1) {
      const prjt = Elements.tag('p', `-> ${JSON.parse(projectsAll[i]).name}`);
      allProjectsContainer.appendChild(prjt);
    }
    return allProjectsContainer;
  };


  return { addProject, allProjects };
})();

export default Logic;
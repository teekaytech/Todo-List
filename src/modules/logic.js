import Project from './projects';
import Elements from './elements';

const Logic = (() => {
  const validateProjectName = name => (name !== '');

  const addProject = name => {
    if (validateProjectName(name)) {
      const nextprojectId = localStorage.length + 1;
      const project = JSON.stringify(new Project(nextprojectId, name));
      localStorage.setItem(nextprojectId, project);
      return true;
    }
    return false;
  };

  const allProjects = () => {
    const allProjectsContainer = Elements.tag('div', '', 'p-list', 'p-list');


    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const prjt = Elements.tag(
        'p',
        `-> ${JSON.parse(localStorage.getItem(key)).name}`,
        'p',
        'p',
      );

      prjt.innerHTML += '<button class="delete-p" id="delete-p">x</button>';
      allProjectsContainer.appendChild(prjt);
    }

    return allProjectsContainer;
  };


  return { addProject, allProjects };
})();

export default Logic;
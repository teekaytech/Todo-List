/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

import Project from './projects';
import Elements from './elements';

const Logic = (() => {
  const validateProjectName = name => (name !== '');

  const addProject = name => {
    if (validateProjectName(name)) {
      const nextprojectId = localStorage.length;
      const project = JSON.stringify(new Project(nextprojectId, name));
      localStorage.setItem(nextprojectId, project);
      return true;
    }
    return false;
  };

  const getProject = (id) => JSON.parse(localStorage.getItem(id));

  const allProjects = () => {
    const allProjectsContainer = Elements.tag('div', '', 'p-list', 'p-list');
    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      const prjt = Elements.tag('p', `> ${getProject(key).name}`, `${key}`, 'p');

      prjt.innerHTML += `<button class="add-todo" id="${key}">+</button>`;
      prjt.innerHTML += `<button class="delete-p" id="${key}">x</button>`;
      allProjectsContainer.appendChild(prjt);
    }

    return allProjectsContainer;
  };

  const deleteProject = id => {
    let check;

    if (id === '0') {
      check = confirm('This is the default Project. Are you sure you want to delete?');
    } else {
      check = confirm('This project and its tasks (todo) will be deleted. Are you sure?');
    }

    if (check === true) {
      localStorage.removeItem(id);
      return true;
    }
    return false;
  };

  return {
    addProject, allProjects, deleteProject, getProject,
  };
})();

export default Logic;
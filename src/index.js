/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import Dom from './modules/dom';
import createDefault from './modules/default';
import Logic from './modules/logic';
import './assets/styles.scss';

const {
  render,
  showForm,
  hideForm,
  newTodo,
  closeButton,
  newProjectButton,
} = Dom;

render();
createDefault.dProject();

newTodo.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  showForm(modal);
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modal');
  hideForm(modal);
});

newProjectButton.addEventListener('click', () => {
  const name = document.getElementById('project-name').value;
  if (name) {
    Logic.addProject(name);
    location.reload();
  } else {
    alert('Project name cannot be blank');
  }
});

const deleteProject = document.querySelectorAll('.delete-p');
deleteProject.forEach(project => {
  project.addEventListener('click', () => {
    Logic.deleteProject(project.id);
    location.reload();
  });
});

const currentProjects = document.querySelectorAll('.p');
currentProjects.forEach((project) => {
  project.addEventListener('click', () => {
    console.log(project.id);
    // location.reload();
  });
});
/* eslint-disable no-restricted-globals */
import Dom from './modules/dom';
import createDefault from './modules/default';
import Logic from './modules/logic';
import './assets/styles.scss';

const {
  projects,
  todos,
  container,
  render,
  showForm,
  hideForm,
  newTodo,
  closeButton,
  newProjectButton,
} = Dom;

render(projects, todos, container);
createDefault.dProject();

newTodo.addEventListener('click', () => {
  const modal = document.getElementById('modal');
  showForm(modal);
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modal');
  hideForm(modal);
  render(projects, todos, container);
});

newProjectButton.addEventListener('click', () => {
  const name = document.getElementById('project-name').value;
  Logic.addProject(name);
  location.reload();
});

const deleteProject = document.querySelectorAll('.delete-p');
deleteProject.forEach(project => {
  project.addEventListener('click', () => {
    Logic.deleteProject(project.id);
    location.reload();
  });
});
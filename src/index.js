import Dom from './modules/dom';
import createDefault from './modules/default';
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
localStorage.clear();
createDefault.dProject();

newTodo.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modal');
  showForm(modal);
});

closeButton.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modal');
  hideForm(modal);
});

newProjectButton.addEventListener('click', (e) => {
  e.preventDefault();
  // const name = document.getElementById('project-name').value;
  render(projects, todos, container);
});
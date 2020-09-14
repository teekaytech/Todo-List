import Dom from './modules/dom';
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
  alert('Okay');
});
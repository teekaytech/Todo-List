/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import Dom from './modules/dom';
import createDefault from './modules/default';
import Logic from './modules/logic';
import './assets/styles.scss';

const {
  todoTable,
  todoForm,
  render,
  showForm,
  hideForm,
  closeButton,
  newProjectButton,
} = Dom;

createDefault.dProject();
render();

const addNewTodo = (projectId) => {
  const addTodo = document.querySelector('.create-t');
  addTodo.addEventListener('click', () => {
    const title = document.getElementById('t-title').value;
    const desc = document.getElementById('t-desc').value;
    const dueDate = document.getElementById('t-date').value;
    const priority = document.querySelectorAll('.priority');
    Logic.addTodo(title, desc, dueDate, priority, projectId);
  });
};

const newTodo = document.querySelectorAll('.add-todo');
newTodo.forEach((todoButton) => {
  todoButton.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    showForm(modal);
    addNewTodo(todoButton.id);
  });
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
    const todosContainer = document.getElementById('todos');
    Logic.displayTodos(project.id, todosContainer, todoTable(), todoForm());
  });
});
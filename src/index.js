/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
import Dom from './modules/dom';
import createDefault from './modules/default';
import Logic from './modules/logic';
import './assets/styles.scss';

const {
  notice,
  todoTable,
  todoForm,
  render,
  showForm,
  hideForm,
  closeButton,
  newProjectButton,
  formElements,
} = Dom;

if (createDefault.dProject()) { render(); }

const addNewTodo = (projectId) => {
  const addTodo = document.querySelector('.create-t');
  addTodo.addEventListener('click', (e) => {
    e.preventDefault();
    const f = Logic.getFormData();
    const modal = document.getElementById('modal');
    hideForm(modal);
    Logic.addTodo(notice, f.title, f.desc, f.dueDate, f.priority, projectId);
  });
};

const processDelete = () => {
  const deleteTodoButton = document.querySelectorAll('.delete-todo-button');
  deleteTodoButton.forEach((button) => {
    button.addEventListener('click', () => {
      Logic.deleteTodo(button.dataset.project, button.dataset.todo);
    });
  });
};

const processEdit = () => {
  const editTodoButton = document.querySelectorAll('.edit-todo-button');
  editTodoButton.forEach((button) => {
    button.addEventListener('click', () => {
      const todosCont = document.getElementById('todos');
      const pId = button.dataset.project;
      const tId = button.dataset.todo;
      Logic.editTodo(todosCont, formElements, pId, tId);

      const updateBtn = document.getElementById('update-t');
      updateBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const f = Logic.getFormData(tId);
        Logic.updateTodo(notice, f, pId, tId);
      });
    });
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
    Logic.setNotice(notice, 'Project name cannot be blank');
  }
});

const deleteProject = document.querySelectorAll('.delete-p');
deleteProject.forEach(project => {
  project.addEventListener('click', () => {
    Logic.deleteProject(project.id);
  });
});

const currentProjects = document.querySelectorAll('.p');
currentProjects.forEach((project) => {
  project.addEventListener('click', () => {
    const todosContainer = document.getElementById('todos');
    Logic.displayTodos(project.id, todosContainer, todoTable(), todoForm());
    processDelete();
    processEdit();
  });
});

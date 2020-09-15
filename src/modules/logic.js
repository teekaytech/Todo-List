/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

import Project from './project';
import Todo from './todo';
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
    const projectsSection = Elements.tag('div', '', 'p-list', 'p-list');

    for (let i = 0; i < localStorage.length; i += 1) {
      const key = localStorage.key(i);
      if ((typeof parseInt('key', 10)) === 'number') {
        const project = Elements.tag('div');
        project.appendChild(Elements.tag('p', `> ${getProject(key).name}`, `${key}`, 'p'));
        project.appendChild(Elements.tag('button', '+', key, 'add-todo'));
        project.appendChild(Elements.tag('button', 'x', key, 'delete-p'));

        projectsSection.appendChild(project);
      }
    }
    return projectsSection;
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

  const checkTodo = (title, desc, date) => title !== ''
  && desc !== ''
  && date !== '';

  const checkPriority = (priority) => {
    const priorities = Array.from(priority);
    let status = false;
    priorities.forEach((p) => {
      if (p.checked === true) {
        status = p.id;
      }
    });
    return status;
  };

  const storeTodo = (catId, todo) => {
    const todoProject = getProject(catId);
    todoProject.todoList.push(todo);
    localStorage.setItem(catId, JSON.stringify(todoProject));
    alert('Todo added successfully.');
  };

  const addTodo = (title, desc, date, priorities, catId) => {
    const priority = checkPriority(priorities);
    if (checkTodo(title, desc, date) && priority) {
      const newTodo = new Todo(title, desc, date, priority);
      storeTodo(catId, newTodo);
    } else {
      alert('All fields are compulsory.');
    }
  };

  const displayTodos = (id, todoContainer, table, form) => {
    const thisProject = getProject(id);
    const todos = thisProject.todoList;

    todoContainer.innerHTML = '';
    todoContainer.appendChild(Elements.tag('p', `Current Project: ${thisProject.name}`, 't-header', 't-header'));

    todos.forEach((todo) => {
      const tr = Elements.tag('tr');
      tr.appendChild(Elements.tag('td', ''));
      tr.appendChild(Elements.tag('td', todo.title));
      tr.appendChild(Elements.tag('td', new Date(todo.dueDate).toUTCString()));

      const td = Elements.tag('td', '', 'todo-action', 'todo0action');
      td.innerHTML = `
      <span class="edit-todo-button" id="edit-todo-button">&#128221;</span>
      <span class="delete-todo-button" id="delete-todo-button">&#128686;</span>`;

      tr.appendChild(td);
      table.appendChild(tr);
    });

    todoContainer.appendChild(table);
    todoContainer.appendChild(form);
  };

  return {
    addProject,
    allProjects,
    deleteProject,
    getProject,
    addTodo,
    displayTodos,
  };
})();

export default Logic;
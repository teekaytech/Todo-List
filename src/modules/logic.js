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
      const project = JSON.stringify(new Project(nextprojectId + 1, name));
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
      location.reload();
    }
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

  const storeTodo = (catId, title, desc, date, priority) => {
    const todoProject = getProject(catId);
    const newId = todoProject.todoList.length + 1;
    const newTodo = new Todo(newId, title, desc, date, priority);
    todoProject.todoList.push(newTodo);
    localStorage.setItem(catId, JSON.stringify(todoProject));
    alert('Todo added successfully.');
  };

  const addTodo = (title, desc, date, priorities, catId) => {
    const priority = checkPriority(priorities);
    if (checkTodo(title, desc, date) && priority) {
      storeTodo(catId, title, desc, date, priority);
    } else {
      alert('All fields are compulsory.');
    }
  };

  const makeIcons = (pId, tId) => {
    const td = Elements.tag('td', '', 'todo-action', 'todo0action');
    td.innerHTML = `
      <span class="edit-todo-button" id="edit-todo-button" data-project="${pId}" data-todo="${tId}">
        &#128221;
      </span>
      <span class="delete-todo-button" id="delete-todo-button" data-project="${pId}" data-todo="${tId}">
        &#128686;
      </span>
      `;
    return td;
  };

  const displayTodos = (id, todoContainer, table, form) => {
    const thisProject = getProject(id);
    const todos = thisProject.todoList;

    todoContainer.innerHTML = '';
    todoContainer.appendChild(Elements.tag('p', `Current Project: ${thisProject.name}`, 't-header', 't-header'));

    todos.forEach((todo) => {
      const tr = Elements.tag('tr');
      tr.appendChild(Elements.tag('td', todo.id));
      tr.appendChild(Elements.tag('td', todo.title));
      tr.appendChild(Elements.tag('td', new Date(todo.dueDate).toUTCString()));
      tr.appendChild(makeIcons(thisProject.id, todo.id));
      table.appendChild(tr);
    });

    todoContainer.appendChild(table);
    todoContainer.appendChild(form);
  };

  const updateStorage = (id, project) => {
    localStorage.setItem(id, JSON.stringify(project));
    return true;
  };

  const deleteTodo = (pId, tId) => {
    const thisProject = getProject(pId - 1);
    thisProject.todoList.splice((tId - 1), 1);
    if (updateStorage(pId - 1, thisProject)) {
      location.reload();
      alert('Task successfully deleted!');
    }
  };

  return {
    addProject,
    allProjects,
    deleteProject,
    getProject,
    addTodo,
    displayTodos,
    deleteTodo,
  };
})();

export default Logic;
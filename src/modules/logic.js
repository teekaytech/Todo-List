/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */

import Project from './project';
import Todo from './todo';
import Elements from './elements';

const Logic = (() => {
  const validateProjectName = name => (name !== '');
  const getAllProjects = () => JSON.parse(localStorage.getItem('todoapp'));

  const addProject = name => {
    if (validateProjectName(name)) {
      const all = getAllProjects();
      all.push(new Project(all.length + 1, name));
      localStorage.setItem('todoapp', JSON.stringify(all));
      return true;
    }
    return false;
  };

  const reloadPage = (status) => {
    if (status) {
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  };

  const setNotice = (notice, msg, bg = '', reload = false) => {
    notice.innerText = msg;
    if (bg !== '') { notice.style.background = bg; }
    reloadPage(reload);
    notice.style.display = 'block';
    setTimeout(() => {
      notice.innerText = '';
      notice.style.display = 'none';
    }, 3000);
  };

  const allProjects = () => {
    const projectsSection = Elements.tag('div', '', 'p-list', 'p-list');
    const myProjects = getAllProjects();
    for (let i = 0; i < myProjects.length; i += 1) {
      const project = Elements.tag('div');
      project.appendChild(Elements.tag('p', `> ${myProjects[i].name}`, i, 'p'));
      project.appendChild(Elements.tag('button', '+', i, 'add-todo'));
      if (i !== 0) { project.appendChild(Elements.tag('button', 'x', i, 'delete-p')); }
      projectsSection.appendChild(project);
    }
    return projectsSection;
  };

  const deleteProject = (id) => {
    const check = confirm('This project and its tasks (todo) will be deleted. Are you sure?');
    if (check === true) {
      const allP = getAllProjects();
      allP.splice(id, 1);
      localStorage.setItem('todoapp', JSON.stringify(allP));
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
    const getAll = getAllProjects();
    const thisProjectTodo = getAll[catId].todoList;
    const newTodo = new Todo(thisProjectTodo.length + 1, title, desc, date, priority);
    thisProjectTodo.push(newTodo);
    localStorage.setItem('todoapp', JSON.stringify(getAll));
  };

  const addTodo = (notice, title, desc, date, priorities, catId) => {
    const priority = checkPriority(priorities);
    if (checkTodo(title, desc, date) && priority) {
      storeTodo(catId, title, desc, date, priority);
      setNotice(notice, 'Todo added successfully.', 'green', true); return;
    }
    setNotice(notice, 'All fields are compulsory.');
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

  const editTodoForm = (form, pId, tId) => {
    const todo = getAllProjects()[pId - 1].todoList[tId - 1];
    const editForm = form(todo.title, todo.desc, todo.dueDate);
    return editForm;
  };

  const getFormData = (tId = '') => {
    const title = document.getElementById(tId === '' ? 't-title' : 'tu-title').value;
    const desc = document.getElementById(tId === '' ? 't-desc' : 'tu-desc').value;
    const dueDate = document.getElementById(tId === '' ? 't-date' : 'tu-date').value;
    const priority = document.querySelectorAll(tId === '' ? '.priority' : '.u-priority');
    return {
      title, desc, dueDate, priority,
    };
  };

  const setPriorityColor = (priority) => {
    if (priority.innerText === 'High') {
      priority.classList.add('high');
    } else if (priority.innerText === 'Medium') {
      priority.classList.add('medium');
    } else {
      priority.classList.add('low');
    }
    return priority;
  };

  const displayTodos = (pId, todoContainer, table, form) => {
    const thisProject = getAllProjects()[pId];
    const todos = thisProject.todoList;

    todoContainer.innerHTML = '';
    const hd = Elements.tag('p', `Current Project: ${thisProject.name}`, 't-header', 't-header');
    todoContainer.appendChild(hd);

    todos.forEach((todo) => {
      const tr = Elements.tag('tr');
      tr.appendChild(Elements.tag('td', todo.id));
      tr.appendChild(Elements.tag('td', todo.title));
      tr.appendChild(Elements.tag('td', new Date(todo.dueDate).toUTCString()));
      tr.appendChild(setPriorityColor(Elements.tag('td', todo.priority)));
      tr.appendChild(makeIcons(thisProject.id, todo.id));
      table.appendChild(tr);
    });

    todoContainer.appendChild(table);
    todoContainer.appendChild(form);
  };

  const updateStorage = (project) => {
    localStorage.setItem('todoapp', JSON.stringify(project));
    return true;
  };

  const checkLastChild = (container) => {
    const lastItem = container.lastChild;
    if (lastItem.className === 'update-todo') {
      container.removeChild(lastItem);
    }
  };

  const deleteTodo = (pId, tId) => {
    if (confirm('Are you sure you want to delete this task?')) {
      const findAll = getAllProjects();
      findAll[pId - 1].todoList.splice(tId - 1, 1);
      if (updateStorage(findAll)) {
        location.reload();
      }
    }
  };

  const editTodo = (container, form, pId, tId) => {
    checkLastChild(container);
    container.appendChild(editTodoForm(form, pId, tId));
  };

  const processUpdate = (pId, tId, todo, f) => {
    todo.title = f.title;
    todo.desc = f.desc;
    todo.dueDate = f.dueDate;
    todo.priority = f.priority;

    const prjts = getAllProjects();
    prjts[pId].todoList[tId] = todo;
    updateStorage(prjts);
  };

  const updateTodo = (notice, f, pId, tId) => {
    const thisProject = getAllProjects()[pId - 1];
    const currentTodo = thisProject.todoList[tId - 1];
    const priority = checkPriority(f.priority);
    if (checkTodo(f.title, f.desc, f.date) && priority) {
      f.priority = priority;
      processUpdate(pId - 1, tId - 1, currentTodo, f);
      setNotice(notice, 'Todo update successful.', 'green', true); return;
    }
    setNotice(notice, 'All fields are compulsory');
  };

  return {
    addProject,
    allProjects,
    deleteProject,
    getAllProjects,
    addTodo,
    displayTodos,
    deleteTodo,
    editTodo,
    updateTodo,
    getFormData,
    setNotice,
  };
})();

export default Logic;
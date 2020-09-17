import Elements from './elements';
import createDefault from './default';
import Logic from './logic';

const { tag, formTag, radioTag } = Elements;
const container = document.getElementById('content');
const title = tag('h1', 'Todo List App', 'header', 'header');
const notice = tag('p', 'notifications here', 'notice', 'notice');
const projects = tag('section', '', 'projects', 'projects');
const todos = tag('section', '', 'todos', 'todos');
const closeButton = tag('button', 'Close', 'close', 'close');
const newProjectButton = tag('button', '+', 'create-p', 'create-p');

const Dom = (() => {
  const projectForm = addButton => {
    const wrapper = tag('div', '', 'new-p', 'new-p');
    const name = formTag(
      'input',
      '',
      'project-name',
      'project-name',
      'text',
      'Project Name here',
    );

    name.setAttribute('required', 'required');
    wrapper.appendChild(name);
    wrapper.appendChild(addButton);
    return wrapper;
  };

  const prioritySection = (ttl) => {
    const labels = ['Low', 'Medium', 'High'];
    const pContainer = tag(ttl === '' ? 'div' : 'section', 'Priority: ');
    for (let i = 0; i < labels.length; i += 1) {
      const label = tag('label', labels[i]);
      label.setAttribute('for', labels[i]);
      const radio = radioTag(
        labels[i],
        ttl === '' ? 'priority' : 'u-priority',
        ttl === '' ? 'priority' : 'u-priority',
        labels[i],
      );
      pContainer.appendChild(radio);
      pContainer.appendChild(label);
    }
    return pContainer;
  };

  const formElements = (ttl = '', dsc = '', ddt = '') => {
    let form; let create; let title; let desc; let dueDate;
    if (ttl === '') {
      form = tag('form', '', 'new-t', 'new-t');
      create = tag('button', 'Add Todo', 'create-t', 'create-t');
      title = formTag('input', '', 't-title', 't-title', 'text', 'title here');
      desc = formTag('textarea', '', 't-desc', 't-desc', '', 'description');
      dueDate = formTag('input', '', 't-date', 't-date', 'datetime-local', '');
      form.appendChild(tag('p', 'New Todo'));
    } else {
      form = tag('form', '', 'update-todo', 'update-todo');
      create = tag('button', 'Update Todo', 'update-t', 'update-t');
      title = formTag('input', '', 'tu-title', 'tu-title', 'text', 'title here');
      desc = formTag('textarea', dsc, 'tu-desc', 'tu-desc', '', 'description');
      dueDate = formTag('input', '', 'tu-date', 'tu-date', 'datetime-local', '');
      title.setAttribute('value', ttl);
      dueDate.setAttribute('value', ddt);
      form.appendChild(tag('p', 'Edit Todo'));
    }

    form.appendChild(title);
    form.appendChild(desc);
    form.appendChild(dueDate);
    form.appendChild(prioritySection(ttl));
    form.appendChild(create);
    return form;
  };

  const todoForm = () => {
    const wrapper = tag('div', '', 'modal', 'modal');
    const form = formElements();

    form.appendChild(closeButton);
    wrapper.appendChild(form);

    return wrapper;
  };

  const todoTable = () => {
    const table = Elements.tag('table', '', 'todo-table', 'todo-table');
    const tr = Elements.tag('tr');

    tr.appendChild(Elements.tag('th', '#'));
    tr.appendChild(Elements.tag('th', 'Title'));
    tr.appendChild(Elements.tag('th', 'Due Date'));
    tr.appendChild(Elements.tag('th', 'Priority'));
    tr.appendChild(Elements.tag('th', 'Action'));
    table.appendChild(tr);

    return table;
  };

  const todoSection = task => {
    task.appendChild(tag('p', 'Click on a project to view tasks', 't-header', 't-header'));
    task.appendChild(todoForm());
    return task;
  };

  const render = () => {
    createDefault.dProject();
    const nextContainer = tag('div', '', 'sub-container', 'sub-container');

    projects.appendChild(tag('p', 'All Projects', 'p-header', 'p-header'));
    projects.appendChild(Logic.allProjects());
    projects.appendChild(projectForm(newProjectButton));

    nextContainer.appendChild(projects);
    nextContainer.appendChild(todoSection(todos));

    container.appendChild(title);
    container.appendChild(notice);
    container.appendChild(nextContainer);
  };


  const showForm = modal => {
    modal.style.display = 'block';
  };

  const hideForm = modal => {
    modal.style.display = 'none';
  };


  return {
    notice,
    todos,
    todoSection,
    render,
    todoForm,
    showForm,
    hideForm,
    closeButton,
    newProjectButton,
    todoTable,
    formElements,
  };
})();

export default Dom;

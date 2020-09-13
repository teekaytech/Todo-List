import Elements from './elements';

const { tag, formTag, radioTag } = Elements;
const container = document.getElementById('content');
const title = tag('h1', 'Todo List App', 'header', 'header');
const projects = tag('section', '', 'projects', 'projects');
const todos = tag('section', 'Todos', 'todos', 'todos');
const newTodo = tag('button', 'Add Todo', 'new-todo', 'new-todo');
const close = tag('button', 'Close', 'close', 'close');

const Dom = (() => {
  const projectForm = () => {
    const wrapper = tag('div', '', 'new-p', 'new-p');
    const add = tag('button', 'Add Project', 'create-p', 'create-p');
    const name = formTag(
      'input',
      '',
      'project-name',
      'project-name',
      'text',
      'Project Name here',
    );

    wrapper.appendChild(name);
    wrapper.appendChild(add);
    return wrapper;
  };

  const prioritySection = () => {
    const labels = ['Low', 'Medium', 'High'];
    const pContainer = tag('div');
    for (let i = 0; i < labels.length; i += 1) {
      const label = tag('label', labels[i]);
      label.setAttribute('for', labels[i]);
      const radio = radioTag('input', '', labels[i], 'priority', 'radio', 'priority', labels[i]);
      pContainer.appendChild(radio);
      pContainer.appendChild(label);
    }
    return pContainer;
  };

  const todoForm = () => {
    const wrapper = tag('div', '', 'modal', 'modal');
    const form = tag('form', '', 'new-t', 'new-t');
    const create = tag('button', 'Add Todo', 'create-t', 'create-t');
    const title = formTag('input', '', 't-title', 't-title', 'text', 'title here');
    const desc = formTag('textarea', '', 't-desc', 't-desc', '', 'description');
    const dueDate = formTag('input', '', 't-date', 't-date', 'datetime-local', '');

    form.appendChild(title);
    form.appendChild(desc);
    form.appendChild(dueDate);
    form.appendChild(prioritySection());
    form.appendChild(create);
    form.appendChild(close);

    wrapper.appendChild(form);

    return wrapper;
  };

  const render = () => {
    projects.appendChild(projectForm());
    todos.appendChild(newTodo);
    todos.appendChild(todoForm());
    container.appendChild(title);
    container.appendChild(projects);
    container.appendChild(todos);
  };

  const showForm = modal => {
    modal.style.display = 'block';
  };

  const hideForm = modal => {
    modal.style.display = 'none';
  };


  return {
    render, showForm, hideForm, container, newTodo, close,
  };
})();

export default Dom;

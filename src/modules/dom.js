import Elements from './elements';
import Logic from './logic';

const { tag, formTag, radioTag } = Elements;
const container = document.getElementById('content');
const title = tag('h1', 'Todo List App', 'header', 'header');
const projects = tag('section', '', 'projects', 'projects');
const todos = tag('section', '', 'todos', 'todos');
const newTodo = tag('button', '+ New Todo', 'new-todo', 'new-todo');
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

  const prioritySection = () => {
    const labels = [' Low ', ' Medium ', ' High '];
    const pContainer = tag('div', 'Priority: ');
    for (let i = 0; i < labels.length; i += 1) {
      const label = tag('label', labels[i]);
      label.setAttribute('for', labels[i]);
      const radio = radioTag(
        'input',
        '',
        labels[i],
        'priority',
        'radio',
        'priority',
        labels[i],
      );
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

    form.appendChild(tag('p', 'New Todo'));
    form.appendChild(title);
    form.appendChild(desc);
    form.appendChild(dueDate);
    form.appendChild(prioritySection());
    form.appendChild(create);
    form.appendChild(closeButton);

    wrapper.appendChild(form);

    return wrapper;
  };

  const render = () => {
    const nextContainer = tag('div', '', 'sub-container', 'sub-container');

    projects.appendChild(tag('p', 'All Projects', 'p-header', 'p-header'));
    projects.appendChild(Logic.allProjects());
    projects.appendChild(projectForm(newProjectButton));

    todos.appendChild(tag('p', 'All Todos', 't-header', 't-header'));
    todos.appendChild(tag('div', 'todos here', 't-list', 't-list'));
    todos.appendChild(newTodo);
    todos.appendChild(todoForm());

    nextContainer.appendChild(projects);
    nextContainer.appendChild(todos);

    container.appendChild(title);
    container.appendChild(nextContainer);
  };

  const showForm = modal => {
    modal.style.display = 'block';
  };

  const hideForm = modal => {
    modal.style.display = 'none';
  };


  return {
    projects,
    todos,
    render,
    showForm,
    hideForm,
    container,
    newTodo,
    closeButton,
    newProjectButton,
  };
})();

export default Dom;

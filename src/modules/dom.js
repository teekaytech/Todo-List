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

  const render = (proj, task, carrier) => {
    proj.innerText = '';
    task.innerText = '';
    carrier.innerText = '';

    const nextContainer = tag('div', '', 'sub-container', 'sub-container');

    proj.appendChild(tag('p', 'All Projects', 'p-header', 'p-header'));
    proj.appendChild(Logic.allProjects());
    proj.appendChild(projectForm(newProjectButton));

    task.appendChild(tag('p', 'All Todos', 't-header', 't-header'));
    task.appendChild(tag('div', 'todos here', 't-list', 't-list'));
    task.appendChild(newTodo);
    task.appendChild(todoForm());

    nextContainer.appendChild(projects);
    nextContainer.appendChild(todos);

    carrier.appendChild(title);
    carrier.appendChild(nextContainer);
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

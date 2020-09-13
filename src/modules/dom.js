import createElement from './elements';

const container = document.getElementById('content');
const projects = createElement('section', 'Projects', 'projects', 'projects');
const todos = createElement('section', 'Todos', 'todos', 'todos');

const render = () => {
  container.appendChild(projects);
  container.appendChild(todos);
};

export default render;

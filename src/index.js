import Dom from './modules/dom';


const {
  render, todoForm, container, newTodo,
} = Dom;

render();


newTodo.addEventListener('click', () => {
  container.appendChild(todoForm());
});
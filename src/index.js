import Dom from './modules/dom';
import './assets/styles.scss';

const {
  render, showForm, hideForm, newTodo, close,
} = Dom;

render();


newTodo.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modal');
  showForm(modal);
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  const modal = document.getElementById('modal');
  hideForm(modal);
});
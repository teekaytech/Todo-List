import Todo from './todo';
import Project from './project';

const createDefault = (() => {
  const dProject = () => {
    if (localStorage.length === 0) {
      const project = new Project(1, 'General');
      const t1 = new Todo(0, 'Standup Meeting', 'With standup team', '', 'High');
      const t2 = new Todo(0, 'Urgent Meeting', 'With students', '', 'Medium');
      project.todoList.push(t1);
      project.todoList.push(t2);
      localStorage.setItem(0, JSON.stringify(project));
    }
  };

  return { dProject };
})();


export default createDefault;

import Todo from './todo';
import Project from './project';

const createDefault = (() => {
  const dProject = () => {
    if (localStorage.length === 0) {
      const project = new Project(1, 'General');
      const t1 = new Todo(1, 'Concatenate Conference', 'With standup team', new Date('2020-10-1'), 'High');
      const t2 = new Todo(2, 'Rails Meetup', 'With students', new Date('2020-9-25'), 'Medium');
      project.todoList.push(t1);
      project.todoList.push(t2);
      localStorage.setItem(0, JSON.stringify(project));
    }
  };

  return { dProject };
})();


export default createDefault;

import Todo from './todo';
import Project from './project';

const createDefault = (() => {
  const dProject = () => {
    if (!localStorage.key('todoapp')) {
      const project = new Project(1, 'General');
      const t1 = new Todo(1, 'Concatenate Conference', 'With standup team', '2020-09-02T12:21', 'High');
      const t2 = new Todo(2, 'Rails Meetup', 'With students', '2020-09-02T12:21', 'Medium');
      project.todoList.push(t1);
      project.todoList.push(t2);
      localStorage.setItem('todoapp', JSON.stringify(project));
    }
  };

  return { dProject };
})();

export default createDefault;

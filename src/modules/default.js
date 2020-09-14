import Project from './projects';

const createDefault = (() => {
  const dProject = () => {
    if (localStorage.length === 0) {
      const project = JSON.stringify(new Project(1, 'General'));
      localStorage.setItem(1, project);
    }
  };

  return { dProject };
})();


export default createDefault;

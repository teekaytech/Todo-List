import Project from './projects';

const Operation = (() => {
  const createProject = (id, name) => {
    const project = new Project(id, name);
    return project;
  };

  return { createProject };
})();

export default Operation;
import Operation from './modules/operations';
import render from './modules/dom';

const project = Operation.createProject(1, 'General');

console.log(project.name);
render();
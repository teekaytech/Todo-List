const CreateElement = (name, text = '', id = '', classname = '') => {
  const element = document.createElement(name);

  element.innerText = text;
  element.className += classname;
  element.setAttribute('id', id);

  return element;
};

export default CreateElement;
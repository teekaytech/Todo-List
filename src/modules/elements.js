const Elements = (() => {
  const tag = (name, text = '', id = '', classname = '') => {
    const elem = document.createElement(name);
    elem.innerText = text;
    elem.className += classname;
    elem.setAttribute('id', id);
    return elem;
  };

  const formTag = (name, text = '', id = '', classname = '', type = '', holder = '') => {
    const formElement = tag(name, text, id, classname);
    formElement.setAttribute('type', type);
    formElement.setAttribute('placeholder', holder);
    return formElement;
  };

  const radioTag = (id = '', rname = '', classname = '', value = '') => {
    const radioElement = document.createElement('input');
    radioElement.setAttribute('type', 'radio');
    radioElement.setAttribute('id', id);
    radioElement.setAttribute('class', classname);
    radioElement.setAttribute('name', rname);
    radioElement.setAttribute('value', value);
    return radioElement;
  };

  return { tag, formTag, radioTag };
})();

export default Elements;
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

  const radioTag = (name, text = '', id = '', classname = '', type = '', rname = '', value = '') => {
    const radioElement = tag(name, text, id, classname);
    radioElement.setAttribute('type', type);
    radioElement.setAttribute('name', rname);
    radioElement.setAttribute('value', value);
    return radioElement;
  };

  return { tag, formTag, radioTag };
})();

export default Elements;
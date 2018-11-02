export default (text = "Hello world HR") => {
    const element = document.createElement("div");
  
    element.innerHTML = text;
  
    return element;
  };
  
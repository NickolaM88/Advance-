function solve() {
  let input = {
    name: document.getElementById("task"),
    description: document.getElementById("description"),
    date: document.getElementById("date")
  };
  let [_, openSection, progresSection, finishedSection] = Array.from(document.querySelectorAll('section')).map(e => e.children[1])
  document.getElementById("add").addEventListener("click", addTask);

  function addTask(event) {
    event.preventDefault();

    // collect field values
    // create elements
    let article = document.createElement("article");
    article.appendChild(createElement('h3', input.name.value));
    article.appendChild(createElement('p', `Description: ${input.description.value}`));
    article.appendChild(createElement('p', `Due Date: ${input.date.value}`));
    let div = createElement('div','','flex');

    let startButton = createElement('button','Start','green')
    let deleteButton = createElement('button','Delete','red')
    let finishButton = createElement('button','Finish','orange')

    div.appendChild(startButton);
    div.appendChild(deleteButton);

    article.appendChild(div);

    // append to Open section
    openSection.appendChild(article);

    Object.values(input).forEach(i => i.value = '')

    // add functionality for start,finish and delete task
    startButton.addEventListener('click',onStart);
    deleteButton.addEventListener('click',onDelete);
    finishButton.addEventListener('click',onFinish);

    function onDelete() {
        article.remove();
    }

    function onStart() {
        startButton.remove();
        div.appendChild(finishButton);
        progresSection.appendChild(article);
    }

    function onFinish() {
       div.remove();
        finishedSection.appendChild(article);
    }
  }

  function createElement(type, content, className) {
    let element = document.createElement(type);
    element.textContent = content;
    if(className){
        element.className = className;
    }
    return element;
  }
}

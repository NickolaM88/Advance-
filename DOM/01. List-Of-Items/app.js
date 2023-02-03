function addItem() {
    // select input field
    let content = document.getElementById('newItemText').value;

    // create <li> element
    let liElement = document.createElement('li');

    // assign input element
    liElement.textContent = content; 

    // select <ul> and append new element
    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);

    // select input field and clear context/value
    content = '';
}
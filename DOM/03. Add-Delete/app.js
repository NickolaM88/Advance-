function addItem() {
  // select input field
  let content = document.getElementById("newItemText").value;

  // create <li> element
  let liElement = document.createElement("li");

  // assign input element
  liElement.textContent = content;

  // create [Delete] anchor
  let deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  liElement.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", onDelete);

  // select <ul> and append new element
  let ulElement = document.getElementById("items");
  ulElement.appendChild(liElement);

  // select input field and clear context/value
  content = "";

  function onDelete(event) {
    event.target.parentElement.remove();
  }
}

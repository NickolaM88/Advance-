function deleteByEmail() {
  // select input field and read value
  let content = document.querySelector('input[name="email"]').value;
  let rows = Array.from(document.querySelectorAll("tbody tr"));
  let found = false;

  // repeat for every table row
  for (let row of rows) {
    // select second column
    // compare text content with input value
    // if they are equal - remove current row
    if (row.children[1].textContent == content) {
      row.remove();
      found = true;
    }
  }

  // display result
  document.getElementById("result").textContent = found
    ? "Deleted." : "Not found.";
}

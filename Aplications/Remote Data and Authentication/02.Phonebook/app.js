function attachEvents() {
  document.querySelector("#btnLoad").addEventListener("click", load);
  document.querySelector("#btnCreate").addEventListener("click", create);
  document.querySelector("#phonebook").addEventListener("click", remove);

  let phoneBook = document.querySelector("#phonebook");
  let url = "http://localhost:3030/jsonstore/phonebook";

  function create() {
    let name = document.querySelector("#person");
    let number = document.querySelector("#phone");

    if (!name.value || !number.value) {
      return;
    }

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        person: name.value.trim(),
        phone: number.value.trim(),
      }),
    })
      .then((response) => response.json())
      .catch((err) => alert(err.message));

      name.value = '';
      number.value = '';
      load();
  }

  function load() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        phoneBook.replaceChildren();

        Object.values(data).forEach((p) => {
          let liElement = document.createElement("li");
          liElement.textContent = `${p.person}: ${p.phone}`;
          let btnDelete = document.createElement("button");
          btnDelete.textContent = "Delete";
          btnDelete.setAttribute("id", p._id);
          liElement.appendChild(btnDelete);
          phoneBook.appendChild(liElement);
        });
      });
  }

  function remove(e) {
    let currentId = e.target.id;

    if(e.target.textContent == 'Delete') {
        fetch(`${url}/${currentId}`, {
            method: 'DELETE'
        })
        .then(response => {
            load();
            response.json()
        })
        .catch(err => alert(err.message));
    }
  }
}
attachEvents();

window.addEventListener("load", solve);

function solve() {
  let input = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content"),
  };

  let lists = {
    review: document.getElementById("review-list"),
    published: document.getElementById("published-list"),
  };

  document.getElementById("publish-btn").addEventListener("click", publish);
  document.getElementById("clear-btn").addEventListener("click", clear);

  function publish(event) {
    event.preventDefault();

    let title = input.title.value;
    let category = input.category.value;
    let content = input.content.value;

    if (title == "" || category == "" || content == "") {
      return;
    }
    // creating list item
    let li = document.createElement("li");
    li.className = "rpost";
    li.innerHTML = `<article>
      <h4>${title}</h4>
      <p>Category: ${category}</p>
      <p>Content: ${content}</p>
    </article>
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;

    // add functionality to buttons
    let edintBtn = li.querySelector(".edit");
    let approveBtn = li.querySelector(".approve");
    edintBtn.addEventListener("click", edit);
    approveBtn.addEventListener("click", approve);

    // append to the first list
    lists.review.appendChild(li);

    // clear input fields
    input.title.value = "";
    input.category.value = "";
    input.content.value = "";

    function edit() {
      // populate input fields with values
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;

      //remove list item from list
      li.remove();
    }

    function approve() {
      // move list item from first list to second list
      lists.published.appendChild(li);

      // remove buttons
      edintBtn.remove();
      approveBtn.remove();
    }
  }

  function clear() {
    lists.published.innerHTML = "";
  }
}

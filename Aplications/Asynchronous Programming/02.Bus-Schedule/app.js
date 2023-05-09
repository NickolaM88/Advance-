function solve() {
  // get all elements
  let infoElement = document.querySelector(".info");
  let departBtn = document.getElementById("depart");
  let arriveBtn = document.getElementById("arrive");
  let busStop = {
    next: "depot",
  };

  function depart() {
    departBtn.disabled = true;
    let url = `http://localhost:3030/jsonstore/bus/schedule/${busStop.next}`;
    // deaprt func -> fetch data for next stop, start from depot

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // update infoElement with text from server data
        busStop = JSON.parse(JSON.stringify(data));
        infoElement.textContent = `Next stop ${busStop.name}`;
      })
      .catch((err) => {
        infoElement.textContent = `Error`;
      });

    // arrive button disabled = false
    arriveBtn.disabled = false;
  }

  // arrive func -> update buttons
  function arrive() {
    infoElement.textContent = `Arriving at ${busStop.name}`;
    departBtn.disabled = false;
    arriveBtn.disabled = true;
  }

  return {
    depart,
    arrive,
  };
}

let result = solve();

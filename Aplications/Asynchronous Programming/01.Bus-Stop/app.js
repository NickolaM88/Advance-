function getInfo() {
    // get all elements by Id 
    let baseUrl = 'http://localhost:3030/jsonstore/bus/businfo';
    let inputElement = document.getElementById('stopId');
    let ulElements = document.getElementById('buses');
    let divElement = document.getElementById('stopName');

    // fetch data from server
    fetch(`${baseUrl}/${inputElement.value}`)
    .then(response => response.json())
    .then(data => {
        let buses = data.buses;
        let name = data.name;

        divElement.textContent = name;
        ulElements.innerHTML = '';

        // for each bus create li element with text
        Object.keys(buses).forEach(bus => {
            let liElement = document.createElement('li');
            liElement.textContent = `Bus ${bus} arrives in ${buses[bus]} minutes`;

            // append li tags to ul
            ulElements.appendChild(liElement);
        })
    })
    .catch(error => {
        divElement.textContent = `Error`;
        ulElements.innerHTML = '';
    })


}
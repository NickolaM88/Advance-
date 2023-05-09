function attachEvents() {
  // get all elements
  let inputElement = document.getElementById("location");
  let getBtn = document.getElementById("submit");
  let divDisplay = document.getElementById("forecast");
  let currDiv = document.getElementById("current");
  let upcomingDiv = document.getElementById("upcoming");
  let baseUrl = `http://localhost:3030/jsonstore/forecaster`;

  // define weather symbols
  let sunny = `&#x2600`;
  let partlySunny = `&#x26C5`;
  let overcast = `&#x2601`;
  let rain = `&#x2614`;
  let degrees = `&#176`;
  let code = "";

  // define upcoming and current weather DIVs
  let divElementUpcoming = document.createElement("div");
  let divElementCurrent = document.createElement("div");

  getBtn.addEventListener("click", (e) => {
    divElementUpcoming.innerHTML = "";
    divElementCurrent.innerHTML = "";

    divElementUpcoming.setAttribute("class", "forecast-info");
    divElementCurrent.setAttribute("class", "forecasts");

    divDisplay.style.display = "inline";

    // fetch location data from server -> name, code
    fetch(`${baseUrl}/locations`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((locationInfoObject) => {
          if (locationInfoObject.name == inputElement.value) {
            return (code = locationInfoObject.code);
          }
        });

        // code => fetch forecast for today
        fetch(`${baseUrl}/today/${code}`)
          .then((response) => response.json())
          .then((data) => {
            // update html with forecast
            let spanGroup = document.createElement("span");
            let conditionSpan = document.createElement("span");
            let locationSpan = document.createElement("span");
            let temperatureSpan = document.createElement("span");
            let spanIcon = document.createElement("span");

            spanIcon.setAttribute("class", "condition symbol");
            spanGroup.setAttribute("class", "condition");
            locationSpan.setAttribute("class", "forecast-data");
            temperatureSpan.setAttribute("class", "forecast-data");
            conditionSpan.setAttribute("class", "forecast-data");

            locationSpan.textContent = data.name;
            temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
            conditionSpan.textContent = data.forecast.condition;

            let condition = data.forecast.condition;
            if (condition == "Sunny") {
              spanIcon.innerHTML = sunny;
            } else if (condition == "Partly sunny") {
              spanIcon.innerHTML = partlySunny;
            } else if (condition == "Overcast") {
              spanIcon.innerHTML = overcast;
            } else if (condition == "Rain") {
              spanIcon.innerHTML = rain;
            }

            spanGroup.appendChild(locationSpan);
            spanGroup.appendChild(temperatureSpan);
            spanGroup.appendChild(conditionSpan);
            divElementCurrent.appendChild(spanIcon);
            divElementCurrent.appendChild(spanGroup);
            currDiv.appendChild(divElementCurrent);
          })
          .catch((error) => console.log(error));

        // fetch upcoming forecast
        fetch(`${baseUrl}/upcoming/${code}`)
          .then((res) => res.json())
          .then((data) => {
            let nextDays = data.forecast;

            nextDays.forEach((data) => {
              let spanGroup = document.createElement("span");
              let conditionSpan = document.createElement("span");
              let temperatureSpan = document.createElement("span");
              let spanIcon = document.createElement("span");

              spanIcon.setAttribute("class", "symbol");
              spanGroup.setAttribute("class", "upcoming");
              temperatureSpan.setAttribute("class", "forecast-data");
              conditionSpan.setAttribute("class", "forecast-data");

              temperatureSpan.innerHTML = `${data.low}${degrees}/${data.high}${degrees}`;
              conditionSpan.textContent = data.condition;

              let condition = data.condition;
              if (condition == "Sunny") {
                spanIcon.innerHTML = sunny;
              } else if (condition == "Partly sunny") {
                spanIcon.innerHTML = partlySunny;
              } else if (condition == "Overcast") {
                spanIcon.innerHTML = overcast;
              } else if (condition == "Rain") {
                spanIcon.innerHTML = rain;
              }

              // update html on data
              spanGroup.appendChild(spanIcon);
              spanGroup.appendChild(temperatureSpan);
              spanGroup.appendChild(conditionSpan);
              divElementUpcoming.appendChild(spanGroup);
              upcomingDiv.appendChild(divElementUpcoming);
            });
          });
      });
  });
}

attachEvents();

function updateTime() {
  // Copenhagen
  let copenhagenElement = document.querySelector("#copenhagen");
  if (copenhagenElement) {
    let copenhagenDateElement = copenhagenElement.querySelector(".date");
    let copenhagenTimeElement = copenhagenElement.querySelector(".time");
    let copenhagenTime = moment().tz("Europe/Copenhagen");

    copenhagenDateElement.innerHTML = copenhagenTime.format("MMMM	Do YYYY");
    copenhagenTimeElement.innerHTML = copenhagenTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

    // Stockholm
  let stockholmElement = document.querySelector("#stockholm");
  if (stockholmElement) {
    let stockholmDateElement = stockholmElement.querySelector(".date");
    let stockholmTimeElement = stockholmElement.querySelector(".time");
    let stockholmTime = moment().tz("Europe/Stockholm");

    stockholmDateElement.innerHTML = stockholmTime.format("MMMM   Do YYYY");
    stockholmTimeElement.innerHTML = stockholmTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM   Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }


function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
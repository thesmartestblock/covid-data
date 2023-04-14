let arr = [];
let html = "";
fetch("https://www.mohfw.gov.in/data/datanew.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((k) => {
      addCityToDOM(k.state_name, k.active, k.positive, k.cured, k.death, k.new_active, k.new_positive);
    });
  });

function addCityToDOM(state_name, active, positive, cured, death, new_active, new_positive) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM
  let Element = document.createElement("div");
  Element.className = "x";
  let innerHTML = `
      <div class="tile">
      <p>${state_name} <br> 
        active: ${active} <br>
        positive: ${positive} <br>
        cured: ${cured}<br>
        death: ${death}<br>
        new_active: ${new_active}<br>
        Confirmed cases: ${new_positive}<br></p></div>
      </div>
     `;
  Element.innerHTML = innerHTML;
  document.getElementById("data").appendChild(Element);
}

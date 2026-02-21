const places = [];

const list = document.getElementById("places-list");
const details = document.getElementById("place-details");
const form = document.getElementById("place-form");

function renderPlaces() {
  list.innerHTML = "";
  places.forEach((place) => {
    const li = document.createElement("li");
    li.textContent = place.name;
    li.addEventListener("click", () => {
      details.textContent = place.summary();
    });
    list.appendChild(li);
  });
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("place-name").value;
  const location = document.getElementById("location").value;
  const landmarks = document.getElementById("landmarks").value;
  const time = document.getElementById("time").value;
  const notes = document.getElementById("notes").value;

  const newPlace = new Place(name, location, landmarks, time, notes);
  places.push(newPlace);

  renderPlaces();
  form.reset();
});

const places = [
    new Place("Nairobi", "Nairobi National Park", "Summer", "Saw lions and giraffes"),
    new Place("Mombasa", "Fort Jesus", "Winter", "Loved the coastal vibe"),
    new Place("Kisum", "Lake Victoria", "Spring", "Enjoyed the sunset by the lake")
  ];
  
  const list = document.getElementById("places-list");
  const details = document.getElementById("place-details");
  
  places.forEach((place, index) => {
    const li = document.createElement("li");
    li.textContent = place.location;
    li.addEventListener("click", () => {
      details.textContent = place.summary();
    });
    list.appendChild(li);
  });
  
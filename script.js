const form = document.getElementById("form");

const input = document.getElementById("input");

const msg = document.querySelector(".top-banner .msg");

const list = document.getElementById("list");

const apiKey = "4d8fb5b93d4af21d66a2948710284366";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { main, name, sys, weather } = data;

      const li = document.createElement("li");

      li.classList.add("city");

      const markup = `
      <h2 class="city-name" data-name="${name},${sys.country}">
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temp">${Math.round(main.temp)}
        <sup>°C</sup>
      </div>
        <figure>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      </div>
      `;
      li.innerHTML = markup;

      list.appendChild(li);
    })
    .catch(() => {
      msg.textContent = "Please search for a valid city 🧐";
    });

  msg.textContent = "";
  form.reset();
  input.focus();
});

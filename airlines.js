let flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },

  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },

  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },

  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },

  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },

  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },

  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },

  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },

  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },

  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },

  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function airlines(flightsList) {
  let name = prompt("Introduce tu nombre");
  if (name === null || name === "") {
    name = "invitado";
  }
  let costeTotal = 0;
  let totalScale = 0;
  console.log(`Bienvenid@, ${name}`);
  for (let i = 0; i < flightsList.length; i++) {
    let escala;
    if (flightsList[i].scale === false) {
      escala = "y no realiza escala";
    } else {
      escala = "y realiza escala";
      totalScale++;
    }
    console.log(
      `El vuelo con origen ${flightsList[i].from}, y destino ${flightsList[i].to} tiene un coste de ${flightsList[i].cost}€ ${escala}`
    );
    costeTotal += flightsList[i].cost;
  }
  console.log(
    "El coste medio de los vuelos es: " +
      (costeTotal / flightsList.length).toFixed(2) +
      "€, de los cuales " +
      totalScale +
      " realizan escalas"
  );

  //últimos 5 vuelos
  let lastFlights = flightsList.slice(-5);
  let lastFlightsDestination = [];
  let i = 0;
  for (i of lastFlights) {
    lastFlightsDestination.push(lastFlights[i].to);
  }
  console.log(
    "Los últimos vuelos del día son con destino a: " +
      lastFlightsDestination.join(", ")
  );
}

airlines(flights);

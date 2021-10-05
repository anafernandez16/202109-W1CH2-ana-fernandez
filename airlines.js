let flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

    
function airlines(flightsList) { 
    let name= prompt("Introduce tu nombre");
    if (name=== null || name === "") {
        name = 'invitado';
    }
    let costeTotal=0;
    let totalScale =0;
    console.log(`Bienvenid@, ${name}`);
    for (let i=0; i<flightsList.length; i++ ) {
        let escala;
        if(flightsList[i].scale === false) {
            escala = 'y no realiza escala';
        }
        else {
            escala='y realiza escala';
            totalScale++;
        }
        console.log(`El vuelo con origen ${flightsList[i].from}, y destino ${flightsList[i].to} tiene un coste de ${flightsList[i].cost}€ ${escala}`);
        costeTotal+= flightsList[i].cost;
    }
    console.log('El coste medio de los vuelos es: ' + (costeTotal/flightsList.length).toFixed(2) + 
     '€, de los cuales ' + totalScale + ' realizan escalas');
    
     //últimos 5 vuelos 
     let lastFlights = flightsList.slice(-5); 
     let lastFlightsDestination= [];
     for(let i=0; i<lastFlights.length; i++) {
        lastFlightsDestination.push(lastFlights[i].to);
     }
     console.log('Los últimos vuelos del día son con destino a: ' + lastFlightsDestination.join(", "));    
}


airlines(flights);





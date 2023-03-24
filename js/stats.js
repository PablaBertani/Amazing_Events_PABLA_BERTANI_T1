fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((events) => {
    const allEvents = events.events;

    const currentDate = events.currentDate;

    const pastEvents = allEvents.filter((events) => events.date < currentDate);

    const upcomingEvents = allEvents.filter(
      (events) => events.date > currentDate
    );

    //const eventsPercentageOne = document.getElementById("events_percentage1");

    attendance(pastEvents);
    categories(upcomingEvents);
  });

const eventsFirstTable = document.getElementById("events_first_table");

const eventsSecondTable = document.getElementById("events_second_table");

function attendance(array) {
  //max asistence
  const asistencePercentage = array.map(
    (events) => (events.assistance / events.capacity) * 100
  );

  const maxAsistencePercentage = Math.max(...asistencePercentage);

  const maxAsistenceEventIndex = asistencePercentage.indexOf(
    maxAsistencePercentage
  );

  const maxAsistenceEvent = array[maxAsistenceEventIndex];

  //min asistence
  const minAsistencePercentage = Math.min(...asistencePercentage);

  const minAsistenceEventIndex = asistencePercentage.indexOf(
    minAsistencePercentage
  );

  const minAsistenceEvent = array[minAsistenceEventIndex];

  //min capacity

  const allCapacity = array.map((events) => events.capacity);

  const maxCapacity = Math.max(...allCapacity);

  const maxCapacityIndex = allCapacity.indexOf(maxCapacity);

  const maxCapacityEvent = array[maxCapacityIndex];

  let stringFirstTable = ``;

  stringFirstTable += `
        <td>${maxAsistencePercentage.toFixed(2)}% ${maxAsistenceEvent.name}</td>
        <td>${minAsistencePercentage.toFixed(2)}% ${minAsistenceEvent.name}</td>
        <td>${maxCapacity} ${maxCapacityEvent.name}</td>`;

  eventsFirstTable.innerHTML = stringFirstTable;
}

function categories(array) {
  //categorias
  const allCategories = array.map((events) => events.category);

  const allCategoriesSorter = Array.from(
    new Set(allCategories.sort((a, b) => a.localeCompare(b)))
  );

  //console.log(allCategoriesSorter);

  //ganancias

  let stringSecondTable = ``;

  allCategoriesSorter.forEach(category => {
   

    const allEventsCategories = array.filter((events) => category == events.category);
    //console.log(allEventsCategories)
 
    const allEstimate = allEventsCategories.map((events) => events.estimate);
       // console.log(allEstimate)
 
       const revenues = allEstimate.reduce((acc,revenue,i)=> acc + revenue * allEventsCategories[i].price, 0 );
   //console.log(revenues)

   //Asistencia

   const allCapacityPerEvent = allEventsCategories.map((events) => events.capacity);
  console.log(allCapacityPerEvent)


  const sumOfAttenance = allEstimate.reduce((acc,estimate)=>acc + estimate);

 // console.log(sumOfAttenance)

 const sumOfCategories = allCapacityPerEvent.reduce((acc,capacity)=>acc + capacity);

 const percentageAttenance = (sumOfAttenance/sumOfCategories)*100;
 console.log(percentageAttenance)

    stringSecondTable += `
    <tr>
      <td>${category}</td>
      <td>$${revenues}</td>
      <td>${percentageAttenance.toFixed(2)} %</td>
    </tr>
    
  `;

});
 
  eventsSecondTable.innerHTML = stringSecondTable;
 
}

// Porcentaje de asistencia: (asistencia / capacidad) x 100. (asistencia = assistance o estimate).

// porcentaje: suman toda la asistencia de los eventos de esa categoría, después suman toda la capacidad de los eventos de esa categoría y ahí hacen el porcentaje total.
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
  let allCategories = array.map((events) => events.category);

  let allCategoriesSorter = Array.from(
    new Set(allCategories.sort((a, b) => a.localeCompare(b)))
  );

  console.log(allCategoriesSorter);

  //ganancias



  let stringSecondTable = ``;

  allCategoriesSorter.forEach(category => {
   

    let allEventsCategories = array.filter((events) => category == events.category);
    console.log(allEventsCategories)
 
    let allEstimate = allEventsCategories.map((events) => events.estimate);
   console.log(allEstimate)
 
    let revenues = allEstimate.reduce((acc,revenue,i)=> acc + revenue * allEventsCategories[i].price, 0 );
   console.log(revenues)

    stringSecondTable += `
    <tr>
      <td>${category}</td>
      <td>$ ${revenues}</td>
      <td></td>
    </tr>
    
  `;

});
 
  eventsSecondTable.innerHTML = stringSecondTable;
 
}


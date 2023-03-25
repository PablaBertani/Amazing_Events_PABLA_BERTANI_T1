fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((events) => {
    const allEvents = events.events;

    const currentDate = events.currentDate;

    const pastEvents = allEvents.filter((events) => events.date < currentDate);

    const upcomingEvents = allEvents.filter(
      (events) => events.date > currentDate
    );

    attendance(pastEvents);
    upcomingEventsStatistics(upcomingEvents);
    pastEventsStatistics(pastEvents);
  });

const eventsFirstTable = document.getElementById("events_first_table");

const eventsSecondTable = document.getElementById("events_second_table");

const eventsThirdTable = document.getElementById("events_third_table");

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
    <td>${minAsistenceEvent.name} (${minAsistencePercentage.toFixed(2)}%)</td>
    <td>${maxAsistenceEvent.name} (${maxAsistencePercentage.toFixed(2)}%)</td>
    <td>${maxCapacityEvent.name} (${maxCapacity})</td>`;

  eventsFirstTable.innerHTML = stringFirstTable;
}

//categorias
function upcomingEventsStatistics(array) {
  const allCategories = array.map((events) => events.category);

  const allCategoriesSorter = Array.from(
    new Set(allCategories.sort((a, b) => a.localeCompare(b)))
  );

  let stringSecondTable = ``;
  //ganancias
  allCategoriesSorter.forEach((category) => {
    const allEventsCategories = array.filter(
      (events) => category == events.category
    );

    const allEstimate = allEventsCategories.map((events) => events.estimate);

    const revenues = allEstimate.reduce(
      (acc, revenue, i) => acc + revenue * allEventsCategories[i].price,
      0
    );

    //Asistencia

    const allCapacityPerEvent = allEventsCategories.map(
      (events) => events.capacity
    );

    const sumOfAttenance = allEstimate.reduce(
      (acc, estimate) => acc + estimate
    );

    const sumOfCategories = allCapacityPerEvent.reduce(
      (acc, capacity) => acc + capacity
    );

    const percentageAttenance = (sumOfAttenance / sumOfCategories) * 100;

    stringSecondTable += `
    <tr>
      <td class="td-category">${category}</td>
      <td>$${revenues}</td>
      <td>${percentageAttenance.toFixed(2)} %</td>
    </tr>
    
  `;
  });

  eventsSecondTable.innerHTML = stringSecondTable;
}

function pastEventsStatistics(array) {
  const allCategories = array.map((events) => events.category);

  const allCategoriesSorter = Array.from(
    new Set(allCategories.sort((a, b) => a.localeCompare(b)))
  );

  //ganancias

  let stringThirdTable = ``;

  allCategoriesSorter.forEach((category) => {
    const allEventsCategories = array.filter(
      (events) => category == events.category
    );

    const allAssistance = allEventsCategories.map(
      (events) => events.assistance
    );

    const revenues = allAssistance.reduce(
      (acc, revenue, i) => acc + revenue * allEventsCategories[i].price,
      0
    );

    //Asistencia
    const allCapacityPerEvent = allEventsCategories.map(
      (events) => events.capacity
    );

    const sumOfAttenance = allAssistance.reduce(
      (acc, assistance) => acc + assistance
    );

    const sumOfCategories = allCapacityPerEvent.reduce(
      (acc, capacity) => acc + capacity
    );

    const percentageAttenance = (sumOfAttenance / sumOfCategories) * 100;

    stringThirdTable += `
    <tr>
      <td class="td-category">${category}</td>
      <td>$${revenues}</td>
      <td>${percentageAttenance.toFixed(2)} %</td>
    </tr>
    
  `;
  });

  eventsThirdTable.innerHTML = stringThirdTable;
}

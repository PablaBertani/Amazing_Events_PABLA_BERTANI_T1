fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then((response) => response.json())
  .then((events) => {
    const allEvents = events.events;

    const currentDate = events.currentDate;

    const pastEvents = allEvents.filter((events) => events.date < currentDate);

    input.addEventListener("input", bothFilters);

    formCheckbox.addEventListener("change", bothFilters);

    makingCards(pastEvents);

    makingCheckboxs(pastEvents);
    

    function bothFilters() {
      let textFilter = searcherEvents(pastEvents, input.value);
      let checkFilter = checkboxFilter(textFilter);
      makingCards(checkFilter);
    }

    function checkboxFilter(array) {
      let allCheckboxes = Array.from(
        document.querySelectorAll("input[type='checkbox']")
      );
    
      let checkboxCheck = allCheckboxes.filter((check) => check.checked);
    
      if (checkboxCheck.length == 0) {
        return array;
      }
    
      let events = checkboxCheck.map((check) => check.value);
    
      let eventsFilter = array.filter((element) =>
        events.includes(element.category)
      );
    
      return eventsFilter;
    }
    
    function searcherEvents(array, text) {
      let searcherText = array.filter((element) =>
        element.name.toLowerCase().includes(text.toLowerCase())
      );
      return searcherText;
    }
    
  });





//const currentDate = data.currentDate;

//const allEvents = data.events;

const conteinerCard = document.getElementById("conteiner-cardPastEvents");

const formCheckbox = document.getElementById("div-checkbox");

// const pastEvents = allEvents.filter((events) => events.date < currentDate);

const input = document.querySelector("input");

// input.addEventListener("input", bothFilters);

// formCheckbox.addEventListener("change", bothFilters);

// makingCards(pastEvents);
// makingCheckboxs(pastEvents);

// function bothFilters() {
//   let textFilter = searcherEvents(pastEvents, input.value);
//   let checkFilter = checkboxFilter(textFilter);
//   makingCards(checkFilter);
// }

function makingCards(array) {
  if (array.length == 0) {
    conteinerCard.innerHTML = `<div class="alert alert-danger" role="alert">
  ERROR! Intente nuevamente!
  </div>`;
    return;
  }
  let stringHtml = "";
  array.forEach((element) => {
    stringHtml += `
  <div class="card position-relative" style="width: 17rem;">
    <img src="${element.image}" class="card-img-top img-card" alt="${element.name}" >
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.date}</p>
        <p class="card-text">${element.description}</p>
      </div>
      <span class="row justify-content-around mb-3">
        <p class="col-5 pt-2">$${element.price}</p>
        <a href="./details.html?id=${element._id}" class="col-5 btn-more">See More</a>
      </span>
 </div>
  `;
  });
  conteinerCard.innerHTML = stringHtml;
}

function makingCheckboxs(array) {
  let allCategories = array.map((events) => events.category);

  let allCategoriesSorter = new Set(
    allCategories.sort((a, b) => a.localeCompare(b))
  );
  console.log(allCategories);

  let stringForm = ``;

  allCategoriesSorter.forEach((element) => {
    stringForm += `
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="${element}"
              value="${element}"
            >
            <label class="form-check-label" for="${element}"
              >${element}</label
            >
          </div>
          `;
  });

  formCheckbox.innerHTML = stringForm;
}

// function checkboxFilter(array) {
//   let allCheckboxes = Array.from(
//     document.querySelectorAll("input[type='checkbox']")
//   );

//   let checkboxCheck = allCheckboxes.filter((check) => check.checked);

//   if (checkboxCheck.length == 0) {
//     return array;
//   }

//   let events = checkboxCheck.map((check) => check.value);

//   let eventsFilter = array.filter((element) =>
//     events.includes(element.category)
//   );

//   return eventsFilter;
// }

// function searcherEvents(array, text) {
//   let searcherText = array.filter((element) =>
//     element.name.toLowerCase().includes(text.toLowerCase())
//   );
//   return searcherText;
// }

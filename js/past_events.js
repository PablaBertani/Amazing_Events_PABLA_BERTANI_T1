const currentDate = data.currentDate;

const allEvents = data.events;

// const pastEvents = [];

const conteinerCard = document.getElementById("conteiner-cardPastEvents");

const formCheckbox = document.getElementById("div-checkbox");

const pastEvents = allEvents.filter(events => events.date < currentDate);

//const conteinerCard = document.getElementById("conteiner-card");
//const formCheckbox = document.getElementById("div-checkbox");
//const inputForm = document.getElementById("input-form");

const input = document.querySelector("input");


input.addEventListener("input", bothFilters);

formCheckbox.addEventListener("change", bothFilters);

makingCards(pastEvents);
makingCheckboxs(pastEvents);

function bothFilters() {
  let textFilter = searcherEvents(pastEvents, input.value);
  let checkFilter = checkboxFilter(textFilter);
  makingCards(checkFilter);
}

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
        <a href="./details.html" class="col-5 btn-more">See More</a>
      </span>
 </div>
  `;
  });
  conteinerCard.innerHTML = stringHtml;
}

function makingCheckboxs(array) {
  let allCategories = array.map((events) => events.category);
  // console.log(allCategories);

  let allCategoriesSorter = new Set(
    allCategories.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    })
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

function checkboxFilter(array) {
  let allCheckboxes = Array.from(
    document.querySelectorAll("input[type='checkbox']")
  );
  //console.log(allCheckboxes);
  let checkboxCheck = allCheckboxes.filter((check) => check.checked);

  if (checkboxCheck.length == 0) {
    return array;
  }

  let events = checkboxCheck.map((check) => check.value);

  let eventsFilter = array.filter((element) =>
    events.includes(element.category)
  );
  //console.log(eventsFilter);
  return eventsFilter;
}

function searcherEvents(array, text) {
  let searcherText = array.filter((element) =>
    element.name.toLowerCase().includes(text.toLowerCase())
  );
  return searcherText;
}


// let stringHtml = ``;

// const pastEvents = allEvents.filter(events => events.date < currentDate);
// //console.log(pastEvents)

// let stringForm = ``;

// const allCategory = [];

// function makingCheckboxs() {
//   allEvents.forEach((events) => {
//     if (!allCategory.includes(events.category)) {
//       stringForm += `
//           <div class="form-check form-check-inline">
//             <input
//               class="form-check-input"
//               type="checkbox"
//               id=${events.category}
//               value=${events.category}
//             >
//             <label class="form-check-label" for=${events.category}
//               >${events.category}</label
//             >
//           </div>
//           `;
//       allCategory.push(events.category);
//     }
//   });
// }

// makingCheckboxs();
// formCheckbox.innerHTML = stringForm;



// function makingCards() {
//   pastEvents.forEach(events=>{
//     stringHtml += `
//     <div class="card position-relative" style="width: 17rem;">
//       <img src=${events.image} class="card-img-top img-card" alt=${events.name} >
//         <div class="card-body">
//           <h5 class="card-title">${events.name}</h5>
//           <p class="card-text">${events.date}</p>
//           <p class="card-text">${events.description}</p>
//         </div>
//         <span class="row justify-content-around mb-3">
//           <p class="col-5 pt-2">$${events.price}</p>
//           <a href="./details.html" class="col-5 btn-more">See More</a>
//         </span>
//    </div>
//     `;
//   });
//   }
  
//   makingCards();
  
//   conteinerCard.innerHTML = stringHtml;
  

// function makingCards() {
//   for (let i = 0; i < allEvents.length; i++) {
//     if (allEvents[i].date < currentDate) {
//       stringHtml += `
//    <div class="card position-relative" style="width: 17rem;">
//      <img src=${allEvents[i].image} class="card-img-top img-card" alt=${allEvents[i].name} >
//        <div class="card-body">
//          <h5 class="card-title">${allEvents[i].name}</h5>
//          <p class="card-text">${allEvents[i].date}</p>
//          <p class="card-text">${allEvents[i].description}</p>
//        </div>
//        <span class="row justify-content-around mb-3">
//          <p class="col-5 pt-2">$${allEvents[i].price}</p>
//          <a href="./details.html" class="col-5 btn-more">See More</a>
//        </span>
//   </div>
//    `;
//       pastEvents.push(allEvents[i]);
//     }
//   }
// }



// makingCards();

// conteinerCard.innerHTML = stringHtml;

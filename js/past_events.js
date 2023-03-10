const currentDate = data.currentDate;

const allEvents = data.events;

// const pastEvents = [];

let conteinerCard = document.getElementById("conteiner-cardPastEvents");

let stringHtml = ``;


const pastEvents = allEvents.filter(events => events.date < currentDate);
console.log(pastEvents)


function makingCards() {
  pastEvents.forEach(events=>{
    stringHtml += `
    <div class="card position-relative" style="width: 17rem;">
      <img src=${events.image} class="card-img-top img-card" alt=${events.name} >
        <div class="card-body">
          <h5 class="card-title">${events.name}</h5>
          <p class="card-text">${events.date}</p>
          <p class="card-text">${events.description}</p>
        </div>
        <span class="row justify-content-around mb-3">
          <p class="col-5 pt-2">$${events.price}</p>
          <a href="./details.html" class="col-5 btn-more">See More</a>
        </span>
   </div>
    `;
  });
  }
  
  makingCards();
  
  conteinerCard.innerHTML = stringHtml;
  

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

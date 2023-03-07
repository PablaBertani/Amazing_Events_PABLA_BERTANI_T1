
const currentDate = data.currentDate;

const allEvents = data.events;

const pastEvents = [];
//console.log(currentDate);

let conteinerCard = document.getElementById("conteiner-cardPastEvents");

let stringHtml = ``;

// console.log(allEvents)

// for (let i = 0; i < allEvents.length; i++) {
//   if (allEvents[i].date < currentDate) {
//     pastEvents.push(allEvents[i]);
//   }
// }

// console.log(pastEvents);

function makingCards() {
  for (let i = 0; i < allEvents.length; i++) {
    if (allEvents[i].date < currentDate) {
      stringHtml += `
   <div class="card position-relative" style="width: 17rem;">
     <img src=${allEvents[i].image} class="card-img-top img-card" alt="family in the cinema" >
       <div class="card-body">
         <h5 class="card-title">${allEvents[i].name}</h5>
         <p class="card-text">${allEvents[i].date}</p>
         <p class="card-text">${allEvents[i].description}</p>
       </div>
       <span class="row justify-content-around mb-3">
         <p class="col-5 pt-2">$${allEvents[i].price}</p>
         <a href="./details.html" class="col-5 btn-more">See More</a>
       </span>
  </div>
   `;
      pastEvents.push(allEvents[i]);
    }
  }
}

makingCards();

conteinerCard.innerHTML = stringHtml;

const allEvents = data.events;

let conteinerCard = document.getElementById("conteiner-card");
let stringHtml = ``;

function makingCards() {
  for (let i = 0; i < allEvents.length; i++) {
    stringHtml += `
  <div class="card position-relative" style="width: 17rem;">
    <img src=${allEvents[i].image} class="card-img-top img-card" alt=${allEvents[i].name} >
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
  }
}

makingCards();

conteinerCard.innerHTML = stringHtml;

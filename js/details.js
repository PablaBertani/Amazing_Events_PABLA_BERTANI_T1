const allEvents = data.events;

const conteinerCard = document.getElementById("conteiner-cardDetails");

const params = new URLSearchParams(location.search);

let id = params.get("id");
console.log(id);

let cardDetails = allEvents.find((events) => events._id == id);

let detailsHtml = ``;

detailsHtml += `
      <div class="row my-4">
         <div class="col-md-6 col-sm-4">
           <img
             src="${cardDetails.image}"
             class="img-fluid ps-2"
             alt="${cardDetails.image}"
           >
         </div>
         <div class="col-md-6 col-sm-4">
           <div class="card-body details px-1">
             <h5 class="card-title">${cardDetails.name}</h5>
             <p class="card-text"><b>${cardDetails.date}</b></p>
             <p class="card-text text-start text-wrap  lh-sm">${
               cardDetails.description
             }</p>
             <p class="card-text text-start">Category: ${
               cardDetails.category
             }</p>
             <p class="card-text text-start">Capacity: ${
               cardDetails.capacity
             }</p>
             <p class="card-text text-start">${
               cardDetails.assistance !== undefined
                 ? "Assistence: " + cardDetails.assistance
                 : ""
             }</p>
             <p class="card-text text-start">${
               cardDetails.estimate !== undefined
                 ? "Estimate: " + cardDetails.estimate
                 : ""
             }</p>
             <p class="card-text text-start"><b>Price: $${
               cardDetails.price
             }</b></p>
           </div>
         </div>
        </div>
    `;
conteinerCard.innerHTML = detailsHtml;

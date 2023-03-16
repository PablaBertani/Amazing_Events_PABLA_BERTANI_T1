const allEvents = data.events;
const conteinerCard = document.getElementById("conteiner-cardDetails");

const params = new URLSearchParams(location.search);
//console.log(params)

let id = params.get("id");
console.log(id)



let cardDetails = allEvents.find(events => events._id == id)
//console.log(cardDetails);


// function makingCardsDetails(){
  //cardDetails.forEach((event) => {
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
           <div class="card-body details">
             <h5 class="card-title">${cardDetails.name}</h5>
             <p class="card-text">${cardDetails.date}</p>
             <p class="card-text">${cardDetails.description}</p>
             <p class="card-text">${cardDetails.category}</p>
             <p class="card-text">${cardDetails.capacity}</p>
             <p class="card-text">${cardDetails.price}</p>
           </div>
         </div>
        </div>
    `;
    conteinerCard.innerHTML = detailsHtml;
    




//  <div class="row my-4">
// <div class="col-md-6 col-sm-4">
//   <img
//     src="./assets/img/Museum_Tour.jpg"
//     class="img-fluid ps-2"
//     alt="..."
//   >
// </div>
// <div class="col-md-6 col-sm-4">
//   <div class="card-body details">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Texto Descriptivo</p>
//     <p class="card-text">Texto Descriptivo</p>
//     <p class="card-text">Texto Descriptivo</p>
//   </div>
// </div>
// </div>
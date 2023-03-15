let conteinerCard = document.getElementById("conteiner-cardDetails");



function makingCards(array) {
   let detailsHtml = '';

    array.forEach((element) => {
      detailsHtml += `
      <div class="row my-4">
         <div class="col-md-6 col-sm-4">
           <img
             src="./assets/img/Museum_Tour.jpg"
             class="img-fluid ps-2"
             alt="..."
           >
         </div>
         <div class="col-md-6 col-sm-4">
           <div class="card-body details">
             <h5 class="card-title">Card title</h5>
             <p class="card-text">Texto Descriptivo</p>
             <p class="card-text">Texto Descriptivo</p>
             <p class="card-text">Texto Descriptivo</p>
           </div>
         </div>
        </div>
    `;
    });
    conteinerCard.innerHTML = stringHtml;
  }
  


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
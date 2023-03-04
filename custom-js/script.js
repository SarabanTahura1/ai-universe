const loadApps = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayApps(data.data.tools);
}

const showMoreButton = document.getElementById("see-more-btn");
const displayApps = apps => {
  // console.log(apps);
  const appContainer = document.getElementById('app-container');
  Apps = apps.slice(0, 6);
  Apps.forEach(app => {
    const appDiv = document.createElement('div');
    appDiv.classList.add('col');
    appDiv.innerHTML = `
    <div class="card h-100">
    <img src="${app.image}" class="card-img-top" alt="...">
    <div class="card-body">
   <h2>Features</h2>
      
      <ol>
        <li>Natural language processing</li>
        <li>Contextual understanding</li>
        <li>Text generation</li>

     </ol>
   
      <hr>
      <div class ="d-flex" >
      <div class ="me-5" >
      <h5 class="card-title">${app.name}</h5>
      <p class="card-text">${app.published_in}</p>
      </div>
      <div>
      <button id ="modal-btn" type="button" class="btn btn-outline-success btn-floating ms-5 " data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#appDetailModal">
            →
          </button>
       

      </div>
    </div>
  </div>
  `;
    appContainer.appendChild(appDiv);
    

  })


  let remainingCards = apps.slice(6);

  showMoreButton.addEventListener("click", () => {
    spinner.style.display = "block";
    showMoreButton.style.display = "none";
    setTimeout(() => {
      for (let i = 0; i < remainingCards.length; i++) {
        const appDiv = document.createElement('div');
        appDiv.classList.add('col');
        appDiv.innerHTML = `
      <div class="card h-100">
      <img src="${remainingCards[i].image}" class="card-img-top" alt="...">
      <div class="card-body">
     <h2>Features</h2>
        
        <ol>
          <li>${remainingCards[i].features}</li>
       </ol>
     
        <hr>
        <div class ="d-flex" >
        <div class ="me-5" >
        <h5 class="card-title">${remainingCards[i].name}</h5>
        <p class="card-text">${remainingCards[i].published_in}</p>
        </div>
        <div>
        <button onclick="addModal()" id ="modal-btn" type="button" class="btn btn-outline-success btn-floating ms-5 " data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#appDetailModal">
              →
            </button>
         
  
        </div>
      </div>
    </div>
    `;
        appContainer.appendChild(appDiv);
      }
      spinner.style.display = "none";
    }, 2000);
  });
  const displayAppDetails = app => {
      
    const modalTitle = document.getElementById('appDetailModalLabel');
    modalTitle.innerText = remainingCards[i].name;
  }

}






//modal task 
/**
function addModal(){
  const modalBtn = document.getElementById('modal-btn');
  const modal =  document.createElement('div');
  modal.classList.add('modal fade');
  modal.innerHTML = `
  <div class="modal fade" id="appDetailModal" tabindex="-1" aria-labelledby="appDetailModalLabel" aria-hidden="true">
  <div class="modal-dialog">
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="appDetailModalLabel">Modal title</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  </div>
  <div class="modal-body">
    ...
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
 
  </div>
</div>
</div>
</div>
  `;
  addModal();
}; */

//Modal






loadApps();


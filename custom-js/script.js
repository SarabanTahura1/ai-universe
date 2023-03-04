const loadApps = async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  displayApps(data.data.tools);
}

const showMoreButton = document.getElementById("see-more-btn");
const sortByDateButton = document.querySelector('#sort-by-date');
let showMoreClicked = false;


const displayApps = apps => {
  const appContainer = document.getElementById('app-container');


  //All Data Show
  let remainingCards = apps.slice(6);
  showMoreButton.addEventListener("click", () => {
    showMoreClicked = true;
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
          <li>${remainingCards[i].features[1]}</li>
          <li>${remainingCards[i].features[2]}</li>
          <li>${remainingCards[i].features[3]}</li>

       </ol>
     
        <hr>
        <div class ="d-flex" >
        <div class ="me-5" >
        <h5 class="card-title">${remainingCards[i].name}</h5>
        <p class="card-text">${remainingCards[i].published_in}</p>
        </div>
        <div>
        <button onclick="displayAppDetails()" id ="modal-btn" type="button" class="btn btn-outline-success btn-floating ms-5 " data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#appDetailModal">
        Details
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

  sortByDateButton.addEventListener('click', () => {
    if (showMoreClicked === true) {
      function compareDates(a, b) {
        const dateA = new Date(a.published_in);
        const dateB = new Date(b.published_in);
        return dateA - dateB;
      }
      apps.sort(compareDates);
      appContainer.innerHTML = '';
      apps.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.classList.add('col');
        appDiv.innerHTML = `
        <div class="card h-100">
        <img src="${app.image}" class="card-img-top" alt="...">
        <div class="card-body">
       <h2>Features</h2>
          
          <ol>
          <li>${app.features[0]}</li>
          <li>${app.features[1]}</li>
          <li>${app.features[2]}</li>
          </ol>
       
          <hr>
          <div class ="d-flex" >
          <div class ="me-5" >
          <h5 class="card-title">${app.name}</h5>
          <p class="card-text">${app.published_in}</p>
          </div>
          <div>
          <button onclick="displayAppDetails()" id ="modal-btn" type="button" class="btn btn-outline-success btn-floating ms-5 " data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#appDetailModal">
                Details
              </button>
          </div>
        </div>
      </div>
      `;
        appContainer.appendChild(appDiv);


      })
    } else {
      function compareDates(a, b) {
        const dateA = new Date(a.published_in);
        const dateB = new Date(b.published_in);
        return dateA - dateB;
      }
      sixCards.sort(compareDates);
      appContainer.innerHTML = '';
      sixCards.forEach(app => {
        const appDiv = document.createElement('div');
        appDiv.classList.add('col');
        appDiv.innerHTML = `
        <div class="card h-100">
        <img src="${app.image}" class="card-img-top" alt="...">
        <div class="card-body">
       <h2>Features</h2>
          
          <ol>
          <li>${app.features[0]}</li>
          <li>${app.features[1]}</li>
          <li>${app.features[2]}</li>
          </ol>
       
          <hr>
          <div class ="d-flex" >
          <div class ="me-5" >
          <h5 class="card-title">${app.name}</h5>
          <p class="card-text">${app.published_in}</p>
          </div>
          <div>
          <button onclick="displayAppDetails()" id ="modal-btn" type="button" class="btn btn-outline-success btn-floating ms-5 " data-mdb-ripple-color="dark" data-bs-toggle="modal" data-bs-target="#appDetailModal">
                Details
              </button>
          </div>
        </div>
      </div>
      `;
        appContainer.appendChild(appDiv);
      })
    }
  });
}


loadApps();


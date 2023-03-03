const loadApps= async()=>{
const url = `https://openapi.programming-hero.com/api/ai/tools`
const res = await fetch(url);
const data = await res.json();
displayApps(data.data.tools);
}
const displayApps = apps => {
   // console.log(apps);

   const appContainer = document.getElementById('app-container');
   apps.forEach(app =>{
    const appDiv = document.createElement('div');
    appDiv.classList.add('col');
    appDiv.innerHTML = `
    <div class="card h-100">
    <img src="${app.image}" class="card-img-top" alt="...">
    <div class="card-body">
   <h2>Features</h2>
      
      <ol>
        <li>${app.features}</li>
     </ol>
   
      <hr>
      <div class ="d-flex" >
      <div class ="me-5" >
      <h5 class="card-title">${app.name}</h5>
      <p class="card-text">${app.published_in}</p>
      </div>
      <div>
      <button type="button" class="btn btn-outline-success btn-floating ms-5 " data-mdb-ripple-color="dark">
            →
          </button>
      </div>
    </div>
  </div>
  `;
  appContainer.appendChild(appDiv);

   })
}



loadApps();


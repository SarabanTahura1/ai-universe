const loadApps = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const data = await res.json();
    displayAppDetails(data.data.tools);
  }
  const displayAppDetails = apps => {
      //console.log(apps);
    const modalTitle = document.getElementById('appDetailModalLabel');
    apps.forEach(app => {
      const modalDiv = document.createElement('div');
      modalDiv.classList.add('modal-header');
      modalDiv.innerHTML = `
      <h5 class="modal-title" id="appDetailModalLabel">${app.name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      `
      modalTitle.appendChild(modalDiv);


    })
    }
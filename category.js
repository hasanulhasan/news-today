const loadCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategory(data.data));
}
//category news showing
const displayCategory = (news) =>{
  const newsSection = document.getElementById('news-div');
  newsSection.innerHTML = '';
  news.forEach(element => {
    const newsDiv = document.createElement('div');
    newsDiv.innerHTML = `
    <div class="row shadow p-2 my-3">
      <div class="col-3">
        <img class="img-fluid p-1 h-100 w-100" src="${element.thumbnail_url}" alt="">
      </div>
      <div class="bg-customize p-3 col-9 rounded-3">
        <h2 class="pb-3">${element.title}</h2>
        <img src="${element.author.img}" alt="" height="40px" width="40px">
        <h5>${element.author.name ? element.author.name: 'No Author found'}</h5>
        <h6>Total view : ${element.total_view ? element.total_view: 'No view found'}</h6>
        <p class="pt-3">${element.details.slice(0,450)} ...</p>
        <button onclick="newsdetallis('${element._id}')" type="button"  class="btn btn-outline-success fs-4 fw-bold" data-bs-toggle="modal" data-bs-target="#newsDetailsModal">Show More</button>
      </div>
    </div>`
    newsSection.appendChild(newsDiv);
    toggleSpnier(false);
  });
  //news info
  let newsNUmber = document.getElementById('newsInfo');
  newsNUmber.innerText = `${news.length} news was found`;
  if(news.length === 0){
    newsNUmber.innerText = `No news was found Here`;
    toggleSpnier(false);
  }
}

//modal funtion call
const newsdetallis = (id) =>{
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showModalDetails(data.data));
}
const showModalDetails = (news) =>{
  const titleModal = document.getElementById('newsDetailsModalLabel');
  const modalBody = document.getElementById('modal-body');
  news.forEach(item => {
    titleModal.innerText = item.title;
    modalBody.innerHTML = `
    <img class="img-fluid" src="${item.thumbnail_url}" alt=""><br>
    <h5> Author Name : ${item.author.name ? item.author.name: 'No author found'}</h5><br>
    <h5> Published Date : ${item.author.published_date ? item.author.published_date: 'No date found'}</h5><br>
    <h5> Total view : ${item.total_view ? item.total_view: 'No view found'}</h5><br>
    <h5> Rating : ${item.rating.number} </h5><br>
    ${item.details}`
    })
}

loadCategory();

const loadCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategory(data.data));
}
const displayCategory = (news) =>{
  console.log(news);
  
  news.forEach(element => {
    const newsSection = document.getElementById('news-div');
    const newsDiv = document.createElement('div');
    newsDiv.innerHTML = `
    <div class="row shadow-lg py-2">
    <div class="col-4">
      <img class="img-fluid p-1" src="juka.jpg" alt="">
    </div>
    <div class="border-1 bg-success p-3 col-8">
      <h1 class="pb-3">${element.title}</h1>
      <img src="juka.jpg" alt="" height="40px" width="40px">
      <h5>${element.author.name}</h5>
      <p class="pt-3">${element.details}</p>
    </div>
  </div>
    `
    newsSection.appendChild(newsDiv);
    console.log(element.category_id);
    // console.log(element.title);
    // console.log(element.details);
    // console.log(element._id);
    // console.log(element.rating.number);
    // console.log(element.author.name);
  });
}

loadCategory();

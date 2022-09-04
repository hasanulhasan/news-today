const loadData = async () =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.data);
}

//category names showing
const displayCategories = (categories) =>{
  const categoriesAll = categories.news_category;
  categoriesAll.forEach(ctname => {
    const menus = document.getElementById('news-list');
    const listMenu = document.createElement('li');
    listMenu.innerHTML = `<span onclick="loadCategory('${ctname.category_id
    }') && toggleSpnier(true)"> ${ctname.category_name
    }</span>`
    menus.appendChild(listMenu);
  });
}
//spninner 
const menuBar = document.getElementById('news-list');
menuBar.addEventListener('click', function(){
  toggleSpnier(true);
  blog(false);
})
//spninner function
const toggleSpnier = isloading => {
  const loader = document.getElementById('loader');
  if(isloading){
    loader.classList.remove('d-none');
  }
  else{
    loader.classList.add('d-none');
  }
}

// blog handler
document.getElementById('blogBtn').addEventListener('click', function(){
  blog(true);
})
// blog status function
const blog = (statusBlog) =>{
  let blog = document.getElementById('blog');
  let newsShowingDiv = document.getElementById('news-div');
  let newsInformation = document.getElementById('newsInfo');
  if(statusBlog){
    blog.classList.remove('d-none');
    newsShowingDiv.classList.add('d-none');
    newsInformation.classList.add('d-none');
  }
  else{
    blog.classList.add('d-none');
    newsShowingDiv.classList.remove('d-none');
    newsInformation.classList.remove('d-none');
  }
}

loadData();
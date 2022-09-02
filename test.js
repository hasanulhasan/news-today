const loadData = async () =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.data);
}
const displayCategories = (categories) =>{
  const categoriesAll = categories.news_category;
  categoriesAll.forEach(ctname => {
    console.log(ctname.category_name);
    const menus = document.getElementById('news-list');
    const listMenu = document.createElement('li');
    listMenu.innerHTML = `${ctname.category_name}
    `
    menus.appendChild(listMenu);
  });
  
}

loadData();
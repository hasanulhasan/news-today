const loadData = async () =>{
  const url = `https://openapi.programming-hero.com/api/news/categories`
  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.data);
}

//categories display
const displayCategories = (categories) =>{
  console.log(categories);
  console.log(categories.news_category);
  const categoriesAll = categories.news_category;
  categoriesAll.forEach(ctname => {
    const menus = document.getElementById('news-list');
    const listMenu = document.createElement('li');
    listMenu.innerHTML = `<span onclick="loadCategory('${ctname.category_id
    }')"> ${ctname.category_name
    }</span>`
    menus.appendChild(listMenu);
  });
}

// menu selection by event handler
const getMenus = document.getElementById('news-list').addEventListener('click', function(event){
  selectedMenu = event.target.innerText;
  // console.log(selectedMenu);
})

loadData();
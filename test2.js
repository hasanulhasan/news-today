const loadCategory = (id) => {
  const url = `https://openapi.programming-hero.com/api/news/category/${id}`
  fetch(url)
  .then(res => res.json())
  .then(data => displayCategory(data.data));
}
const displayCategory = (news) =>{
  console.log(news);
  news.forEach(element => {
    console.log(element.category_id);
    console.log(element.title);
    // console.log(element.details);
    // console.log(element._id);
    // console.log(element.rating.number);
    console.log(element.author.name);
  });
}

loadCategory();

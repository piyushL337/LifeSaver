const proxyUrl = "https://cors-anywhere.herokuapp.com/"
const country = "in";
const category = "health";
const apiKey = "cf50991ed60447479fbc637a21e15425";
const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?countries=${country}&category=${category}&apiKey=${apiKey}`;
const request = new Request(url);

fetch(request)
  .then(response => response.json())
  .then((news) => {
    console.log(news);
  })
  .catch(error => {
    console.log(error);
  });
let request = new Request(url);

displayNews = (articles) => {
  console.log("displayNews called");

  return new Promise((resolve, reject) => {
    try {
      let news = "";
      articles.forEach((article) => {
        news += `<div class="news-container">
        <div class="source">Source: ${article.source.name}</div>
        <div class="date">${article.publishedAt.slice(0, 10)}</div>
        <div class="title">${article.title}</div>
        <div class="description">${article.description}</div>       
        <a href="${article.url}" target="_blank">Read more</a>
      </div>`;
      });
      document.getElementsByClassName("news")[0].innerHTML = news;

      resolve("News Displayed Sucessfully");
    } catch (err) {
      reject(err);
    }
  });
};

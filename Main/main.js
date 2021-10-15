let url = "http://api.mediastack.com/v1/news?access_key=53401c2ce96d5ab09bd48acc762335f7&countries=in&category=health;
let Init = {
  method: "Get",
  headers: {
    //not allowed
  },
};

let request = new Request(url, Init);

displayNews = (articles) => {
  console.log("displayNews called");

  return new Promise((resolve, reject) => {
    try {
      let news = "";
        news += `<div class="news-container">
        <div class="source">Source: ${data.source}</div>
        <div class="date">${data.published_at}</div>
        <div class="title">${data.title}</div>
        <div class="description">${data.description}</div>       
        <a href="${data.url}" target="_blank">Read more</a>
      </div>`;
      });
      document.getElementsByClassName("news")[0].innerHTML = news;

      resolve("News Displayed Sucessfully");
    } catch (err) {
      reject(err);
    }
  });
};

(fetchData = () => {
  console.log("fetchData() called");

  fetch(request)
    .then((response) => response.json())
    .then((responseObj) => {
      console.log("Parsed Response Received");

      return displayNews(responseObj.articles);
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
})();

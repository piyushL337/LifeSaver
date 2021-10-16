// api url
const api_url = "http://api.mediastack.com/v1/news?access_key=53401c2ce96d5ab09bd48acc762335f7&countries=in&category=health";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Name</th>
          <th>Office</th>
          <th>Position</th>
          <th>Salary</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<div class="news-container">
        <div class="source">Source: ${data.source}</div>
        <div class="date">${data.published_at}</div>
        <div class="title">${data.title}</div>
        <div class="description">${data.description}</div>       
        <a href="${data.url}" target="_blank">Read more</a>
      </div>`;;
    }
    // Setting innerHTML as tab variable
    document.getElementsByClassName("news").innerHTML = tab;
}

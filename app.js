function foo () {
    let sel = document.getElementById("newweb");



    let news = document.getElementById("news");
    
fetch(
    fetch(`https://newsapi.org/v2/everything?q=${sel.value}&from=2021-07-27&sortBy=publishedAt&apiKey=16bce94d64464f04808b8eeb474d8e34 `) 
)
    .then (response  => response.json())

   .then (json =>   {
       console.log(json); 

let entData = json.articles;
let card = "";
 for  (let json of entData) {
     card +=
      `<div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${json.urlToImage}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${json.title}</h5>
            <p class="card-text">${json.author}</p>
            <p class="card-text"><small class=${json.description}</small></p>
          </div>
        </div>
      </div>
    </div>`
 }

  news.innerHTML = card ;
   
   
  



 
// foo()
   
}
   ) 
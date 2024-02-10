
const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=184d4a3d26584262af13d0eef4e3c610";
async function getNews(){
    let response = await fetch(api);
    let data = await response.json();
    console.log(data.articles);
}


getNews();


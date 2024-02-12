
const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=184d4a3d26584262af13d0eef4e3c610";
async function getNews(){
    let response = await fetch(api);
    let data = await response.json();
    console.log(data.articles[3]);

    document.getElementById("newsimg").src = data.articles[3].urlToImage;
    document.getElementById("title").innerText = data.articles[3].title;
    document.getElementById("author").innerText = data.articles[3].author;
    document.getElementById("publisher").innerText = data.articles[3].source.name;
    document.getElementById("description").innerText = data.articles[3].description;
    document.getElementById("readmore").href = data.articles[3].url;

}


getNews();


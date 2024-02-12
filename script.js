
const api = "https://newsapi.org/v2/top-headlines?country=us&apiKey=184d4a3d26584262af13d0eef4e3c610";
async function getNews(){
    let response = await fetch(api);
    let data = await response.json();
    console.log(data.articles[10]);

    document.getElementById("newsimg").src = data.articles[10].urlToImage;
    document.getElementById("title").innerText = data.articles[10].title;
    document.getElementById("author").innerText = data.articles[10].author;
    document.getElementById("publisher").innerText = data.articles[10].source.name;
    document.getElementById("description").innerText = data.articles[10].description;
    document.getElementById("readmore").href = data.articles[10].url;

}


getNews();


const api =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=184d4a3d26584262af13d0eef4e3c610";
async function getNews() {
  let response = await fetch(api);
  let data = await response.json();
  console.log(data.articles);

  document.getElementById("newsimg").src = data.articles[10].urlToImage;
  document.getElementById("title").innerText = data.articles[10].title;
  document.getElementById("author").innerText = data.articles[10].author;
  document.getElementById("publisher").innerText =
    data.articles[10].source.name;
  document.getElementById("description").innerText =
    data.articles[10].description;
  document.getElementById("readmore").href = data.articles[10].url;

  // latest news 1

  document.getElementById("h-l1").innerText = data.articles[14].title;
  document.getElementById("authorl1").innerText = data.articles[14].author;
  document.getElementById("publisherl1").innerText =
    data.articles[14].source.name;
  document.getElementById("a-l1").href = data.articles[14].url;

  // latest news 2

  document.getElementById("h-l2").innerText = data.articles[15].title;
  document.getElementById("authorl2").innerText = data.articles[15].author;
  document.getElementById("publisherl2").innerText =
    data.articles[15].source.name;
  document.getElementById("a-l2").href = data.articles[15].url;

    // latest news 3

    document.getElementById("h-l3").innerText = data.articles[16].title;
    document.getElementById("authorl3").innerText = data.articles[16].author;
    document.getElementById("publisherl3").innerText =
      data.articles[16].source.name;
    document.getElementById("a-l3").href = data.articles[16].url;

     // latest news 4

     document.getElementById("h-l4").innerText = data.articles[18].title;
     document.getElementById("authorl4").innerText = data.articles[18].author;
     document.getElementById("publisherl4").innerText =
       data.articles[18].source.name;
     document.getElementById("a-l4").href = data.articles[18].url;

          // latest news 5

          document.getElementById("h-l5").innerText = data.articles[19].title;
          document.getElementById("authorl5").innerText = data.articles[19].author;
          document.getElementById("publisherl5").innerText =
            data.articles[19].source.name;
          document.getElementById("a-l5").href = data.articles[19].url;
  



}

getNews();

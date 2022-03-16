let timerid;
  let movies = document.getElementById("movies");
  async function searchMovies() {
    try {
      let input = document.getElementById("query").value;
      //   console.log(input);

      let res = await fetch(
        `https://www.omdbapi.com/?s=${input}&apikey=19de8743`
      );

      let data = await res.json();
      console.log(data)
      let array_of_movies = data.Search;

      return array_of_movies;
      //   appendData(data.Search);
      //   console.log("data:", data);
    } catch (err) {
      console.log("err:", err);
    }
  }

  function appendData(data) {
      let container = document.getElementById("movies");
      movies.innerHTML = null;
      let errorDiv = document.getElementById("errorDiv");
      errorDiv.innerHTML = null;

      data.forEach(function (elem) {
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = elem.Poster;
        img.alt = "Soory!!!Poster is not available";

        let title = document.createElement("h3");
        title.innerText = elem.Title;

        let year = document.createElement("h6");
        year.innerText = `Year: ${elem.Year}`;

        let type = document.createElement("h6");
        type.innerText = `Type: ${elem.Type}`;

        let rate = Math.floor(Math.random() * (100 - 10) + 10) / 10;
        if (rate > 8.5) {
          let rating = document.createElement("h4");
          rating.innerText = ` ${rate}⭐`;
          rating.style.lineHeight="2px"

          let rec = document.createElement("h4");
          rec.innerText = "Suggested";
          rec.id = "rec";

          div.append(img, rec, rating,title, type, year);
          container.append(div);
        } else {
          let rating = document.createElement("h4");
          rating.innerText = `${rate}⭐`;
          rating.style.lineHeight="2px"
          div.append(img, title, year, type, rating);
          container.append(div);
        }


        // div.append(img, title, year, type);
        // container.append(div);
      });
    }

  async function main() {
    try {
      let data = await searchMovies();

      if (data === undefined) {
        return false;
      }

      // console.log("data:",data)

      appendData(data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  function debounch(func, delay) {
    console.log("Timer:", timerid);
    if (timerid) {
      clearTimeout(timerid);
    }
    timerid = setTimeout(function () {
      func();
    }, delay);
  }
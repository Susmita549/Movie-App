
   
    let images=[

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr95VDsq-A0DGqVugruJKr9nsJP5ASSRAhuA&usqp=CAU",
        "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUh2bOx9vK20t5qATYtKuzszdOhA3Xgt7Uy_7iGUTGpyGOHlgT5vA5lZUpG4hG-IoFe-92EvaKwOu8K0V1ViO4aUN-m8.jpg?r=66e",
        "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTwmYiCps0ippXIGoHMvW3YTZWKPgLappYSkmi830Wg2NKnJxjIM9NdP6AGqD1G0K-4FCS3Uw9j7oFSY9KhPGutnpDF3.jpg?r=6a7",
        "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYetlnFymjZHr_mRzf-EDXekvYKWhLGE4dQ6gf-P08CuFjyEUVpMDskisM9qtS-pcU8OTd8SQy2gMPTIt4E8uLByBUAe.jpg?r=8d4",
        
  
      ];
  
    let i=1;
    let container=document.getElementById("slideshow");
  
    container.innerHTML=null;
    let img=document.createElement("img");
    img.src=images[0];
    container.append(img);
  
    let id=setInterval(function (){
      if(i==images.length){                                                                                               
        i=0;
      }
  
      let image=images[i];
      container.innerHTML=null;
      let img=document.createElement("img");
      img.src=image;
      container.append(img);
      i++
  
    },2000)
  
  
     
  
  
  
  
  //   //  movies database
    var moviesData = [
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfFsTvf6y0ad2eLNi5y_gnALkqBCZ-Y_wGiE7MYbAQgpnwpq-ZCdBf4BtFKQJwzhvDgvHSyAOXV7MglOoQbe5tFaYfU.jpg?r=13e",
        name: "Chandigarh Kare Aashiqui",
        releasedte: "12 MAR 2022",
        rating: "3.5",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe3ZlOGELltmzVjNN0ROJ5LtqM8j6Ck1eRJsee1f8EBzHsHWwsR13roAzNg-nQYzsvXsUmx7IJjrYz1kQatlSUZL099A.jpg?r=801",
        name: "Tamasha",
        releasedte: "12 MAR 2022",
        rating:"3.7",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRf_HA4cWoyI1EdD_IMxy9uOf0ZyMnprjjFpbzvLrA2WPxduPPuR_W_mLslMq-wQkJyBtx3SI22dx3TBIIsHj5wkR5p1.jpg?r=f90",
        name: "Kabhi Khushi Kabhi Gham",
        releasedte: "12 MAR 2022",
        rating: "4.5",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTwmYiCps0ippXIGoHMvW3YTZWKPgLappYSkmi830Wg2NKnJxjIM9NdP6AGqD1G0K-4FCS3Uw9j7oFSY9KhPGutnpDF3.jpg?r=6a7",
        name: "We Are Family",
        releasedte:"12 MAR 2022",
        rating: "4.8",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYetlnFymjZHr_mRzf-EDXekvYKWhLGE4dQ6gf-P08CuFjyEUVpMDskisM9qtS-pcU8OTd8SQy2gMPTIt4E8uLByBUAe.jpg?r=8d4",
        name: "Half Girlfriend",
        releasedte:"12 MAR 2022",
        rating:  "4.2",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRGselbh8K5iinGnUUvMmorzXD5IDwUMHQqrva_gYRgYH_xFr2I3B7oVJh_UyF_WAIYk29_G89Yb9XvoWvgWGLXDUrdX.jpg?r=f2e",
        name: "Malal",
        releasedte: "12 MAR 2022",
        rating: "5",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQjq93WMqETvUE0eGTRL5ud1DfeKuisqgoY2hAeGQL-BREJ7uOuXME_MS4SpHqzJSrbiTW0C9syJumgPkep7ILCqPtHF.jpg?r=439",
        name: "Kabir Singh",
        releasedte: "12 MAR 2022",
        rating:  "3",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYSx4nVGFQJIAQBweaJcAForfcl0oz-8M9ta5AkWOb3l1QX3Ab1vYKqq0OEc9_PX5ld_xzzWwOGXPPJDIk6WcbqARrak.jpg?r=d56",
        name: "Kai Po Che",
        releasedte: "12 MAR 2022",
        rating:  "4.9",
      },
      {
        image_url:
          "https://occ-0-4995-2164.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUh2bOx9vK20t5qATYtKuzszdOhA3Xgt7Uy_7iGUTGpyGOHlgT5vA5lZUpG4hG-IoFe-92EvaKwOu8K0V1ViO4aUN-m8.jpg?r=66e",
        name: "The Sky is PINK",
        releasedte: "12 MAR 2022",
        rating:  "3.9",
      },
    ];
  
    localStorage.setItem("movies", JSON.stringify(moviesData));
    var movie= JSON.parse(localStorage.getItem("movies")) || [];
    console.log(movie)
  
  
     function display(movie){
  
            document.getElementById("movies").innerHTML = null;
              movie.map(function(elem){
              var mainDiv=document.createElement("div");
              var img=document.createElement("img");
              img.setAttribute("src",elem.image_url);
        
              var name=document.createElement("p");
              name.innerText=elem.name;
              name.style.color="red";
              
        
            
              var releasedte=document.createElement("p");
              releasedte.innerText=elem.releasedte;
              releasedte.style.color="blue";
                  
        
              var rating=document.createElement("p");
              rating.innerText=elem.rating+"⭐";
              rating.style.color="red";
              
        
              mainDiv.append(img,name,releasedte,rating);
              document.querySelector("#movies").append(mainDiv);
            
           
          })
  
     }
  
     display(movie);
  
     document.getElementById("sort-lh").addEventListener("click", function(){
      movie.sort((a,b)=>(a.rating-b.rating));
      display(movie);
  })
  
     document.getElementById("sort-hl").addEventListener("click", function(){
      movie.sort((a,b)=>(b.rating-a.rating));
      display(movie);
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    //  function highLow(movie){
    //   display(movie);
    //  }
    //  function lowHigh(movie){
    //   display(movie);
    //  }
  
    // lowHigh(movie);
    // console.log(lowHigh(movie))
    // highLow(movie);
      
  
  
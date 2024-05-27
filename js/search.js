$('#filterBtn').click(function(){
    $('#filterBtn').toggleClass("active");
});

$('#sortBtn li').click(function(){
    var value = $(this).attr('value');
    var text = $(this).html();
    $('#sortBtn').attr("value",value);
    $('#sortBtn p').html(text);
})

$("#filterBtn li").click(function(){
    var value = $(this).attr('value');
    var text = $(this).html();
    $('#filterBtn').attr("value",value);
    $('#filterBtn > p').html(text);
})


const movieList = [
    {
        image:"../img/Titanic (James Cameron, 1997)_0000.jpg",
        title:"Titanic",
        year:1997,
        director:"James Cameron",
        plot:"The supposedly unsinkable RMS Titanic, carrying dreams and heartbreak like Jack and Rose, met a tragic end after striking an iceberg on its maiden voyage.",
        price:15,
        note:5,
        favorite:true
    }
]

function search(sort="recents",filter="nom",input=""){
    document.querySelector(".movies").innerHTML = "";
    let acceptedMovies = [];
    if(input.trim() == "")
    {
        for(var movie of movieList)
        {
            acceptedMovies.push(movie);
        }
    }
    else{

    }

        for(let movie of acceptedMovies)
        {
            var movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            movieDiv.innerHTML += `<img src="${movie.image}">`;
            movieDiv.innerHTML += `<h3>${movie.title}</h3>`;
            movieDiv.innerHTML += `<p>${movie.year}</p>`;
            movieDiv.innerHTML += `<p>${movie.director}</p>`;
            movieDiv.innerHTML += `<p>${movie.plot}</p>`;
            movieDiv.innerHTML += `<p>${movie.price} €</p>`;
            var starsDiv = document.createElement("div");
            starsDiv.classList.add("stars");
            var a = 0;
            for(var i = 0;i < movie.note;i++){
                var starImg = document.createElement("img");
                starImg.src = "../svg/yellow-star-15589.svg";
                starsDiv.appendChild(starImg);
                a++;
            }
            while(a < 5){
                var starImg = document.createElement("img");
                starImg.src = "../svg/black-star-icon.svg";
                starsDiv.appendChild(starImg);
                a++;
            }
            console.log(a);
            movieDiv.appendChild(starsDiv);

            var heartImg = document.createElement("img");
            heartImg.classList.add("favorite");
            if(movie.favorite)
            {
                heartImg.src = "../svg/red-heart-icon.svg";
            }
            else
            {
                heartImg.src = "../svg/black-heart-svgrepo-com.svg";
            }
            movieDiv.appendChild(heartImg);
            movieDiv.innerHTML += `<a href="achat.html?namr=toto"><button>Acheter</button></a>
            <button>Ajouter au panier</button>`;

            document.querySelector(".movies").appendChild(movieDiv);
        }
}
search()
$('#filterBtn').click(function(){
    $('#filterBtn').toggleClass("active");
});

$('#sortBtn li').click(function(){
    var value = $(this).attr('value');
    var text = $(this).html();

    if($('#sortBtn').attr("value") === value)
    {
        return;
    }

    $('#sortBtn').attr("value",value);
    $('#sortBtn p').html(text);
    search(value,$('#filterBtn').attr("value"),$('.inputs input').val());
})

$("#filterBtn li").click(function(){
    var value = $(this).attr('value');
    var text = $(this).html();
    $('#filterBtn').attr("value",value);
    $('#filterBtn > p').html(text);
    search($('#sortBtn').attr("value"),value,$('.inputs input').val());
})


const movieList = [
    {
        image:"../img/Titanic.jpg",
        title:"Titanic",
        year:1997,
        director:"James Cameron",
        plot:"The supposedly unsinkable RMS Titanic, carrying dreams and heartbreak like Jack and Rose, met a tragic end after striking an iceberg on its maiden voyage.",
        price:15,
        note:5,
        favorite:true,
        genre:["Drama","History","Romance"]
    },
    {
        image:"../img/DieHard.jpg",
        title:"Die Hard",
        year:1988,
        director:"John McTiernan",
        plot:"NYPD cop John McClane becomes a one-man army when a Christmas party at his estranged wife's workplace is overtaken by terrorists.",
        price:10,
        note:4,
        favorite:true,
        genre:["Action"]
    },
    {
        image:"../img/heat.jpg",
        title:"Heat",
        year:1995,
        director:"Michael Mann",
        plot:"In relentless pursuit of a perfect heist, a professional thief and a dedicated detective collide in a scorching game of cat and mouse.",
        price:10,
        note:5,
        favorite:false,
        genre:["Action","Thriller"]
    },
    {
        image:"../img/Jumanji.jpg",
        title:"Jumanji : Welcome to the Jungle",
        year:2017,
        director:"Jake Kasdan",
        plot:"Four teens trapped in a magical video game as their adult avatars must work together to beat the game and return to the real world.",
        price:10,
        note:5,
        favorite:false,
        genre:["Adventure","Action","Comedy"]
    },
    {
        image:"../img/Leon.jpg",
        title:"Léon : The Professional",
        year:1994,
        director:"Luc Besson",
        plot:"A lonely hitman forms an unlikely bond with a young girl seeking revenge for her family's murder.",
        price:10,
        note:4,
        favorite:false,
        genre:["Action","Thriller"]
    },
    {
        image:"../img/TrainingDay.jpg",
        title:"Training Day",
        year:2001,
        director:"Antoine Fuqua",
        plot:"An idealistic rookie cop's first day in narcotics takes a dark turn as his decorated but corrupt partner blurs the lines between justice and brutality.",
        price:10,
        note:4,
        favorite:false,
        genre:["Thriller"]
    },
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
        if(filter === "nom")
        {
            for(var movie of movieList)
            {
                if(movie.title.toLowerCase().includes(input.toLowerCase().trim()))
                {
                    acceptedMovies.push(movie);
                }
            }
        }
        else if(filter === "annee")
        {
            if(!isNaN(parseInt(input)))
            {
                var num = parseInt(input.trim());
                for(var movie of movieList)
                {
                    if(movie.year == num || movie.year.toString().includes(num.toString()))
                    {
                        acceptedMovies.push(movie);
                    }
                }
            }
        }
        else if(filter === "note")
        {
            if(!isNaN(parseInt(input)))
            {
                var num = parseInt(input.trim());
                for(var movie of movieList)
                {
                    if(movie.note === num)
                    {
                        acceptedMovies.push(movie);
                    }
                }
            }
        }
        else if(filter === "genre")
        {
            for(var movie of movieList)
            {
                for(var genre of movie.genre)
                {
                    if(genre.toLowerCase().includes(input.toLowerCase().trim()) && !acceptedMovies.includes(movie))
                    {
                        acceptedMovies.push(movie);
                        break;
                    }
                }
            }
        }
        else if(filter === "director")
        {
                for(var movie of movieList)
                {
                    if(movie.director.toLowerCase().includes(input.toLowerCase().trim()))
                    {
                        acceptedMovies.push(movie);
                    }
                }
        }
    }

    if(sort === "recents")
    {
        acceptedMovies.sort((a,b)=>b.year - a.year);
    }
    else if(sort === "cheap")
    {
        acceptedMovies.sort((a,b)=>a.price - b.price);
    }
    else{
        acceptedMovies.sort((a,b)=>b.note - a.note);
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
search();

$("input").on("keyup",function(event){
    var keyboardEvent = event.originalEvent;
    keyboardEvent.preventDefault();
    search($('#sortBtn').attr("value"),$('#filterBtn').attr("value"),$('.inputs input').val());
});

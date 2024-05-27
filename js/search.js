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
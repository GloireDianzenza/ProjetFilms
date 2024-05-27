$('#filterBtn').click(function(){
    $('#filterBtn').toggleClass("active");
});

$('#sortBtn li').click(function(){
    console.log($(this).attr("value"));
})
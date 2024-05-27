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
    console.log(text);
})
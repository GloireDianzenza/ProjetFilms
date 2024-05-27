$('#filterBtn').click(function(){
    $('#filterBtn').toggleClass("active");
});

$('#sortBtn li').click(function(){
    var value = $(this).attr('value');
    var text = $(this).html();
    $('#filterBtn').attr("value",value);
})
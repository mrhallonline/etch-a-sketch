for (var i = 1; i < 257; i++) {
    $("#gridBox").prepend('<div class="grid-item"></div>');
}

$(".grid-item").hover(function () {
    $(this).addClass("onHover");
});

$("#clearCanvas").click(function () {
    location.reload(false);
});


$(".canvasButton").click(function () {
    // location.reload(true);
    var canvasSize = $("#vertical").val();  
    
    $(".grid-container").empty().css({
    'display': 'grid',
    'margin': '5px auto',
    'height': '800px',
    'width': '800px',
    'grid-template-columns':  'repeat(' + canvasSize + ', 1fr)',
    'grid-template-rows':  'repeat(' + canvasSize + ', 1fr)',
    'padding': '50px'
     });
    
    for (var i = 1; i < (canvasSize*canvasSize+1); i++) {
        $(".grid-container").prepend('<div class="grid-item"></div>');
    }
    
    $(".grid-item").hover(function () {
        $(this).addClass("onHover");
    });

});
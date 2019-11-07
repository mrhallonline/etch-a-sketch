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
    // location.reload(false);
    var canvasSize = $("#vertical").val();  
    
    $(".grid-container").css({
    'display': 'grid',
    'margin': '5px auto',
    'height': '600px',
    'width': '600px',
    // 'background-color': '#2196F3',
    'grid-template-columns':  'repeat(' + canvasSize + ', 1fr)',
    
    'padding': '50px'
     });
    
    for (var i = 1; i < (canvasSize*canvasSize+1); i++) {
        $(".grid-container").append('<div class="grid-item"></div>');
    }
    

});
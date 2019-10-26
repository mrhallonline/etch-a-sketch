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

    var canvasSize = $("#vertical").val();
    $("#gridBox").css("grid-template-columns:" ,"repeat(" + canvasSize + ", 1fr)");
    
    for (var i = 0; i < (canvasSize*canvasSize); i++) {
        $("#gridBox").prepend('<div class="grid-item"></div>');
    }
    alert(canvasSize);

});
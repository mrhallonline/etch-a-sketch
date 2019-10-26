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

    canvasSize = $("#vertical").val();

    alert(canvasSize);
});
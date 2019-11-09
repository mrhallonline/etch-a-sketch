//sets up the initial 16x16 grid
for (var i = 1; i < 257; i++) {
    $("#gridBox").prepend('<div class="grid-item"></div>');
}

$(".canvasButton").css({
    'width': "150px",
    'margin-left': '10px'
});

//hovering over a grid changes the color from white to black 
blackColor();

//clears the grid back to original state
$("#clearCanvas").click(function () {
    $('#gridBox').addClass('gridBoxShake', true)
    setTimeout(function() {
        $('#gridBox').removeClass("gridBoxShake");
        $('.grid-item').css("background-color","#fff");
    }, 800);
});
//inputs are mirrored
$("#vertical").on("input", function () {
    let verticalValue = $("#vertical").val();
    $("#horizontal").val(verticalValue);
});
//sets up new canvas with box sizes based on the number entered.
$(".canvasButton").click(function () {
    //stores the number entered
    var canvasSize = $("#vertical").val();

    //new grid based on canvasSize variable
    $(".grid-container").empty().css({
        'display': 'grid',
        'margin': '5px auto',
        'height': '800px',
        'width': '800px',
        'grid-template-columns': 'repeat(' + canvasSize + ', 1fr)',
        'grid-template-rows': 'repeat(' + canvasSize + ', 1fr)',
        
    });

    //populates enough grid containers based on canvasSize variable
    for (var i = 1; i < (canvasSize * canvasSize + 1); i++) {
        $(".grid-container").prepend('<div class="grid-item"></div>');
    }
    //hovering changes white boxes to black
    $(".grid-item").hover(function () {
        $(this).css("background-color", "#000000");
    });

});

//Brush Selection buttons
$("#eraserBrush").click(function () {
    eraserColor();
});


$("#blackBrush").click(function () {
    blackColor();
});

$("#shaderBrush").click(function () {
    shaderColor();
});

$("#multiColoredBrush").click(function () {
    randomColor();
});



//functions
function blackColor() {
    $(".grid-item").hover(function () {
        $(this).css('background-color', '#000000');
    });
}

function eraserColor() {
    $(".grid-item").hover(function () {
        $(this).css('background-color', '#fff');
    })
};

function shaderColor() {
    
}
function randomColor() {
    $(".grid-item").hover(function () {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let newColor = 'rgb(' + x + ',' + y + ',' + z + ')';
        $(this).css('background-color', newColor);
    });
};


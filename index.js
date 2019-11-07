//sets up the initial 16x16 grid
for (var i = 1; i < 257; i++) {
    $("#gridBox").prepend('<div class="grid-item"></div>');
}

//hovering over a grid changes the color from white to black 
$(".grid-item").hover(function () {
    $(this).addClass("onHover");
});

//clears the grid back to original state
$("#clearCanvas").click(function () {
    location.reload(false);
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
    'grid-template-columns':  'repeat(' + canvasSize + ', 1fr)',
    'grid-template-rows':  'repeat(' + canvasSize + ', 1fr)',
    'padding': '50px'
     });
    
     //populates enough grid containers based on canvasSize variable
    for (var i = 1; i < (canvasSize*canvasSize+1); i++) {
        $(".grid-container").prepend('<div class="grid-item"></div>');
    }
    //hovering changes white boxes to black
    // $(".grid-item").hover(function () {
    //     $(this).addClass("onHover");
    // });
    randomColor()
});

function randomColor(){
    $(".grid-item").hover(function(){
        
        let x = Math.floor(Math.random()*256);
        let y = Math.floor(Math.random()*256);
        let z = Math.floor(Math.random()*256);
        let newColor = 'rgb('+x+','+y+','+z+')';
        $(this).css('background-color' , newColor);
    });
    
    // alert(newColor);
}
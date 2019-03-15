// var colors=[
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ];
var colors=generateRandomColors(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message") ;
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click",function(){
    resetButton.textContent="New Colors";
    // generate all random Colors;
    colors = generateRandomColors(6);
    // pick a random Color from the array
    pickedColor = pickColor();
    // change the colorDisplay to pickedColor
    colorDisplay.textContent = pickedColor;
    // change color of all the squares
    for(var i = 0 ; i < squares.length;i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background="#232323";
});



colorDisplay.textContent=pickedColor;

for(var i = 0 ; i < squares.length;i++){
    // add initial colors to the squares
    squares[i].style.background=colors[i];
// add click listeners to the squares
    squares[i].addEventListener("click",function(){
        // grab color of clicked square
        var clickedColor = this.style.background;
        // Compare color to pickedColor
        if(clickedColor===pickedColor)
        {
            // alert("Correct!!!");
            h1.style.background=clickedColor;
            messageDisplay.textContent="Correct!!!";
            changeColor(clickedColor);
            resetButton.textContent="Play Again?" ;

        }
        else{
            // alert("Wrong!!!");
            this.style.background="#232323"
            messageDisplay.textContent="Try Again!!";            
        }
    });

}

function changeColor(color){
    // loop through all the colors
    for(var i = 0 ; i < squares.length ; i++)
    {
        squares[i].style.background = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[];

    for(var i = 0 ; i < num ; i++){
        arr.push(generateColor());
    }
    return arr;
}

function generateColor(){
        //Generate random red color
        var r = Math.floor(Math.random()*256);
        // Generate random green color
        var g = Math.floor(Math.random()*256);
        // Generate random blue color 
        var b = Math.floor(Math.random()*256);
  
    return "rgb("+r+", "+g+", "+b+")";
}
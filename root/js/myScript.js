var width, height, center;
var points = 5;
var smooth = true;
var path = new Path();
var pathHeight = view.bounds.bottomLeft;
var pathClimbInt = 1;
var clicked = false;
path.fillColor = 'black';
initializePath();

//Function that allows the call of a random integer between min and max

function getRandomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Initialize the path

function initializePath() {
    center = view.bounds.bottomLeft;
    width = view.size.width;
    height = view.size.height;
    path.segments = [];
    path.add(view.bounds.bottomLeft);
    for (var i = 0; i <= points; i++) {
        var point = new Point(width / points * i, center.y);
        path.add(point);
    }
    path.add(view.bounds.bottomRight);
    path.fullySelected = false;
}

//Listen for mouse down

function onMouseDown(event) {
    clicked = true;
    console.log(clicked);
}

//If the mouse is clicked, trigger climb effect

view.onFrame = function (event) {
    if (clicked === true) {
        pathHeight += (center.y + pathClimbInt);
        for (var i = 1; i <= points + 1; i++) {
            var pathClimbInt = getRandomInt(0, 20);
            var yPos = path.segments[i].point.y;
            path.segments[i].point.y = yPos - pathClimbInt;
            console.log(clicked)
        }

    }
    else return 0;

}

console.log(clicked);

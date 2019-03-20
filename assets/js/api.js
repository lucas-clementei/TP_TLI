var graph = new	Graph("Graph1",false);


$(document).ready(function(){
var elem = document.getElementById('canvas-graph'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    vertex = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;
        console.log(x,y);
        context.beginPath();
		context.arc(x, y, 10, 0, 2 * Math.PI);
		context.fillStyle = "black";
		context.fill();
		context.font = "10px Arial";
		context.fillStyle = "red";
		context.textAlign = 'center'; 
		context.fillText("666", x, y);
		context.stroke();
    // Collision detection between clicked offset and elements.
    graph.vertices.forEach(function(element) {
        if (y > element.top && y < element.top + element.height 
            && x > element.left && x < element.left + element.width) {
            alert("Le noeud :"+element.id);
        }
    });
    // Add element.
	graph.addVertex(new Pos(x,y),'')
}, false);




// Render vertex.
vertex.forEach(function(element) {
	context.beginPath();
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
    context.stroke();
})

})




function addVertice() {

}

function addEdge() {

  }

function toDelete(){

}

function changeLabel(){

}

function moveVertice(){


}

function reset(){

}

function toExport(){


}

function toImport(){


}


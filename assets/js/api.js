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
	var idClicked = graph.getPosition(new Pos(x,y));
	console.log(idClicked);
    if(idClicked==-1){
    var vertex = new Vertex(new Pos(x,y),'');
    // Add element.
	graph.addVertex(vertex);
        context.beginPath();
		context.arc(x, y, 10, 0, 2 * Math.PI);
		context.fillStyle = "black";
		context.fill();
		context.font = "10px Arial";
		context.fillStyle = "red";
		context.textAlign = 'center'; 
		context.fillText(vertex.id, x, y);
		context.stroke();
}else{

	alert("Le noeud cliqué est d'ID :"+idClicked);



}

}, false);






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


var graph = new	Graph("Graph1",false);
<<<<<<< HEAD
var canvas, context, selectedVertex;

$(document).ready(function() {
    canvas = document.getElementById('canvas-graph');
    context = canvas.getContext('2d');

    canvas.addEventListener("click", function (evt) {
        var mousePos = getMousePos(canvas, evt);
        var x = mousePos.x, y = mousePos.y;

        if(selectedVertex == null)
        {
            var isFree = true;
            selectedVertex = null;

            if(graph.vertices.length > 0)
            {
                for(var i in graph.vertices)
                {
                    if(isIntersect({x: x, y: y}, graph.vertices[i].pos)){
                        isFree = false;
                        selectedVertex = graph.vertices[i];
                        break;
                    }
                }
            }

            if(isFree)
            {
                var vertex = new Vertex(new Pos(x, y), '');
                graph.addVertex(vertex);

                context.beginPath();
                context.arc(x, y, 10, 0, 2 * Math.PI);
                context.fillStyle = "black";
                context.fill();

                context.textAlign = 'center';
                context.font = "10px Arial";
                context.fillStyle = "white";
                context.fillText(vertex.id, x, y);
            }
            else
            {
                context.beginPath();
                context.arc(selectedVertex.pos.x, selectedVertex.pos.y, 10, 0, 2 * Math.PI);
                context.fillStyle = "green";
                context.fill();

                context.textAlign = 'center';
                context.font = "10px Arial";
                context.fillStyle = "white";
                context.fillText(selectedVertex.id, selectedVertex.pos.x, selectedVertex.pos.y);

                document.addEventListener('keydown', onKeyDownDelete, false);
            }
        }
        else
        {
            var secondVertex = null;
            for(var i in graph.vertices)
            {
                if(isIntersect({x: x, y: y}, graph.vertices[i].pos)){
                    isFree = false;
                    secondVertex = graph.vertices[i];
                    if(secondVertex.pos.x == selectedVertex.pos.x && secondVertex.pos.y == selectedVertex.pos.y)
                    {
                        context.beginPath();
                        context.arc(selectedVertex.pos.x, selectedVertex.pos.y, 10, 0, 2 * Math.PI);
                        context.fillStyle = "black";
                        context.fill();

                        context.textAlign = 'center';
                        context.font = "10px Arial";
                        context.fillStyle = "white";
                        context.fillText(selectedVertex.id, selectedVertex.pos.x, selectedVertex.pos.y);
                        selectedVertex = null;
                        secondVertex = null;
                    }
                    break;
                }
            }

            if(secondVertex != null)
            {
                var edge = new Edge(selectedVertex.id, secondVertex.id);
                graph.addEdge(edge);
                drawEdge(selectedVertex, secondVertex);

                context.beginPath();
                context.arc(selectedVertex.pos.x, selectedVertex.pos.y, 10, 0, 2 * Math.PI);
                context.fillStyle = "black";
                context.fill();

                context.textAlign = 'center';
                context.font = "10px Arial";
                context.fillStyle = "white";
                context.fillText(selectedVertex.id, selectedVertex.pos.x, selectedVertex.pos.y);

                selectedVertex = null;
                secondVertex = null;
            }
        }
    }, false);
=======


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






>>>>>>> b15e1000b8a8a5392e71a40890681af776cd52e2
})

//Get Mouse Position
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function isIntersect(point, circle) {
    return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < 15;
}

function reset(){
    graph.reset();
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function clearCircle(context,x,y,radius) {
    context.beginPath();
    context.clearRect(x-radius,y-radius,radius*2,radius*2);
}

function onKeyDownDelete(event){
    const nomTouche = event.key;

    if(nomTouche == 'Delete')
    {
        clearCircle(context, selectedVertex.pos.x, selectedVertex.pos.y, 10);
        graph.deleteVertex(selectedVertex.id);
        selectedVertex = null;
    }
}

function drawEdge(v1, v2){
    context.beginPath();
    context.moveTo(v1.pos.x, v1.pos.y);
    context.lineTo(v2.pos.x, v2.pos.y);
    context.stroke();
}
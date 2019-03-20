class Graph{

  constructor(name, direction){
    this.name = name;
    this.direction = direction;
    this.vertices = [];
    this.edges = [];
  }

  addVertex(vertex){
    this.vertices.push(vertex);
  }

  addEdge(id1, id2){
    this.edges.push(id1, id2);
  }

  getPosition(posi){

    var id=-1;

    for(let vertex of this.vertices) {

      if(posi.x > vertex.pos.x - 10 && posi.x < vertex.pos.x + 15
        && posi.y > vertex.pos.y - 10 && posi.y < vertex.pos.y + 10) {
        return vertex.id;
      }

    }

    return id;
  }
}
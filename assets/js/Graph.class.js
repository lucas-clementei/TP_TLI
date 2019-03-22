class Graph{

  constructor(name, directed){
    this.name = name;
    this.directed = directed;
    this.vertices = [];
    this.edges = [];
  }

  addVertex(vertex){
    this.vertices.push(vertex);
  }

  addEdge(edge){
    this.edges.push(edge);
  }

<<<<<<< HEAD
  reset(){
    this.vertices = [];
    this.edges = [];
  }

  deleteVertex(id){
      for(var i in this.edges)
      {
          if(this.edges[i].id == id)
          {
              this.edges.splice(i, 1);
          }
      }

      for(var i in this.vertices)
      {
          if(this.vertices[i].id == id)
          {
            this.vertices.splice(i, 1);
            break;
          }
      }
  }

=======
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
>>>>>>> b15e1000b8a8a5392e71a40890681af776cd52e2
}
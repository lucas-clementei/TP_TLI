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

}
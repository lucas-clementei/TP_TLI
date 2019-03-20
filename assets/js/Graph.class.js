class Graph{

  constructor(name, direction){
    this.name = name;
    this.direction = direction;
    this.vertices = [];
    this.edges = [];
  }

  addVertex(pos, label){
    this.vertices.push(new Vertex(pos, label));
  }

  addEdge(id1, id2){
    this.edges.push(id1, id2);
  }
}
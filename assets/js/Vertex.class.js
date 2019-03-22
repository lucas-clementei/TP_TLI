class Vertex {
  static idGlobal = 0;

  constructor(pos,label) {
    this.pos = pos;
    this.label = label;
    this.id = Vertex.idGlobal;
    Vertex.idGlobal++;
  }

}
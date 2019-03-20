class Vertex {
	static idGlobal = 0;
  constructor(pos,label) {
  	this.id = Vertex.idGlobal;
  	Vertex.idGlobal++;
    this.pos = pos;
    this.label = this.id
  }
}
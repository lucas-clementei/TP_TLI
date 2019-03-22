class Vertex {
<<<<<<< HEAD
  static idGlobal = 0;

=======
	static idGlobal = 0;
>>>>>>> b15e1000b8a8a5392e71a40890681af776cd52e2
  constructor(pos,label) {
  	this.id = Vertex.idGlobal;
  	Vertex.idGlobal++;
    this.pos = pos;
<<<<<<< HEAD
    this.label = label;
    this.id = Vertex.idGlobal;
    Vertex.idGlobal++;
=======
    this.label = this.id
>>>>>>> b15e1000b8a8a5392e71a40890681af776cd52e2
  }

}
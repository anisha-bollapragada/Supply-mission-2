class Boxclass{
constructor(x,y,width,height){
    var options = {
        'isStatic':true
    }
    this.side = Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height = height;
    World.add(world,this.side);
}
display(){
    rectMode(CENTER)
    fill("red")
    rect(this.side.position.x, this.side.position.y, this.width, this.height)
}

}
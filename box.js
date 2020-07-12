class Box {
  constructor(x,y,width,height) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    this.visiblity = 255;
  }
  display(){
    var pos =this.body.position;

    if(this.body.speed<6){
      rectMode(CENTER);
    fill("pink");

      rect(pos.x, pos.y, this.width, this.height);
     // super.display();
      }else{
       World.remove(world,this.body);
          push()
          this.visiblity = this.visiblity -5
         // tint(255,this.visiblity)
        //  image(this.image,this.body.position.x,this.body.position.y,50,50);

          pop()
  }
}
};
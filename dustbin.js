class dustBin {
    constructor(x, y, width, height) {
      var options = {
         'isStatic' :true,
          
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage  ("dustbingreen.png")
     
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill(255);
      stroke(0,255,0);
      strokeWeight(4);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  
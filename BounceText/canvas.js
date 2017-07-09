var canvas=document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var c =canvas.getContext('2d');

function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dy=dy;
    this.dx=dx;
    this.radius=radius;    
    
    
    this.draw=function(){
     c.beginPath();
     c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
     c.strokeStyle="Blue";
     c.stroke();
        
        
        
    }
    
    this.update=function() {
        
        if(this.x+this.radius>innerWidth || this.x-this.radius<0){
        this.dx=-this.dx;   
            }
    
    
    this.update=function() {
        
        if(this.y+this.radius>innerHeight || this.y-this.radius<0)
     this.dy=-this.dy;   
    }
    
    this.x +=this.dx;
    this.y +=this.dy;
    this.draw;
    }   
}


var circleArray=[];

for(var i=0;i<101;i++) {
    var radius=30;
    var x=(Math.random()*innerWidth-radius*2)+radius;
    var y=(Math.random()*innerHeight-radius*2)+radius;
    var dx=(Math.random()-0.5);
    var dy=(Math.random()-0.5);
    
    circleArray.push(new Circle(this.x,this.y,this.dx,this.dy,this.radius));    
}


function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    
    for(var i=0;i<circleArray.length;i++){
        circleArray[i].update();
    }
    
}







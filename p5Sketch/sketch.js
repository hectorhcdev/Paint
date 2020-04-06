var listX=[];
var listY=[];

var option=[];

var actualX=[];
var actualY=[];

var r=0;
var g=0;
var b=0;

var keys=[false,false];

var strokePencil=4;

var a = 0;
function setup() {
  createCanvas(400, 500);
}

function draw() {
  
  background(220);
  for (var i =0; i< listX.length;i++){
    var auxX=listX[i];
    var auxY=listY[i];
    for (var j=0;j< auxX.length-1;j++){
      var auxOption=option[i];
      stroke(auxOption[0],auxOption[1],auxOption[2]);
      strokeWeight(auxOption[3]);
      line(auxX[j],auxY[j],auxX[j+1], auxY[j+1]);
    }
  }
  
  for(var i =0; i< actualX.length-1;i++){
    stroke(r,g,b);
    strokeWeight(strokePencil);
    line(actualX[i],actualY[i],actualX[i+1],actualY[i+1]);
  }
  fill(0);
  stroke(0);
  strokeWeight(0);
  rect(0,400,width,100);
  if(r>20){
    fill(r,0,0);
  }else{
    fill(255,255,255);
  }
  rect(10,410,80,80);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("R",45,455);
  
  

  if(g>20){
    fill(0,g,0);
  }else{
    fill(255,255,255);
  }
  strokeWeight(1);
  rect(100,410,80,80);
  stroke(0);
  strokeWeight(1);
  fill(0);
  text("G",135,455);
  

  if(b>20){
    fill(0,0,b);
  }else{
    fill(255,255,255);
  }
  rect(190,410,80,80);
  fill(0);
  strokeWeight(1);
  stroke(0);
  text("B",225,455);
  fill(r,g,b);
  stroke(255);
  rect(280,410,80,80);
  if(keys[0]){
    strokePencil++;
  }
  if(keys[1]){
    strokePencil--;
    if(strokePencil<=1){
      strokePencil=1;
    }
  }
  stroke(0);
  strokeWeight(0);
  fill(0);
  text("Grosor: "+strokePencil,10,20);
  text("Borrar: ENTER",290,20);
  text("Control Grosor: + -",290,35);
}

function mousePressed(){
  actualX=[];
  actualY=[];
  if(mouseX>10 && mouseX<90 && mouseY>410 && mouseY<490){
    r=((mouseX-10)/80)*255;
  }
  if(mouseX>100 && mouseX<180 && mouseY>410 && mouseY<490){
    g=((mouseX-100)/80)*255;
  }
  if(mouseX>190 && mouseX<270 && mouseY>410 && mouseY<490){
    b=((mouseX-190)/80)*255;
  }
}

function mouseReleased(){
  if(actualX.length!=0){
    listX.push(actualX);
    listY.push(actualY);
    var aux=[r,g,b,strokePencil];
    
    option.push(aux);
  }
  actualX=[];
  actualY=[];
  
}

function mouseDragged(){
  actualX.push(mouseX);
  actualY.push(mouseY);
  if(mouseX>10 && mouseX<90 && mouseY>410 && mouseY<490){
    r=((mouseX-10)/80)*255;
  }
  if(mouseX>100 && mouseX<180 && mouseY>410 && mouseY<490){
    g=((mouseX-100)/80)*255;
  }
  if(mouseX>190 && mouseX<270 && mouseY>410 && mouseY<490){
    b=((mouseX-190)/80)*255;
  }
}

function keyPressed(){
  if(keyCode== ENTER){
    listX=[];
    listY=[];
    actualX=[];
    actualY=[];
    option=[];
  }
  if(key== '+'){
    keys[0]=true;
  }
  
  if(key == '-'){
    keys[1]=true;
  }
  
}

function keyReleased(){
  if(key== '+'){
    keys[0]=false;
  }
  
  if(key == '-'){
    keys[1]=false;
  }
}
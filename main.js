status = "";
img = "";
objects = [];

function setup () {
canvas = createCanvas( 380 , 380);
canvas.center();
Video = createCapture(VIDEO);
Video.size(380, 380);
Video.hide();

objectDetector = ml5.objectDetector("cocossd" , modelLoaded);

document.getElementById("status").innerHTML = "Status = Detecting Object";  
}

function modelLoaded() {

    console.log("ModelLoaded")
status = true;


}


function gotResult(error, results) 
{ 
    if (error) { 
console.log(error); 
} 
console.log(results); 
objects = results; 
}

function preload(){
    img = loadImage("57.png");
}

function draw () {
 image (Video , 0 , 0 , 380 , 380);
  if (status != "")

  {
      r = random (255);
      g = random(255);
      b = random(255);
    objectDetector.detect(Video , gotResult);
      for ( i = 0; i < objects.length; i++)
      {



          document.getElementById("status"). innerHTML = "Status : Object Detected";
          document.getElementById("Number_objects").innerHTML = "Number of Detected Objects :  " + objects.length;
          fill (r,g,b);
          noFill();
          stroke(r,g,b);
          rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
          precent = floor (objects[i].confidence * 100);
          text(objects[i].label + " " + precent + "%" , objects[i].x + 15 , objects[i].y + 15);
      }

  }

 

}
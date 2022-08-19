noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,500);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video,modalLoaded);
  poseNet.on("pose",gotPoses);
}
function modalLoaded(){
    console.log("Posenet is Initialized");
}
function draw(){
    background("#FAFA33");
    document.getElementById("square_side").innerHTMl="Width and height of the square will be : "+ difference+"px";
stroke("#F90093");
fill("#F90093");
square(noseX,noseY,difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX =results[0].pose.nose.x;
        noseY =results[0].pose.nose.y;
        console.log("noseX : "+noseX+"noseY : "+noseY);
        difference=floor(leftWristX-rightWristX);

        rightWristX =results[0].pose.rightWrist.x;
        leftWristX =results[0].pose.leftWrist.x;
        console.log("rightWristX : "+rightWristX+"leftWristX"+leftWristX+"difference"+difference);

    }
}
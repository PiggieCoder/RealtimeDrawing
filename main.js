noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550)
    canvas.position(700, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw() {
    background('#81C1E8');

    document.getElementById("square_side").innerHTML = "Width And Height of the Square will be = " + difference +"px";
    fill ('#8f99fb');
    stroke('#8f99fb');
    square(noseX, noseY, difference);

}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x;
      noseY = results[0].pose.nose.y;
      console.log("noseX =" + noseX +" noseY = " + noseY);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);

      console.log("leftWristX =" + leftWristX + " rightWristX = "+ rightWristX + "difference = " + difference);
      
    }
}

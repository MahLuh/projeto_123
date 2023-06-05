noseY = 0
noseX = 0
rightWrist = 0
leftWrist = 0
diference = 0
function setup(){
   Canvas = createCanvas(1560, 400)
   video =  createCapture(VIDEO)
   video.size(150, 150)
   poseNet = ml5.poseNet(video, modelLoaded)
   poseNet.on("pose", gotPoses)

}
function draw(){
    background("white")
    fill("dark")
    document.getElementById("square_side").innerHTML = "A largura e a altura do quadrado serão de  " + diference + "px"
    square(noseY, noseX, diference)
    
}
function gotPoses(results){
   if(results.lenght>0){
      console.log(results)
      noseY = results[0].pose.nose.x
      noseX = results[0].pose.nose.y
      leftWristX = results[0].pose.leftWrist.x
      rightWristX = results[0].pose.rightWrist.x
      diference = floor(leftWristX - rightWristX)
      console.log("NoseX = " + noseX)
      console.log("NoseY" + noseY)
      console.log("rightWristX" + rightWristX)
      console.log("leftWristX" + leftWristX)
      console.log("diference carregada" + diference)
   }
}
function modelLoaded(){
      console.log ("PoseNet inicializado")
}

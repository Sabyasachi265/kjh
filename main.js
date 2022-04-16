function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gote);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function first(){
    save('mustache.png');
    
}

function modelLoaded(){
    console.log("mustache sucessful");
}

function gote(results){
    if(results.lenght>0){
        console.log(results);
        console.log("mustache x = "+results[0].pose.nose.x-50);
        console.log("mustache y = "+results[0].pose.nose.y-50);


    }
}
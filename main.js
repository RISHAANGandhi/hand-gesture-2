https://teachablemachine.withgoogle.com/models/aDuBmmMOT/
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='image' src="+data_uri+">";
    });
}

console.log("ml5 version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aDuBmmMOT/model.json",modelloaded);

function modelloaded(){
    console.log("modelloaded");
}
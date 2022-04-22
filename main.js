Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90

});
console.log("ml5 version:",ml5.version)

teach_model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wax12tE_0/model.json",modelloaded)

function modelloaded(){
    console.log("moldel succes");
}


Webcam.attach("#camera")

function takeapic(){
Webcam.snap(function (picmall){
document.getElementById("result").innerHTML="<img id='mypic'src='"+picmall+"'/>";
});
}

function check() {

    pic = document.getElementById("mypic");
    teach_model.classify(pic, getresult);
}

function getresult(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        obj_name = result[0].label;
        obj_percent = (result[0].confidence * 100).toFixed(2);
        document.getElementById("obj_name").innerHTML = obj_name;
        document.getElementById("acc_name").innerHTML = obj_percent+"%";
    }
}
function changeImageOver() {
    document.getElementById("result1") = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
    document.getElementById("result2") = "https://unsplash.com/photos/N10auyEVst8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzOTUxMjA2&force=true";
    document.getElementById("result3") = "https://unsplash.com/photos/F3Dde_9thd8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzOTUxMTU0&force=true";
}

function changeImageLeave() {
    document.getElementById("result1") = "https://unsplash.com/photos/F3Dde_9thd8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzOTUxMTU0&force=true";
    document.getElementById("result2") = "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
    document.getElementById("result3") = "https://unsplash.com/photos/N10auyEVst8/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQzOTUxMjA2&force=true";
}

var Textbox = document.getElementById("textbox");

function start() {
    Textbox.innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);

    var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
      }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        take_snapshot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});

function take_snapshot() {
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
});
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}
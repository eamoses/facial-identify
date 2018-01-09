var video = document.getElementById('video');
if (navigator.mediaDevices &&
          navigator.mediaDevices.getUserMedia){
  navigator.mediaDevices.getUserMedia({video: true}).then(
      function (stream) {
         video.src = window.URL.createObjectURL(stream);
         video.play();
  });
}
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var video = document.getElementById('video');
var button = $('#snap')
button.click(function(){
   button.addClass('loading')
   context.drawImage(video, 0, 0, 400, 225);
   var dataURL = canvas.toDataURL();
   $.ajax({
       type: "POST",
       url: "/webFaceID",
       data: {
         imgBase64: dataURL
       },
       success: {
   })
})

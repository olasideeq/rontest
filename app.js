// JavaScript Document
function init() {
	// Wait for PhoneGap to load
	document.addEventListener("deviceready", onDeviceReady, false);
}

// PhoneGap is ready
function onDeviceReady() {
	alert('It works!');
}
		
// Called when capture operation is finished
//
function captureSuccess(mediaFiles) {    
    uploadFile(mediaFiles[0]);
}

// Called if something bad happens.
//
function captureError(error) {
    var msg = 'An error occurred during capture: ' + error.code;
    navigator.notification.alert(msg, null, 'Uh oh!');
}

// A button will call this function
//
function captureImage() {
    // Launch device camera application,
    // allowing user to capture only one image by {limit: 1}
    navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });
}

// Upload files to server
function uploadFile(mediaFile) {
    path = mediaFile.fullPath;
    name = mediaFile.name;
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=mediaFile.name;
    options.mimeType="image/jpeg";

    var params = new Object();
    params.fullpath = path;
    params.name = name;

    options.params = params;
    options.chunkedMode = false;
    
    var ft = new FileTransfer();
    ft.upload( path, "http://www.serverurl.com/image_upload",
        function(result) {
			//upload successful            
        },
        function(error) {
            //upload unsuccessful, error occured while upload. 
        },
        options
        );
}

//from phonegap doc

// A button will call this function
//
function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
    }

// Called when a photo is successfully retrieved
    //
function onPhotoDataSuccess(imageData) {
	  // Uncomment to view the base64 encoded image data
	  // console.log(imageData);
	
	  // Get image handle
	  //
	  var smallImage = document.getElementById('smallImage');
	
	  // Unhide image elements
	  //
	  smallImage.style.display = 'block';
	
	  // Show the captured photo
	  // The inline CSS rules are used to resize the image
	  //
	  smallImage.src = "data:image/jpeg;base64," + imageData;
}
// Called if something bad happens.
// 
function onFail(message) {
	  alert('Failed because: ' + message);
}




















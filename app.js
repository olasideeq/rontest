// JavaScript Document
function init() {
	// Wait for PhoneGap to load
	document.addEventListener("deviceready", onDeviceReady, false);
}

// PhoneGap is ready
function onDeviceReady() {
	//alert('It works!');
}
		
// Called when capture operation is finished
//
//function captureSuccess(mediaFiles) {    
//    uploadFile(mediaFiles[0]);
//}

// Called if something bad happens.
//
//function captureError(error) {
//    var msg = 'An error occurred during capture: ' + error.code;
//    navigator.notification.alert(msg, null, 'Uh oh!');
//}

// A button will call this function
//
//function captureImage() {
//    // Launch device camera application,
//    // allowing user to capture only one image by {limit: 1}
//    navigator.device.capture.captureImage(captureSuccess, captureError, { limit: 1 });
//}

// Upload files to server
function uploadFile(mediaFile) {
	
	alert ("now uploading");
	
    path = mediaFile.fullPath;
    name = mediaFile.name;
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=mediaFile.name;
    options.mimeType="image/jpeg";

    var params = new Object();
    params.fullpath = path;
	
	alert (path);
	
    params.name = name;

    options.params = params;
    options.chunkedMode = false;
    
    var ft = new FileTransfer();
    ft.upload( path, "http://www.reachoutnigeria.org/push/pic_upload.php",
        function(result) {
			//upload successful
			alert("upload successful");            
        },
        function(error) {
            //upload unsuccessful, error occured while upload. 
        },
        options
        );
}

//from phonegap doc


function submitPhoto() {
      	  
    }

// A button will call this function
//
function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      //navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
	  
	  navigator.device.capture.captureImage(captureSuccess, onFail, { limit: 1 });
	  
    }

// Called when a photo is successfully retrieved
    //
function onPhotoDataSuccess(imageData) {
	  // Uncomment to view the base64 encoded image data
	  // console.log(imageData);
	
	  // Get image handle
	  //
	  //var smallImage = document.getElementById('smallImage');
	
	  // Unhide image elements
	  //
	  //smallImage.style.display = 'block';
	
	  // Show the captured photo
	  // The inline CSS rules are used to resize the image
	  //
	  //smallImage.src = "data:image/jpeg;base64," + imageData;
	  //smallImage.src = imageData;
	  
	  //alert("data:image/jpeg;base64," + imageData);
	  
	  //alert(mediaFiles[0].fullPath);
	  
	  //uploadFile(mediaFiles[0]);
	  
	  //alert('uploaded');
	  
}
// Called if something bad happens.
// 
function onFail(message) {
	  alert('Failed because: ' + message);
}

/* Get Photo from device */

// A button will call this function
//
function getPhoto(source) {
  alert("getting photo");
  // Retrieve image file location from specified source
  navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, destinationType: destinationType.FILE_URI, sourceType: source });
}

// Called when a photo is successfully retrieved
//
function onPhotoURISuccess(imageURI) {
  // Uncomment to view the image file URI 
  // console.log(imageURI);

  // Get image handle
  //
  //var largeImage = document.getElementById('largeImage');

  // Unhide image elements
  //
  //largeImage.style.display = 'block';

  // Show the captured photo
  // The inline CSS rules are used to resize the image
  //
  //largeImage.src = imageURI;
  
  var smallImage = document.getElementById('smallImage');
  
  smallImage.style.display = 'block';
  
  smallImage.src = imageURI;  
  
  alert(imageURI);
  
}

/* Record video area */

//video capture
//
// capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
		alert(path);
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};


// A button will call this function
//
function recordVideo() {
    // start video capture
	navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:1});
}















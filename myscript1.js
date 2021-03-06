(function(){
		document.addEventListener('deviceready',onDeviceReady.bind(this),false);
		var pictureSource;
		var destinationType;

		function onDeviceReady(){
			pictureSource=navigator.camera.PictureSourceType;
			destination=navigator.camera.DestinationType;

			document.getElementById("cameraPhoto").onclick = function(){
				navigator.camera.getPicture(onPhotoDataSuccces, onFail,{
					quality:50,
					
					destinationType:destinationType.DATA_URL
				});
			}	
		};

		function onPhotoDataSuccces(imageData){
			var smallImage = document.getElementById('small_Image');
			smallImage.style.display='block';
			smallImage.src="data.image/jpeg;base64,"+imageData;
		}

		function onFail(message) {

		alert('Failed because: ' + message);

	}
		})();

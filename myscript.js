(function(){
		document.addEventListener('deviceready',onDeviceReady.bind(this),false);
		var pictureSource;
		var destinationType;

		function onDeviceReady(){
			pictureSource=navigator.camera.PictureSourceType;
			destination=navigator.camera.DestinationType;

			document.getElementById("cameraPhoto").onclick = function(){
				navigator.camera.getPicture(onPhotoDataSources, onFail,{
					quality:50,
					
					destinationType:destinationType.DATA_URL
				});
			}	
		};

		function onPhotoDataSources(imageData){
			var smallImage = document.getElementById('smallImage');
			smallImage.style.display='block';
			smallImage.src="data.image/jpeg;base64,"+imageData;
		};
		}
		)
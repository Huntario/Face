$(document).ready(function(){
	$("#login").click(function(e){
		e.preventDefault();
		var username = $('#username').val();
		 if (username.length === 0) {
          return console.log('need a username');
        }
        if(typeof window.base64Image !== 'string') {
            return console.log('no image');
        } else {
          if (window.base64Image.length === 0) {
            return console.log('no image');
          }
        }
		var data = {};
		data.username = username;
		data.faceData = "faceData";
	    $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
                contentType: 'application/json',
                        url: 'http://localhost:3000/profile/login',
                        success: function(data) {
                            console.log('Looks like this post to be authenticated is working.');
                        }
                    });
	});
});
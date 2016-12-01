$(document).ready(function(){
    $("#submit").click(function(e){
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
          data.pic = window.base64Image;
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
                contentType: 'application/json',
                        url: 'http://localhost:3000/users/create',
                        success: function(data) {
                            console.log('Great success');
                        }
                    });
      });
  });
$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        var username = $('#username').val();
        console.log(username);
          var data = {};
          data.username = username;
          data.pic = SorryForGlobal;
          $.ajax({
            type: 'POST',
            data: JSON.stringify(data),
                contentType: 'application/json',
                        url: 'http://localhost:3000/users/create',
                        success: function(data) {
                            console.log('success');
                            console.log(JSON.stringify(data));
                        }
                    });
      });
  });
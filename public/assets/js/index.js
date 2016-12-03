
var newUser;
var userState;

$( document ).ready(function() {

  //  Webcam.attach( '#my_camera' );
     
    $("#signupbt_id").on("click", function(){
        $("#modal_title_id").text("Sign up Form");
        $("#uploadedimage_btn_id").hide();
        console.log("inside signupbt_id click");
        userState = "signup";               
        $("#api_response_placeholder_id").text("");
        $("#api_response_placeholder_id").hide();
        // Webcam.attach( '#my_camera' );
    });


    $("#signinbt_id").on("click", function(){
        $("#modal_title_id").text("Sign in Form");
        $("#uploadedimage_btn_id").hide();
        console.log("inside signinbt_id click");
        userState = "signin";               
        $("#api_response_placeholder_id").text("");
        $("#api_response_placeholder_id").hide();
      //Webcam.attach( '#my_camera' );
    });

    $("#myModal").on('shown.bs.modal', function() {
      console.log("inside myModal shown.bs.modal");
      Webcam.attach( '#my_camera' );
    });

    $("#take_snapshotbtn_id").on("click", function(){
        console.log("inside take_snapshotbtn_id click");
        take_snapshot();
        return false;
    });

    function handleFileSelect(evt) {
        var files = evt.target.files; // FileList object

        console.log("inside handleFileSelect");
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {

            console.log("file type:"+f.type);
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            var reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = (function(theFile) {
                return function(e) {
                    // Render thumbnail.
                    console.log("calling dispImage from handleFileSelect");
                    dispImage(e.target.result);
                };
            });

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        } // end of - for (var i = 0, f; f = files[i]; i++) {


        readAndProcessImage();
        $("#uploadedimage_btn_id").show();

    }

     //   document.getElementById('sourcefileid').addEventListener('change', handleFileSelect, false);
      //  $('#sourcefileid').addEventListener('change', handleFileSelect, false);


      /*  below can be used if we do not want to use form submit option 
          and the above handleFileSelect

    */

    $('#sourcefileid').change(function(ev) {
        $("#uploadedimage_btn_id").show();
    });

    function take_snapshot() {
        Webcam.snap( function(data_uri) {

            //console.log("take_snapshot newUser"+JSON.stringify(newUser));
            dispImage(data_uri);
            readAndProcessImage();

        //    $("#uploadedimage_btn_id").hide();

        } );
    } // end of function take_snapshot

}); // end of $( document ).ready

function dispImage(data_uri) {

      document.getElementById('my_result').innerHTML = 
        '<img id="webcamimage" name="webcamimage" src="'+data_uri+'"/>';

      //   $("#uploadedimage_btn_id").show();
      var img = document.getElementById('webcamimage');
      newUser = {
          username: $('#username').val().trim(),
          sourcefile: $('#sourcefileid').val().trim(),
          snapShotBinaryImage:img.src,
          state:userState
      };

} // end of - function dispImage()

function readAndProcessImage(){

    var currentURL = window.location.origin;
    $("#api_response_placeholder_id").hide();                  
    $("#api_response_placeholder_id").text("");

    new Promise(function(resolve, reject) {
        $.post(currentURL + "/users/webcamimage", newUser,
            function(data){

                // If a table is available... tell user they are booked.
                if(data == true){
                    alert("username already exits, enter different")
                }

                // If a table is available... tell user they on the waiting list.
                if(data == false){
                    alert("new user created")
                }

            }) // end of $.post(currentURL + "/users/w
            .then(function(result){
                console.log("webcamimage api result:"+JSON.stringify(result));
                $("#api_response_placeholder_id").show();                  
                $("#api_response_placeholder_id").text(result.result);
            });
    }); // end of - new Promise(function(resol
     
} // end of - function readAndProcessImage
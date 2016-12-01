
Webcam.attach( '#my_camera' );
function take_snapshot() {
    Webcam.snap( function(data_uri) {
        var picInput = '<input name="userimg" id="userimg" type="text" class="validate">';
        var picInputLabel = '<label for="userimg">Image</label>';
        document.getElementById('my_result').innerHTML = '<img src="'+ data_uri+'"/>';
        //var htmlPic = '<img src="'+ data_uri+'"/>'
        //$('my_camera').html(htmlPic);
        var dataUriText = data_uri + "";
        var base64Image = dataUriText.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
        console.log('data!');
        window.base64Image = base64Image;
    });
};
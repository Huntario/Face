Webcam.attach( '#my_camera' );
function reset() {
        var picInput = '<input name="userimg" id="userimg" type="text" class="validate">';
        var picInputLabel = '<label for="userimg">Image</label>';
        document.getElementById('my_result').innerHTML = '';
        document.getElementById('username').value = '';
        //var htmlPic = '<img src="'+ data_uri+'"/>'
        //$('my_camera').html(htmlPic);
};
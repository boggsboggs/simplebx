


$(function(){
  (function($, _){

       $('#search').css('visibility', 'hidden');
        $('#upload').css('visibility', 'hidden');
      $('#search-btn').click(function(){
        $('#search').css('visibility', 'visible');
        $('#upload').css('visibility', 'hidden');

      });
      $('#upload-btn').click(function(){
        $('#upload').css('visibility', 'visible');
        $('#search').css('visibility', 'hidden');
        
      });
  
  function read_file(file_obj, encrypt, password, callback) {
    on_completion = function(evt) {
        var file_name = file_obj.name;
        var file_contents = evt.target.result;
        if (encrypt) {
          file_contents = JSON.stringify(sjcl.encrypt(password, file_contents));
        }
        callback(file_name, file_contents);
    };
    var reader = new FileReader();
    reader.onload = on_completion;
    reader.onerror = function(err) { console.log(err); };
    reader.readAsText(file_obj);
  }

  function upload_to_server(file_name, data_string) {
    console.log("name: " + file_name + "\ndata: " + data_string);
  }

  function upload_file(evt) {
    var file = evt.target.files[0];
    if (file) {
        encrypt = document.getElementById('encrypt').checked;
        password = document.getElementById('password').value;

        console.log("encrypt: " + encrypt + "\npassword: " + password);
        read_file(file, encrypt, password, upload_to_server);
    }
    else {
        alert("Failed to load file");
    }
  }
  document.getElementById('fileinput').addEventListener('change', upload_file);

  }(window.jQuery, window._));
});
            



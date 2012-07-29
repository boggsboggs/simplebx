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
  
    function post_to_server(filename, file_contents){
      console.log("filename: " + filename + "\nfile contents: " + file_contents);

      URL = '/upload';
      var post_data = {
        name: filename,
        file_data: file_contents
      };

      $.ajax({  url: URL,
                data: post_data,
                dataType: 'json',
                type: 'POST',
                success: function(){
                          }
      });
    }
    
    function read_file(file_obj, encrypt, password, callback) {
      on_completion = function(evt) {
          var file_name = file_obj.name;
          var file_contents = evt.target.result;
          if (encrypt) {
            file_contents = JSON.stringify(sjcl.encrypt(password, file_contents));
          }
          callback(file_contents);
      };
      var reader = new FileReader();
      reader.onload = on_completion;
      reader.onerror = function(err) { console.log(err); };
      reader.readAsText(file_obj);
    }

    function submit_click_handler() {
      var file = document.getElementById('fileinput').files[0];
      if (file) {
          var encrypt = document.getElementById('encrypt').checked;
          var password = document.getElementById('password').value;

          console.log("encrypt: " + encrypt + "\npassword: " + password);
          read_complete_callback = function(file_contents) {
            var name = $('#filename').val();
            post_to_server(name, file_contents);
          };
          read_file(file, encrypt, password, read_complete_callback);
      }
      else {
          alert("Failed to load file");
      }
    }

    function fileinput_change_handler(evt) {
      var filename = evt.target.files[0].name;
      filename_input = $('#filename');
      filename_input.val(escape(filename));
      filename_input.select();

      console.log("file choosen: " + filename);
    }

    function encrypt_change_handler() {
      box_checked = $('#encrypt').attr("checked");
      if (box_checked) {
        $('#password-p').show();
        $('#password').select();
      }
      else {
        $('#password-p').hide();
      }
    }

    // Add event listeners
    $('#submit-button').click(submit_click_handler);
    $('#encrypt').change(encrypt_change_handler);
    document.getElementById('fileinput').addEventListener('change', fileinput_change_handler);

  }(window.jQuery, window._));
});
            



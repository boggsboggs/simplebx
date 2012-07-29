


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



      //file upload handlers
      function readSingleFile(evt) {
                //Retrieve the first (and only!) File from the FileList object
          console.log("Received change event");
          var f = evt.target.files[0]; 

          if (f) {
            console.log("Inside if f");
            var r = new FileReader();
            r.onloadstart = function(e) {
              console.log("started loading");
            };
            r.onload = function(e) { 
              console.log("Running onload response");
                var contents = e.target.result;
              alert( "Got the file.n" 
                    +"name: " + f.name + "n"
                    +"type: " + f.type + "n"
                    +"size: " + f.size + " bytesn"
                    + "starts with: " + contents.substr(1, contents.indexOf("n"))
              );  
            };
            r.onerror = function(e){
              console.log('file upload error');
            }
            r.readAsText(f);
          } else { 
            alert("Failed to load file");
          }
        }
        document.getElementById('fileinput').addEventListener('change', readSingleFile, true);




     

  }(window.jQuery, window._));


});


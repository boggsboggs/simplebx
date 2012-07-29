 


 function post_to_server(filename, file_contents){
    

    var post_data = {
      name: filename,
      file_data: file_contents

    }


    $.ajax(
      url: URL,
      data: data,
      dataType = 'json'
      success = function(){


      }

    });      


  }





(function($, _){



  //query the database for the given value, get all matches
  function search_query(value){
    
    url = '/download';
    data = {
      searchEntry : value
    }
    $.get()
   


  }


  $('#search-input').keypress(function(e){

    var value = $('#search-input').val();

    if (e.keyCode == '13'){
      search_query(value);
    }




  });
  

})(window.jQuery, window._);
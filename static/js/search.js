



(function($, _){



  //query the database for the given value, get all matches
  function search_query(value){

    data: {
      squery: value,

    };

   


  }
  $('#search-input').keypress(function(e){

    var value = $('#search-input').val();

    if (e.keyCode == '13'){
      console.log(value);
    }




  });
  

})(window.jQuery, window._);
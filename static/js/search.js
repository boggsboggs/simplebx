



(function($, _){



  //query the database for the given value, get all matches
  function search_query(value){
    
    url = 'query/';
    data = {
      searchEntry : value
    }

    $.get(url, data, function(){

      results = data['search_results'];
      
      _.each(results)
      if(data['filename'] && data['link']){
        html_results = _.template($('#search-result-template').html(), data);
      }


    });
   


  }


  $('#search-input').keypress(function(e){

    var value = $('#search-input').val();

    if (e.keyCode == '13'){
      search_query(value);
    }




  });
  

})(window.jQuery, window._);
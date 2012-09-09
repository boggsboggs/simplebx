
(function($, _, Backbone){


  var TABLE_BODY = $('#data-table tbody');

  //query the database for the given value, get all matches
  var make_query =function (query, start_index, end_index){
    var URL = 'query/';
    query = query || '';
    start_index = start_index || 0;
    end_index = end_index || 10;
    if (start_index > end_index){
      console.log('error:start index greater than end');
      end_index = start_index + 10;
    }
    var data = {
      query : query,
      start_index: start_index,
      end_index: end_index
    };
    $.get(URL, data, function(data){
      console.log(data);
      results = data['search_results'];
      //collect results for page
      var pageResults = '';
      _.each(results, function(result){
        if(result.filename && result.link){
          var html_results = _.template($('#search-result-template').html(), result);
          pageResults += html_results;
        }
      });
      TABLE_BODY.html(pageResults);
      var FILE_LINKS = $('a.filelink');
      FILE_LINKS.click(function(e){
            e.preventDefault();
            if(this.is_encrypted=='True'){
              $('input-decrypt').show();

            }
            else{
              console.log('yay');
              window.open(this.href);
            }
          });
    }, 'json');
  };


  var addLinkHandler = (function(){

  });

  var AdminController = function(){
    var page = 1;
    var RESULTS_PER_PAGE = 10;
    var searchBox = $('#search-input');
    var searchButton = $('#search-image');
    return{
      initialize: function(){
        var query = searchBox.val();
        var start_index = (page-1)*RESULTS_PER_PAGE;
        var end_index = start_index + RESULTS_PER_PAGE;
        make_query(query, start_index, end_index);
        //add keypress handler
        searchBox.keypress(function(e){
          var code = e.keyCode || e.which;
          if (code == '13'){
            var query = searchBox.val();
            make_query(query);
          }
        });

        searchButton.click(function(){
          var query = searchBox.val();
          make_query(query);
        });
      }

    };

  }();


  //run code
  AdminController.initialize();

})(window.jQuery, window._, window.Backbone);



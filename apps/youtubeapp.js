//// After the API loads, call a function to enable the search box.
//function handleAPILoaded() {
//  $('#search-term').attr('disabled', false);
//        event.preventDefault();    
//        console.log("hello");
//}
//
//// Search for a specified string.
//function search() {
//  var q = $('#query').val();
//  var request = gapi.client.youtube.search.list({
//    part: 'snippet',
//    key: 'AIzaSyCAjCYfoDSWSe3n0Qj7RTLjMZqW7SVsl3I',
//    q: q
//  });
//
//  request.execute(function(response) {
//    var str = JSON.stringify(response.result);
//    $('#search-results').html('<pre>' + str + '</pre>');
//  });
//}
//


$(function(){
    $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val();
        getRequest(searchTerm);
    })
});

function getRequest(searchTerm){
    var params = {
        part: 'snippet',
        key: 'AIzaSyCAjCYfoDSWSe3n0Qj7RTLjMZqW7SVsl3I',
        q: searchTerm
    };
    url = 'https://www.googleapis.com/youtube/v3/search';
    
    $.getJSON(url, params, function(data){
        console.log(data);
        showResults(data.items);
    });
}

function showResults(results){
    var html = "";
    $.each(results, function(index,value){
        html += '<a href="https://www.youtube.com/watch?v=' + value.id.videoId + '"><img src="' + value.snippet.thumbnails.medium.url + '"></img></a>' + '<h2>' + value.snippet.title + '</h2>';
        console.log(value.snippet.thumbnails.default.url);    
    })
    $('#search-results').html(html);
}




$(function(){

	$.get("nav.html", function (data) {
      	$('#navbar-container').append(data);
    }); 
});

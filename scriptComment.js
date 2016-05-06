document.getElementById("foot01").innerHTML =
"<p>&copy;  " + new Date().getFullYear() + " W3Schools. All rights reserved.</p>";

document.getElementById("nav01").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Home</a></li>" +
"<li><a href='customers.html'>My art work</a></li>" +
"<li><a href='about.html'>About</a></li>" +
"<li><a href='comment.html'>Comment</a></li>"+
"</ul>";

var main = function(){
	$('form').submit(function(event){
		var $input = $(event.target).find('input');
		var comment = $input.val();

		if (comment!="") {
			var html = $('<li>').text(comment);
			html.prependTo('#comments');
			$input.val("");  //to clear the comment box
		}
		return false;      //to make it not default and override
	});
}

$(document).ready(main);
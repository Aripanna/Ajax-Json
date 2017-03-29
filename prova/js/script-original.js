$('#more').click(function() {
	$.ajax({
        dataType : "html",
        url : "http://localhost:8888/prova/html/post.html",
        success : function(postCheDeveArrivare) {
            $(".post:last").after(postCheDeveArrivare);
        }
    });

    var root = 'https://jsonplaceholder.typicode.com';

	$.ajax({
	  url: root + '/photos/1',
	  method: 'GET'
	}).then(function(data) {
	  console.log(data);
	});
});

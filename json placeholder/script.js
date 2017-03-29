
//  src/js/main.js
$( document ).ready(function() {

  /* $('.show-flight-ticket').on('click', function() {

	   	var config = {

	   		method: 'GET',

	   		url: './src/html/ticket.html',

	   		data: {
	   			ticketNumb : 256
	   		},

	   		timeout: 3000, //ms 1000ms=1s

	   		beforeSend: function () {
	   			$('body').css({
	   				backgroundColor : 'red'
	   			})
	   		},
	   		complete : function () {
	   			$('body').css({
	   				backgroundColor : 'yellow'
	   			})
	   		},
	   		success : function ( html ) {
	   			//append data to #hawaii
	   			$('#hawaii').append(html);
	   			$('#hawaii').find('.ticket').slideDown();
	   		},
	   		error : function (err) {
	   			$('#hawaii').append('Si è verificato un errore');
	   		}

	   	}

	   	$.ajax(config)

   });

   	console.log($('.clickme').length)
   	$('.clickme').on('click', function() {
   		alert('ciao')
   	})
   	console.log('Ho trovato chi dovevo trova')

   	//JSON
   	//JSON.stringify(); 	// convert JS to JSON
   	//JSON.parse();		//convert JSON to JS
*/

   $('.show-img').on('click', function() {

		var root = 'https://jsonplaceholder.typicode.com';

	   	var config = {

	   		method: 'GET',

	   		url: root + '/photos',

	  	   	success : function ( photos ) {

	  	   		var source   = $("#entry-template").html();
				var template = Handlebars.compile(source);

	  	   		for (var i = 0; i < photos.length; i++){

	  	   			var context = photos[i];
					var html    = template(context);

	  	   			$('#user-list').append(html);
	  	   		}
	   			
	   		},
	   		error : function (err) {
	   			alert('Impossible to load users')
	   		}

	   	}

	   	$.ajax(config)

   });

});

//
// get
// post
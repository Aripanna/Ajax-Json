// URL relativa e come il codice viene eseguito dal browser

$('#more').click(function() {
		console.log("Ho appena fatto click")

		console.log("Ho appena iniziato la chiamata AJAX per recuperare il template (HTML)")
    $.ajax({
        dataType: "html",
        url: "./html/post.html", /*URL relativa*/
        success: function(postCheDeveArrivare) {
						console.log("Ho recuperato il template (HTML) correttamente")
            $(".post:last").after(postCheDeveArrivare);
        }
    });

    var root = 'https://jsonplaceholder.typicode.com';
		console.log("Ho appena iniziato la chiamata AJAX per recuperare il modello (JSON)")
    $.ajax({
        url: root + '/photos/1',
        method: 'GET'
    }).then(function(data) {
				console.log("Ho recuperato il modello (JSON) correttamente")
        console.log(data);
    });

		/*
		URL relativa: posso specificare una URL relativa in modo da non dover cambiare
		l'indirizzo una volta che pubblico il file su un altro server (o cambio pc come in questo caso).
		Quindi se ora la pagina e' pubblicata su www.arianna.com o localhost:8080 l'URL relativo viene risolto correttamente nei due casi

		Come il codice viene eseguito dal browser: se provi a eseguire il codice e vedere la console ottieni una cosa simile a
		1 - Ho appena fatto click
		2 - Ho appena iniziato la chiamata AJAX per recuperare il template (HTML)
		3 - Ho appena iniziato la chiamata AJAX per recuperare il modello (JSON)
		4 - Ho recuperato il template (HTML) correttamente
		5 - Ho recuperato il modello (JSON) correttamente

		Questo perche' l'esecuzione del codice AJAX e' asincrono. Significa che il browser prova a eseguire
		piu' codice possibile, e NON aspetta che la chiamata AJAX finisca prima di eseguire il codice che segue.
		Dobbiamo trovare quindi un modo per gestire il fatto che abbiamo due chiamate AJAX, di cui non sappiamo a priori
		il momento in cui ci torneranno le risposte e in che ordine
		(che significa non sappiamo quando la funzione definita in success e' eseguita, nel primo caso, o il then() nel secondo caso)

		Non conosciamo i momenti in cui per la prima e la seconda chiamata il server rispondera' con le risorse richieste
		Quindi dobbiamo trovare un modo per gestire ogni situazione: torna per prima la prima chiamata e poi la seconda, e viceversa.

		PS: Le due scritture sono identiche in funzionamento {success: function(){...}} o .then(functoin(){}) entrambe vengono
		eseguite nel momento in cui il server ci risponde. La seconda pero' facilita' una scrittura piu' lineare del codice

		*/
});

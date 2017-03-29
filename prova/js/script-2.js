// AJAX in sequenza

$('#more').click(function() {

    /*
    	Vogliamo quindi recurepare sia template che modello, ma non sappiamo chi arriva primo.
    	La sola cosa che possiamo dire e' che vogliamo eseguire la nostra logica (Handlebars) nel momento in cui
    	entrambe sono disponibili. Proviamo allora a forzare l'esecuzione delle due chiamate,
    	eseguendo la seconda chiamata solo nel momento in cui la prima e' tornata.

    	PS: Ho rinominato 'postCheDeveArrivare' in 'template' e 'data' in 'modello' per semplicita'
    */

    $.ajax({
        dataType: "html",
        url: "./html/post.html",  /*URL relativa*/
        success: function(template) {

            //$(".post:last").after(template); //commentato momentaneamente

            /*
            	Avendo inserito la seconda chiamata dentro il success della prima,
            	questa viene eseguita solo nel momento in cui la prima torna
            */
            var root = 'https://jsonplaceholder.typicode.com';
            $.ajax({
                url: root + '/photos/1',
                method: 'GET'
            }).then(function(modello) {
                console.log(modello);
                console.log(template)
                    /*
                    	Il codice che scriviamo qui e' eseguito quando entrambe le chiamate
                    	sono tornate, quindi sia modello che template sono disponibili.

                    	Possiamo quindi a Handlebars e poi inserirli dentro l'HTML (come fatto prima)

                    	PS: continua sotto

                    */
            });
        }
    });

    /*
    	Se facessimo quindi un grafico del tempo con questa soluzione otteniamo:

    	0-------1---2--------------------5-------6---------------------------------->
    	A      R(A) B                   R(B)     C

    	Dove all'istante 0 inizio con la prima chiamata (A), all'istante 1 il primo server risponde alla richiesta R(A)
    	subito dopo inizio la seconda chiamata (B) e all'istante 5 ritorna anche R(B)
    */

});

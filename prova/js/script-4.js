// Handlebars

$('#more').click(function() {

    /*
    	Siamo riusciti ora a gestire le due chiamate AJAX ottenendo modello e template.
      Possiamo allora usare Handlebars per compilare il template con il modello e
      finalmente inserirlo nella pagina
    */

    var template;
    var modello;

    $.ajax({
        dataType: "html",
        url: "./html/post-hb.html", //ho duplicato il file per lasciarti l'orginale intatto
        success: function(t) {
            template = t;
            controllaSeHoTuttoQuelloCheMiServe();
        }
    });

    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
        url: root + '/photos/1',
        method: 'GET'
    }).then(function(m) {
        modello = m;
        controllaSeHoTuttoQuelloCheMiServe();

    });

    function controllaSeHoTuttoQuelloCheMiServe() {
        if (template && modello) {

            // passo il mio template a Handlebars
            var tmpl = Handlebars.compile(template);
            // passo il modello per far stampare dentro gli spazi con le parentesi {...} i valori del modello
          	var html = tmpl(modello);

            console.log("Signore e signori, l'HTML compilato con Handlebars:")
            console.log(html)
            // TODO: add applause here

            //Inserisco il nuovo HTML dentro al DOM
            $(".post:last").after(html);

            //PS: anche qui continua sotto
        }
    };

    /*
    Nota come deve esserci corrispondenza tra le chiavi che contiene il modello, che e' un oggetto JS normale
    (quindi in questo caso tra le altre cose il titolo), e quello che viene messo nel template tra le doppie parentesi {{ title }}

    Le {{}} doppie parentesi servono proprio per dire: qui voglio stampare il valore corrispondente alla chiave title

    Puoi quindi ora modificare il tuo file HTML per inserire le parentesi li dove preferisci, per inserire i valori del modello
    Nota pero' che il modello contiene solo una foto, che se vuoi puoi replicare

    PPS: se invece volessimo tre foto diverse? :) 
    */

});

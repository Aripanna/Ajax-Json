// AJAX in parallelo

$('#more').click(function() {

    /*
    	Il primo modo ci fa aspettare un sacco di tempo prima di iniziare la seconda.
    	noi vogliamo un sito molto veloce quindi perche' aspettare che la prima richiesta torni
    	prima di iniziare la seconda?

    	Implementiamo allora dentro le success function delle due chiamate una nuova funzione che controlli
    	se entrambe siano tornate, per poi eseguire la nostra logica se abbiamo sia modello che template
    */

    //Uso due variabili di appoggio
    var template;
    var modello;

    console.log("Ho appena iniziato la chiamata AJAX per recuperare il template (HTML)")
    $.ajax({
        dataType: "html",
        url: "./html/post.html",
        success: function(t) {
            console.log("Ho recuperato il template (HTML) correttamente")
            template = t;

            controllaSeHoTuttoQuelloCheMiServe();
        }
    });

    console.log("Ho appena iniziato la chiamata AJAX per recuperare il modello (JSON)")
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
        url: root + '/photos/1',
        method: 'GET'
    }).then(function(m) {
        console.log("Ho recuperato il modello (JSON) correttamente")
        modello = m;
        controllaSeHoTuttoQuelloCheMiServe();

    });

    function controllaSeHoTuttoQuelloCheMiServe() {
        console.log("Controllo se ho sia modello che template")

        //Se entrambi non sono null allora ho tutto!
        if (template && modello) {
            console.log("Wooow! Ho finalmente tutto!")
                // implementa qui Handlebars
        } else {
            console.log("Manca ancora qualche cosa...")
        }
    };

    /*
    	Se facessimo quindi un nuovo grafico del tempo con questa soluzione otteniamo:

    	0 1------2-----------3----4---------------------------------->
    	A B    R(A)         R(B)  C

    	Dove all'istante 0 inizio con la prima chiamata (A), all'istante 1 con la secona,
    	il primo server risponde alla richiesta R(A) e controllo se ho sia modello che template, ma ancora mi manca qualche cosa
    	Quando anche la seconda chiamata torna e controlliamo se abbiamo tutto, stavolta possiamo continuare con il nostro codice

    	Nota che non e' importante se torna prima la chiamata per il modello o per il template, tanto in ogni caso la seconda
    	risposta fa iniziare il codice di Handlebars e che per le due chiamate AJAX vanno in parallelo all'inizio, come
			se avessimo mandato due messaggeri contemporaneamente a recuperare due messaggi in stanze diverse.
			Nel primo caso aspettavamo che il primo tornasse per mandare il secondo.
    */

});

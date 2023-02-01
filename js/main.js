// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

let button = document.getElementById("button");
let gridEl = document.getElementById("gridEl");

// L'UTENTE CLICCA SU UN BOTTONE CHE GENERERÀ UNA GRIGLIA DI GIOCO QUADRATA
button.addEventListener(
    "click",
    function () {

        // CREO 100 QUADRATI PER LA GRIGLIA
        for (let i = 1; i <= 100; i++) {

            // CREO UN DIV PER OGNI CELLA
            let cella = document.createElement("div");
            cella.classList.add("grid-cella");
            cella.innerHTML = i;

            // AL CLICK, LA CELLA CAMBIA COLORE
            cella.addEventListener(
                "click",
                function () {
                    cella.classList.add("yellow");
                    // (ERO INDECISO SE METTERE "ADD O "TOGGLE", NEL DUBBIO, PENSANDOLA COME SE STESSI GIOCANDO, HO MESSO ADD)
                    console.log("Cella cliccata: " + i);
                }
            );

            // AGGIUNGO LA CELLA ALLA GRIGLIA
            gridEl.append(cella);
        }
    }
);
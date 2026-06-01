const inicio = document.getElementById("inicio");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");

const abrirRegalo = document.getElementById("abrirRegalo");
const abrirCarta = document.getElementById("abrirCarta");

const musica = document.getElementById("musica");
const imagenSobre = document.getElementById("imagenSobre");


abrirRegalo.addEventListener("click", () => {

    inicio.classList.remove("activa");
    sobre.classList.add("activa");

    musica.play();

});


abrirCarta.addEventListener("click", () => {

    imagenSobre.classList.add("desaparecer");

    setTimeout(() => {

        sobre.classList.remove("activa");
        carta.classList.add("activa");

    }, 1000);

});

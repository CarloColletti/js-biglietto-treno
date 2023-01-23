// Chiedi quanti chilometri deve percorrere la persona
const km = prompt("Quanti chilometri devi percorrere?")
console.log("La distanza da percorrere è: ", km);

// chiedi quanti anni ha 

const età = prompt("Quanti anni hai?")
console.log("L'età del passeggero è: ", età);

// l'età è compresa tra i 18 e i 64 anni?
if (età >= 18 && età <=64) {
    let percorso = km;
    let tariffa = 0.21;
    let costo = tariffa * percorso;
    console.log("Il costo del biglietto è:  ", costo.toFixed(2));
    document.getElementById("c-biglietto").innerHTML = (costo.toFixed(2));
}
// l'età è inferiore hai 18 anni?
else if (età >= 65) {
    let percorso = km;
    let tariffa = 0.21;
    let costo = tariffa * percorso;
    console.log("Il costo del biglietto senza sconto è:  ", costo.toFixed(2));
    let sconto = (costo / 100) * 40;
    let costo_sc = costo - sconto;
    console.log("Il costo del biglietto è:  ", costo_sc.toFixed(2));
    document.getElementById("c-biglietto").innerHTML = (costo_sc.toFixed(2));
}
// l'età è inferiore hai 18 anni?
else {
    let percorso = km;
    let tariffa = 0.21;
    let costo = tariffa * percorso;
    console.log("Il costo del biglietto senza sconto è:  ", costo.toFixed(2));
    let sconto = (costo / 100) * 20;
    let costo_sc = costo - sconto;
    console.log("Il costo del biglietto è:  ", costo_sc.toFixed(2));
    document.getElementById("c-biglietto").innerHTML = (costo_sc.toFixed(2));
}






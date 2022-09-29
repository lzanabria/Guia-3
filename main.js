addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let segundos=0;
        let avion=20;
        let misil=10;
        while(avion-misil <= 10000) {
            segundos++;
            avion+=20+avion;
            misil+=10+misil;
            alert("En "+segundos+" segundos la distancia del avion es "+avion+" y la del misil es "+misil);
        }
    }, 500);
});
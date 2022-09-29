addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let damas=1, caballeros=7, personas=0;
        while(personas<42) {
            damas++;
            caballeros++;
            personas=damas+caballeros;
        }
        alert("\tNúmero de damas: "+damas+"\n\tNúmero de caballeros: "+caballeros+"\n\tTotal de personas: "+personas);
    }, 500);
});
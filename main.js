addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n_gallina, peso, altura, n_huevos, calidad, prom_calidad, precio;
        let cont=1, calidad_acum=0;

        n_gallina=Number(prompt("Ingrese el número de gallinas: "));
        while(cont<=n_gallina){
            peso=Number(prompt("Gallina #"+cont+"\n▶ Ingrese el peso de la gallina (kg): "));
            altura=Number(prompt("Gallina #"+cont+"\n▶ Ingrese la altura de la gallina (cm): "));
            n_huevos=Number(prompt("Gallina #"+cont+"\n▶ Ingrese el número de huevos que pone la gallina: ")); 
            calidad=(peso*altura)/n_huevos;
            calidad_acum+=calidad;
            cont++;
        }
        prom_calidad=calidad_acum/n_gallina;

        if(prom_calidad>=15){
            precio=prom_calidad*1.2;
        }
        else if(prom_calidad>8 && prom_calidad<15){
            precio=prom_calidad*1.0;
        }
        else{
            precio=prom_calidad*0.80;
        }
        alert("▶ La calidad del huevo es: "+calidad+"\n▶ El precio del kilo de huevo es: $"+precio);
    }, 500);
});
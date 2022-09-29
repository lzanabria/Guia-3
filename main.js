addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant, n1, n2, sum, res, mult, div;
        let cont=1;
        cant=Number(prompt("Ingrese la cantidad de procesos que desea realizar: ", 10));
        while(cont<=cant) {
            n1=Number(prompt("Proceso #"+cont+"\n▶ Ingrese el valor del primer número: "));
            n2=Number(prompt("Proceso #"+cont+"\n▶ Ingrese el valor del segundo número: "));
            sum=n1+n2;
            res=n1-n2;
            mult=n1*n2;
            div=n1/n2;
            alert("Proceso #"+cont+"\n▶ Suma: "+sum+"\n▶ Resta: "+res+"\n▶ Multiplicación: "+mult+"\n▶ División: "+div);
            cont++;
        }
    }, 500);
});
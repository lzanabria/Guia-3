addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant, alum, nota, nota_acum=0, prom, niv=0, no_niv=0;
        let cont=1, unidades=1;
        cant=Number(prompt("Ingrese la cantidad de alumnos: ",40));
        while(cont<=cant) {
            alum=prompt("Alumno #"+cont+"\n\tIngrese el nombre del alumno: ");
            while(unidades<=5) {
                nota=Number(prompt("Alumno #"+cont+"\n\tIngrese la nota de la unidad "+unidades+": "));
                nota_acum+=nota;
                prom=nota_acum/5;
                unidades++;
            }
            if(prom<7) {
                niv++;
            }
            else {
                no_niv++;
            }
            cont++;
            unidades=1;
        }
        alert("▶ Número de alumnos totales: "+cant+"\n\tAlumnos que deben nivelar: "+niv+"\n\tAlumnos que no deben nivelar: "+no_niv);
    }, 500);
});
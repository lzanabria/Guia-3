addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant, nom, ape, edad, nota1, nota2, nota3, prom, estado="";
        let cont=1;
        cant=Number(prompt("Ingrese la cantidad de estudiantes: ",5));
        while(cont<=cant){
            nom=prompt("Estudiante #"+cont+"\n\tIngrese el nombre del estudiante: ");
            ape=prompt("Estudiante #"+cont+"\n\tIngrese el apellido del estudiante: ");
            edad=Number(prompt("Estudiante #"+cont+"\n\tIngrese la edad del estudiante: "));
            nota1=Number(prompt("Estudiante #"+cont+"\n\tIngrese la primera nota del estudiante: "));
            nota2=Number(prompt("Estudiante #"+cont+"\n\tIngrese la segunda nota del estudiante: "));
            nota3=Number(prompt("Estudiante #"+cont+"\n\tIngrese la tercera nota del estudiante: "));
            prom=(nota1+nota2+nota3)/3;

            if(prom>=7){
                estado="Aprobado";
            }
            else{
                estado="Reprobado";
            }
            alert("▶ Estudiante: "+nom+" "+ape+"\n▶ Edad: "+edad+"\n\t▶ Nota 1: "+nota1+"\n\t▶ Nota 2: "+nota2+"\n\t▶ Nota 3: "+nota3+"\n▶ Promedio: "+prom+"\n▶ Estado: "+estado);
            cont++;
        }
    }, 500);
});
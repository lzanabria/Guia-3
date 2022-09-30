addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let alums, alum, cred_fund, cred_db, cred_etica, notas_fund, notas_db, notas_etica, notas_fund_acum=0, notas_db_acum=0, notas_etica_acum=0, fund_prom, db_prom, etica_prom, ponderado, estado="";
        let cont=1, fund=1, db=1, etica=1;

        cred_fund=Number(prompt("\tIngrese la cantidad de créditos de la materia de fundamentos: "));
        cred_db=Number(prompt("\tIngrese la cantidad de créditos de la materia de base de datos: "));
        cred_etica=Number(prompt("\tIngrese la cantidad de créditos de la materia de ética: "));
        alums=Number(prompt("\tIngrese la cantidad de alumnos: "));
        while(cont<=alums){
            alum=prompt("▶ Alumno #"+cont+"\n\tIngrese el nombre y apellido del alumno: ");
            while(fund<=cred_fund) {
                notas_fund=Number(prompt("▶Alumno: "+alum+"\n▶ Materia: Fundamentos"+"\n\tIngrese la nota"+fund+": "));
                notas_fund_acum+=notas_fund;
                console.log(notas_fund_acum);
                fund_prom=notas_fund_acum/cred_fund;
                fund++;
            }

            while(db<=cred_db) {
                notas_db=Number(prompt("▶Alumno: "+alum+"\n▶ Materia: Base de datos"+"\n\tIngrese la nota"+db+": "));
                notas_db_acum+=notas_db;
                db_prom=notas_db_acum/cred_db;
                db++;
            }

            while(etica<=cred_etica) {
                notas_etica=Number(prompt("▶ Alumno: "+alum+"\n▶ Materia: Ética"+"\n\tIngrese la nota"+etica+": "));
                notas_etica_acum+=notas_etica;
                etica_prom=notas_etica_acum/cred_etica;
                etica++;
            }
            ponderado=(fund_prom+db_prom+etica_prom)/3;

            cont++;
            fund=1;
            db=1;
            etica=1;

            notas_fund_acum=0;
            notas_db_acum=0;
            notas_etica_acum=0;

            if(ponderado>7) {
                estado="Aprobado";
            } 
            else {
                estado="Reprobado";
            }

            alert("▶ Alumno: "+alum+"\n▶ Promedio de materias:"+"\n   \tPromedio fundamentos: "+fund_prom+"\n   \tPromedio base de datos: "+db_prom+"\n   \tPromedio ética: "+etica_prom+"\n▶ Promedio ponderado: "+ponderado+"\n▶ Estado: "+estado);
        }
    }, 500);
});
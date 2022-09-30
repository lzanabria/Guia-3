addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n_part, opc, cand_a=0, cand_b=0, cand_c=0, porc_a, porc_b, porc_c, ganador="";
        let cont_part=1;
        n_part=Number(prompt("Ingrese la cantidad de participantes: "));
        while(cont_part<=n_part){
            opc=Number(prompt("Candidatos para representante estudiantil: \n   1. Candidato A\n   2. Candidato B\n   3. Candidato C\n\tSeleccione un candidato: "));
            switch(opc) {
                case 1:
                    cand_a++;
                    break;
                case 2:
                    cand_b++;
                    break;
                case 3:
                    cand_c++;
                    break;
                default:
                    alert("¡Haz votado mal, voto anulado!");
                    break;
            }
            cont_part++;
        }

        porc_a=(cand_a*100)/n_part;
        porc_b=(cand_b*100)/n_part;
        porc_c=(cand_c*100)/n_part;
        
        if(porc_a>=51){
            ganador="Candidato A";
        }
        else if(porc_b>=51){
            ganador="Candidato B";
        }
        else if(porc_c>=51){
            ganador="Candidato C";
        }
        else{
            ganador="Ninguno";
        }

        alert("Resultados. \n\tCandidato A: "+porc_a+"% de votos\n\tCandidato B: "+porc_b+"% de votos"+"\n\tCandidato C: "+porc_c+"% de votos\n▶ Ganador: "+ganador);
    }, 500);
});
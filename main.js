addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let n_autos, digito, amarilla=0, rosa=0, roja=0, verde=0, azul=0;
        let cont_autos=1;
        n_autos=Number(prompt("Ingrese la cantidad de autos que desea registrar: "));
        while(cont_autos<=n_autos){
            digito=Number(prompt("Automóvil #"+cont_autos+"\n\t Ingrese el digito de la placa del auto: "));
            if(digito==1 || digito==2){
                amarilla++;
            }
            else if(digito==3 || digito==4){
                rosa++;
            }
            else if(digito==5 || digito==6){
                roja++;
            }
            else if(digito==7 || digito==8){
                verde++;
            }
            else if(digito==9 || digito==0){
                azul++;
            }
            cont_autos++;
        }
        alert("▶ N° de autos con calcomania amarilla: "+amarilla+"\n▶ N° de autos con calcomania rosa: "+rosa+"\n▶ N° de autos con calcomania roja: "+roja+"\n▶ N° de autos con calcomania verde: "+verde+"\n▶ N° de autos con calcomania azul: "+azul);
    }, 500);
});
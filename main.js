addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let cant_veh, tipo_veh, turismo=0, autobus=0, camion=0, motocicleta=0, porc_turismo, porc_autobus, porc_camion, porc_motocicleta;
        let cont_veh=1;
        cant_veh=Number(prompt("Ingrese la cantidad de vehiculos que desea contar: ", 200));
        while(cont_veh<=cant_veh){
            tipo_veh=Number(prompt("▶ Vehículo #"+cont_veh+".\nTipos de vehículos: \n    1. Turismo \n     2. Autobus \n     3. Camion \n     4. Motocicleta \n\t Seleccione una opcion: "));
            switch(tipo_veh) {
                case 1:
                    turismo++;
                    break;
                case 2:
                    autobus++;
                    break;
                case 3:
                    camion++;
                    break;
                case 4:
                    motocicleta++;
                    break;
                default:
                    alert("Opcion no valida");
                    break;
            }
            cont_veh++;
        }
        porc_turismo=(turismo*100)/cant_veh;
        porc_autobus=(autobus*100)/cant_veh;
        porc_camion=(camion*100)/cant_veh;
        porc_motocicleta=(motocicleta*100)/cant_veh;

        alert("Vehiculos totales: "+cant_veh+"\n▶ Turismo: "+turismo+"\n    \t Porcentaje: "+porc_turismo+"%\n▶ Autobus: "+autobus+"\n    \t Porcentaje: "+porc_autobus+"% \n▶ Camion: "+camion+"\n    \t Porcentaje: "+porc_camion+"% \n▶ Motocicleta: "+motocicleta+"\n    \t Porcentaje: "+porc_motocicleta+"%");
    }, 500);
});
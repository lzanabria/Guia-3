addEventListener("DOMContentLoaded", (e) => {
    setTimeout(() => {
        let vends, vendedor, ventas_val, ventas_acum=0, val_com, sal_tot;
        let cont=1, ventas=1;
        const com=10, sal_base=1000000;
        vends=Number(prompt("Ingrese el número de vendedores: "));
        while(cont<=vends) {
            vendedor=prompt("Vendedor #"+cont+"\n\tIngrese el nombre del vendedor: ");
            while(ventas<=3) {
                ventas_val=Number(prompt("Vendedor #"+cont+"\n\tIngrese el valor de la venta #"+ventas+": "));
                ventas_acum+=ventas_val;
                val_com=(ventas_acum*com)/100;
                sal_tot=sal_base+val_com;
                ventas++;
            }
            alert("▶ Vendedor: "+vendedor+"\n\tSalario base: $"+sal_base+"\n\tComisión: "+com+"%"+"\n\tValor de las comisiones: $"+val_com+"\n\tSalario total: $"+sal_tot);
            cont++;
            ventas=1;
        }
    }, 500);
});
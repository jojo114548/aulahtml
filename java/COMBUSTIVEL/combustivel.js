function calcular(){
    var tipos=document.querySelector("#tipo").value;
    var litros=parseInt(document.querySelector("#litros").value);
   
    if(litros<=20&&tipos=="a"){
       var valor=litros*(4.70);
       var desconto=valor*0.03;
       var total=valor-desconto;
       alert(total);

        

    }
    if(litros>20&&tipos=="a"){
        var valor=litros*(4.70);
        var desconto=litros*0.05;
        var total=valor-desconto;
        alert("Valor a ser pago:R$ " + total );
    }

    if(litros<=20&&tipos=="g"){
        var valor=litros*(6.20);
        var desconto=valor*0.04;
        var total=valor-desconto;
        alert("Valor a ser pago:R$ "+total );
 
         
 
     }
     if(litros>20&&tipos=="g"){
         var valor=litros*(6.20);
         var desconto=litros*0.06;
         var total=valor-desconto;
         alert("Valor a ser pago:R$ "+total );
     }
 
      
    
    
}
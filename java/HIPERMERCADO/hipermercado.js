function comprar(){
    var carne=parseInt(document.querySelector("#carne").value);
    var kg=parseInt(document.querySelector("#kg").value);
    var pagamento=parseInt(document.querySelector("#pagamento").value);


    if(carne==1&&kg<=5){


        if(pagamento==1){

     var preco=kg*46.90
     var desconto=preco*1.0
     var pagar=preco-desconto

     alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`)


    }
    
    if(pagamento==2){
   
        var preco=kg*46.90
        var desconto =preco*0.05
        var pagar=preco-desconto

alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`)
    }}
    else if (carne==1&&kg>5){
        if(pagamento==1){

            var preco=kg*48.00
            var desconto=preco*1.0
            var pagar=preco-desconto
       
            alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`)
       
       
           }
           
           if(pagamento==2){
          
               var preco=kg*48.00
               var desconto =preco*0.05
               var pagar=preco-desconto
       
       alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`)
           }

    }


    else if(carne==2&&kg<=5){
        if(pagamento==1){
            var preco=kg*59.80
            var desconto=preco*1.0
            var pagar=preco-desconto


            alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)}\ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);
        }
        if(pagamento==2){
            var preco=kg*59.80
            var desconto=preco*0.05
            var pagar=preco-desconto

            alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)}\ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);

        }
    }
        else if(carne==2&&kg>=5){
            if(pagamento==1){
                var preco=kg*65.20
                var desconto=preco*1.0
                var pagar=preco-desconto
    
    
                alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);
            }
            if(pagamento==2){
                var preco=kg*65.20
                var desconto=preco*0.05
                var pagar=preco-desconto
    
                alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);
    
            }

    }
    if(carne==3&&kg<=5){

        if(pagamento==1){
        var preco=kg*64.90
            var desconto=preco*1.0
            var pagar=preco-desconto

            alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);
    }
    if(pagamento==2){
       
            var preco=kg*64.90
                var desconto=preco*0.05
                var pagar=preco-desconto
    
                alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)} \ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);


}
    }
if(carne==3&&kg>=5){

    if(pagamento==1){
    var preco=kg*72.30
        var desconto=preco*1.0
        var pagar=preco-desconto

        alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)}\ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);
}
if(pagamento==2){
   
        var preco=kg*72.30
            var desconto=preco*0.05
            var pagar=preco-desconto

            alert(`tipo:${carne}\n Quantidade:${kg}kg\n Preco ${preco.toFixed(2)}\ntipo de pagamento:${pagamento}\nvalor de desconto ${desconto.toFixed(2)}\n valor a pagar: ${pagar.toFixed(2)}`);

}

    
}
}
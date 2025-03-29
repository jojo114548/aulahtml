function saque(){
    var valorNotas=parseInt(document.querySelector("#valor").value);
    var resto=Number(valorNotas);
    document.write('<img style="display:flex;width:50%;height:1400px;position:relative;margin:0 auto;" src="caixa.png"> ');
    
    
    
    while(resto>=50){
    
    document.write('<img src="50_reais.png">');
     resto=resto-50
    
    
     
     
    }
    while(resto>=20){
     document.write('<img src="20_reais.png">');
     resto=resto-20
    }
    while(resto>=10){
     document.write('<img src="10_reais.png">');
     resto=resto-10
    }
     
    
    }
    
     
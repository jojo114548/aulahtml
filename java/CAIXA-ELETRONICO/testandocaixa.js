function sacar(){
    var valor_saque=parseInt(document.querySelector("#valor").value);
    var resto=Number(valor_saque);
   

   if(resto>=10&&resto<=600){
    
       while(resto>=100){
        document.write('<img src="100_reais.jpg">')
        resto=resto-100
       

       }
       while(resto>=50){
           document.write('<img src="100_reais.jpg">')
           resto=resto-50
     
       }
       while(resto>=10){
           document.write('<img src="10_reais.jpg">')
           resto=resto-10
        
       }
       while(resto>=5){
           document.write('<img src="5_reais.jpg">')
           resto=resto-5
           
       }
       while(resto=1){
           document.write('<img src="1_real.jpg">')
           resto=resto-1
           
       }
   }
   else{
       alert("Valor minino 10 e maximo 600,digite novamente!");
   }
   }
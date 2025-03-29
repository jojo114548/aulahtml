
function converter(){
  const valorDigitado =parseFloat(document.querySelector("#amount").value);

  const moeda=document.querySelector("#currency").value;

  const footer=document.querySelector("#nome")
  footer.classList.add("show-result")



if(moeda=="USD"){
  const total=Number( valorDigitado/5.78)
  const footer=document.querySelector("#nome")
  footer.classList.add("show-result")


 var resultado =document.createElement("span")
 resultado.textContent="US$ 1 = R$ 5.78 Reais"
footer.appendChild(resultado)


 var resultado1 =document.createElement("h1")
 resultado1.textContent=(Number(total.toFixed(2))+" Dolares")
 footer.appendChild(resultado1)
 





}  else if (moeda=="EUR"){

  const footer=document.querySelector("#nome")
  footer.classList.add("show-result")
    const total=  valorDigitado/6.20

    var resultado =document.createElement("span")
    resultado.textContent="US$ 1 = R$ 6.20 Reais"
   footer.appendChild(resultado)
  
 
    var resultado1 =document.createElement("h1")
    resultado1.textContent=(Number(total.toFixed(2))+" Euro")
    footer.appendChild(resultado1)
    
  }
else if(moeda=="GBP"){
  const footer=document.querySelector("#nome")
  footer.classList.add("show-result")

  const total= valorDigitado/7.45
  var resultado =document.createElement("span")
  resultado.textContent="US$ 1 = R$ 7.45 Reais"
 footer.appendChild(resultado)


  var resultado1 =document.createElement("h1")
  resultado1.textContent=(Number(total.toFixed(2))+" Libra")
  footer.appendChild(resultado1)
}




}
const form=document.getElementById("formulario")
form.addEventListener("submit",function(event){
event.preventDefault();

})

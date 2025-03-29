
//mostra o nome do titulo da pasta 
console.log(document.title)
//pelo id 
const guest=document.getElementById("guest-2")

console.log(guest)

console.dir(guest)


//pela class
const guestsByClass=document.getElementsByClassName("guest")

console.log(guestsByClass)
//pela posição
console.log(guestsByClass.item(0))

console.log(guestsByClass[1])

//puxa o elemento pela tag 
const guestsTag=document.getElementsByTagName("li")
console.log(guestsTag)

const guest1=document.querySelector("#guest-1")
console.log(guest1)


const input=document.querySelector("#name")
//dar uma funcão ao input (adicionar cor vermelha que estar la no css )
input.classList.add("input-error")

//remover 
input.classList.remove("input-error")


//faz a função contraria (caso tenha feito o remove ele adiciona e assim ao contrario -faz o inverso)

input.classList.toggle("input-error")
//mudar a cor do botão 
const button =document.querySelector("#btn1")
button.style.backgroundColor="red"


 const button1 =document.querySelector("#btn2")
button1.style.backgroundColor="green"


//criar com js e inserir no dom 

const guests=document.querySelector("ul")
//adiconar novo li 
const newguest=document.createElement("li")
//colocar a classe no novo botão como os outros 
newguest.classList.add("guest")
//adicionar novo span 
const guestName=document.createElement("span")
guestName.textContent="Aluno3"
//trazer a propriedade que ta no span 
newguest.appendChild(guestName)
guests.append(newguest)
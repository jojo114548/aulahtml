function adicionar(){
    let lista=document.getElementById("lista");
    let item=document.createElement("li");
    item.innerHTML="item";
    lista.appendChild(item);
}
function remover(){
    let lista=document.getElementById("lista");
    let itens=lista.getElementsBytagName("li");
    if(itens.length>0){
        let ultimoElemento =itens[itens.length-1];
        lista.removeChild(ultimoElemento);
    }
}
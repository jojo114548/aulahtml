document.addEventListener('DOMContentLoaded',function(){
   const login= document.getElementById('loginForm');
   const button= document.getElementById('loginButton');
   const erro=document.getElementById('erro');

   login.addEventListener('submit',function(event){
      event.preventDefault();
      const usuario =document.getElementById('usuario').value;
      const senha =document.getElementById('senha').value;

      const usuariovalidado='user';
      const senhavalidada='12345678'
      if(usuario===usuariovalidado && senha===senhavalidada){
         window.location.href='dados.html'
      }
      else{
         erro.textContent='Usuario ou senha incorreta!'
        erro.style.visibility='visible';
      }
   });

});

   

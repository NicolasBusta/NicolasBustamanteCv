 
 /*Bienvenida*/ 
 Swal.fire({ 
  position: 'top',
  title: '¡Bienvenido!',
  width: 600,
  padding: '3em',
  color: '#17202A',
  showConfirmButton: false,
timer: 1500,
  background: ' url(/img/girasoles.jpg)',
  backdrop: `
    rgba(0,0,123,0.4)
    left top
    no-repeat
  `
})

/*preloader*/
window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });

/* Eventos: */

//funcion aleatoria de fraces:
function RandomSugerencia() {
  let fraces=['“Nada en la vida debe ser temido, solamente debe ser comprendido. Ahora es el momento de comprender más, para poder temer menos”.-Marie Curie','“Cuando salgas de la tormenta, ya no serás la misma persona que había entrado en ella. En eso consiste la tormenta”.-Haruki Murakami','“En medio de la dificultad se esconde la oportunidad”-Albert Einstein','"El que se entrega a la tristeza renuncia a la plenitud de la vida. Para sobrevivir, planificar la esperanza"- Pichon-Rivière'];
  let randomF=Math.floor(Math.random() * fraces.length);
  return fraces[randomF]
} 
function cambiar() {
  document.getElementById("pCambiante").innerHTML= RandomSugerencia();
}
document.getElementById("bCambiante").onclick = function(){
cambiar();
}

//habilidades blandas:
function habilidadesBlandas() {
  document.getElementById("demo").innerHTML = "*Gestión de conflictos,Manejo del estrés,Habilidades de comunicación,Servicio al cliente y Gestión del cambio.";
}

//ver imagen Perfil:
function showHide(){
   var oImageDiv=document.getElementById('myimageDiv')
    oImageDiv.style.display=(oImageDiv.style.display=='none')?'inline':'none' }
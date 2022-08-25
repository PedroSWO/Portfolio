let body = document.querySelector('body');
let button = document.getElementById('btndark');

    button.addEventListener('click', ()=>{
   body.classList.toggle("oscuro");
    })


let imagen = document.getElementById('about-image');

function cambiar(){
    if(imagen.src === "resources/images/about_me.png"){
        imagen.src = "resources/images/negative.png";
    }
    }

    cambiar();
 
function cambiarModo() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("oscuro"); 
}
 
function changeImage() {
  
    if(document.getElementById("about-image").src === "resources/images/about_me.png") {
        document.getElementById("about-image").src = "resources/images/negative.png";
    }
    else {
        document.getElementById("about-image").src = "resources/images/about_me.png";
    } 
      }

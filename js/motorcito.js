let estadoLicuadora = "apagado";
let licuadora = document.getElementById("blender");
let sonidoLicuadora = document.getElementById("blender-sound");
let botonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {

    if (estadoLicuadora == "apagado"){
        estadoLicuadora = "encendido";
        hacerBrrBrr();
        licuadora.classList.add("active");
    } else {
        estadoLicuadora = "apagado";
        hacerBrrBrr();
        licuadora.classList.remove("active");
    }
}

function hacerBrrBrr(){
    if (sonidoLicuadora.paused){
        botonLicuadora.play();
        sonidoLicuadora.play();
        navigator.vibrate([99999])
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
        navigator.vibrate(0)
    }
}



cronometro= 0;
function inicio() {
    let phoras = document.getElementById('horas');
    let pminutos = document.getElementById('minutos');
    let psegundos = document.getElementById('segundos');
    let pmlsegundos = document.getElementById('mlsegundos');

    let conthoras = 0;
    let contminutos = 0;
    let contsegundos = 0;
    let contmlsegundos = 0;

    cronometro = setInterval(function () {

        if (contmlsegundos < 10) {
            pmlsegundos.innerHTML = '0' + contmlsegundos;
        } else {
            pmlsegundos.innerHTML = contmlsegundos;
        }

        if (contsegundos < 10) {
            psegundos.innerHTML = '0' + contsegundos;
        } else {
            psegundos.innerHTML = contsegundos;
        }

        if (contminutos < 10) {
            pminutos.innerHTML = '0' + contminutos;
        } else {
            psegundos.innerHTML = contminutos;
        }

        if(conthoras < 10){
            phoras.innerHTML = '0' + conthoras;
        }else{
            phoras.innerHTML = conthoras;
        }

        if (contmlsegundos < 9) {
            contmlsegundos += 1;
        } else if (contsegundos < 59) {
            contmlsegundos = 0;
            contsegundos += 1;
        }else if (contminutos < 59){
            contmlsegundos = 0;
            contsegundos = 0;
            contminutos += 1;
        }else if( conthoras < 23){
            contmlsegundos = 0; 
            contsegundos = 0;
            contminutos =0;
            conthoras += 1;
        }else("ya se cumplieron las 24 hs")
    }, 100);
}

function Restablecer(){
    clearInterval(cronometro);
    document.getElementById('horas').innerHTML = "00";
    document.getElementById('minutos').innerHTML  = "00";
    document.getElementById('segundos').innerHTML  = "00";
    document.getElementById('mlsegundos').innerHTML  = "00";
}

function Parar (){
    clearInterval(cronometro);
}

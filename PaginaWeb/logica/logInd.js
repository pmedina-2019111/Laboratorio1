function reproducirVideo() {

    var rutaVideo = '../';

    var videoElemento = document.createElement('video');
    videoElemento.src = rutaVideo;
    videoElemento.controls = true;


    document.body.appendChild(videoElemento);
}

document.getElementById('reproducirTexto').addEventListener('click', reproducirVideo);


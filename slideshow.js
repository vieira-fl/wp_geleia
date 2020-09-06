let imagensIndex = 0;
let imagens = document.getElementsByClassName("showSlide");

mostrarImagem(imagensIndex);

setInterval(function(){
    let i = 0;
    i++;
    proximaImagem(i);
},5000)


function proximaImagem(n){
    mostrarImagem(imagensIndex += n);
};

function mostrarImagem(n){

    if( n > imagens.length - 1) {
        imagensIndex = 0;
    };

    if( n < 0 ) {
        imagensIndex = imagens.length - 1;
    };
    
    for(let i = 0; i < imagens.length; i++){
        imagens[i].style.display = "none";
    };

    imagens[imagensIndex].style.display = "block";

};
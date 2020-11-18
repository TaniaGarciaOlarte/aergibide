$(document).ready(function (){

    splide();
    mostrarCategorias();
    mostrarMenuPerfil();
    botonCategoria();
    ajaxPrincipal();
})

function mostrarCategorias(){
    let boton= $('#filtro>a').eq(0);
    let contador=0;
    let menuCategoria=$('.splide').eq(0);
    condicionDespliegue(boton,contador,menuCategoria);



}

function mostrarMenuPerfil(){
    let boton= $('#perfil');
    let contador=0;
    let menuperfil= $('#menu_usuario').eq(0);
    menuperfil.css('display','none');
    condicionDespliegue(boton,contador,menuperfil);
}

function condicionDespliegue(boton, contador, menu){
    boton.on('click', function (){
        contador++;
        if(contador % 2==0){
            menu.css('display', 'none');
        }
        else{
            menu.css('display','flex');
        }
    });
}

    function splide(){
        new Splide( '#splide', {
            perPage: 3,
            rewind : true,
        } ).mount();
}

function botonCategoria() {
    let botones = $('.splide__slide button');
    botones.on('click', function () {
        botones.addClass("botonDesactivado");
        $('.botonDesactivado').removeClass("botonActivo");
        $(this).addClass("botonActivo");
        $(this).removeClass("botonDesactivado");

    });
}

function ajaxPrincipal() {
    let boton = $('.splide__slide button');
    boton.on('click', function () {
        if (boton.hasClass('botonActivo')) {
            let valor=$('.botonActivo').val();
            $.ajax({

                url: '../model/principal.php',

                data: {valor: "hola"},

                type: "POST",

                success: function (response) {
                    alert(response);

                },

                error: function (xhr, status) {
                    alert("No hemos podido mostrar la información que desea.")
                },

                /*
                complete: function (xhr, status) {
                    alert("Petición realizada");
                }
                 */

            })
        } else {
            alert("Error");
        }
    })
}
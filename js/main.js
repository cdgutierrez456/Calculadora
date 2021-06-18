// Objetoo con propiedades de la calculadora

var p = {

    teclas: document.querySelectorAll("#calculadora ul li"),
    accion: null,
    digito: null,
    operaciones: document.querySelector('#operaciones'),
    cantidadSignos: 0

}


// Objeto con los metodos de la calculadora

var m = {

    inicio: function() {
        for(let i = 0; i < p.teclas.length; i++) {
           p.teclas[i].addEventListener('click', m.oprimirTecla) 
        }
    },

    oprimirTecla: function(event) {
        p.accion = event.target.getAttribute('class');
        p.digito = event.target.innerHTML;
        m.calculadora(p.accion, p.digito);
    },

    calculadora: function(accion, digito) {
        switch(accion) {
            case 'numero':

                p.cantidadSignos = 0;

                if(p.operaciones.innerHTML == 0) {
                    p.operaciones.innerHTML = digito
                } else {
                    p.operaciones.innerHTML += digito
                }
                break;

            case 'signo':

                p.cantidadSignos ++;
                if(p.cantidadSignos == 1) {
                    if(p.operaciones.innerHTML == 0) {
                        p.operaciones.innerHTML = 0;
                    } else {
                        p.operaciones.innerHTML += digito;
                    }
                }
                
                break;

            case 'decimal':
                console.log('Es punto')
                break;
            case 'igual':
                console.log('Es igual')
                break;
        }
    },

    borrarCalculadora: function() {
        p.operaciones.innerHTML = 0;
    }

}

m.inicio();

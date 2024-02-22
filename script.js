
function descobrir() {
    var letra = document.getElementById('texto').value

    document.getElementById('texto').value = ''

    letra.trim()

    switch(letra) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
        document.getElementById('numeros').value = letra
        break;
    default:
        document.getElementById('letras').value = letra

    }
} 


function encriptar() {
    document.getElementById("img").style.visibility = "hidden";
    document.getElementById("message1").style.visibility = "hidden";
    document.getElementById("message2").style.visibility = "hidden";

    let textOriginal = document.getElementById("textInput").value;
    let textEncriptado = "";

    for (let i = 0; i < textOriginal.length; i++) {
        let letra = textOriginal[i];

        if (letra === 'e') {
            textEncriptado += 'enter';
        } else if (letra === 'i') {
            textEncriptado += 'imes';
        } else if (letra === 'a') {
            textEncriptado += 'ai';
        } else if (letra === 'o') {
            textEncriptado += 'ober';
        } else if (letra === 'u') {
            textEncriptado += 'ufat';
        } else {
            textEncriptado += letra;
        }
    }
    document.getElementById("resultado").innerText = textEncriptado;
    document.getElementById('botonCopiar').removeAttribute('disabled');
    document.getElementById('desencriptarBoton').removeAttribute('disabled');
}

function desencriptar() {
    let textEncriptado = document.getElementById("textInput").value;
    let textDesencriptado = textEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById("resultado").innerText = textDesencriptado;
}

function copy() {
    let copyText = document.getElementById("resultado").innerText;
    navigator.clipboard.writeText(copyText).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Error al copiar el texto: ", err);
    });
}

function copiarTexto(id, boton) {

    const elemento = document.getElementById(id);

    const texto = elemento.innerText;

    navigator.clipboard.writeText(texto);

    boton.innerText = "¡COPIADO!";

    setTimeout(() => {
        boton.innerText = "COPIAR";
    }, 1500);
}

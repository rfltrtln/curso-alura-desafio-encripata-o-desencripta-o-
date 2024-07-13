
function copiarTexto() {
    // Seleciona o input de texto
    var texto = document.getElementById("stringUe");

    // Seleciona o texto dentro do input
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móveis

    // Copia o texto selecionado
    document.execCommand("copy");

    // Feedback visual
    alert("Texto copiado: " + texto.value);

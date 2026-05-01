document
  .getElementById("button_calculate")
  .addEventListener("click", function () {
    const alturaInput = document.getElementById("edit_text_altura");
    const pesoInput = document.getElementById("edit_text_peso");
    const resultText = document.getElementById("text_view_result");
    const alturaStr = alturaInput.value;
    const pesoStr = pesoInput.value;

    if (!alturaStr || !pesoStr) {
      resultText.innerText = "Preencha os campos!";
      resultText.style.color = "#d32f2f";
      return;
    }

    const altura = parseFloat(alturaStr) / 100;
    const peso = parseFloat(pesoStr);

    const imc = peso / (altura * altura);

    const imcFormatado = imc.toFixed(2).replace(".", ",");

    let mensagem = "";

    if (imc < 18.5) {
      mensagem = `${imcFormatado} - Você está abaixo do peso`;
      resultText.style.color = "#ffa000";
    } else if (imc > 25) {
      mensagem = `${imcFormatado} - Você está acima do peso`;
      resultText.style.color = "#d32f2f";
    } else {
      mensagem = `${imcFormatado} - Você está saudável`;
      resultText.style.color = "#2e7d32";
    }

    resultText.innerText = mensagem;
  });

document.getElementById("button_clear").addEventListener("click", function () {
  // Seleciona os campos
  const alturaInput = document.getElementById("edit_text_altura");
  const pesoInput = document.getElementById("edit_text_peso");
  const resultText = document.getElementById("text_view_result");

  alturaInput.value = "";
  pesoInput.value = "";

  resultText.innerText = "";
  alturaInput.focus();
});

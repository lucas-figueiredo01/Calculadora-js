/* Somar */
function somar() {
  let v1 = document.getElementById("valor1").value;
  let v2 = document.getElementById("valor2").value;
  let resultadoElemento = document.getElementById("resultado");

  if (v1 === "" || v2 === "") {
    resultadoElemento.innerText = "Preencha os dois campos!";
    resultadoElemento.style.color = "red";
    return;
  }

  let num1 = Number(v1);
  let num2 = Number(v2);

  if (isNaN(num1) || isNaN(num2)) {
    resultadoElemento.innerText = "Digite apenas numeros";
    resultadoElemento.style.color = "red";
    return;
  }

  let resultado = num1 + num2;
  resultadoElemento.innerText = `Resultado: ${resultado}`;
  resultadoElemento.style.color = "white";
}

/* Limpar */
function limpar() {
  let v1 = document.getElementById("valor1").value;
  let v2 = document.getElementById("valor2").value;
  let resultadoElemento = document.getElementById("resultado");

  if (v1 === "" && v2 === "") {
    document.getElementById("resultado").innerText =
      "Nenhum valor para ser limpo";
    resultadoElemento.style.color = "red";
  } else {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    resultadoElemento.innerText = "Resultado:";
    resultadoElemento.style.color = "white";
  }
}

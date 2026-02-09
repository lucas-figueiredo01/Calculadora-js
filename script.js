function somar() {
  let v1 = document.getElementById("valor1").value;
  let v2 = document.getElementById("valor2").value;

  let resultado = Number(v1) + Number(v2);
  document.getElementById("resultado").innerText = `Resultado: ${resultado}`;
}

/* Limpar */
function limpar() {
  let v1 = document.getElementById("valor1").value;
  let v2 = document.getElementById("valor2").value;

  if (v1 === "" && v2 === "") {
    document.getElementById("resultado").innerText =
      "Nenhum valor para ser limpo";
  } else {
    document.getElementById("valor1").value = "";
    document.getElementById("valor2").value = "";
    document.getElementById("resultado").innerText = "Resultado:";
  }
}

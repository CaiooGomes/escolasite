
function atualizarConteudo(larguraDaTela) {
    if (larguraDaTela <= 796) {
      const trabalhoCalendario = document.getElementById("matematicat");
      trabalhoCalendario.style.display = "none";
      const h4Element = document.getElementById("textotelapequena");
      h4Element.textContent = "Matemática";
      h4Element.style.display = "block";
    } else {
      const trabalhoCalendario = document.getElementById("matematicat");
      trabalhoCalendario.textContent = "Matemática";
      trabalhoCalendario.style.display = "block";
      const h4Element = document.getElementById("textotelapequena");
      h4Element.style.display = "none";
    }
  }
  
  window.addEventListener('resize', function() {
    const larguraDaTela = window.innerWidth;
    atualizarConteudo(larguraDaTela);
  });
  
  const larguraDaTelaInicial = window.innerWidth;
  atualizarConteudo(larguraDaTelaInicial);
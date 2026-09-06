// =========================================================
// SOARES BUQUÊS — script.js
// Comportamento do menu hambúrguer (mobile) + ano no rodapé
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("nav-menu");

  // Abre/fecha o menu mobile ao clicar no hambúrguer
  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var estaAberto = nav.classList.toggle("aberto");
      hamburger.classList.toggle("aberto");
      hamburger.setAttribute("aria-expanded", estaAberto ? "true" : "false");
    });

    // Fecha o menu automaticamente ao clicar em um link (mobile)
    var linksDoMenu = nav.querySelectorAll("a");
    linksDoMenu.forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("aberto");
        hamburger.classList.remove("aberto");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Atualiza o ano do copyright automaticamente
  var anoAtual = document.getElementById("ano-atual");
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }
});

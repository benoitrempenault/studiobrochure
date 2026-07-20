/* =========================================================================
   formation-gate.js — l'onglet « Formation & Documents » est réservé à la
   version Century 21 de Studio Brochure. Il reste invisible (et sa page
   inaccessible) pour les agences marque blanche.
   La détection se fait sur le nom d'agence paramétré à l'accueil.
   ========================================================================= */
(function () {
  function isC21() {
    try {
      var a = JSON.parse(localStorage.getItem("studio-mandatpro-agency") || "{}") || {};
      return /century\s*-?\s*21/i.test(String(a.name || ""));
    } catch (e) { return false; }
  }
  window.SBIsC21 = isC21;
  document.addEventListener("DOMContentLoaded", function () {
    var tile = document.getElementById("tileFormation");
    if (tile && isC21()) tile.hidden = false;
  });
})();

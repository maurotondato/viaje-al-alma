(function () {
  "use strict";
  function safe(fn, name) { try { fn(); } catch (e) { console.warn("[" + name + "]", e); } }

  function render() {
    var list = document.querySelector("[data-credits]");
    if (!list) return;
    fetch("assets/credits.json").then(function (r) { return r.json(); }).then(function (credits) {
      var html = Object.keys(credits).map(function (id) {
        var c = credits[id];
        var creatorLink = c.creator_url
          ? '<a href="' + c.creator_url + '" target="_blank" rel="noopener">' + c.creator + "</a>"
          : c.creator;
        return "<li><strong>" + c.title + "</strong> — " + creatorLink + " (" + c.source + ") · " +
          '<a href="' + c.license_url + '" target="_blank" rel="noopener">' + c.license.toUpperCase() + " " + (c.license_version || "") + "</a> · " +
          '<a href="' + c.foreign_landing_url + '" target="_blank" rel="noopener">Ver original ↗</a></li>';
      }).join("");
      list.innerHTML = html;
    }).catch(function () {
      list.innerHTML = "<li>No se pudieron cargar los créditos en este momento.</li>";
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { safe(render, "credits-render"); });
  else safe(render, "credits-render");
})();

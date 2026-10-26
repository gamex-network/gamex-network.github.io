document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname || "";

  // Pagine Activities in cui VOGLIO vedere il contenuto della sidebar
  const keepNav = [
    "/workshop/",
    "/workshop",
    "/school/",
    "/school",
    "/seminars/",
    "/seminars",
    "/mobility/",
    "/mobility"
  ].some(end => path.endsWith(end));

  // Trova la sidebar primaria e la nav interna
  const sidebar = document.querySelector(".md-sidebar--primary");
  if (!sidebar) return;

  const nav = sidebar.querySelector(".md-nav--primary");
  if (!nav) return;

  // Se NON è una pagina Activities, nascondo il contenuto nav,
  // ma NON la colonna (sidebar resta visibile)
  if (!keepNav) {
    nav.style.display = "none";
  } else {
    nav.style.display = "";
  }
});

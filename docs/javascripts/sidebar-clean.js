document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".md-sidebar--primary");
  if (!sidebar) return;

  const nav = sidebar.querySelector(".md-nav--primary");
  if (!nav) return;

  // Check if there is at least one sub-navigation
  const hasSubNav = !!nav.querySelector(".md-nav__sub-nav");

  // If there are NO sub-pages, hide the nav content (but keep the column)
  if (!hasSubNav) {
    nav.style.display = "none";
  }
});

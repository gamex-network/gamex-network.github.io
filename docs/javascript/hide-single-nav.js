document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.md-sidebar--primary .md-nav__list > .md-nav__item');
  items.forEach(item => {
    const hasSub = !!item.querySelector('.md-nav__sub-nav');
    const link = item.querySelector('.md-nav__link[href]');
    // Keep Activities regardless (adjust the href if your Activities link differs)
    const isActivities = link && (link.getAttribute('href').endsWith('activities/') || link.getAttribute('href').endsWith('activities'));
    if (!hasSub && link && !isActivities) {
      item.style.display = 'none';
    } else {
      item.style.display = ''; // ensure visible
    }
  });
});

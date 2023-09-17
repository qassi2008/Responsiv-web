document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function() {
    if (mainNav.style.display === 'none' || mainNav.style.display === '') {
      mainNav.style.display = 'block';
    } else {
      mainNav.style.display = 'none';
    }
  });
});

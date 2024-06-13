
  document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const navbar = document.querySelector('.navbar');

    toggleButton.addEventListener('click', function () {
      body.classList.toggle('dark-mode');
      navbar.classList.toggle('dark-mode');

      if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        toggleButton.classList.remove('btn-light');
        toggleButton.classList.add('btn-dark');
      } else {
        toggleButton.textContent = 'Dark Mode';
        toggleButton.classList.remove('btn-dark');
        toggleButton.classList.add('btn-light');
      }
    });
  });


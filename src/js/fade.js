export function initFlashLoader() {
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.body.classList.add('loaded');
    }, 100);
  });
}
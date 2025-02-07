function handleRedirect() {
  window.location.href = 'https://www.lfjnatsgfn.com/join/OKKOK'
}
window.addEventListener('load', function() {
  setTimeout(function() {
      document.querySelector('.loading-overlay').classList.add('loading-hide')
  }, 500)
});
window.addEventListener('DOMContentLoaded', function() {
  if (!sessionStorage.getItem('lastSubdomain')) {
      handleDomainRedirect()
  }
});

const themeMql = window.matchMedia('(prefers-color-scheme: dark)');
const html = document.querySelector('html');

function setPreferredTheme(_e) {
  if (themeMql.matches) {
    html.setAttribute('data-bs-theme', 'dark');
  } else {
    html.removeAttribute('data-bs-theme');
  }
}

function checkPreferredTheme() {
  setPreferredTheme();
  themeMql.addEventListener('change', setPreferredTheme);
}

export default checkPreferredTheme;

import '../../scss/main.scss';
import checkPreferredTheme from './checkPreferredTheme';

window.addEventListener('load', async (_e) => {
  checkPreferredTheme();

  if (document.querySelector('[data-bs-toggle="collapse"]')) {
    const { default: _Collapse } = await import('bootstrap/js/dist/collapse');
  }

  if (document.querySelector('[data-bs-toggle="dropdown"]')) {
    const { default: _Dropdown } = await import('bootstrap/js/dist/dropdown');
  }

  if (document.getElementById('year')) {
    const { default: setCopyYear } = await import('./setCopyYear');

    setCopyYear();
  }
})

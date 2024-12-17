import '../../scss/main.scss';

window.addEventListener('load', async (_e) => {
  if (document.querySelector('[data-bs-toggle="collapse"]')) {
    const { default: _Collapse } = import('bootstrap/js/dist/collapse');
  }
  if (document.querySelector('[data-bs-toggle="dropdown"]')) {
    const { default: _Dropdown } = import('bootstrap/js/dist/dropdown');
  }
})

async function importBsComponents() {
  if (document.querySelector('[data-bs-toggle="collapse"]')) {
    const { default: _Collapse } = await import('bootstrap/js/dist/collapse');
  }

  if (document.querySelector('[data-bs-toggle="dropdown"]')) {
    const { default: _Dropdown } = await import('bootstrap/js/dist/dropdown');
  }

  if (document.querySelector('[data-bs-toggle="tab"]')) {
    const { default: _Tab } = await import('bootstrap/js/dist/tab')
  }

  if (document.querySelector('[data-bs-toggle="modal"]')) {
    const { default: _Modal } = await import('bootstrap/js/dist/modal');
  }
}

export default importBsComponents;

import '../../scss/main.scss';
import checkPreferredTheme from './checkPreferredTheme';
import importBsComponents from './importBsComponents';

window.addEventListener('load', async (_e) => {
  checkPreferredTheme();
  importBsComponents();

  if (document.getElementById('year')) {
    const { default: setCopyYear } = await import('./setCopyYear');

    setCopyYear();
  }
})

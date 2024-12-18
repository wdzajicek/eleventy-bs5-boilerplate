const year = document.getElementById('year');

function setCopyYear() {
  const today = new Date();

  year.innerHTML = `${today.getFullYear()}`;
}

export default setCopyYear;

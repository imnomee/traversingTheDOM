var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    let prevSib = e.target.previousElementSibling;
    prevSib.className = 'highlight';
  }
});
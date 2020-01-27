var list = document.getElementsByTagName('ul')[0];

list.addEventListener('click', function(e) {
  if (e.target.tagName == 'BUTTON') {
    let prevSib = e.target.previousElementSibling;
    prevSib.className = 'highlight';
  }
});

/* both work the same
ul.removeElement(ul.firstElementChild);

ul.removeElement(ul.children[0]);
*/

var section = document.querySelector('section');
var paragraphs = section.children;

for(let i = 0; i<paragraphs.length; i++){
  paragraphs[i].style.color = 'blue';
}
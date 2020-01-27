const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');

listUl.addEventListener('click', (event) => {
    if (event.target.tagName == 'BUTTON') {
        //If the button class name is remove. delete it
        if (event.target.className == 'remove') {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        //if the button class name is up, move it up
        if (event.target.className == 'up') {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            // if previous element is true, move it to that place
            if (prevLi) {
                ul.insertBefore(li, prevLi);
            }

        }
        //if the button class name is down, move it down
        if (event.target.className == 'down') {
            let li = event.target.parentNode;
            // here we are getting elements next and then next element. so we are jumping two elements up.
            let nextLi = li.nextElementSibling.nextElementSibling;
            // let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            //PROBLEM HERE, IF THERE IS NOT NEXT LI IN 2 STEPS IT WONT WORK
            // here we are using nextLi (2 steps up) and going one step back.
            //if (nextLi) {
            ul.insertBefore(li, nextLi);
            // }



        }
    }
});

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    ul.appendChild(li);
    addItemInput.value = '';
});
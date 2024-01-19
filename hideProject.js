const project1 = document.getElementById('target1');

const project2 = document.getElementById('target2');

//Ensures div display starts off as none.

const divHide1 = document.getElementById('desc1');
divHide1.style.display = 'none';

const divHide2 = document.getElementById('desc2');
divHide2.style.display = 'none';


const eventHandlerHide1 = event => {
    divHide1.style.display == 'none' ? divHide1.style.display = 'block' : divHide1.style.display = 'none';
}

const eventHandlerHide2 = event => {
    divHide2.style.display == 'none' ? divHide2.style.display = 'block' : divHide2.style.display = 'none';
}

project1.addEventListener('click',eventHandlerHide1);

project2.addEventListener('click',eventHandlerHide2);
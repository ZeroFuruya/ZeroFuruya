const body = document.querySelector('body');
const imgContainer = document.createElement('div');

function displayImg(imgUrl, elt) {

    body.appendChild(imgContainer);

    imgContainer.innerHTML = `<img src='${imgUrl}'>`;

    imgContainer.classList.add('displayMe');

    imgContainer.style.top = (elt.offsetTop) + 50 + 'px';

    let difference = document.documentElement.clientWidth - elt.offsetLeft;


    if (difference > 250) {

        imgContainer.style.right = '20px';
        imgContainer.style.right = 'auto';

    } else {

        imgContainer.style.left = imgContainer.style.left = elt.offsetLeft + 'px';

    }

    imgContainer.style.animation = 'fadeIn .8s';

}
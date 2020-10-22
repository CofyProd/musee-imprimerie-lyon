const title = document.querySelector('#titre-main');
const titleText = title.textContent;
const delay = 100;

title.textContent = '';

for (let i = 0; i < titleText.length + 1; i++) {
    fillTitle(i);
}

function fillTitle (index) {
    setTimeout(function () {
        title.textContent = titleText.substr(0, index);
    }, delay * index);
}




const panels = document.querySelectorAll('.panel');
const about = document.querySelector('.about');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');

let state = {
    about: 0,
    work: 0,
    contact: 0
}

let reset = {
    stateReset: JSON.parse(JSON.stringify(state)),
    init: function() {
        state = this.stateReset;
    }
}


const aboutPage = document.querySelector('#aboutPage');
const workPage = document.querySelector('#workPage');
const contactPage = document.querySelector('#contactPage');



function togglePanel() {
    panels.forEach(panel => panel.classList.remove('open'));
    panels.forEach(panel => panel.addEventListener('click', togglePanel));
    this.classList.toggle('open');
    this.removeEventListener('click', togglePanel);
    render(this);
    let container = document.querySelector('.container');
    setTimeout(function () { container.classList.add('active'); }, 100);
    
}

function render(element) {
    if (element.classList.contains('about') === true) {
        work.innerHTML = "My Work";
        contact.innerHTML = "Contact";
        element.innerHTML = aboutPage.innerHTML;

    } else if (element.classList.contains('work') === true) {
        contact.innerHTML = "Contact";
        about.innerHTML = "About"
        element.innerHTML = workPage.innerHTML;
    } else {
        about.innerHTML = "About"
        work.innerHTML = "My Work";
        element.innerHTML = contactPage.innerHTML;

}

}
panels.forEach(panel => panel.addEventListener('click', togglePanel));


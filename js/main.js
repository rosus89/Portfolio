

const panels = document.querySelectorAll('.panel');
const about = document.querySelector('.about');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');
const aboutHTML = document.querySelector('#aboutHTML').import;

function togglePanel() {
    panels.forEach(panel => panel.classList.remove('open'));
    panels.forEach(panel => panel.addEventListener('click', togglePanel));
    this.classList.toggle('open');
    this.removeEventListener('click', togglePanel);
    if (this.classList.contains('about') === true){
        this.innerHTML= aboutHTML;
    }
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));


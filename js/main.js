console.log("works!")

const panels = document.querySelectorAll('.panel');

function togglePanel() {
    panels.forEach(panel => panel.classList.remove('open'));
    panels.forEach(panel => panel.addEventListener('click', togglePanel));
    this.classList.toggle('open');
    this.removeEventListener('click', togglePanel);
}

panels.forEach(panel => panel.addEventListener('click', togglePanel));
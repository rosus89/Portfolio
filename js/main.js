
const panels = document.querySelectorAll('.panel');
const about = document.querySelector('.about');
const work = document.querySelector('.work');
const contact = document.querySelector('.contact');
const aboutPage = document.querySelector('#aboutPage');
const workPage = document.querySelector('#workPage');
const contactPage = document.querySelector('#contactPage');



let state = {
    about: false,
    work: false,
    contact: false
}

let reset = {
    stateReset: JSON.parse(JSON.stringify(state)),
    state: function() {
        state = this.stateReset;
    }
}

let pfContent = [
     {
        name: "Memory Game",
        img: "./img/empty.png",
        url: "https://rosus89.github.io/FEND-Memory-Game/",
        srcUrl: "https://github.com/rosus89/FEND-Memory-Game"
    },
    {
        name: "Arcade Game",
        img: "./img/empty.png",
        url: "https://rosus89.github.io/Arcade-Game/",
        srcUrl: "https://github.com/rosus89/Arcade-Game"
    },
    {
        name: "Cat Clicker",
        img: "./img/empty.png",
        url: "https://rosus89.github.io/CatClicker-MVC/",
        srcUrl: "https://github.com/rosus89/CatClicker-MVC"
    },
    {
        name: "Recipe Book",
        img: "./img/empty.png",
        url: "https://github.com/rosus89/Recipe-Book",
        srcUrl: "https://github.com/rosus89/Recipe-Book"
    }
]


function togglePanel() {
    // panels.forEach(panel => panel.classList.remove('open'));
    // panels.forEach(panel => panel.addEventListener('click', togglePanel));
    // this.classList.toggle('open');
    // this.removeEventListener('click', togglePanel);
    let page = this.classList[1];
    
    render(page);
    changeState(page);
    // let container = document.querySelector('.container');
    // setTimeout(function () { container.classList.add('active'); }, 0);  
}

function changeState(page){
    if (page == "about"){
        reset.state;
        state.about= true;
    }
    if (page == "work"){
        reset.state;
        state.work= true;
    }
    else if (page == "contact"){
        reset.state;
        state.contact= true;
    }

}

function render(element) {
    if (element.classList.contains('about') === true) {
        work.innerHTML = panelName("My Work");
        contact.innerHTML = panelName("Contact");
        element.innerHTML = aboutPage.innerHTML;

    } else if (element.classList.contains('work') === true) {
        contact.innerHTML = panelName("Contact");
        about.innerHTML = panelName("About");
        element.innerHTML = workPage.innerHTML;
        let workList = "";
        for (let item of pfContent) {
            workList = workList + pfItem(item)
        }
        const portfolio = document.querySelector('.portfolio');
        portfolio.innerHTML = workList;
    } else {
        about.innerHTML = panelName("About");
        work.innerHTML = panelName("My Work");
        element.innerHTML = contactPage.innerHTML;

}

}
panels.forEach(panel => panel.addEventListener('click', togglePanel));

function panelName(name){
    return `<p class="panel-name mini">${name}</p>`
}

function pfItem(item) {
    return `<div class="portfolio-item">
            <h5 class="title">${item.name}</h5>        
            <a target="_blank" href = "${item.url}">
            <img src="${item.img}" alt="${item.name} image">
            </a>
            <a class="source" href="${item.srcUrl}">View Source</a>
            </div>`
}

let touchStartX, touchEndX = 0;

document.addEventListener("touchstart", function(event){
    touchStartX = event.changedTouches[0].screenX;
}, false)
document.addEventListener("touchend", function(event){
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
})

function handleSwipe(){
    if (touchStartX < touchEndX && (touchEndX - touchStartX) >= 30){
    console.log("swipe Right")

    }
    else if (touchStartX > touchEndX && (touchStartX - touchEndX) >= 30){
    console.log("swipe left")
    }
}
"use strict";



const body = document.querySelector("#content")
const routes = {
    home:{
        page:"./pages/home.html",
        title: "Home"
    },
    about:{
        page:"./pages/about.html",
        title: "Skills"
    },
    portfolio:{
        page:"./pages/portfolio.html",
        title: "Portfolio"
    },
    contact:{
        page:"./pages/contact.html",
        title: "Contact"
    }
};

function goTo(route){
    fetch(route.page)
    .then(response => response.text())
    .then(html => body.innerHTML=html)
    .catch(err => console.log('Page not found ', err));
    document.title = `Full Stack Ninja - ${route.title}`;
}

goTo(routes.home)






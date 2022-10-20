"use strict";



const body = document.querySelector("#content")
const routes = {
    home:{
        page:"./pages/home.html",
        title: "homepage"
    },
    about:{
        page:"./pages/about.html",
        title: "skills"
    },
    portfolio:{
        page:"./pages/portfolio.html",
        title: "portfolio"
    },
    contact:{
        page:"./pages/contact.html",
        title: "contact"
    }
};

function goTo(route){
    fetch(route.page)
    .then(response => response.text())
    .then(html => body.innerHTML=html)
    .catch(err => console.log('Page not found ', err));
}

goTo(routes.home)






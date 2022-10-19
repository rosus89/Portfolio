"use strict";
(() => {


const body = document.querySelector("#content")
const routes = {
    home:{
        page:"./pages/home.html",
        title: "homepage"
    },
    about:{
        page:"./pages/about.html",
        title: "about"
    },
    contact:{
        page:"./pages/contact.html"
    }
};

function goTo(route){
    fetch(route.page)
    .then(response => response.text())
    .then(html => body.innerHTML=html)
    .catch(err => console.log('Failed to fetch page: ', err));
}

goTo(routes.home)


})();


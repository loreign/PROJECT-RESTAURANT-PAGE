import { LandingPage } from './homepage';
import { Menu } from './menu';
import { Contact } from './contact'; 

// Runs When DOM is loaded. Prior to images and other external content
document.addEventListener("DOMContentLoaded", function() {
  LandingPage.addNav();
  LandingPage.addHeroText();
});

// Even is fired when entire page is loaded. Including it's content (CSS, images, JavaScript)
window.onload = function() {
  const home = document.querySelector('.home');
  const menu = document.querySelector('.menu');
  const contact = document.querySelector('.contact');
  
  menu.addEventListener('click', populateMenu, {once: true});
  home.addEventListener('click', populateHome, {once: true});
  contact.addEventListener('click', populateContact, {once: true});
}

function populateMenu() {
  const content = document.querySelector('.content');
  content.removeChild(content.lastChild);
  Menu.addMenu();
  const home = document.querySelector('.home');
  const contact = document.querySelector('.contact');
  home.addEventListener('click', populateHome, {once: true});
  contact.addEventListener('click', populateContact, {once: true});
}

function populateHome() {
  const content = document.querySelector('.content');
  content.removeChild(content.lastChild);
  LandingPage.addHeroText();
  const menu = document.querySelector('.menu');
  const contact = document.querySelector('.contact');
  menu.addEventListener('click', populateMenu, {once: true});
  contact.addEventListener('click', populateContact, {once: true});
}

function populateContact() {
  const content = document.querySelector('.content');
  content.removeChild(content.lastChild);
  Contact.addContainer();
  const home = document.querySelector('.home');
  const menu = document.querySelector('.menu');
  menu.addEventListener('click', populateMenu, {once: true});
  home.addEventListener('click', populateHome, {once: true});
}
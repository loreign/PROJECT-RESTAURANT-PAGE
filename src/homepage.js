const LandingPage = (function(){
  const content = document.querySelector('.content');
  function addNav() {
    const nav = document.createElement('nav');
    nav.setAttribute('class', 'nav');
    nav.innerHTML = `
    <h1 class="title nav__item"><a class="nav__link "href="#">Burger <span>Bar</span></a></h1>
    <ul class="nav-list">
      <li class="nav__item"><a class="nav__link home" href="#home">Home</a></li>
      <li class="nav__item"><a class="nav__link menu" href="#menu">Menu</a></li>
      <li class="nav__item"><a class="nav__link contact" href="#contact">Contact</a></li>
    </ul>
    `;
    content.prepend(nav);
  }

  function addHeroText() {
    const heroContent = document.createElement('section');
    heroContent.setAttribute('class', 'hero-content');
    heroContent.innerHTML = `
      <h1 class="headline">Juicy & hot burgers</h1>
      <h2 class="subheadline">Join us for your next meal. We get the juices flowing.</h2>
    `;
    content.appendChild(heroContent);
  }

  return {addNav, addHeroText};
})();

export { LandingPage };
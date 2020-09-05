const Menu = (function(){
  const content = document.querySelector('.content');
  const container = document.createElement('div');
  function addMenu() {
    container.setAttribute('class', 'menu-container');
    container.innerHTML = ``;
    addBurgers();
    content.appendChild(container);
  }

  function addBurgers() {
    const firstItem = document.createElement('article');
    firstItem.setAttribute('class', 'card');
    firstItem.innerHTML = `
      <img src="./images/barbeque-burger.jpg" alt="Barbeque Burger">
      <h2>Barbeque Burger</h2>
      <h4>$20.00</h4>
    `;

    const secondItem = document.createElement('article');
    secondItem.setAttribute('class', 'card');
    secondItem.innerHTML = `
      <img src="./images/beef-burger.jpg" alt="Beef Burger">
      <h2>Beef Burger</h2>
      <h4>$30.00</h4>
    `;

    const thirdItem = document.createElement('article');
    thirdItem.setAttribute('class', 'card');
    thirdItem.innerHTML = `
      <img src="./images/cheese-burger.jpg" alt="Cheese Burger">
      <h2>Cheese Burger</h2>
      <h4>$25.00</h4>
    `;

    const fourthItem = document.createElement('article');
    fourthItem.setAttribute('class', 'card');
    fourthItem.innerHTML = `
      <img src="./images/chicken-burger.jpg" alt="Chicken Burger">
      <h2>Chicken Burger</h2>
      <h4>$15.00</h4>
    `;

    const fifthItem = document.createElement('article');
    fifthItem.setAttribute('class', 'card');
    fifthItem.innerHTML = `
      <img src="./images/hamburger.jpg" alt="Hamburger">
      <h2>Hamburger</h2>
      <h4>$22.00</h4>
    `;


    const sixthItem = document.createElement('article');
    sixthItem.setAttribute('class', 'card');
    sixthItem.innerHTML = `
      <img src="./images/veggie-burger.jpg" alt="Veggie Burger">
      <h2>Veggie Burger</h2>
      <h4>$10.00</h4>
    `;

    container.appendChild(firstItem);
    container.appendChild(secondItem);
    container.appendChild(thirdItem);
    container.appendChild(fourthItem);
    container.appendChild(fifthItem);
    container.appendChild(sixthItem);
  }


  return { addMenu };

})();


export { Menu }
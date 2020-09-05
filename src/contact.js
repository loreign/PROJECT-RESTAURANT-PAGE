const Contact = (function(){
  const content = document.querySelector('.content');
  const container = document.createElement('section');

  function addContainer() {
    container.setAttribute('class', 'contact-container');
    container.innerHTML = `
      <h2>Contact Us</h2>
    `;

    addPersonalDetails();
    content.appendChild(container);
  }

  // Phone (Takeaway), Email (Contact), Opening Hours, Social Media, Address, Iframe
  // Icon, title, detail 
  function addPersonalDetails() {
    const details = document.createElement('div');
    details.setAttribute('class', 'details');

    const takeaway = document.createElement('section');
    takeaway.setAttribute('class', 'details__item');
    takeaway.innerHTML = `
      <i class="fas fa-truck fa-2x"></i>
      <h4>Takeaway</h4>
      <p>+1-202-555-0146</p>
    `;
    
    const email = document.createElement('section');
    email.setAttribute('class', 'details__item');
    email.innerHTML = `
      <i class="fas fa-envelope fa-2x"></i>
      <h4>Email</h4>
      <p>ebakreyneg@5154445.com</p>
    `;

    const open = document.createElement('section');
    open.setAttribute('class', 'details__item');
    open.innerHTML = `
      <i class="fas fa-hamburger fa-2x"></i>
      <h4>Opening Hours</h4>
      <p>Monday-Sunday <br> 11:00am-02:00am</p>
    `;

    const address = document.createElement('section');
    address.setAttribute('class', 'details__item');
    address.innerHTML = `
      <i class="fas fa-map-marked-alt fa-2x"></i>
      <h4>Address</h4>
      <p>801 Galvin St.San Diego, CA 92111</p>
    `;

    const socialMedia = document.createElement('section');
    socialMedia.setAttribute('class', 'details__item');
    socialMedia.innerHTML = `
    <i class="fas fa-share-alt fa-2x"></i>
    <h4>Social Media</h4>
    <p><a href="https://www.twitter.com/thisisMAhmad" target="_blank">
      <i class="fab fa-twitter fa-lg"></i>
    </a></p>
    `;

    details.appendChild(takeaway);
    details.appendChild(email);
    details.appendChild(open);
    details.appendChild(address);
    details.appendChild(socialMedia);

    container.appendChild(details);

    const iframe = document.createElement('div');
    iframe.setAttribute('class', 'map');
    iframe.innerHTML = `
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12474.147659483708!2d-117.17680346609356!3d32.90840379904524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9530fad921e4b%3A0xd3a21fdfd15df79!2sSan%20Diego%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1586457742578!5m2!1sen!2s" 
      width="600" height="450" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    `;


    container.appendChild(iframe);
  }

  return { addContainer };


})();


export { Contact }
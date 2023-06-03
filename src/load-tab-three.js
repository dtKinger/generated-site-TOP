import * as control from './index.js';

let pageThreeLoad = () => {
  
  const storeLocator = document.createElement('div');
  storeLocator.classList = 'food-section';
  storeLocator.innerHTML = `
  <p class="p__h2">A random restaurant</p>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10032.74250261995!2d-114.09899731284182!3d51.049660200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716fe5a4baf6a3%3A0xf1317501e17b13df!2sSpicy%20Amigos!5e0!3m2!1sen!2s!4v1685801955593!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
  </iframe>
  `

  control.container.append(storeLocator);

}

export { pageThreeLoad } ;
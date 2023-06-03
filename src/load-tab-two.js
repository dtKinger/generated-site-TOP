import * as control from './index.js';

let pageTwoLoad = () => {

  const aboutCard = document.createElement('div');
  aboutCard.classList = 'food-section';
  aboutCard.innerHTML = `
  <p class="p__h2">About Us</p>
  <ul class="flex__20gap column">
      <li class="grid">
      <span class="food-name"><strong>Mission</strong></span>
      <span class="description">"Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever."</span>
      <span class="phone">&copy; 1990-2023</span>
    </li>
      <li class="grid">
      <span class="food-name"><strong>Contact Us</strong></span>
      <span class="description">You can reach us toll free but not 24/7. Actually don't call on weekends. Or at lunch time. Or dinner time for that matter. Please call between 9am - 10am or 3pm - 5pm and we'll be happy to help.</span>
      <span class="phone">(123)<br>456-7890</span>
    </li>
  </ul>
  `;

  const ourFood = document.createElement('div');
  ourFood.classList = 'food-section';
  ourFood.innerHTML = `
  <p class="p__h2">Our Food</p>
  <ul class="flex__20gap column">
      <li class="grid">
      <span class="food-name"><strong>Locally Sourced</strong></span>
      <span class="description">We take pride in serving the highest quality food for the price. Your food will be the bluest of blues and the pinkest of pinks on the outside, and black in the middle. Yes, just like our hearts after a 12 hour shift. </span>
      <span class="phone">No Antibiotics</span>
    </li>
  </ul>
  `;

  control.container.append(aboutCard, ourFood);

}

export { pageTwoLoad } ;
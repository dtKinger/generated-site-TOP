import * as control from './index.js';

const pageOneLoad = () => {

const appetizers = document.createElement('div');
appetizers.classList = 'food-section';
appetizers.innerHTML = `
<p class="p__h2">Appetizers</p>
<ul class="flex__20gap column">
    <li class="grid">
    <span class="food-name"><strong>Spring Rolls</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$5.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>French Onion Soup</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$6.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Calamari</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$10.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Popcorn Shrimp</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$7.<sup>99</sup></span>
  </li>
</ul>
`;

const mainCourses = document.createElement('div');
mainCourses.classList = 'food-section';
mainCourses.innerHTML = `
<p class="p__h2">Main Courses</p>
<ul class="flex__20gap column">
    <li class="grid">
    <span class="food-name"><strong>Roast Chicken</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$17.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Braised Pork</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$18.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>House Burger</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$14.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Fish & Chips</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$16.<sup>99</sup></span>
  </li>
</ul>
`;

const desserts = document.createElement('div');
desserts.classList = 'food-section';
desserts.innerHTML = `
<p class="p__h2">Desserts</p>
<ul class="flex__20gap column">
    <li class="grid">
    <span class="food-name"><strong>Flan</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$5.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Deep Fried Bananas</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$5.<sup>99</sup></span>
  </li>
</ul>
`;

control.container.append(appetizers, mainCourses, desserts);

}

export { pageOneLoad };
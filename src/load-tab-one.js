import * as control from './index.js';

const pageOneLoad = () => {

const appetizers = document.createElement('div');
appetizers.classList = 'food-section';
appetizers.innerHTML = `
<p class="p__h2">Appetizers</p>
<ul class="flex__20gap column">
    <li class="grid">
    <span class="food-name"><strong>Food Item 1</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$5.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Food Item 2</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$6.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Food Item 3</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$8.<sup>99</sup></span>
  </li>
    <li class="grid">
    <span class="food-name"><strong>Food Item 4</strong></span>
    <span class="description">Then everything about it that is both interesting and informative</span>
    <span class="price">$7.<sup>99</sup></span>
  </li>
</ul>
`;

const mainCourses = control.div;



control.container.append(appetizers);

}

export { pageOneLoad };
import * as tabOne from './load-tab-one';
import * as tabTwo from './load-tab-two';
import * as tabThree from './load-tab-three';

const body = document.getElementsByTagName('body');
const header = document.getElementsByTagName('header');
const main = document.getElementsByTagName('main');
const footer = document.getElementsByTagName('footer');
const content = document.getElementById('content');

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
const nav = document.createElement('nav');

const menu = document.getElementById('menu');
const about = document.getElementById('about');
const storeLocator = document.getElementById('store-locator');

// Generate Nav
const topNav = nav;
topNav.innerHTML = `
<ul class="flex centered row px-20">
<li class="tab"><button class="active-tab" id="menu" ontouchstart="">Menu</button></li>
<li class="tab"><button class="" id="about" ontouchstart="">About</button></li>
<li class="tab"><button class="" id="store-locator" ontouchstart="">Store Locator</button></li>
<ul>
`;
topNav.classList = 'flex centered row';
content.prepend(topNav);

// Build a container for whatever tab
const container = div;
container.classList = 'flex centered full-height full-width';
container.setAttribute('id', 'contains');
topNav.insertAdjacentElement('afterend', container);

// Logic for tab switching visual
const tabBtns = document.querySelectorAll('.tab button');
tabBtns.forEach((tab) => {
  tab.addEventListener('click', (e) => {
    // Loop through again and remove all active-tab class
    tabBtns.forEach((tabB) => {
      tabB.classList.remove('active-tab');
    });
    // Exit the inner loop, and apply the good active-class.
    if (tab['id'] === e.target['id']){
    tab.classList.add('active-tab');
    };
    // Load page content based on active tab
    if (tab['id'] === 'menu'){
      tabOne.pageOneLoad();
    } else if (tab['id'] === 'about'){
      tabTwo.pageTwoLoad();
    } else if (tab['id'] === 'store-locator'){
      tabThree.pageThreeLoad();
    }


  });
});



// Make Tab 1 Focused/Active and load it's content
tabOne.pageOneLoad();



export { 
  body,
  header,
  main,
  footer,
  content,
  div,
  p,
  span,
  nav,
  menu,
  about,
  storeLocator,
  container
};
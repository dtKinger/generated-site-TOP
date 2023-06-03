import * as tabOne from './load-tab-one';
import * as tabTwo from './load-tab-two';
import * as tabThree from './load-tab-three';

const body = document.getElementsByTagName('body');
const header = document.getElementsByTagName('header');
const main = document.getElementsByTagName('main');
const footer = document.getElementsByTagName('footer');

const content = document.getElementById('content');

tabOne.pageLoad();

export { body, header, main, footer, content };
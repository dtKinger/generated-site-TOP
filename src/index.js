const body = document.getElementsByTagName('body');
const header = document.getElementsByTagName('header');
const main = document.getElementsByTagName('main');
const footer = document.getElementsByTagName('footer');

const content = document.getElementById('content');

const testAppend = document.createElement('div');
testAppend.innerHTML = `<p>Hello World</p>`;
content.appendChild(testAppend);

console.log('Hello World')
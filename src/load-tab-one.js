import * as control from './index.js';

const pageLoad = () => {

const testAppend = document.createElement('div');
testAppend.innerHTML = `<p>Hello World</p>`;
content.appendChild(testAppend);

console.log('Hello World');

}

export { pageLoad };
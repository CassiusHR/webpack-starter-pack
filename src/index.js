import _ from 'lodash';
import { Header } from './js/header';
import { Footer } from './ts/footer';
import './scss/styles.scss';

function component (){
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', ' Webpack Starter Pack'], '');
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());

let header = new Header();

let firstHeading = header.getFirstHeading();

console.log(firstHeading);

let footer = new Footer();

let footerText = footer.getFooterText();

console.log(footerText);
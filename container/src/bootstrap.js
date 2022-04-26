import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cardMount } from 'card/CardShow';

console.log('Container!');

productsMount(document.querySelector('#my-products'));
cardMount(document.querySelector('#my-card'));
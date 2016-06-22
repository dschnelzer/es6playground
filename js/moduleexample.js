import project2 from 'js/module1.js';
import {projectId as id} from 'js/module1.js';
import {product1, product2} from 'js/module1.js';
import {printContents} from 'js/module1.js';

console.log('doit', project2.doit());

console.log('in base.js');
console.log('Project ID', id, 'Project ', project2);
console.log('product1', product1, 'product2', product2);

printContents();
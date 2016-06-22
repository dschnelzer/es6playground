let projectId = 99;
let project = {
  name:'NOVA MEAN',
  doit: () => 33
};
let product1 = 'pizza';
let product2 = 'laptop';

console.log('in module1.js');

export {projectId};
export default project;
export {product1, product2};

export function printContents() {
  console.log(projectId, project, product1, product2);
}
const users = [
  { name: 'john', age: 25, occupation: 'gardener' },
  { name: 'Torey', age: 51, occupation: 'Lawyer' },
  { name: 'john', age: 41, occupation: 'Teacher' },
  { name: 'Ricardo', age: 83, occupation: 'Dentist' },
  { name: 'Tanushri', age: 25, occupation: 'Developer' },
  { name: 'Sam', age: 25, occupation: 'Engineer' },
  { name: 'Rani', age: 25, occupation: 'Programmer' },
];

function main() {
  // Access the "root" element from the DOM
  const root = document.querySelector('#root');

  const siteTitle = document.createElement('h1');
  siteTitle.innerText = 'FREELANCERS';
  root.appendChild(siteTitle);

  const siteList = document.createElement('ul');

  for (let i = 0; i < users.length; i++) {
    const nextUser = users[i];
    const nextItem = document.createElement('li');
    nextItem.innerText = `${nextUser.name} is ${nextUser.age}, ${nextUser.occupation}`;
    siteList.appendChild(nextItem);
  }
  root.appendChild(siteList);
}
main();

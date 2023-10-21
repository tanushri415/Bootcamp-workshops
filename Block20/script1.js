const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.innerHTML = 'Mona Lisa';
h1.style.color = 'Blue';

root.style.backgroundColor = 'Orange';

root.appendChild(h1);

const img = document.createElement('img');
img.src = './images/mona_lisa.jpg';
root.appendChild(img);

const pElement = document.createElement('p');
pElement.innerText = 'The Mona Lisa is a famous painting.';
root.appendChild(pElement);
pElement.style.fontSize = '40px';

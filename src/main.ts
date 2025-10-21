 import './assets/styles/index.css'; 
import loading from './assets/images/loading.gif';
import logo from './assets/images/catDog.png';

const animal = document.querySelector<HTMLInputElement>('#animal')!;
const submit = document.querySelector<HTMLButtonElement>('#submit')!;
const photo = document.querySelector<HTMLImageElement>('#animal-photo')!;

photo.src = `${logo}`;

submit.addEventListener('click', async (event) => {
  event.preventDefault();

  console.log('Clicou no botão');
  console.log(animal.value);
  
  if(animal.value == 'dog') {
    photo.src = `${loading}`;
    photo.src = `${await getDog()}`;
  }
  if(animal.value == 'cat') {
    photo.src = `${loading}`;
    photo.src = `${await getCat()}`;
  }
  if(animal.value !== 'dog' && animal.value !== 'cat') {
    alert('Por favor, ecolha entre "cão" ou "gato"');
    return;
  }

});


async function getDog(){
  const response = await fetch(`https://api.thedogapi.com/v1/images/search`);
  const data = await response.json();
  return data[0].url;
}

async function getCat(){
  const response = await fetch(`https://api.thecatapi.com/v1/images/search`);
  const data = await response.json();
  return data[0].url;
}
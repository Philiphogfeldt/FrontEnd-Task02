const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';

let form = document.querySelector('form');
let list = document.querySelector('#imgList');
let url;

form.onsubmit = async event => {
  event.preventDefault();

  let searchInput = form.searchInput.value;

  //let url = 'https://pixabay.com/api/?key=' + apiKey +'&q=' + searchInput;
  url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&page=1&per_page=10`;

  let response = await fetch(url);
  let json = await response.json();
  
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  json.hits.forEach(img => {
    let li = document.createElement('li');
    let image = document.createElement('img');
    let user = document.createElement('photoInfo');
    image.src = img.webformatURL;
    user.textContent = `Photo: ${img.user}`;
    list.appendChild(li);
    li.appendChild(image);
    li.appendChild(user);
  });

  form.searchInput.value = '';
  
};
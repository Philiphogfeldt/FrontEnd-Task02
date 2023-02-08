const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';

let form = document.querySelector('form');
let list = document.querySelector('#imgList');

form.onsubmit = async event => {
  event.preventDefault();

  let searchInput = form.searchInput.value;

  //let url = 'https://pixabay.com/api/?key=' + apiKey +'&q=' + searchInput;
  let url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}`;

  let response = await fetch(url);
  let json = await response.json();
  

  //let searchWord = form.SearchInput.value;

  // Iterate over the returned image data and create list items for each image.
  json.hits.forEach(img => {
    let li = document.createElement('li');
    let image = document.createElement('img');
    let user = document.createElement('p');
    image.src = img.webformatURL;
    user.textContent = `: ${img.user}`;
    list.appendChild(li);
    li.appendChild(image);
    li.appendChild(user);
  });
  // Clear the search input.
  form.searchInput.value = '';

};

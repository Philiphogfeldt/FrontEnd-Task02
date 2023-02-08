//let url = 'https://pixabay.com/api/?key=33414549-51bff4c83ee9ddf1982fd6577&q=' + searchInput +'&image_type=photo'

// Define the API endpoint URL and API key.
const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';
//let searchInput = document.querySelector('input[name=searchInput]').value;

let form = document.querySelector('form');
let list = document.querySelector('#imgList');

form.onsubmit = async event => {
  event.preventDefault();

  let searchInput = form.searchInput.value;

  let url = 'https://pixabay.com/api/?key=' + apiKey +'&q=' + searchInput;

  let response = await fetch(url);
  let json = await response.json();
  
  let li = document.createElement('li');
  //let searchWord = form.SearchInput.value;

  // Iterate over the returned image data and create list items for each image.
  json.hits.forEach(img => {
    let image = document.createElement('img');
    image.src = img.webformatURL;
    list.appendChild(image);
    list.appendChild(li);
  });

  // Clear the search input.
  form.searchInput.value = '';
};

//let url = 'https://pixabay.com/api/?key=33414549-51bff4c83ee9ddf1982fd6577&q=' + searchInput +'&image_type=photo'

// Define the API endpoint URL and API key.
const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';
const searchInput = document.querySelector('input[name=searchInput]').value;
let url = 'https://pixabay.com/api/?key=' + apiKey +'&q=' + searchInput +'&image_type=photo'

// Find the form element and the list element in the HTML.
let form = document.querySelector('form');
let list = document.querySelector('#imgList');

// Add an event listener to the form's submit event.
form.onsubmit = async event => {
  // Prevent the default form submit behavior.
  event.preventDefault();

  // Fetch the data from the API.
  let response = await fetch(url);
  let json = await response.json();

  // Clear the existing list items.
  list.innerHTML = '';

  // Iterate over the returned image data and create list items for each image.
  json.hits.forEach(img => {
    let li = document.createElement('li');
    let image = document.createElement('img');
    image.src = img.webformatURL;
    li.appendChild(image);
    list.appendChild(li);
  });

  // Clear the search input.
  form.searchInput.value = '';
};



// Define the API endpoint URL and API key.
const apiKey = '33414038-d5c773e94876b691a32d35b81';


// Find the form element and the list element in the HTML.
let form = document.querySelector('form');
let list = document.querySelector('#imgList');

// Add an event listener to the form's submit event.
form.onsubmit = async event => {
  // Prevent the default form submit behavior.
  event.preventDefault();
  let searchWord = form.SearchInput.value;
  let url = 'https://pixabay.com/api/?key='+apiKey+'&q='+searchWord

  // Fetch the data from the API.
  let response = await fetch(url);
  let json = await response.json();

  // Clear the existing list items.
  // list.innerHTML = '';

  // Iterate over the returned image data and create list items for each image.
  json.hits.forEach(img => {
    let li = document.createElement('li');
    let image = document.createElement('img');
    image.src = img.webformatURL;
    li.appendChild(image);
    list.appendChild(li);
  });

  // Clear the search input.
  // form.searchInput.value = '';
};


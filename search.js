<<<<<<< Updated upstream
const apiKey = '33414549-33414038-d5c773e94876b691a32d35b81';
  const searchInput = document.querySelector('#SearchInput');
  const searchForm = document.querySelector('#SearchBar');
  const resultBox = document.querySelector('#ResultBox');

<<<<<<< Updated upstream
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value;
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        resultBox.innerHTML = '';
        const images = data.hits;
        images.forEach(image => {
          const img = document.createElement('img');
          img.src = image.webformatURL;
          img.alt = image.tags;
          const li = document.createElement('li');
          li.appendChild(img);
          resultBox.appendChild(li);
        });
      })
      .catch(error => console.error(error));
  });
=======
const apiKey = '33414038-d5c773e94876b691a32d35b81';
let url = 'https://pixabay.com/api/?key=' + apiKey + '&q=' + searchInput +'&image_type=photo';
=======
/*
// Find the elements.
//https://pixabay.com/api/?key=33414549-51bff4c83ee9ddf1982fd6577&q=yellow+flowers&image_type=photo

const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';
>>>>>>> Stashed changes
let form = document.querySelector('form');
let list = document.querySelector('#imgList');

form.onsubmit = async event => {
    let url = 'https://pixabay.com/api/?key=' + apiKey +'&q=' + searchWord;

    // Prevent the default "reload page" behavior.
    event.preventDefault();

    // Get the values entered by the user.
    let searchWord = form.searchInput.value;
  
    fetch(url);
    let response = await fetch(url);
    let json = await response.json();

    // Create a list item and set its text content to the city name.
    let listItem = document.createElement('li');
    listItem.textContent = searchWord;
    // Add the list item to the list.
    list.append(listItem);

    // Clear the city name input.
    //form.searchInput.value = '';
};
<<<<<<< Updated upstream
>>>>>>> Stashed changes

  resultBox = document.querySelector('#ResultBox')
=======
*/


//let url = 'https://pixabay.com/api/?key=33414549-51bff4c83ee9ddf1982fd6577&q=' + searchInput +'&image_type=photo'

// Define the API endpoint URL and API key.
const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';


// Find the form element and the list element in the HTML.
let form = document.querySelector('form');
let list = document.querySelector('#imgList');
// let searchWord = document.querySelector('form.searchInput.value');
// let searchInput = form.searchInput;
// Add an event listener to the form's submit event.
form.onsubmit = async event => {
  // Prevent the default form submit behavior.
  event.preventDefault();
  let searchWord = form.searchInput.value;
  let url = 'https://pixabay.com/api/?key='+apiKey+'&q='+searchWord

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
>>>>>>> Stashed changes

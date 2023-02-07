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
let form = document.querySelector('form');
let list = document.querySelector('#imgList');

form.onsubmit = async event => {
    // Prevent the default "reload page" behavior.
    event.preventDefault();

    // Get the values entered by the user.
    let searchInput = form.searchInput.value;
  
    fetch(url);
    let response = await fetch(url);
    let json = await response.json();

    // Create a list item and set its text content to the city name.
    let listItem = document.createElement('li');
    listItem.textContent = searchInput;
    // Add the list item to the list.
    list.append(listItem);

    // Clear the city name input.
    form.searchInput.value = '';
};
>>>>>>> Stashed changes

  resultBox = document.querySelector('#ResultBox')
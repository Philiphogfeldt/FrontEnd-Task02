// Find the elements.
//https://pixabay.com/api/?key=33414549-51bff4c83ee9ddf1982fd6577&q=yellow+flowers&image_type=photo

const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';
let url = 'https://pixabay.com/api/?key=' + apiKey +'&q=' + searchInput +'&image_type=photo'
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


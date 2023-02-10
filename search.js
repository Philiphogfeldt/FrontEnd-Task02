const apiKey = '33414549-51bff4c83ee9ddf1982fd6577';

let form = document.querySelector('form');
let list = document.querySelector('#imgList');
let nextButton = document.querySelector('#nextButton');
let previousButton = document.querySelector('#previousButton');
let lastPageButton = document.querySelectorAll('#lastPageButton')
let url;
let currentPage = 1;
let totalPages = 0;
let searchInput
let colorSelection = '';

form.onsubmit = async event => {
  event.preventDefault();

  searchInput = form.searchInput.value;
  colorSelection = form.colorSelection.value;

  url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&page=${currentPage}&per_page=10&colors=${colorSelection}`;

  let response = await fetch(url);
  let json = await response.json();
  
  totalPages = Math.ceil(json.totalHits / 10);

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
  //form.searchInput.value = '';
  buttonStatus();
};


nextButton.onclick = async () => {

  currentPage++;
  searchInput = form.searchInput.value;
  colorSelection = form.colorSelection.value;

  let url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&page=${currentPage}&per_page=10&colors=${colorSelection}`;

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

  buttonStatus();

};

previousButton.onclick = async () => {

  currentPage--;
  searchInput = form.searchInput.value;
  colorSelection = form.colorSelection.value;

  let url = `https://pixabay.com/api/?key=${apiKey}&q=${searchInput}&page=${currentPage}&per_page=10&colors=${colorSelection}`;

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

  buttonStatus();
};

function buttonStatus() {
  if (currentPage === 1) {
    previousButton.style.display = 'none';
  } else {
    previousButton.style.display = 'inline-block';
  }
  
  if (currentPage === totalPages) {
    nextButton.style.display = 'none';
  } else {
    nextButton.style.display = 'inline-block';
  }
}

//nextButton.onclick = async event => {
//  currentPage += 1;
//  form.onsubmit();
//};

//prevButton.onclick = async event => {
//  currentPage -= 1;
//  form.onsubmit();
//};
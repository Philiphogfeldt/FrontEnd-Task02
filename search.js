const apiKey = '33414549-33414038-d5c773e94876b691a32d35b81';
  const searchInput = document.querySelector('#SearchInput');
  const searchForm = document.querySelector('#SearchBar');
  const resultBox = document.querySelector('#ResultBox');

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

  resultBox = document.querySelector('#ResultBox')
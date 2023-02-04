const form = document.querySelector("form");
      const searchInput = document.querySelector("#search-input");
      const resultsContainer = document.querySelector("#results");
      form.addEventListener("submit", function(event) {
        event.preventDefault();

        const searchTerm = searchInput.value;
        console.log("Searching for:", searchTerm);
      });
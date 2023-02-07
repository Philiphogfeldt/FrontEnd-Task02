// Find the elements.
let form = document.querySelector('form');
let list = document.querySelector('#cities');

form.onsubmit = async event => {
    // Prevent the default "reload page" behavior.
    event.preventDefault();

    // Get the values entered by the user.
    let cityName = form.city.value;
    let latitude = form.latitude.value;
    let longitude = form.longitude.value;

    //                 hostname              /path            ?query
    let url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&appid=6b687856384e82c961928144d6eb2eda'
    let response = await fetch(url);
    let json = await response.json();

    // Create a list item and set its text content to the city name.
    let listItem = document.createElement('li');
    listItem.textContent = cityName + ': ' + json.current.temp + ' °C';
    // Add the list item to the list.
    list.append(listItem);

    // Clear the inputs.
    form.city.value = '';
    form.latitude.value = '';
    form.longitude.value = '';
};

/*
Common DOM methods:
On the document:
- document.querySelector(cssExpression)
- document.querySelectorAll(cssExpression)
- document.createElement(elementName)
On a specific element:
- element.append(otherElement)
    - same as: element.appendChild(otherElement)
- element.prepend(otherElement)
- element.insertBefore(otherElement, nextToElement)
- element.remove()
- similar to: element.removeChild(child)
- element.textContent = "..."
    - same as: element.innerText = "..."
    - but prefer textContent
About attributes:
- avoid element.setAttribute and element.getAttribute
- instead:
- to set the placeholder attribute, use: element.placeholder = "..."
- only exceptions:
    - the "for" attribute, instead use "htmlFor"
    - the "class", instead use "className"
    - but classList is better
DO NOT USE INNERHTML
*/
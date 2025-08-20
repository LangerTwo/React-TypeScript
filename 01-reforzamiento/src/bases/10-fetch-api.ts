

const API_KEY = 'eJgXifTXOvWTWr3V5n8vDNBuBb3L5gCx';

const myRequest = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

myRequest
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;

        document.body.append(imgElement);
    })
    .catch((err) => {
        console.error('Error:', err);
    })
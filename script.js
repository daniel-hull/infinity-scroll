const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];

// Unsplash API
const count = 1;
const apiKey = "wuuzISqj38jQpTQ91ZhHs9jWwuRjzE8nqcT4dQRcNpw";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

// Create HTML elements for links and photos and add it to the DOM
function displayPhotos() {
  // Run this function for each object returned in photosArray
  photosArray.forEach((photo) => {
    // Create an <a> to link to Unsplash
    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");
    // Create an <img> element to display the image
    const image = document.createElement("img");
    image.setAttribute("src", photo.urls.regular);
    image.setAttribute("alt", photo.alt_description);
    image.setAttribute("title", photo.alt_description);
    // Place image inside of anchor element so that it is clickable, and then place both image and anchor inside of image container element
    item.appendChild(image);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch error here
  }
}

// On load
getPhotos();
displayPhotos();

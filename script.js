const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");
let photosArray = [];

// Unsplash API
const count = 1;
const apiKey = "wuuzISqj38jQpTQ91ZhHs9jWwuRjzE8nqcT4dQRcNpw";
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&orientation=landscape`;

// Helper function to set attributes on the created elements on the DOM - this condenses the code
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create HTML elements for links and photos and add it to the DOM
function displayPhotos() {
  // Run this function for each object returned in photosArray
  photosArray.forEach((photo) => {
    // Create an <a> to link to Unsplash
    const item = document.createElement("a");

    // Create an <img> element to display the image
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });
    const image = document.createElement("img");
    setAttributes(image, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
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

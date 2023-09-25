document.addEventListener("DOMContentLoaded", function () {
  const loadImageButton = document.getElementById("loadImage");
  const imageContainer = document.getElementById("imageContainer");

  loadImageButton.addEventListener("click", () => {
    fetch("https://randomfox.ca/floof")
      .then((response) => response.json())
      .then((data) => {
        imageContainer.innerHTML = "";

        const imageUrl = data.image;

        const image = document.createElement("img");
        image.src = imageUrl;
        imageContainer.appendChild(image);
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  });
});

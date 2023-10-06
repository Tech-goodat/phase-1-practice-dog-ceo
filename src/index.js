console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
    fetchImages();
    fetchBreeds();
    dropDownListener();
}
)

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderImages(json));
}

function renderImages(json) {
    const imageContainer = document.getElementById("dog-image-container");
    json.message.forEach(image => {
        const img = document.createElement("img");
        img.src = image;
        imageContainer.appendChild(img);
    })
}

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreeds(json));
}

function renderBreeds(json) {
    const breedContainer = document.getElementById("dog-breeds");
    for (const breed in json.message) {
        const li = document.createElement("li");
        li.innerText = breed;
        li.addEventListener("click", function() {
            li.style.color = "red";
        })
        breedContainer.appendChild(li);
    }
}

function dropDownListener() {

    const dropDown = document.getElementById("breed-dropdown");
    dropDown.addEventListener("change", function() {
        const breedContainer = document.getElementById("dog-breeds");
        breedContainer.innerHTML = "";
        fetchBreeds();
        const breedList = breedContainer.querySelectorAll("li");
        breedList.forEach(breed => {
            if (breed.innerText[0] != dropDown.value) {
                breed.style.display = "none";
            }
        })
    })
}




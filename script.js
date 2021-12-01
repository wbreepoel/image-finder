var test = document.getElementById("test")
var imageContainer = document.querySelector(".image-container")
var i = 1;

var searchBar = document.querySelector(".search-bar");
var navSearchBar = document.querySelector(".nav-search-bar")

searchBar.addEventListener("submit",function(e){
    e.preventDefault();
    var searchBarValue = document.querySelector(".input-field").value;
    searchFunction(searchBarValue);
})

navSearchBar.addEventListener("submit",function(e){
    e.preventDefault();
    var navSearchBarValue = document.querySelector(".nav-input-field").value;
    searchFunction(navSearchBarValue);
})


var searchFunction = function(searchValue) {
    var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            var data = JSON.parse(xhttp.responseText);
            console.log(data.photos);
            imageData = data.photos
            imageData.forEach(url => {
                var image = document.createElement("div")
                image.classList.add("image-div")
                image.innerHTML = `<img loading="lazy" class="rendered-image" src="${url.src.original}" alt="">`
                console.log(i);
                
                
                var imageColumn = document.querySelector(`.image-column-${i}`);

                if(i >= imageContainer.childElementCount) {
                    i = 1
                } else {
                    i += 1;
                } 
                imageColumn.appendChild(image);
            })
        }
    };
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${searchValue}`, true);
    xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001a8cbd36d067649b99a9cf6024d207bec")
    xhttp.send();
}

window.onscroll = function() {addSticky()}

var navbar = document.querySelector(".navigation")
var sticky = navbar.offsetTop;
var searchBarDiv = document.querySelector(".nav-search-bar-div")


function addSticky() {
    if(window.pageYOffset > sticky + 80) {
        navbar.classList.add("sticky")
        searchBarDiv.classList.remove("hidden");
        navbar.style.backgroundColor = "rgb(35, 42, 52)"
    } else {
        navbar.classList.remove("sticky");
        searchBarDiv.classList.add("hidden");
        navbar.style.backgroundColor = "rgb(35, 42, 52, 0)"

    }
}




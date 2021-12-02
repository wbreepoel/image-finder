var test = document.getElementById("test")
var imageContainer = document.querySelector(".image-container")
var i = 1;

var searchBar = document.querySelector(".search-bar");
var navSearchBar = document.querySelector(".nav-search-bar")

var emptyImageColumns = function() {
    var imageColumns = document.querySelectorAll(".image-column")
    imageColumns.forEach(column =>{
        column.innerHTML = ``
    })
}

searchBar.addEventListener("submit",function(e){
    e.preventDefault();
    var searchBarValue = document.querySelector(".input-field").value;
    emptyImageColumns()
    searchFunction(searchBarValue);
})

navSearchBar.addEventListener("submit",function(e){
    e.preventDefault();
    var navSearchBarValue = document.querySelector(".nav-input-field").value;
    emptyImageColumns()
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
                
                image.innerHTML = `<a href="${url.url}" target="_blank"><img loading="lazy" class="rendered-image" src="${url.src.large}" alt=""></a>
                                   <div class="hidden-photo-div"> This <a href="${url.url}" target="_blank">Photo</a> was taken by <a href="${url.photographer_url}" target="_blank">${url.photographer}</a> on Pexels </div>
                                   `
                console.log(i);
                
                
                var imageColumn = document.querySelector(`.image-column-${i}`);

                if(i >= imageContainer.childElementCount) {
                    i = 1
                } else {
                    i += 1;
                } 
                imageColumn.appendChild(image);
                // imageColumn.innerHTML = `
                //     <style> 
                //     .image-div:hover::after {
                //         content: "name";
                //         width: 100%;
                //         height: 70px;
                //         background-color: red;
                //         position:absolute;
                //         bottom: 0;
                //         left: 0;
                //         display:inline-block;
                //     }
                //     </style>
                //     <div class="image-div"><a href="${url.url}" target="_blank"><img loading="lazy" class="rendered-image" src="${url.src.large}" alt=""></a></div>
                // `
            })
        }
    };
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${searchValue}&per_page=40`, true);
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




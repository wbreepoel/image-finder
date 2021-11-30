var test = document.getElementById("test")
var imageContainer = document.querySelector(".image-container")
var i = 1;

test.addEventListener("click",function(){
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
    xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
    xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001a8cbd36d067649b99a9cf6024d207bec" )
    xhttp.send();
})

var searchBar = document.querySelector(".search-bar");
searchBar.addEventListener("submit",function(e){
    e.preventDefault();
    var searchValue = document.querySelector(".input-field").value;
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
    xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001a8cbd36d067649b99a9cf6024d207bec" )
    xhttp.send();
})




var test = document.getElementById("test")
test.addEventListener("click",function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
            var data = JSON.parse(xhttp.responseText);
            var imageDiv = document.querySelector(".image-div");
            
        }
    };
    xhttp.open("GET", "https://api.pexels.com/v1/search?query=people", true);
    xhttp.setRequestHeader("Authorization", "563492ad6f91700001000001a8cbd36d067649b99a9cf6024d207bec" )
    xhttp.send();
})


let request = new XMLHttpRequest();
function displayGIFNicely(apiData) {
    let newData = JSON.parse(apiData);
    
    let data = newData.data[0].embed_url;
    document.getElementById("gif-image").innerHTML =
        // "&lt;embed src='" + data +  "'&gt;";
        "<embed src='" + data +  "'>";
        
}
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayGIFNicely(this.responseText);
        
    }
    else if (this.readyState == 4 && this.status == 404) {
        
    }
}
// API KEY USING RANDOM GENERATOR FOR SEARCHED GIFS
function GIF_api() {
    let search = gif_list[Math.floor(Math.random() * gif_list.length)]
    request.open("GET", "https://mboladop-give-a-gif.herokuapp.com/gifs/" + search);
    request.send();
    return false;
}


let commands = ["Funny", "Happy", "Sad", "Hilarious", "Crazy", "Angry", "Donald+Trump", "Vladmir+Putin", "Obama", "OMG", 'Cool', '400 Error'];
let request = new XMLHttpRequest();


function displayGIF(apiData) {
    let dataFrom = JSON.parse(apiData);
    document.getElementById('gif-name').innerHTML = 
    dataFrom.name;
}

function displayGIFNicely(apiData) {
    let newData = JSON.parse(apiData);
    console.log(newData);
    // Call the GIF to display it in the HTML
    let theGIF = "<div>" + newData.image + "</div>"
    

    document.getElementById("gif-image").innerHTML =
        theGIF;
}

request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        displayGIFNicely(this.responseText);
        displayGIF(this.responseText);
        
    }
    else if (this.readyState == 4 && this.status == 404) {
        document.getElementById("gif-name").innerHTML =
            "YOUR GIF CAN'T BE GIVEN";
        
    }
}


// API KEY USING RANDOM GENERATOR FOR SEARCHED GIFS
function GIF_api() {
    let search = commands[Math.floor(Math.random() * commands.length)]
    request.open("GET", "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=Gl6Y7qcw9IszNtwV61V1dcpagALOpGPH")
    request.send();
    return false;
}


(() => {
    var map = L.map('map').setView([44.664376644077386, -63.576382637367736], 14);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2Fzc2FuZHJhdGhhbGlhIiwiYSI6ImNsMGNqanBqeDBnbGQzY3BsaWpvY3YzbXEifQ.SW6zwmSWhUFdnHNYT6rDQA'
    }).addTo(map);

    //----------------------------------- ICONS ----------------------------------------- 
    var greenIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var redIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var blueIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var violetIcon = new L.Icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    var expIcon = new L.Icon({
        iconUrl: 'exp2.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [60, 60],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

    //----------------------------------- LISTENING MARKERS AND POPUPS ----------------------------------------- 
    let markerGroup = L.layerGroup().addTo(map);

    let popUpSetUp = (title, desc, img, media) => {
        return '<h2>' + title + '</h2> \
            <div id="cont"> \
                <img src="' + img + '"/> \
            <p>' + desc + '</p> \
            <div id="player">' + createMediaPlayer(media) + '</div> \
        </div>'
    }

    let popUpStyle = { className: "popUpStyle", maxWidth: 500 };

    L.marker([44.66964336000262, -63.55930055991591], {icon: violetIcon})
    .bindPopup(popUpSetUp("Walter Langille Interview",
        "",
        "",
        "/audio/Langille.mp3"), popUpStyle)
    .addTo(markerGroup);

    L.marker([44.658917, -63.571400], {icon: violetIcon})
    .bindPopup(popUpSetUp("Verna Gentles Interview",
        "Verna Gentles was on the ferry at the time of the explosion and suffered a head wound in the blast.",
        "/images/Gentles.png",
        "/audio/Gentles.mp3"), popUpStyle)
    .addTo(markerGroup);

    L.marker([44.6693319810874, -63.56489863108046], {icon: violetIcon})
    .bindPopup(popUpSetUp("Mabel Ardley Interview",
        "",
        "",
        "/audio/Ardley.mp3"), popUpStyle)
    .addTo(markerGroup);

    L.marker([44.67163177762183, -63.584244984874076], {icon: violetIcon})
    .bindPopup(popUpSetUp("Ethel Morash Interview",
        "",
        "",
        "/audio/Morash.mp3"), popUpStyle)
    .addTo(markerGroup);

    L.marker([44.671336002053174, -63.58072735706985], {icon: violetIcon})
    .bindPopup(popUpSetUp("Leighton Dillman Interview",
           "Leighton was working at the Consumer Cordage Rope Factory, which no longer exists on Wyse Road, at the time of the explosion. His brother was badly hurt in the blast.",
           "/images/Dillman.png",
           "/audio/Dillman.mp3"), popUpStyle)
    .addTo(markerGroup);

    L.marker([44.665919, -63.570708], {icon: violetIcon})
    .bindPopup(popUpSetUp("Charles Robinson Interview",
        "",
        "",
        "/audio/Robinsons.mp3"), popUpStyle)
    .addTo(markerGroup);

    let evergreenPopUp = "";

    L.marker([44.6667507965406, -63.55981269669883], {icon: greenIcon})
    .bindPopup(evergreenPopUp, popUpStyle)
    .addTo(markerGroup);

    L.marker([44.66836058364493, -63.59571100224489], {icon: expIcon})
    .addTo(markerGroup);

    let halifaxAcademyPopUp = "";

    L.marker([44.64575930956331, -63.57620007341009], {icon: blueIcon})
    .bindPopup(halifaxAcademyPopUp, popUpStyle)
    .addTo(markerGroup);

    //----------------------------------- BLAST RADIUS FUNCTIONALITY ----------------------------------------- 
    let blastRadius = L.circle([44.66836058364493, -63.59571100224489], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 3500,
    });
    let blastRadBool = false
    function showBlastRad() { 
        if (blastRadBool === false){
            blastRadius.addTo(map);
            blastRadBool = true;
        }
        else if (blastRadBool === true){
            map.removeLayer(blastRadius);
            blastRadBool = false;
        }
    }
    const radBtn = document.querySelector("#radBtn");
    radBtn.addEventListener("click", showBlastRad)


    //----------------------------------- MEDIA PLAYER ----------------------------------------- 

    function createMediaPlayer(url){
        return '<audio \
                    controls \
                    src=' + url + '> \
                    Your browser does not support the \
                    <code>audio</code> element. \
                </audio>';
    }
    
})();
(() => {
    var map = L.map('map')
    .setView([44.65937791848819, -63.57625976513644], 14);

    L.tileLayer('https://api.mapbox.com/styles/v1/cassandrathalia/cl0lhm5k9002j14mjs0q6t7vz/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2Fzc2FuZHJhdGhhbGlhIiwiYSI6ImNsMGNqanBqeDBnbGQzY3BsaWpvY3YzbXEifQ.SW6zwmSWhUFdnHNYT6rDQA'
    }).addTo(map);

    //----------------------------------- ICONS ----------------------------------------- 
    var greenIcon = new L.Icon({
        iconUrl: 'images/green-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [60, 41]
    });

    var redIcon = new L.Icon({
        iconUrl: 'images/red-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [60, 41]
    });

    var violetIcon = new L.Icon({
        iconUrl: 'images/violet-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [41, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [60, 41]
    });

    var expIcon = new L.Icon({
        iconUrl: 'images/exp2.png',
        iconSize: [80, 80],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    var houseIcon = new L.Icon({
        iconUrl: 'images/house.png',
        iconSize: [35, 35],
        iconAnchor: [20, 30],
        popupAnchor: [1, -34],
    });

    //----------------------------------- LISTENING MARKERS AND POPUPS ----------------------------------------- 
    let markerGroup = L.featureGroup().addTo(map);

    let popUpSetUp = (title, img, desc, media) => {
        return '<h1>' + title + '</h1> \
            <img src="' + img + '"/> \
            <div id="desc"><p>' + desc + '</p></div> \
            <div id="player">' + createMediaPlayer(media) + '</div>'
    }

    let popUpStyle = { className: "popUpStyle" };

    let langilleMarker = L.marker([44.66964336000262, -63.55930055991591], {icon: violetIcon})
    .bindPopup(popUpSetUp("Walden Langille",
        "images/placeholder.png",
        "Walden was at school at the time of the explosion. He recounts his memories of Dartmouth at the time, the aftermath of the blast, and the effect of the explosion on the many different Dartmouth industries.",
        "audio/Langille.mp3"), popUpStyle)
    .addTo(markerGroup);

    let gentlesMarker = L.marker([44.658917, -63.571400], {icon: violetIcon})
    .bindPopup(popUpSetUp("Verna Gentles Interview",
        "images/Gentles.png",
        "Verna was on the ferry at the time of the explosion. She was injured in the blast and was given medical attention from an officer and a nurse at a house on Victoria Road in Halifax.",
        "audio/Gentles.mp3"), popUpStyle)
    .addTo(markerGroup);

    let ardleyMarker = L.marker([44.6693319810874, -63.56489863108046], {icon: violetIcon})
    .bindPopup(popUpSetUp("Mabel Ardley Interview",
        "images/placeholder.png",
        "Mabel was only 8 years old at the time of the explosion. She was at school at Greenvale School on Ochterloney St. when the blast occurred.",
        "audio/Ardley.mp3"), popUpStyle)
    .addTo(markerGroup);

    let morashMarker = L.marker([44.67163177762183, -63.584244984874076], {icon: redIcon})
    .bindPopup(popUpSetUp("Ethel Morash Interview",
        "images/placeholder.png",
        "Ethel was at home at the time of the explosion. In the first clip, she recalls the event itself as well as the strange circumstances she was discovered in after the blast.",
        "audio/Morash.mp3"), popUpStyle)
    .addTo(markerGroup);

    let dillmanMarker = L.marker([44.671336002053174, -63.58072735706985], {icon: redIcon})
    .bindPopup(popUpSetUp("Leighton Dillman Interview",
        "images/Dillman.png",
        "Leighton, namesake of the Dartmouth Commons, was approximately 20 years old at the time of the explosion. He was working with his brother at the Consumer Cordage Rope Company on Wyse Road when the blast occurred.",
        "audio/Dillman.mp3"), popUpStyle)
    .addTo(markerGroup);

    let robinsonMarker = L.marker([44.665919, -63.570708], {icon: redIcon})
    .bindPopup(popUpSetUp("Charles Robinson Interview",
        "images/placeholder.png",
        "Charles was at home at the time of the blast but his sister was struck by debris and hurt on her walk to school. He also believes his dog had a premonition of the event.",
        "audio/Robinsons.mp3"), popUpStyle)
    .addTo(markerGroup);

    let campbellMarker = L.marker([44.64575930956331, -63.57620007341009], {icon: violetIcon})
    .bindPopup(popUpSetUp("Campbell Sisters Interview", 
        "images/placeholder.png",
        "Frances Mary (Mollie) Campbell and Margaret Isobell Campbell (both nee Kuhn) of Dartmouth recount their memories of the day of the explosion, sometimes disagreeing on the order of events. The two sisters were at school at the Halifax County Academy at the time of the explosion, and when they returned home, they learned their landlady had been killed.",
        ""), popUpStyle)
    .addTo(markerGroup)

    let evergreenPopUp = '<a href="http://dartmouthheritagemuseum.ns.ca"><img src="images/evergreen.png" /></a>'

    L.marker([44.6667507965406, -63.55981269669883], {icon: greenIcon})
    .bindPopup(evergreenPopUp, popUpStyle)
    .addTo(markerGroup);

    L.marker([44.66836058364493, -63.59571100224489], {icon: expIcon})
    .addTo(markerGroup);

    //----------------------------------- HOME MARKERS FUNCTIONALITY ----------------------------------------- 
    let tempHomeMarker;
    markerGroup.on("mouseover", function (event) {
        var clickedMarker = event.layer;
        if (clickedMarker === campbellMarker){
            tempHomeMarker = L.marker([44.67918740780488, -63.59255763043874], {icon: houseIcon}).addTo(markerGroup)
        }
        else if (clickedMarker === ardleyMarker){
            tempHomeMarker = L.marker([44.667299104121, -63.5761565224546], {icon: houseIcon}).addTo(markerGroup)
        }
        else if (clickedMarker === langilleMarker){
            tempHomeMarker = L.marker([44.666030630524254, -63.56797954232895], {icon: houseIcon}).addTo(markerGroup)
        }
    });
    markerGroup.on("mouseout", function (event) {
        map.removeLayer(tempHomeMarker);
    });

    //----------------------------------- BLAST RADIUS FUNCTIONALITY ----------------------------------------- 
    let blastRadius = L.circle([44.66836058364493, -63.59571100224489], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 3500,
    });
    let blastRadBtnTxt = document.querySelector("#radBtn");
    let blastRadBool = false
    function showBlastRad() { 
        if (blastRadBool === false){
            blastRadius.addTo(map);
            blastRadBool = true;
            blastRadBtnTxt.innerText = "HIDE BLAST RADIUS"
        }
        else if (blastRadBool === true){
            map.removeLayer(blastRadius);
            blastRadBool = false;
            blastRadBtnTxt.innerText = "SHOW BLAST RADIUS"
        }
    }
    const radBtn = document.querySelector("#radBtn");
    radBtn.addEventListener("click", showBlastRad)


    //----------------------------------- MEDIA PLAYER ----------------------------------------- 
    function createMediaPlayer(url){
        return '<audio class="audio_volume_only" \
                    controls \
                    src=' + url + '> \
                    Your browser does not support the \
                    <code>audio</code> element. \
                </audio>';
    }
    
})();
(() => {
    var map = L.map('map').setView([44.664376644077386, -63.576382637367736], 15);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiY2Fzc2FuZHJhdGhhbGlhIiwiYSI6ImNsMGNqanBqeDBnbGQzY3BsaWpvY3YzbXEifQ.SW6zwmSWhUFdnHNYT6rDQA'
    }).addTo(map);

    let LangillePopUp = "<h2>Walter Langille Interview</h2> \
    <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1198852405&color=%23cc9844&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/user-392462200\" title=\"Dartmouth Heritage Museum\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Dartmouth Heritage Museum</a> · <a href=\"https://soundcloud.com/user-392462200/halifaxdartmouth-explosion-series-walden-langille-interview\" title=\"Halifax/Dartmouth Explosion Series - Walden Langille Interview\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Halifax/Dartmouth Explosion Series - Walden Langille Interview</a></div>"

    L.marker([44.66964336000262, -63.55930055991591])
    .bindPopup(LangillePopUp)
    .addTo(map);

    let GentlesPopUp = "<h2>Verna Gentles Interview</h2> \
    <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1115690701&color=%23cc9844&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/user-392462200\" title=\"Dartmouth Heritage Museum\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Dartmouth Heritage Museum</a> · <a href=\"https://soundcloud.com/user-392462200/halifaxdartmouth-explosion-series-verna-gentles-interview\" title=\"Halifax/Dartmouth Explosion Series: Verna Gentles Interview\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Halifax/Dartmouth Explosion Series: Verna Gentles Interview</a></div>";

    L.marker([44.658917, -63.571400])
    .bindPopup(GentlesPopUp)
    .addTo(map);

    let ArdleyPopUp = "<h2>Mabel Ardley Interview</h2> \
    <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1111229461&color=%23cc9844&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/user-392462200\" title=\"Dartmouth Heritage Museum\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Dartmouth Heritage Museum</a> · <a href=\"https://soundcloud.com/user-392462200/halifaxdartmouth-explosion-series-mabel-ardley-interview\" title=\"Halifax/Dartmouth Explosion Series: Mabel Ardley Interview\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Halifax/Dartmouth Explosion Series: Mabel Ardley Interview</a></div>";

    L.marker([44.6693319810874, -63.56489863108046])
    .bindPopup(ArdleyPopUp)
    .addTo(map);

    let MorashPopUp = "<h2>Ethel Morash Interview</h2> \
    <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1109669020&color=%23cc9844&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe><div style=\"font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;\"><a href=\"https://soundcloud.com/user-392462200\" title=\"Dartmouth Heritage Museum\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Dartmouth Heritage Museum</a> · <a href=\"https://soundcloud.com/user-392462200/halifaxdartmouth-explosion-series-ethel-morash-interview-2\" title=\"Halifax/Dartmouth Explosion Series: Ethel Morash Interview (1)\" target=\"_blank\" style=\"color: #cccccc; text-decoration: none;\">Halifax/Dartmouth Explosion Series: Ethel Morash Interview (1)</a></div>";

    L.marker([44.67163177762183, -63.584244984874076])
    .bindPopup(MorashPopUp)
    .addTo(map);


    let DillmanPopUp = '<h2>Leighton Dillman Interview</h2> \
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1108337683&color=%23cc9844&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-392462200" title="Dartmouth Heritage Museum" target="_blank" style="color: #cccccc; text-decoration: none;">Dartmouth Heritage Museum</a> · <a href="https://soundcloud.com/user-392462200/halifax-explosion-series-leighton-dillman-interview" title="Halifax/Dartmouth Explosion Series: Leighton Dillman Interview" target="_blank" style="color: #cccccc; text-decoration: none;">Halifax/Dartmouth Explosion Series: Leighton Dillman Interview</a></div>';

    L.marker([44.671336002053174, -63.58072735706985])
    .bindPopup(DillmanPopUp)
    .addTo(map)

    let RobinsonPopUp = '<h2>Charles Robinson Interview</h2> \
    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1111249114&color=%23cc9844&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-392462200" title="Dartmouth Heritage Museum" target="_blank" style="color: #cccccc; text-decoration: none;">Dartmouth Heritage Museum</a> · <a href="https://soundcloud.com/user-392462200/halifaxdartmouth-explosion-series-mr-and-mrs-robinson-interview" title="Halifax/Dartmouth Explosion Series: Mr. and Mrs. Robinson Interview" target="_blank" style="color: #cccccc; text-decoration: none;">Halifax/Dartmouth Explosion Series: Mr. and Mrs. Robinson Interview</a></div>'

    L.marker([44.665919, -63.570708])
    .bindPopup(RobinsonPopUp)
    .addTo(map)

})();
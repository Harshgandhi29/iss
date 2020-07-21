let data; 
var long=0;
var lat=0;
let position = document.getElementById('Location')
var mymap = L.map('mapid').setView([5,5], 1);
var marker=L.marker([1,2]).addTo(mymap);
const iss_image= L.icon({
    iconUrl:"https://iss_2.png",iconSize:[38, 95]
})

function iss() {
    fetch('https://api.wheretheiss.at/v1/satellites/25544')
        .then(res => {
            console.log('part1')
            return res.json()
            })
        .then(data =>{
    console.log('part2')
    long = data.longitude
    lat = data.latitude
    position.textContent =lat+" and "+ long
   // lat = lat.toFixed(3);
   // long = long.toFixed(3);   
    map(lat,long);
}
)}

function map (lat, long){
   
    mymap.setView([lat,long], 5);
    mymap.removeLayer(marker);   
    marker = L.marker([lat,long],{icon:iss_image}).addTo(mymap);//,

}

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
  /*  id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiaGFyc2gyOSIsImEiOiJja2NwNmhrMzMwM2hiMnpwZ283eDhyajlhIn0.6BTR-982sfogi5fKSfWCmw'
*/}).addTo(mymap);







iss();
//map(51.505,-.099);
setInterval(iss,10000);





 

let data; 
var long=0;
var lat=0;
let position = document.getElementById('Location')
var mymap = L.map('mapid').setView([5,5], 2);
var marker=L.marker([1,2]).addTo(mymap);
const iss_image= L.icon({
    iconUrl:"iss_2.png",iconSize:[50,50]
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
    lat = lat.toFixed(3);
    long = long.toFixed(3); 
    position.textContent =lat+" and "+ long  
    map(lat,long);
}
)}

function map (lat, long){
   
    mymap.setView([lat,long], 4);
    mymap.removeLayer(marker);   
    marker = L.marker([lat,long],{icon:iss_image}).addTo(mymap);

}

L.tileLayer('http://scripts.digital-geography.com/black_marble/2012/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
 }).addTo(mymap);







iss();
setInterval(iss,1000);





 
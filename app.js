let data; 
var long;
var lat;
let position = document.getElementById('Location')
var mymap = L.map('mapid').setView([0,0], 5);
var marker=L.marker([1,2]).addTo(mymap);
const iss_image= L.icon({
    iconUrl:"iss_2.png",iconSize:[38, 95]
})

function iss() {
    fetch('http://api.open-notify.org/iss-now.json')
        .then(res => {
            console.log('part1')
            return res.json()
            })
        .then(data =>{
    console.log('part2')
    long = data.iss_position.longitude
    lat = data.iss_position.latitude
    position.textContent =long+" and "+ lat
        
    console.log(lat)
    console.log(long)
    map(long,lat)


}
)}

function map (long, lat){
    mymap.setView([lat,long], 15);
    mymap.removeLayer(marker);
    marker = L.marker([lat,long],{icon:iss_image}).addTo(mymap);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }).addTo(mymap);
}








iss();

setInterval(iss,1000);





 

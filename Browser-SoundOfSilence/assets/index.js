<<<<<<< HEAD
let tbody = document.querySelector('tbody');

let table = '';
music.forEach(element => {
    console.log(element);
    table += `
        <tr class='line'>
        <td scope="col" class="pic"><img src="assets/img/music.jpg"></td>
        <td scope="col" class="track">${element.trackName}</td>
        <td scope="col" class="artist">${element.artistName}</td>
        <td scope="col" class="type">${element.collectionName}</td>
        <td scope="col" class="date">${element.releaseDate}</td>
        </tr>
    `;
    tbody.innerHTML = table;
})
=======
// HTML elements saved in Lets
let line = document.querySelectorAll('.line');
let track = document.querySelector('.track');
let artist = document.querySelector('.artist');
let date = document.querySelector('.date');
// Looping the HTML elements modifications
for (let i = 0; i < 5; i++) {
    // console.log('music array object ', music[i]); // we get the five array objects - KEWL
   
    let currentTrack = line[i].children[1];
    currentTrack.innerText = music[i]['trackName'];
    let currentArtist = line[i].children[2];
    currentArtist.innerText = music[i]['artistName'];
    let currentCollection = line[i].children[3];
    currentCollection.innerText = music[i]['collectionName'];
    // KEWL
    let releaseDate = line[i].children[4];
    let releaseYear = music[i]['releaseDate'];
    releaseDate.innerText = releaseYear.substr(0,4);
    // let's add the key values to the html
    
}
>>>>>>> b54d375f3c088fb244f79043840ef3bac0c41a6b

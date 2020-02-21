const apiKey1 = 'tnEaorvnanlGBb2WdJ8fTfhggAr99U6cXt3cbCV9'; //Brandons APIkey
const apiKey2 = 'bTiRnlLq5XLzUqSykpwS0yNsOcbmqxJV9YaOuA3y'; //James APIkey
const SEARCH_URL = 'https://developer.nps.gov/api/v1/parks'; //API source

//Calls to API
function callAPI(inputVal, maxResults) {
  for(let i = 0; i < maxResults; i++) {
    fetch(`${SEARCH_URL}?stateCode=${inputVal}&api_Key=${apiKey2}`)
      .then(response => response.json())
      .then(newResponse => displayResults(newResponse, i))
      .catch(error => console.log(error));
  }
}

//Click Search and receive data
function submitButton() {
  $('.form').on('click', '#search', event => {
    event.preventDefault();
    createContent();
  });
}

function resetButton() {
  $('.form').on('click', '#reset', event => {
    event.preventDefault();
    $('.results').html(' ');
  });
}

function createContent(){
  for(let i = 0; i < 2; i++) {
    let inputVal = $(`#search-state-${i}`).val();
    //let inputVal2 = $('#search-state-2').val();
    let maxResults = $(`#np-max-results-${i}`).val();
    callAPI(inputVal, maxResults);
  }
}



function displayResults(newResponse, i){
  let name = newResponse.data[i].fullName;
  let descript = newResponse.data[i].description;
  let link = newResponse.data[i].url;
  let latLong = newResponse.data[i].latLong.split(',');
  let lat = latLong[0].substring(4, 12);
  let long = latLong[1].substring(6, 14);

  $('.results').append(`
  <h3>${name}</h3>
  <p>${descript}</p>
  <a href="${link}">${link}</a>
  </br>
  <p>Location</p>
  <a href="https://gps-coordinates.org/my-location.php?lat=${lat.slice(0,6)}&lng=${long}" target="_blank">(${lat},${long})</a>
  `);

}
resetButton();
submitButton();
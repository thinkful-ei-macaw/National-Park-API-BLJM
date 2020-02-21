const apiKey1 = 'tnEaorvnanlGBb2WdJ8fTfhggAr99U6cXt3cbCV9'; //Brandons APIkey
const apiKey2 = 'bTiRnlLq5XLzUqSykpwS0yNsOcbmqxJV9YaOuA3y'; //James APIkey
const SEARCH_URL = 'https://developer.nps.gov/api/v1/parks'; //API source

function callAPI(inputVal) {
  fetch(`${SEARCH_URL}?stateCode=${inputVal}&api_Key=${apiKey2}`)
    .then(response => response.json())
    .then(newResponse => displayResults(newResponse))
    .catch(error => console.log(error));
}

function submitButton() {
  $('.form').submit(function(event){
    event.preventDefault();
    let inputVal = $('#search-state-1').val();
    //let inputVal2 = $('#search-state-2').val();
    callAPI(inputVal);
  });
}

function displayResults(newResponse){
  let name = newResponse.data[0].fullName;
  let descript = newResponse.data[0].description;
  let link = newResponse.data[0].url;

  $('.results').append(`
  <h3>${name}</h3>
  <p>${descript}</p>
  <a href="${link}">${link}</a>
  `);
}

submitButton();
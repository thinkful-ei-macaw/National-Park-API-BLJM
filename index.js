const apiKey1 = 'tnEaorvnanlGBb2WdJ8fTfhggAr99U6cXt3cbCV9'; //Brandons APIkey
const apiKey2 = 'bTiRnlLq5XLzUqSykpwS0yNsOcbmqxJV9YaOuA3y'; //James APIkey
const SEARCH_URL = 'https://developer.nps.gov/api/v1/alerts'; //API source

function callAPI() {

}

function submitButton() {
  $('.form').submit(function(event){
    event.preventDefault();
    let inputVal = $('#search-state-1').val();
    let inputVal2 = $('#search-state-2').val();
    console.log(inputVal);
    console.log(inputVal2);
  });
}

submitButton();
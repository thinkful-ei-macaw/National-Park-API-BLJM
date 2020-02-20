const apiKey1 = 'tnEaorvnanlGBb2WdJ8fTfhggAr99U6cXt3cbCV9'; //Brandons APIkey
const apiKey2 = ''; //James APIkey
const SEARCH_URL = 'https://developer.nps.gov/api/v1/alerts'; //API source


function formatQueryParams(params) {
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  return queryItems.join('&');
}

function getResults(state, result = 10){
  //set default param to 10
  //make obj with api, state, limit properties
  //uses fetch and then promises or throws error
}

function resultDisplay(responseJson){
  //loops thru Natl Park API and maps search results
}

function formSubmit(){
  //event listeners for search term form submission
  //variables hooked to search-terms in HTML forms that get the values

}

function resetForms(){
  //event listeners for reset button
}
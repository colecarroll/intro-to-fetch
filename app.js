var imageTag = document.createElement('img');
var headingOne = document.createElement('h1');
var content = document.getElementsByClassName('content')[0];

function getPokemon() {
let pokeNumber = document.getElementById('pokeNumber').value;
  fetch(`http://pokeapi.co/api/v2/pokemon/${pokeNumber}/`)
    .then(function(response) {
      return response.json()
        .then(function(pokeData) {
          imageTag.setAttribute('src', pokeData.sprites.front_default );
          imageTag.setAttribute('alt', `the default picture of ${pokeData.name}`);
          headingOne.innerText = pokeData.name
          content.append(imageTag, headingOne)
        });
    });
};

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';



  fetch('https://pokeapi.co/api/v2/pokemon/').then(function (response) {
  return response.json(); // This returns a promise!
}).then(function (pokemonList) {
  console.log(pokemonList); // The actual JSON response
}).catch(function () {
  // Error
});

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

function addListItem(pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listPokemon = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class")
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  button.addEventListener('click', function (event) {
  showDetails(pokemon)
  });
}

function showDetails(pokemon){
  console.log(pokemon);
}

function showLoadingMessage() {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
  if (response.status != 200)
  window.alert('This is taking a while...');
  return;
}

function hideLoadingMessage() {


}

function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
      add(pokemon);
      console.log(pokemon);
    });
  }).catch(function (e) {
    console.error(e);

  })
}

function loadDetails(item){
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.font_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e) {
    console.error(e);
  });

}

function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {
    console.log(pokemon);
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList

  };


}) ();







pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {



  pokemonRepository.addListItem(pokemon);
});
});

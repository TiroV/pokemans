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

//Where all the functions go

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

//Adds functionality to the buttons. When clicking button, shows the details
//from the array to the log.
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
//Pulls from the showDetails function, to create and display a button.
//Logs to the console the details from the function to log to console the pokemon.
function showDetails(pokemon){
  loadDetails(pokemon).then(function () {
    showModal(pokemon)
    console.log(pokemon)
  });
}

//Code that handles the modal
let modalContainer = document.querySelector('#pokemonModal');
function showModal(pokemon) {
  let modalTitle = document.querySelector('.modal-title');
  let modalBody = document.querySelector('.modal-body');

  modalTitle.append(title);
  modalBody.append(pokemonSprite);
  modalBody.append(pokemonHeight);
  modalBody.append(pokemonTyping);
  modalBody.append(pokemonWeight);

  modalTitle.innerHTML = '';
  modalBody.innerHTML = '';

  let title = document.createElement('h5');
  title.innerHTML = pokemon.name;

  let pokemonHeight = document.createElement('p');
  pokemonHeight.innerHTML = 'height' + pokemon.Height;

  let pokemonTyping = document.createElement('p');
  pokemonTyping.innerHTML = 'type' + pokemon.types;

  pokemonWeight = document.createElement('p');
  pokemonWeight.innerHTML = 'weight' + pokemon.weight;

  let pokemonSprite = document.createElement('img');
  pokemonSprite.src = pokemon.imageURL;



  modalTitle.append(title);
  modalBody.append(pokemonSprite);
  modalBody.append(pokemonHeight);
  modalBody.append(pokemonTyping);
  modalBody.append(pokemonWeight);

}

//End of modal


//My attempt at a loading message. Yoops!
function showLoadingMessage() {
  fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
  if (response.status != 200)
  window.alert('This is taking a while...');
  return;
}

function hideLoadingMessage() {


}

//A function called loadList which pulls (or fetches) information from the API, called apiUrl
//and then logs the information from the pokemon list into the console
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
    showModal(pokemon);
    console.log(pokemon);
  });
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList

//End of function list






  };


}) ();




pokemonRepository.loadList().then(function() {
pokemonRepository.getAll().forEach(function(pokemon) {



  pokemonRepository.addListItem(pokemon);
});
});

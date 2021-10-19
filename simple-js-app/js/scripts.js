let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Tyranitar',
      height: 6,
      types: ['rock', 'dark']
    },

    { name: 'Umbreon',
      height: 3,
      types: ['dark']
    },

    { name: 'Toxicroak',
      height: 1,
      types: ['poison', 'fighting']
    },

    { name: 'Luxray',
      height: 2,
      types: ['electric']

    }

  ];

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
  button.addEventListener('click', function () {
  showDetails(pokemon)
          });
}

function showDetails(pokemon){
  console.log(pokemon);
}

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails


  };


})();

pokemonRepository.add({ name: 'Scorbunny', height: 1, types: ['fire'] });
console.log(pokemonRepository.getAll());






pokemonRepository.getAll().forEach(function(pokemon) {



  pokemonRepository.addListItem(pokemon);
});

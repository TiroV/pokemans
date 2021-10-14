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

  return {
    add: add,
    getAll: getAll


  };


})();

pokemonRepository.add({ name: 'Scorbunny' });
console.log(pokemonRepository.getAll());






pokemonRepository.getAll().forEach(function(pokemon) {



});

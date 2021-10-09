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

for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <5 && pokemonList[i].height >2){
  document.write(pokemonList[i].name + ' is a normal sized pokemon. ');
}else if(pokemonList[i].height >5){
  document.write(pokemonList[i].name + ' is a large pokemon. ');
}else {
  document.write(pokemonList[i].name + ' is a small pokemon. ');
}

for (let i=0; i < pokemonList[i].length; i++){
  document.write(pokemonList)[i].name; i++
}

}

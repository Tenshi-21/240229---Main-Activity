let myPokemon = {
  name: 'Charmander',
  level: 3,
  health: 100,
  attack: 50,
  tackle: function() {
      console.log('The pokemon tackle the target pokemon');
      console.log("targetPokemon");
  }
};

let trainer = {
  name: 'Tenshi',
  age: 19,
  pokemonList: [],

  addPokemon: function(pokemon) {
      this.pokemonList.push(pokemon);
      console.log(`${pokemon.name} added to ${this.name}'s team!`);
  }
};

console.log(`Trainer: ${trainer.name}, Age: ${trainer.age}`);
console.log(`Trainer Name (Dot Notation): ${trainer.name}`);
console.log(`Trainer Age (Bracket Notation): ${trainer['age']}`);

function Pokemon(name, level, health, attack) {
  this.name = name;
  this.level = level;
  this.health = health;
  this.attack = attack;
}


Pokemon.prototype.attackOpponent = function(opponent) {
  console.log(`${trainer.name} sent out Charmander!`);
  console.log(`${this.name} use tackle on ${opponent.name}!`);
  opponent.health -= this.attack; 
  console.log ("It's super effective!");
  console.log(`${opponent.name} fainted`);
  console.log(`${this.name} gained 150 EXP. Points!`);
};

let charmander = new Pokemon('Charmander', 3, 100, 50);
let bulbasaur = new Pokemon('Bulbasaur', 3, 100, 50);
let squirtle = new Pokemon('Squirtle', 3, 100, 50);

charmander.attackOpponent(bulbasaur);
charmander.attackOpponent(squirtle);

trainer.addPokemon(bulbasaur);
trainer.addPokemon(squirtle);
const pokemons = [
    'ampharos',
    'arcanine',
    'baxcalibur',
    'bulbasaur',
    'charmander',
    'cyclizar',
    'dondozo',
    'eevee',
    'entei',
    'espathra',
    'flaaffy',
    'fuecoco',
    'growlithe',
    'hawlucha',
    'koraidon',
    'lucario',
    'mimikyu',
    'miraidon',
    'murkrow',
    'ninetales',
    'pawmot',
    'pelipper',
    'pikachu',
    'quaquaval',
    'quaxly',
    'ravavroom',
    'smoliv',
    'spidops',
    'sprigatitio',
    'squirtle',
    'tinkaton',
];

const getRandomCards = (quantity, pickedPokemons = []) => {
    if (quantity === 0) {
        return [];
    }

    const availablePokemons = pokemons.filter(pokemon => !pickedPokemons.includes(pokemon));

    const randomIndex = Math.floor(Math.random() * availablePokemons.length);

    const card = availablePokemons[randomIndex];
    
    pickedPokemons.push(card);

    const remainingCards = getRandomCards(quantity - 1, pickedPokemons);

    return [card, ...remainingCards];
}

export { getRandomCards };
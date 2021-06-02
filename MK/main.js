const playerFirst = {name: 'Liu Kang', hp : 100, 
img : 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
weapon: ['fists', 'legs'],
attack: function (){
    console.log (playerSecond.name + 'fight!')
    }
};

const playerSecond = {name: 'Kitana',
hp : 100,
img : 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
weapon: ['veer', 'fists'], 
attack: function (){
    console.log (playerSecond.name + 'fight!')
    }
};

console.log(playerFirst.attack);
console.log(playerSecond.attack);


function createPlayer(playerClass, charName){
    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $character = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $img = document.createElement('img');
    $img.src = charName.img;
    //$img.src = playerSecond.img;

    $player.classList.add(playerClass);
    $progressbar.classList.add('progressbar');
    $character.classList.add('character');
    $life.classList.add('life');
    $name.classList.add('name');

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
    

    $life.style.width = '100%';
    $name.innerHTML = charName.name;
    $life.innerHTML = charName.hp;

    console.log(playerFirst);
    console.log(playerSecond);
}
createPlayer('player1', playerFirst);
createPlayer('player2', playerSecond);
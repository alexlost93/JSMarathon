const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const playerFirst = {
    player: 1,
    name: 'Liu Kang', hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fists', 'legs'],
    attack: function () {
        console.log(this.name + 'fight!')
    }
};

const playerSecond = {
    player: 2,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['veer', 'fists'],
    attack: function () {
        console.log(this.name + 'fight!')
    }
};

console.log(playerFirst.attack);
console.log(playerSecond.attack);


function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}


function createPlayer(charName) {
    const $player = createElement('div', 'player' + charName.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');
    $img.src = charName.img;

    $player.appendChild($progressbar);
    $player.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $life.style.width = charName.hp + '%';
    $name.innerHTML = charName.name;
    $life.innerHTML = charName.hp;

    console.log(playerFirst);
    console.log(playerSecond);

    return $player;
}


function changeHp(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    const minusHp = player.hp -= Math.floor(Math.random() * 20) + 1;
    $playerLife.style.width = player.hp + '%';
    console.log(player.name + ' has been injured for ' + (100 - minusHp));
    if (player.hp <= 0) {
        $playerLife.style.width = 0 + '%';
        $randomButton.disabled = true;
        if (playerFirst.hp > playerSecond.hp) {
            $arenas.appendChild(playerLoss(playerFirst.name));
        }
        else {
            $arenas.appendChild(playerLoss(playerSecond.name));
        }
    }
}

function playerLoss(winnerName) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = winnerName + ' wins';

    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    console.log('Hitting...');
    changeHp(playerFirst);
    changeHp(playerSecond);
});

$arenas.appendChild(createPlayer(playerFirst));
$arenas.appendChild(createPlayer(playerSecond));
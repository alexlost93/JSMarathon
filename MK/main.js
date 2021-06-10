<<<<<<< Updated upstream
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
=======
const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const playerFirst = {
    player: 1,
    name: 'Liu Kang',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
    weapon: ['fists', 'legs'],
    changeHp: changeHp,
    elHp: elHp,
    renderHp: renderHp,
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
    changeHp: changeHp,
    elHp: elHp,
    renderHp: renderHp,
    attack: function () {
        console.log(this.name + 'fight!')
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
createPlayer('player1', playerFirst);
createPlayer('player2', playerSecond);
=======

function getRandomHpValue(number) {
    let hpResult = Math.ceil(Math.random() * number);
    return hpResult;
}

function changeHp(hpResult) {
    // console.log(hpResult);
    this.hp -= hpResult;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHp() {
    const $playerLife = document.querySelector('.player' + this.player + ' .life');
    return $playerLife;
}

function renderHp() {
    let a = this.elHp().style.width = this.hp + '%';
    console.log(a);
    // $playerLife.style.width = this.hp + '%';
}

function playerWin(winnerName) {
    const $winTitle = createElement('div', 'winTitle');
    if (winnerName) {
        $winTitle.innerText = winnerName + ' wins';
    } else {
        $winTitle.innerText = 'Draw!';
    }
    return $winTitle;
}

function createReloadButton() {
    const $reloadWrap = createElement('div', 'reloadWrap');
    const $reloadBtn = createElement('button', 'button');
    $reloadBtn.innerText = 'Restart';
    $reloadWrap.appendChild($reloadBtn);
    $arenas.appendChild($reloadWrap);
    $reloadBtn.addEventListener('click', function(){
        window.location.reload();  
    }
    // 
    // $arenas.appendChild();
    // $reloadWrap.isVisible = false;

    // if (playerFirst.hp === 0 || playerSecond.hp === 0) {
    //     $reloadWrap.isVisible = true;
    // }
)}

$randomButton.addEventListener('click', function () {
    console.log('Hitting...');
    playerFirst.changeHp(getRandomHpValue(20));
    playerSecond.changeHp(getRandomHpValue(20));
    playerFirst.renderHp();
    playerSecond.renderHp();

    if (playerFirst.hp === 0 || playerSecond.hp === 0) {
        $randomButton.disabled = true;
        createReloadButton();
    }

    if (playerFirst.hp === 0 && playerFirst.hp < playerSecond.hp) {
        $arenas.appendChild(playerWin(playerSecond.name));
    } else if (playerSecond.hp === 0 && playerSecond.hp < playerFirst.hp) {
        $arenas.appendChild(playerWin(playerFirst.name));
    } else if (playerFirst.hp === 0 && playerSecond.hp === 0) {
        $arenas.appendChild(playerWin());
    }
});

$arenas.appendChild(createPlayer(playerFirst));
$arenas.appendChild(createPlayer(playerSecond));
>>>>>>> Stashed changes

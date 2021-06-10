const $arenas = document.querySelector(".arenas");
const $submitButton = document.querySelector(".button");
const $formFight = document.querySelector(".control");

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
};
const ATTACK = ["head", "body", "foot"];

const playerFirst = {
    player: 1,
    name: "Liu Kang",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ["fists", "legs"],
    changeHp: changeHp,
    elHp: elHp,
    renderHp: renderHp,
    attack,
};

const playerSecond = {
    player: 2,
    name: "Kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["veer", "fists"],
    changeHp: changeHp,
    elHp: elHp,
    renderHp: renderHp,
    attack,
};

function attack() {
    console.log(this.name + "fight!");
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

// console.log(playerFirst.attack);
// console.log(playerSecond.attack);

function createPlayer(charName) {
    const $player = createElement("div", "player" + charName.player);
    const $progressbar = createElement("div", "progressbar");
    const $character = createElement("div", "character");
    const $life = createElement("div", "life");
    const $name = createElement("div", "name");
    const $img = createElement("img");

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    $life.style.width = charName.hp + "%";
    $name.innerHTML = charName.name;
    $life.innerHTML = charName.hp;
    $img.src = charName.img;

    console.log(playerFirst);
    console.log(playerSecond);

    return $player;
}

$arenas.appendChild(createPlayer(playerFirst));
$arenas.appendChild(createPlayer(playerSecond));

function getRandomHpValue(number) {
    let hpResult = Math.ceil(Math.random() * number);
    return hpResult;
}

function changeHp(hpResult) {
    this.hp -= hpResult;
    if (this.hp <= 0) {
        this.hp = 0;
    }
}

function elHp() {
    const $playerLife = document.querySelector(
        ".player" + this.player + " .life"
    );
    return $playerLife;
}

function renderHp() {
    let a = (this.elHp().style.width = this.hp + "%");
    console.log(a);
}

function playerWin(winnerName) {
    const $winTitle = createElement("div", "winTitle");
    if (winnerName) {
        $winTitle.innerText = winnerName + " wins";
    } else {
        $winTitle.innerText = "Draw!";
    }
    return $winTitle;
}

// function createReloadButton() {
//     const $reloadWrap = createElement("div", "reloadWrap");
//     const $reloadBtn = createElement("button", "button");
//     $reloadBtn.innerText = "Restart";
//     $reloadWrap.appendChild($reloadBtn);
//     $arenas.appendChild($reloadWrap);
//     $reloadBtn.addEventListener("click", function () {
//         window.location.reload();
//     });
// }

// $randomButton.addEventListener("click", function () {
//     console.log("Hitting...");
//     playerFirst.changeHp(getRandomHpValue(20));
//     playerSecond.changeHp(getRandomHpValue(20));
//     playerFirst.renderHp();
//     playerSecond.renderHp();

//     if (playerFirst.hp === 0 || playerSecond.hp === 0) {
//         $randomButton.disabled = true;
//         createReloadButton();
//     }

//     if (playerFirst.hp === 0 && playerFirst.hp < playerSecond.hp) {
//         $arenas.appendChild(playerWin(playerSecond.name));
//     } else if (playerSecond.hp === 0 && playerSecond.hp < playerFirst.hp) {
//         $arenas.appendChild(playerWin(playerFirst.name));
//     } else if (playerFirst.hp === 0 && playerSecond.hp === 0) {
//         $arenas.appendChild(playerWin());
//     }
// });

function enemyAttack() {
    const hit = ATTACK[getRandomHpValue(3) - 1];
    const defense = ATTACK[getRandomHpValue(3) - 1];
    console.log("####: hit", hit);
    console.log("####: defense", defense);

    return {
        value: getRandomHpValue(HIT[hit]),
        hit,
        defense,
    };
}

$formFight.addEventListener("submit", function (event) {
    event.preventDefault();
    const enemy = enemyAttack();
    const $reloadWrap = createElement("div", "reloadWrap");
    const $reloadBtn = createElement("button", "button");
    $reloadBtn.innerText = "Restart";
    $reloadWrap.appendChild($reloadBtn);
    $arenas.appendChild($reloadWrap);
    $reloadBtn.addEventListener("click", function () {
        window.location.reload();
    });

    for (let item of $formFight) {
        if (item.checked && item.name === "hit") {
            attack.value = getRandomHpValue(HIT[item.value]);
            attack.hit = item.value;
        }

        if (item.checked && item.name === "defense") {
            attack.def = item.value;
        }
        item.checked = false;

    }
    
    playerFirst.changeHp(getRandomHpValue(attack.hit - attack.def));
    playerSecond.changeHp(getRandomHpValue(attack.hit - attack.def));
    playerFirst.renderHp();
    playerSecond.renderHp();
    

    if (playerFirst.hp === 0 && playerFirst.hp < playerSecond.hp) {
        $arenas.appendChild(playerWin(playerSecond.name));
    } else if (playerSecond.hp === 0 && playerSecond.hp < playerFirst.hp) {
        $arenas.appendChild(playerWin(playerFirst.name));
    } else if (playerFirst.hp === 0 && playerSecond.hp === 0) {
        $arenas.appendChild(playerWin());
    }
    
    if (playerFirst.hp === 0 || playerSecond.hp === 0) {
        createReloadButton();
    }
    // console.log("####: a", attack);
    // console.log("####: e", enemy);
});

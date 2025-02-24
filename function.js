let btns = document.querySelectorAll(".boxes");
let symbol = true;
let w = document.querySelector(".win");
let newGame = document.querySelector("#newGame");
let reset = document.querySelector("#reset");
let player = document.querySelector("#player");
let count = 0;
let isWin = false;


let winPattern = [[0, 1, 2],
[3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], 
[2, 5, 8], [0, 4, 8], [2, 4, 6]];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        count++;
        if(symbol){
            btn.innerText = "X";
            symbol = false;
            btn.disabled = true;
            player.innerText = "O turn";
        } else {
            btn.innerText = "O";
            btn.classList.add("addColor");
            symbol = true;
            btn.disabled = true;
            player.innerText = "X turn";
        }
        checkWinner();
    });
});

let disableAllBtns = () => {
    for(let btn of btns){
        btn.disabled = true;
    }let winnerName;
    if(symbol) {
        winnerName = "Cnagratulation, Winner is Player O";
    } else {
        winnerName = "Cnagratulation, Winner is Player X";
    }
    document.querySelector("#wintxt").innerText = winnerName;
}
let enableAllBtns = () => {
    for(let btn of btns){
        btn.disabled = false;
        btn.innerText = "";
        btn.classList.remove("addColor");
        btn.style.backgroundColor = "#b7a196";
    }
    player.innerText = "X turn";
    symbol = true;
    w.classList.add("hide");
    count = 0;
    isWin = false;
}
let checkWinner = () => {
    for(let line of winPattern){
        let txt1 = btns[line[0]].innerText;
        let txt2 = btns[line[1]].innerText;
        let txt3 = btns[line[2]].innerText;

        if(txt1 != "" && txt2 != "" && txt3 != ""){
            if(txt1 === txt2 && txt2 === txt3){
                w.classList.remove("hide");
                btns[line[0]].style.backgroundColor = "yellow";
                btns[line[1]].style.backgroundColor = "yellow";
                btns[line[2]].style.backgroundColor = "yellow";
                disableAllBtns();
                isWin = true;
                player.innerText = "";
            }
        }
    }
    if(count === 9 && isWin === false){
        w.classList.remove("hide");
        document.querySelector("#wintxt").innerText = `Draw, Play Again`;
        player.innerText = "";
    }
}

newGame.addEventListener("click", enableAllBtns);
reset.addEventListener("click", enableAllBtns);

let computerScore = document.getElementById("machine-score");
let humanScore = document.getElementById("player-score");
let gamePanel = document.getElementsByClassName("game-panel");
let stone = document.getElementsByClassName("choice-1");
let paper = document.getElementsByClassName("choice-2");
let scissor = document.getElementsByClassName("choice-3");
let btns = document.getElementsByClassName("btns");
let popUp = document.getElementsByClassName("pop-up-btn");
let comOption = ['stone', 'scissor', 'paper'];
let userChange = document.getElementById("user-change")
let comChange = document.getElementById("com-change")
let userOption = document.getElementsByClassName("user-option")
let comOpt = document.getElementsByClassName("com-option");
let dynamiUpdate = document.getElementsByClassName("dynamic-update");
let stoneImg = "stone-pic.svg";
let paperImg = "paper-pic.svg";
let scissorImg = "sci-pic.svg";
let resText = document.getElementsByClassName("res-text");

let mcScore = localStorage.getItem("mcScore");
let humScore = localStorage.getItem("humScore");

function rules() {
    popUp[0].classList.toggle("trans");
    console.log("clicked")
}

// let nxtBtn = document.getElementsByClassName("nxt");
// console.log(nxtBtn)
// if (nxtBtn.clicked==false) {

    humanScore.innerText = humScore;
    computerScore.innerText = mcScore;


    function winner(youWin) {
        if (youWin) {
            userOption[0].children[1].classList.add("win1")
            userOption[0].children[1].children[0].classList.add("win2")
            userOption[0].children[1].children[0].children[0].classList.add("win3")
            humScore++;
            localStorage.setItem("humScore", humScore);
            humanScore.innerText = humScore;
        }
        else {
            comOpt[0].children[1].classList.add("win1")
            comOpt[0].children[1].children[0].classList.add("win2")
            comOpt[0].children[1].children[0].children[0].classList.add("win3")
            mcScore++;
            localStorage.setItem("mcScore", mcScore);
            computerScore.innerText = mcScore;
        }
    }
    function machineChoice() {
        const mc = comOption[Math.floor(Math.random() * comOption.length)];
        console.log(mc)
        return mc;
    }
    stone[0].addEventListener('click', () => {
        gamePanel[0].style.display = "none";
        userChange.classList.add("ch1");
        document.getElementById("hn-img").src = stoneImg;
        dynamiUpdate[0].style.visibility = "visible";

        let res = machineChoice();
        if (res == 'stone') {
            comChange.classList.add("ch1")
            comChange.children[0].src = stoneImg;
            resText[0].children[0].innerText = "TIE UP";
            resText[0].children[1].innerText = "";
            resText[0].children[2].innerText = "REPLAY";
        }
        else if (res == 'paper') {
            comChange.classList.add("ch2")
            comChange.children[0].src = paperImg;
            resText[0].children[0].innerText = "YOU LOST";
            resText[0].children[1].innerText = "AGAINST PC";
            resText[0].children[2].innerText = "PLAY AGAIN";
            winner(0)
        }
        else {
            comChange.classList.add("ch3")
            comChange.children[0].src = scissorImg;
            resText[0].children[0].innerText = "YOU WIN";
            resText[0].children[1].innerText = "AGAINST PC";
            resText[0].children[2].innerText = "PLAY AGAIN";
            btns[0].children[1].style.display = "block";
            winner(1);
        }
    })

    paper[0].addEventListener('click', () => {
        gamePanel[0].style.display = "none";
        userChange.classList.add("ch2");
        document.getElementById("hn-img").src = paperImg;
        dynamiUpdate[0].style.visibility = "visible";

        let res = machineChoice();
        if (res == 'stone') {
            comChange.classList.add("ch1")
            comChange.children[0].src = stoneImg;
            resText[0].children[0].innerText = "YOU WIN";
            resText[0].children[1].innerText = "AGAINST PC";
            resText[0].children[2].innerText = "PLAY AGAIN";
            btns[0].children[1].style.display = "block";
            winner(1);
        }
        else if (res == 'paper') {
            comChange.classList.add("ch2")
            comChange.children[0].src = paperImg;
            resText[0].children[0].innerText = "TIE UP";
            resText[0].children[1].innerText = "";
            resText[0].children[2].innerText = "REPLAY";
        }
        else {
            comChange.classList.add("ch3")
            comChange.children[0].src = scissorImg;
            resText[0].children[0].innerText = "YOU LOST";
            resText[0].children[1].innerText = "AGAINST PC";
            resText[0].children[2].innerText = "PLAY AGAIN";
            winner(0);
        }
    })

    scissor[0].addEventListener('click', () => {
        gamePanel[0].style.display = "none";
        userChange.classList.add("ch3");
        document.getElementById("hn-img").src = scissorImg;
        dynamiUpdate[0].style.visibility = "visible";

        let res = machineChoice();
        if (res == 'stone') {
            comChange.classList.add("ch1")
            comChange.children[0].src = stoneImg;
            resText[0].children[0].innerText = "YOU LOST";
            resText[0].children[1].innerText = "AGAINST PC";
            resText[0].children[2].innerText = "PLAY AGAIN";
            winner(0);
        }
        else if (res == 'paper') {
            comChange.classList.add("ch2")
            comChange.children[0].src = paperImg;
            resText[0].children[0].innerText = "YOU WIN";
            resText[0].children[1].innerText = "AGAINST PC";
            resText[0].children[2].innerText = "PLAY AGAIN";
            btns[0].children[1].style.display = "block";
            winner(1);

        }
        else {
            comChange.classList.add("ch3")
            comChange.children[0].src = scissorImg;
            resText[0].children[0].innerText = "TIE UP";
            resText[0].children[1].innerText = "";
            resText[0].children[2].innerText = "REPLAY";
        }
    })


    btns[0].children[0].addEventListener('click', rules);

    resText[0].children[2].addEventListener('click', () => {
        location.reload();

    })
    btns[0].children[1].addEventListener('click', winPage)

    function winPage() {
        location.href = 'winner.html';
       
    }

popUp[0].children[0].addEventListener('click', rules)



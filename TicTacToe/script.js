var count=0;
var loopCount=0;
var whichTurn = "x";
$("span").text("Turn for "+whichTurn);
function turn() {
    
    return whichTurn === "x" ? "o" : "x";
    
}

function resultCalculate() {
    let inputText = document.getElementsByClassName("box");
    var flag = 0;

    var arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    arr.forEach(e => {
        
        loopCount++;
        console.log(loopCount+" e");
        console.log(count+" count");
        if ((inputText[e[0]].innerText === inputText[e[1]].innerText) && (inputText[e[2]].innerText === inputText[e[1]].innerText) && inputText[e[0]].innerText !== "") {
            $(".box").off("click");
            flag =1;
            $("span").text(inputText[e[0]].innerText + " won"+"");
            $("span").addClass("win");
            playAudio("win-sound");
            // $("span").after("<a href='./index.html'><button>Reset</button></a>")
            $("img").css("display","block");
            setTimeout(() => {
                location.reload(true);
            }, 5000);
        }else if(flag==0&&loopCount==8&&count==9){
            $("span").text("No one win");
            $("span").addClass("win");
            setTimeout(() => {
                location.reload(true);
            }, 1000);
        }
    });
    
}

//game logic
$(".box").on("click", function () {
   
    if ($("#" + this.id).text() == "") {
        loopCount=0;
        count++;
        playAudio("click");
        $("#" + this.id).text(whichTurn);
        whichTurn = turn();
        $("span").text("Turn for "+whichTurn);
        resultCalculate();
    }else{
        playAudio("wrong");
        $("body").css("background-color","red");
        
        setTimeout(() => {
            $("body").css("background-color","white");
        }, 100);
    }
});

function playAudio(name){
    var audio = new Audio("./assests/"+name+".mp3")
    audio.play();
}

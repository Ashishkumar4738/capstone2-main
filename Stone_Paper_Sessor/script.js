

function gun(check) {
    var ran = Math.floor(Math.random() * 3) + 1;
    if (check == ran) {
        var button = document.querySelector(".result");
        button.innerHTML = "draw";
        var first = document.querySelector(".firstPlayer");
        if(check==1){
            var str = "gun";
        }else if(check ==2){
            var str = "snake";
        }else {
            var str = "water";
        }
        first.innerHTML = "You choose "+str;
        var second = document.querySelector(".secondPlayer");
        if(ran==1){
            var str = "gun";
        }else if(ran ==2){
            var str = "snake";
        }else {
            var str = "water";
        }
        second.innerHTML = "computer choose "+str;
    } else if (check==1&&ran==2||check == 2&&ran==3||check==3&&ran==1) {
        var button = document.querySelector(".result");
        button.innerHTML = "You win";
        var first = document.querySelector(".firstPlayer");
        if(check==1){
            var str = "gun";
        }else if(check ==2){
            var str = "snake";
        }else {
            var str = "water";
        }
        first.innerHTML = "You choose "+str;
        var second = document.querySelector(".secondPlayer");
        if(ran==1){
            var str = "gun";
        }else if(ran ==2){
            var str = "snake";
        }else {
            var str = "water";
        }
        second.innerHTML = "computer choose "+str;
    } else if(check==1&&ran==3||check==2&&ran==1||check==3&&ran==2) {
        var button = document.querySelector(".result");
        button.innerHTML = "Computer win";
        var first = document.querySelector(".firstPlayer");
        if(check==1){
            var str = "gun";
        }else if(check ==2){
            var str = "snake";
        }else {
            var str = "water";
        }
        first.innerHTML = "You choose "+str;
        var second = document.querySelector(".secondPlayer");
        if(ran==1){
            var str = "gun";
        }else if(ran ==2){
            var str = "snake";
        }else {
            var str = "water";
        }
        second.innerHTML = "computer choose "+str;
        
    }

}

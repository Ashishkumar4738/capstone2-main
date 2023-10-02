$(document).ready(function () {
  let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let arr2 = [
    [0, 0, 8, 0, 0, 0, 0, 0, 0],
    [4, 9, 0, 1, 5, 7, 0, 0, 2],
    [0, 0, 3, 0, 0, 4, 1, 9, 0],
    [1, 8, 5, 0, 6, 0, 0, 2, 0],
    [0, 0, 0, 0, 2, 0, 0, 6, 0],
    [9, 6, 0, 4, 0, 5, 3, 0, 0],
    [0, 3, 0, 0, 7, 2, 0, 0, 4],
    [0, 4, 9, 0, 3, 0, 0, 5, 7],
    [8, 2, 7, 0, 0, 9, 0, 1, 3],
  ];
  function isSafe(arr, row, col, digit) {
    for (let j = 0; j < 9; j++) {
      if (arr[row][j] === digit) {
        return false;
      }
    }
    for (let i = 0; i < 9; i++) {
      if (arr[i][col] === digit) {
        return false;
      }
    }
    let sr = parseInt(row / 3) * 3;
    let sc = parseInt(col / 3) * 3;
    for (let i = sr; i < sr + 3; i++) {
      for (let j = sc; j < sc + 3; j++) {
        if (arr[i][j] === digit) {
          return false;
        }
      }
    }
    return true;
  }

  function check(arr) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (arr[row][col] !== 0) {
          for (let i = col + 1; i < 9; i++) {
            if (arr[row][i] === arr[row][col]) {
              console.log("row " + row + " i " + i);
              console.log("col " + col);
              let id1 = String(i);
              let id2 = String(col);
              let i1 = String(row);
              let i22 = i1 + id1;
              let id = row + id2;
              $("#" + id).addClass("error");
              $("#" + i22).addClass("error");
              return false;
            }
          } //for
          for (let i = row + 1; i < 9; i++) {
            if (arr[i][col] === arr[row][col]) {
              let id1 = String(i);
              let id2 = String(col);
              let i1 = String(row);
              let i2 = String(col);
              let i22 = i1 + i2;
              let id = id1 + id2;
              $("#" + id).addClass("error");
              $("#" + i22).addClass("error");
              return false;
            }
          }
          let sr = parseInt(row / 3) * 3;
          let sc = parseInt(col / 3) * 3;
          for (let i = sr; i < sr + 3; i++) {
            for (let j = sc; j < sc + 3; j++) {
              if (i !== row && j !== col && arr[i][j] === arr[row][col]) {
                let id1 = String(i);
                let id2 = String(j);
                let i1 = String(row);
                let i2 = String(col);
                let i22 = i1 + i2;
                let id = id1 + id2;
                $("#" + id).addClass("error");
                $("#" + i22).addClass("error");
                return false;
              }
            }
          }
        }
      }
      //for row
    }
    return true;
  }

  function sudeko(arr, row, col) {
    if (row === 9) {
      return true;
    }
    let nextRow = row;
    let nextCol = col + 1;
    if (col + 1 === 9) {
      nextRow++;
      nextCol = 0;
    }

    if (arr[row][col] !== 0) {
      return sudeko(arr, nextRow, nextCol);
    }
    for (let digit = 1; digit <= 9; digit++) {
      if (isSafe(arr, row, col, digit)) {
        arr[row][col] = digit;
        //console.log(arr);
        if (sudeko(arr, nextRow, nextCol)) {
          console.log(arr);
          return true;
        }

        arr[row][col] = 0;
      }
    }

    return false;
  }

  function main() {
    if(check(arr)){
      if (sudeko(arr, 0, 0)) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
          // console.log("#"+i+""+j)
          let id1 = String(i);
          let id2 = String(j);
          let id = id1 + id2;
          $("#" + id).attr("placeholder", arr[i][j]);
        }
      }
    } 
    }
    else {
      playAudio();
      alert("Solution not possible");
    }
    $("input").off("click");

    console.log(arr);
  }
  $("button").on("click", main);
  $("input").on("keypress", function (event) {
    console.log(event.key);
    // console.log(event.key);
    if (parseInt(this.value)) alert("Number must be lie between 1 to 9");

    let i = parseInt(this.id[0]);
    let j = parseInt(this.id[1]);
    arr[i][j] = parseInt(event.key);
  });
  function playAudio() {
    let audio = new Audio("../TicTacToe/assests/wrong.mp3");
    audio.play();
  }
});

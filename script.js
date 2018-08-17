function handleClick(e) {
    if (document.getElementById('text').innerHTML == "Click on a cell to place a move."
            && e.target.nodeName === "TD" && e.target.innerHTML == "") {
        e.target.innerHTML = "X";
        e.target.classList.add('no-hover');
        play();
    }
}

function play() {
    var lines = [
        [[0,0,0],[0,0,1],[0,0,2],[0,0,3]],  //lev 0; row 0   rows in each lev
        [[0,1,0],[0,1,1],[0,1,2],[0,1,3]],  //       row 1
        [[0,2,0],[0,2,1],[0,2,2],[0,2,3]],  //       row 2
        [[0,3,0],[0,3,1],[0,3,2],[0,3,3]],  //       row 3
        [[1,0,0],[1,0,1],[1,0,2],[1,0,3]],  //lev 1; row 0
        [[1,1,0],[1,1,1],[1,1,2],[1,1,3]],  //       row 1
        [[1,2,0],[1,2,1],[1,2,2],[1,2,3]],  //       row 2
        [[1,3,0],[1,3,1],[1,3,2],[1,3,3]],  //       row 3
        [[2,0,0],[2,0,1],[2,0,2],[2,0,3]],  //lev 2; row 0
        [[2,1,0],[2,1,1],[2,1,2],[2,1,3]],  //       row 1
        [[2,2,0],[2,2,1],[2,2,2],[2,2,3]],  //       row 2
        [[2,3,0],[2,3,1],[2,3,2],[2,3,3]],  //       row 3
        [[3,0,0],[3,0,1],[3,0,2],[3,0,3]],  //lev 3; row 0
        [[3,1,0],[3,1,1],[3,1,2],[3,1,3]],  //       row 1
        [[3,2,0],[3,2,1],[3,2,2],[3,2,3]],  //       row 2
        [[3,3,0],[3,3,1],[3,3,2],[3,3,3]],  //       row 3
        [[0,0,0],[0,1,0],[0,2,0],[0,3,0]],  //lev 0; col 0   cols in each lev
        [[0,0,1],[0,1,1],[0,2,1],[0,3,1]],  //       col 1
        [[0,0,2],[0,1,2],[0,2,2],[0,3,2]],  //       col 2
        [[0,0,3],[0,1,3],[0,2,3],[0,3,3]],  //       col 3
        [[1,0,0],[1,1,0],[1,2,0],[1,3,0]],  //lev 1; col 0
        [[1,0,1],[1,1,1],[1,2,1],[1,3,1]],  //       col 1
        [[1,0,2],[1,1,2],[1,2,2],[1,3,2]],  //       col 2
        [[1,0,3],[1,1,3],[1,2,3],[1,3,3]],  //       col 3
        [[2,0,0],[2,1,0],[2,2,0],[2,3,0]],  //lev 2; col 0
        [[2,0,1],[2,1,1],[2,2,1],[2,3,1]],  //       col 1
        [[2,0,2],[2,1,2],[2,2,2],[2,3,2]],  //       col 2
        [[2,0,3],[2,1,3],[2,2,3],[2,3,3]],  //       col 3
        [[3,0,0],[3,1,0],[3,2,0],[3,3,0]],  //lev 3; col 0
        [[3,0,1],[3,1,1],[3,2,1],[3,3,1]],  //       col 1
        [[3,0,2],[3,1,2],[3,2,2],[3,3,2]],  //       col 2
        [[3,0,3],[3,1,3],[3,2,3],[3,3,3]],  //       col 3
        [[0,0,0],[1,0,0],[2,0,0],[3,0,0]],  //cols in vert plane in front
        [[0,0,1],[1,0,1],[2,0,1],[3,0,1]],
        [[0,0,2],[1,0,2],[2,0,2],[3,0,2]],
        [[0,0,3],[1,0,3],[2,0,3],[3,0,3]],
        [[0,1,0],[1,1,0],[2,1,0],[3,1,0]],  //cols in vert plane one back
        [[0,1,1],[1,1,1],[2,1,1],[3,1,1]],
        [[0,1,2],[1,1,2],[2,1,2],[3,1,2]],
        [[0,1,3],[1,1,3],[2,1,3],[3,1,3]],
        [[0,2,0],[1,2,0],[2,2,0],[3,2,0]],  //cols in vert plane two back
        [[0,2,1],[1,2,1],[2,2,1],[3,2,1]],
        [[0,2,2],[1,2,2],[2,2,2],[3,2,2]],
        [[0,2,3],[1,2,3],[2,2,3],[3,2,3]],
        [[0,3,0],[1,3,0],[2,3,0],[3,3,0]],  //cols in vert plane in rear
        [[0,3,1],[1,3,1],[2,3,1],[3,3,1]],
        [[0,3,2],[1,3,2],[2,3,2],[3,3,2]],
        [[0,3,3],[1,3,3],[2,3,3],[3,3,3]],
        [[0,0,0],[0,1,1],[0,2,2],[0,3,3]],  //diags in lev 0
        [[0,3,0],[0,2,1],[0,1,2],[0,0,3]],
        [[1,0,0],[1,1,1],[1,2,2],[1,3,3]],  //diags in lev 1
        [[1,3,0],[1,2,1],[1,1,2],[1,0,3]],
        [[2,0,0],[2,1,1],[2,2,2],[2,3,3]],  //diags in lev 2
        [[2,3,0],[2,2,1],[2,1,2],[2,0,3]],
        [[3,0,0],[3,1,1],[3,2,2],[3,3,3]],  //diags in lev 3
        [[3,3,0],[3,2,1],[3,1,2],[3,0,3]],
        [[0,0,0],[1,0,1],[2,0,2],[3,0,3]],  //diags in vert plane in front
        [[3,0,0],[2,0,1],[1,0,2],[0,0,3]],
        [[0,1,0],[1,1,1],[2,1,2],[3,1,3]],  //diags in vert plane one back
        [[3,1,0],[2,1,1],[1,1,2],[0,1,3]],
        [[0,2,0],[1,2,1],[2,2,2],[3,2,3]],  //diags in vert plane two back
        [[3,2,0],[2,2,1],[1,2,2],[0,2,3]],
        [[0,3,0],[1,3,1],[2,3,2],[3,3,3]],  //diags in vert plane in rear
        [[3,3,0],[2,3,1],[1,3,2],[0,3,3]],
        [[0,0,0],[1,1,0],[2,2,0],[3,3,0]],  //diags left slice      
        [[3,0,0],[2,1,0],[1,2,0],[0,3,0]],
        [[0,0,1],[1,1,1],[2,2,1],[3,3,1]],  //diags slice one to right
        [[3,0,1],[2,1,1],[1,2,1],[0,3,1]],
        [[0,0,2],[1,1,2],[2,2,2],[3,3,2]],  //diags slice two to right      
        [[3,0,2],[2,1,2],[1,2,2],[0,3,2]],
        [[0,0,3],[1,1,3],[2,2,3],[3,3,3]],  //diags right slice      
        [[3,0,3],[2,1,3],[1,2,3],[0,3,3]],
        [[0,0,0],[1,1,1],[2,2,2],[3,3,3]],  //cube vertex diags
        [[3,0,0],[2,1,1],[1,2,2],[0,3,3]],
        [[0,3,0],[1,2,1],[2,1,2],[3,0,3]],
        [[3,3,0],[2,2,1],[1,1,2],[0,0,3]]
    ];

    var immediateWin = -1;
    var lineToBlock = -1;
    var checkForkLines = [];
    var blockForkLines = [];

    checkDraw();
    checkWin();
    computerMove();
    checkDraw();

    function checkWin() {
        var lineSum;
        for(var i = 0; i < lines.length; i++) {
            lineSum = getSum(i);

            if(lineSum == 3) {
                immediateWin = i;
            }

            if(lineSum == 15) {
                lineToBlock = i;
            }

            if(lineSum == 2) {
                checkForkLines.push(i);
            }

            if(lineSum == 10) {
                blockForkLines.push(i);
            }

            if(lineSum == 20) {
                gameOver("You win!", lines[i]);
                return;
            }
        }
    }

    function findFork(block) {
        // if block = false check if a fork can be made
        // if block = true check for any forks to block
        var cell, line;
        if(block == false) {
            for(var i = 0; i < checkForkLines.length; i++) {
                line = lines[checkForkLines[i]];
                for(var j = 0; j < line.length; j++) {
                    if(document.getElementById("" + line[j][0] + line[j][1] + line[j][2]).innerHTML == "") {
                        cell = line[j];
                        for(var k = 0; k < checkForkLines.length; k++) {
                            if(k != i && lineContains(lines[checkForkLines[k]], cell)) {
                                document.getElementById("" + line[j][0] + line[j][1] + line[j][2]).innerHTML = "O";
                                document.getElementById("" + line[j][0] + line[j][1] + line[j][2]).classList.add('no-hover');
                                return;
                            }
                        }
                    }
                }
            }
        }
        else {
            for(var i = 0; i < blockForkLines.length; i++) {
                line = lines[blockForkLines[i]];
                for(var j = 0; j < line.length; j++) {
                    if(document.getElementById("" + line[j][0] + line[j][1] + line[j][2]).innerHTML == "") {
                        cell = line[j];
                        for(var k = 0; k < blockForkLines.length; k++) {
                            if(k != i && lineContains(lines[blockForkLines[k]], cell)) {
                                document.getElementById("" + line[j][0] + line[j][1] + line[j][2]).innerHTML = "O";
                                document.getElementById("" + line[j][0] + line[j][1] + line[j][2]).classList.add('no-hover');
                                return;
                            }
                        }
                    }
                }
            }
        }

        // no fork to place or block was found
        makeRandomMove();
    }

    function lineContains(line, cell) {
        for(var i = 0; i < line.length; i++) {
            if(JSON.stringify(line[i])==JSON.stringify(cell))
                return true;
        }
        return false;
    }

    function getSum(lineNum) {
        var sum = 0;
        var line = lines[lineNum];
        for(var i = 0; i < line.length; i++) {
            if(document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).innerHTML == "X")
                sum += 5;
            if(document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).innerHTML == "O")
                sum +=1;
        }
        return sum;
    }

    function computerMove() {
        if(document.getElementById('text').innerHTML != "Click on a cell to place a move.")
            return;

        if(immediateWin != -1) {
            makeMove(immediateWin, true);
        }
        else if(lineToBlock != -1) {
            makeMove(lineToBlock, false);
        }
        else if(checkForkLines.length > 1) {
            findFork(false);
        }
        else if(blockForkLines.length > 1) {
            findFork(true);
        }
        else {
            makeRandomMove();
        }
    }

    function makeMove(lineNum, userLost) {
        var line = lines[lineNum];
        for(var i = 0; i < line.length; i++) {
            if(document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).innerHTML == "") {
                document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).innerHTML = "O";
                document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).classList.add('no-hover');
                if(userLost == true)
                    gameOver("Better luck next time.", line);
                return;
            }
        }
    }

    function checkDraw() {
        var lineSum;
        for(var i = 0; i < lines.length; i++) {
            lineSum = getSum(i);
            if(!(lineSum > 5 && (lineSum % 5) > 0))
                return false;
        }
        document.getElementById('text').innerHTML = "Draw!";
        disableButtons();
    }

    function disableButtons() {
        var i, j, k;
        for(i = 0; i < 4; i++) {
            for(j = 0; j < 4; j++) {
                for(k = 0; k < 4; k++) {
                    if(document.getElementById(''+i+j+k).style.background == "")
                        document.getElementById(''+i+j+k).classList.add('no-hover');
                }
            }
        }
    }

    function makeRandomMove() {
        var lineNum = Math.floor(Math.random() * lines.length);
        var lineSum = getSum(lineNum);
        while(lineSum > 5 && (lineSum % 5) > 0) {
            lineNum = Math.floor(Math.random() * lines.length)
            lineSum = getSum(lineNum);
        }

        var line = lines[lineNum];
        var cell = Math.floor(Math.random() * line.length);
        while(document.getElementById("" + line[cell][0] + line[cell][1] + line[cell][2]).innerHTML != "") {
            cell = Math.floor(Math.random() * line.length);
        }

        document.getElementById("" + line[cell][0] + line[cell][1] + line[cell][2]).innerHTML = "O";  
        document.getElementById("" + line[cell][0] + line[cell][1] + line[cell][2]).classList.add('no-hover');             
    }

    function gameOver(message, line) {
        disableButtons();
        document.getElementById('text').innerHTML = message;
        if(message == "You win!") {
            for(var i = 0; i < line.length; i++) {
                document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).style.background = "#0080FF";
            }
        }
        else {
            for(var i = 0; i < line.length; i++) {
                document.getElementById("" + line[i][0] + line[i][1] + line[i][2]).style.background = "#FF0000";
            }   
        }

    }
}
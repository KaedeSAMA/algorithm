/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const martrix = []

    Array.from({length : n}).map(()=>{
        martrix.push(Array.from({length : n}).fill(0))
    })

    let x = 0, y = 0;
    let direction = "RIGHT"

    for(i = 1; i <= n * n; i++){
        martrix[y][x] = i

        if(direction === "RIGHT" && martrix[y][x + 1] !== 0){
            direction = "DOWN"
        }
        if(direction === "DOWN" && (martrix[y + 1] === undefined || martrix[y + 1][x] !== 0)){
            direction = "LEFT"
        }
        if(direction === "LEFT" && martrix[y][x - 1] !== 0){
            direction = "UP"
        }
        if(direction === "UP" && (martrix[y - 1] === undefined || martrix[y - 1][x] !== 0)){
            direction = "RIGHT"
        }

        switch (direction){
            case "RIGHT":
                x ++;
                break
            case "LEFT":
                x --;
                break
            case "UP":
                y --;
                break
            case "DOWN":
                y ++;
        }

    }

    console.log(martrix);
    return martrix
};

generateMatrix(10)
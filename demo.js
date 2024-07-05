function random (){
    let val = Math.floor(Math.random()*3 + 1)
    switch (val) {
        case 1:
            console.log("去吃：阳坊大都涮肉清河店");
            break;
        case 2:
            console.log("去吃：重八牛府");
            break;
        case 3:
            console.log("去吃：楠火锅");
            break;
    
        default:
            break;
    }
}

random()
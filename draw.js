tool.strokeStyle = "lightpink";          // DEFAULT STROKE STYLE = LIGHT PINK

let x1, y1, x2, y2;

let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;
let drawMode = false; 

body.addEventListener("mousedown",function(e){
        
    x1 = e.clientX + boardLeft;
    y1 = e.clientY - boardTop;
    if(dTool == "pencil" || dTool == "eraser"){
        drawMode = true;
        tool.beginPath();
        tool.moveTo(x1, y1);
    }

})
body.addEventListener("mouseup",function(e){
    x2 = e.clientX + boardLeft;
    y2 = e.clientY - boardTop;

    if(dTool == "rect"){
        let width = x2 - x1;
        let height = y2 - y1;

        tool.strokeRect(x1, y1, width, height);
    }
    else if(dTool == "line"){
        tool.beginPath();
        tool.moveTo(x1 , y1);
        tool.lineTo(x2 , y2);
        tool.stroke();
    }
    else if(dTool == "pencil"|| dTool == "eraser"){
        drawMode = false;
    }

})
body.addEventListener("mousemove",function(e){
    if(drawMode == false){
        return;
    }

    if(dTool == "pencil" || dTool == "eraser"){
        x2 = e.clientX - boardLeft;
        y2 = e.clientY - boardTop;
        
        tool.lineTo(x2, y2);
        tool.stroke();

        // need to change x1 n x2 otherwise all lines will be drawn from 1 point only
        x1 = x2;
        y1 = y2;
    }

})
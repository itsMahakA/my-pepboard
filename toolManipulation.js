let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let line = document.querySelector("#line");
let rect = document.querySelector("#rect");
let options = document.querySelectorAll(".size-bar")  //array of all size-bar div options[0] = pencil ,options[1] = eraser


pencil.addEventListener("click",function(){
    //1st option is already pencil
    //2nd click - show its sizes 
    if(dTool == "pencil"){
        options[0].style.display = "flex";

    }
    else{
        //1st click remove options of others
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        dTool = "pencil";
        tool.strokeStyle = "black";
        tool.lineWidth = pencilSize;
    }
})
eraser.addEventListener("click",function(){
    //1st option is already pencil
    //2nd click - show its sizes 
    if(dTool == "eraser"){
        options[1].style.display = "flex";
    }
    else{
        //1st click remove options of others
        dTool = "eraser";
        tool.strokeStyle = "white";
        
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        tool.lineWidth = eraserSize;
    }
})

line.addEventListener("click", function(e){
    if(dTool == "line"){
        options[2].style.display = "flex";
    }else{
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        dTool = "line";
        tool.strokeStyle = "black";
        tool.lineWidth = lineSize;
    }
})
rect.addEventListener("click", function(e){
    if(dTool == "rect"){
        options[3].style.display = "flex";
    }else{
        for(let i = 0; i < options.length; i++){
            options[i].style.display = "none";
        }
        dTool = "rect";
        tool.strokeStyle = "black";
        tool.lineWidth = rectSize;
    }
})

// color change
let redColor = document.querySelector(".red");
let greenColor = document.querySelector(".green");
let blueColor = document.querySelector(".blue");
let blackColor = document.querySelector(".black");


redColor.addEventListener("click",function(){
    tool.strokeStyle = "lightcoral";
})
greenColor.addEventListener("click",function(){
    tool.strokeStyle = "lightgreen";
})
blueColor.addEventListener("click",function(){
    tool.strokeStyle = "lightblue";
})
blackColor.addEventListener("click",function(){
    tool.strokeStyle = "black";
})

// size chnage options
let pencilSize = 5;
let eraserSize = 5;
let lineSize = 5;
let rectSize = 5;
let sizeBoxArr = document.querySelectorAll(".size-box");
// currentTarget
sizeBoxArr[0].addEventListener("click", function (e) {
    // actual event  occur -> target
    let elems = ["size1", "size2", "size3"];
    
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);
    if (test) {
        // size waale button click;
        if (firstClass == "size1") {
            pencilSize = 5;
        } else if (firstClass == "size2") {
            pencilSize = 10;
        } else if (firstClass == "size3") {
            pencilSize = 15;
        }
    }
    // console.log("pencilsize" + pencilSize);
    tool.lineWidth = pencilSize;
    
})
sizeBoxArr[1].addEventListener("click", function (e) {
    
    let elems = ["size1", "size2", "size3"];
    
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);

    if (test) {
        // size waale button click;
        if (firstClass == "size1") {
            eraserSize = 5;
        } else if (firstClass == "size2") {
            eraserSize = 10;
        } else if (firstClass == "size3") {
            eraserSize = 15;
        }
    }
    // console.log("eraser" + eraserSize);
    tool.lineWidth = eraserSize;

})
sizeBoxArr[2].addEventListener("click", function (e) {
    
    let elems = ["size1", "size2", "size3"];
    
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);


    if (test) {
        // size waale button click;
        if (firstClass == "size1") {
            lineSize = 5;
        } else if (firstClass == "size2") {
            lineSize = 10;
        } else if (firstClass == "size3") {
            lineSize = 15;
        }
    }
    tool.lineWidth = lineSize;

})
sizeBoxArr[3].addEventListener("click", function (e) {
    
    let elems = ["size1", "size2", "size3"];
    
    let allTheClasses = e.target.classList;
    let firstClass = allTheClasses[0];
    let test = elems.includes(firstClass);


    if (test) {
        // size waale button click;
        if (firstClass == "size1") {
            rectSize = 5;
        } else if (firstClass == "size2") {
            rectSize = 10;
        } else if (firstClass == "size3") {
            rectSize = 15;
        }
    }
    tool.lineWidth = rectSize;

    // event listener -> currentTarget
    // console.log(e.currentTarget)
})
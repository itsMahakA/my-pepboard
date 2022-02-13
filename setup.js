let canvasBoard = document.querySelector("canvas");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;

let tool = canvasBoard.getContext("2d");
let dTool = "pencil";
let body = document.querySelector("body");

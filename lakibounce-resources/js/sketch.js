// TODO remove !
/// <reference path="../../TSDef/p5.global-mode.d.ts" />

let backgroundColor = 0;
let laki;
let vw;
let diag;   // diagonal length / 100

function setup() {
 let canvas = createCanvas(windowWidth, windowHeight);
 canvas.style('display', 'block');

 vw = width / 100;
 diag = Math.sqrt(width * width + height * height) / 100;

 laki = new Laki(width / 2, height / 2);
}

function draw() {
    background(backgroundColor);

    laki.update();
    laki.display();
}

function mouseClicked() {
    laki.launch();
    return false;
  }
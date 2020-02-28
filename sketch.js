let unicorn;
function setup(){
    createcanvas(600, 450);
    unicorn = new Unicorn();
}

function kryPressed() {
  if (key == ' ') {
      unicorn.jump();
  }

}

function draw() {
    background(220);
    unicorn.show();
    unicorn.move();
}

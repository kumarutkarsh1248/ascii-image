const dens = "@#W$9876543210?abc;:+=-,._'";
// const dens = "█▓▒░:.";
let div = document.querySelector("div")
let letters = ""

let video;
let vScale = 8;

function setup() {
    // pixelDensity(1);
    createCanvas(640, 480);
    noCanvas()
    // background(5);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);
}

function draw() {
  loadPixels();
  video.loadPixels()
  background(255);


  for (var j = 0; j < video.height; j++) {
    letters=letters+"\n"
    for (var i = 0; i < video.width; i++) {
        var index = (video.width-i-1 + j * video.width) * 4;
        var r = video.pixels[index+0]
        var g = video.pixels[index+1]
        var b = video.pixels[index+2]
        var bright = (r+g+b)/3;

        // pixels[index + 0] = video.pixels[index+0];
        // pixels[index + 1] = video.pixels[index+1];
        // pixels[index + 2] = video.pixels[index+2];

        // pixels[index + 0] = bright;
        // pixels[index + 1] = bright;
        // pixels[index + 2] = bright;

        // pixels[index + 3] = 255;

        // noStroke()
        // fill(255)
        // rectMode(CENTER)
        // w = map(bright, 0, 255, 0, vScale)
        // rect(i*vScale, j*vScale, w, w)



        // noStroke()
        // fill(0)
        // rectMode(CENTER)
        indexArray = floor(map(bright, 0, 255, 0, dens.length))
        
        // textSize(vScale)
        // textAlign(CENTER)
        // textStyle(BOLD)
        // text(dens[indexArray], i*vScale, j*vScale)
        letters = letters + dens[indexArray]
    }
  }
  div.innerText=letters
  letters=""
//   updatePixels();
}

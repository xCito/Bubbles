let bubbles = [];
const diameter = 150;
const numBubble = 20;

function setup() {
    createCanvas(displayWidth,displayHeight-200);
    background(0);
    
    for(var i=0; i<numBubble; ++i) {
        let xPos = random(diameter, width-diameter);
        let yPos = random(diameter, height-diameter);
        let pos = createVector(xPos, yPos);

        bubbles.push(new Bubble(pos, diameter));
    }

}

function draw() {
    background(30);

    for(var b of bubbles) {
        b.draw();
        b.update();
    }

    for(var i=0; i<bubbles.length; ++i) {
        for(var j=0; j<bubbles.length; ++j) {
            if(i!=j) {
                bubbles[i].collision(bubbles[j]);
            }
        }
    }

    // console.log(frameRate())
 
}
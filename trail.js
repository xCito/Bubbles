class Trail {
    constructor( trailLen ) {
        this.len = trailLen;
        this.particles = [];
        this.size = 7;
    }

    addToTrail(x, y) {
        this.particles.push(createVector(x, y));
        if(this.particles.length > this.len) 
            this.particles.shift();
    }

    draw() {
        for(var i=0; i<this.particles.length-1; ++i) {
            line(this.particles[i].x, this.particles[i].y, 
                this.particles[i+1].x, this.particles[i+1].y);
        }
    }
}
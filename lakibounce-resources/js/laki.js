class Laki {
    constructor(x, y) {
        this.radius = 5 * diag;
        this.speed = 0.5 * diag;

        this.pos = createVector(x, y);
        this.vel = createVector(this.speed, this.speed);
        this.acc = createVector();

    }
    
    
    update() {
        this.acc = this.vel.copy().mult(-0.02);
        if (this.vel.mag() > 8) {
            this.vel.add(this.acc);
        }
        this.pos.add(this.vel);
        this.bounce();
    }

    display() {
        stroke('#2244dd');
        strokeWeight(2 * diag);
        noFill();
        ellipse(this.pos.x, this.pos.y, 2 * this.radius, 2 * this.radius);
    }

    launch() {
        let mouse = createVector(mouseX, mouseY);
        this.vel = p5.Vector.sub(this.pos, mouse).setMag(150);
    }

    bounce() {
        // check bottom
        if (this.pos.y + this.radius >= height) {
            this.vel.y = - this.vel.y;
            this.pos.y = height - this.radius - 1;
        }
        // check top
        if (this.pos.y <= this.radius) {
            this.vel.y = - this.vel.y;
            this.pos.y = this.radius + 1;
        }
        // check right
        if (this.pos.x + this.radius >= width) {
            this.vel.x = - this.vel.x;
            this.pos.x = width - this.radius - 1;
        }
        // check left
        if (this.pos.x <= this.radius) {
            this.vel.x = - this.vel.x;
            this.pos.x = this.radius + 1;
        }
    }
}
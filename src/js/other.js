const exampleJavaScriptFn = () => {
  console.log("hello!");
};

const canvas = document.getElementById("particle-div");

var positionInfo = canvas.getBoundingClientRect();
var height = positionInfo.height;
var width = positionInfo.width;

const ctx = canvas.getContext("2d");

console.log(window.innerHeight);

canvas.width = positionInfo.width;
canvas.height = positionInfo.height;

let particlesArray;

let number = 100;
let speed = 1;

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 180) * (canvas.width / 180),
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;

  mouse.y = event.y;
});

class Particle {
  constructor(originx, originy, x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.originx = originx;
    this.originy = originy;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
    this.angle = random([50, 10]);
    this.count = 0;
    this.oldDirectionX = 0;
    this.oldDirectionY = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = "#8C5523";
    ctx.fill();
  }

  speedX(newspeed) {
    for (let i = 0; i < 20; i++) {
      this.directionX = this.directionX / i;
      // console.log(this.directionX, "stop");
    }
    for (let i = 0; i < 20; i++) {
      this.directionX = newspeed / 1 / i;
      // console.log(newspeed / 1 / i);
      // console.log(this.directionX, "acceleration");
    }
  }

  speedY(newspeed) {
    for (let i = 0; i < 10; i++) {
      this.directionY = this.directionY / i;
      // console.log(this.directionX, "stop");
    }
    for (let i = 0; i < 10; i++) {
      this.directionY = (i / 10) * newspeed;
      // console.log(newspeed / 1 / i);
      // console.log(this.directionX, "acceleration");
    }
  }
  update() {
    if (this.count == 10) {
      this.angle += 1;
      this.count = 0;
    }
    this.count += 1;

    let x = Math.cos(this.angle) * 80 + this.originx;
    let y = Math.sin(this.angle) * 20 + this.originy;

    // console.log(x, y);
    let dxorigin = x - this.x;
    let dyorigin = y - this.y;

    ctx.beginPath();
    ctx.arc(x, y, 80, 0, Math.PI * 2, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();

    let distanceOrigin = Math.sqrt(dxorigin * dxorigin + dyorigin * dyorigin);

    if (distanceOrigin > 80 + this.size) {
      if (this.x < x) {
        this.speedX(getRandomArbitrary(speed / 10, speed));
        this.directionX = getRandomArbitrary(speed / 10, speed);
        this.x += speed / 2;
      } else {
        // console.log("directionX_back");
        // this.speedX(-getRandomArbitrary(speed / 10, speed));
        this.directionX = -getRandomArbitrary(speed / 10, speed);
        this.x -= speed / 2;
      }
      if (this.y < y) {
        // this.speedY(getRandomArbitrary(speed / 10, speed));
        this.directionY = getRandomArbitrary(speed / 10, speed);
        this.y += speed / 2;
      } else {
        // this.speedY(-getRandomArbitrary(speed / 10, speed));
        this.directionY = -getRandomArbitrary(speed / 10, speed);
        this.y -= speed / 2;
      }
      this.count += 1;
    }

    // if (dxorigin.x < this.x && this.x < canvas.width - this.size * 10) {
    //   this.directionX = -this.directionX;
    // }
    // if (dxorigin.x > this.x > this.size * 10) {
    //   this.directionX = -this.directionX;
    // }
    // if (dyorigin.y < this.y && this.y < canvas.height - this.size * 10) {
    //   this.directionY = -this.directionY;
    // }
    // if (dyorigin.y > this.y && this.y > this.size * 10) {
    //   this.directionY = -this.directionY;
    // }
    // }

    // if (this.x > this.originx + 200 || this.x < this.originx - 100) {
    //   this.directionX = -this.directionX;
    // }
    // if (this.y > this.originy + 100 || this.y < this.originy - 100) {
    //   this.directionY = -this.directionY;
    // }

    // if (this.x > canvas.width || this.x < 0) {
    //   this.directionX = -this.directionX;
    // }
    // if (this.y > canvas.height || this.y < 0) {
    //   this.directionY = -this.directionY;
    // }
    // console.log("hello_init");
    //check collision
    // let dx = mouse.x - this.x;
    // let dy = mouse.y - this.y;
    // let distance = Math.sqrt(dx * dx + dy * dy);
    // if (distance < mouse.radius + this.size) {
    //   if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
    //     this.x += speed / 2;
    //   }
    //   if (mouse.x > this.x > this.size * 10) {
    //     this.x -= speed / 2;
    //   }
    //   if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
    //     this.y += speed / 2;
    //   }
    //   if (mouse.y > this.y && this.y > this.size * 10) {
    //     this.y -= speed / 2;
    //   }
    // }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function init() {
  // console.log("hello_init");
  particlesArray = [];
  let numberOfParticles = number;
  for (let i = 0; i < numberOfParticles; i++) {
    let size = Math.random() * 5 + 1;

    let WindwoCenterX = canvas.width / 2;
    let WindwoCenterY = canvas.height / 2;
    // console.log(WindwoCenterX);
    let centerX = random([
      WindwoCenterX - 50,
      WindwoCenterX,
      WindwoCenterX,
      WindwoCenterX + 50,
    ]);
    let centerY = random([
      WindwoCenterY - 50,
      WindwoCenterY,
      WindwoCenterY,
      WindwoCenterY + 50,
    ]);

    let r = 50 * Math.sqrt(Math.random());
    let theta = Math.random() * 2 * Math.PI;
    let x = centerX + r * Math.cos(theta);
    let y = centerY + r * Math.sin(theta);

    // console.log(x, y);
    // let x = Math.random() * (innerWidth - size * 2 - size * 2) + size;
    // let y = Math.random() * (innerHeight * 2 - size * 2) + size;
    let directionX = Math.random() * speed - speed / 2;
    let directionY = Math.random() * speed - speed / 2;
    let color = "#fa8072";

    particlesArray.push(
      new Particle(centerX, centerY, x, y, directionX, directionY, size, color)
    );
  }
}

function random(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // console.log(particlesArray.lenght);
  for (let i = 0; i < number; i++) {
    // console.log("joooo");

    particlesArray[i].update();
  }
}

init();
animate();

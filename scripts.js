function setup() {
    createCanvas(400, 800);
    background("#045721");
    angleMode(DEGREES)
  }
  
  function draw() {
    //legs
    strokeWeight(15)
    line(150, 600, 150, 750)
    line(250, 600, 250, 750)

    //arms
    strokeWeight(10)
    line(10, 300, 100, 400)
    line(390, 300, 300, 400)
    strokeWeight(0)

    //body
    fill("#FF0055")
    ellipse(200, 450, 280, 400)

    //face
    fill("#00FF00")
    ellipse(200, 150, 250, 275)

    //eyes
    fill("#FFFFFF")
    ellipse(150, 110, 40, 25)
    ellipse(250, 90, 40, 25)

    //pupils
    fill("#000000")
    ellipse(150, 110, 20, 20)
    ellipse(250, 90, 20, 20)

    //nose
    noFill()
    strokeWeight(1)
    arc(210, 150, 50, 50, 360, 0)
    strokeWeight(2)
    arc(200, 156, 10, 10, 360, 0)
    arc(220, 160, 10, 10, 360, 0)

    strokeWeight(0)

    //mouth
    fill("#115599")
    arc(200, 200, 200, 100, 10, 190)
  }
$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(
      -50,
      canvas.height - 10,
      canvas.width + 100,
      200,
      "rgb(118, 0, 233)",
    ); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(430, 650, 200, 20, "red");
    createPlatform(130, 560, 200, 20, "orange");
    createPlatform(900, 400, 200, 20, "yellow");
createPlatform(500, 500, 200, 20, "green");
createPlatform(850, 600, 200, 20, "blue");
createPlatform(1130, 650, 200, 20, "purple");
createPlatform(1200, 310, 200, 20, "violet");
createPlatform(900, 200, 200, 20, "indigo");
createPlatform(1200, 120, 200, 20, "hotpink");



    // TODO 3 - Create Collectables
   createCollectable("steve", 200, 170, 0.6, 0.7);
createCollectable("diamond", 1130, 570, 0.5, 0.7);
createCollectable("diamond", 950, 330, 0.4, 0.7);


    // TODO 4 - Create Cannons
    createCannon("top", 700, 2010);
createCannon("right", 500, 2000);
createCannon("left", 200, 2000);


    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

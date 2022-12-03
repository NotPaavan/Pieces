/*Variables*/
  var textFill = 33;
  var rectX =- 1;
  var sec = 0;
  var rectR = 33;
  var rectB = 33;
  var rectG = 33;
  var cbR = 174;
  var cbG = 217;
  var cbB = 231;
  var pF = 255;

/*DevonPresents*/

draw = function() {
  
  createCanvas(windowWidth, windowHeight);
  background(rectR, rectG, rectB);
  noStroke();
  fill(textFill);
  textFont('Rubik Marker Hatch', windowWidth/7);
  text('Devon', windowWidth/4, windowHeight/2.1);
  textFont('Permanent Marker', windowWidth/15);
  text('presents', windowWidth/2.9, windowHeight/1.7);
  textFill += 1;
  
  if(textFill > 254) { //Blue Screen
    
    fill(rectR, rectG, rectB);
    rect(windowWidth/rectX, 0, windowWidth, windowHeight);
    rectX += 0.1;
    sec += 0.1;
    fill(255);
    
}      
  if(sec  > 5) {
    rectX -= 0.1;
    rectR += 10;
    rectG += 10;
    rectB += 10;
}  
  if(rectR > 173) {rectR -= 10;}
  if(rectG > 216) {rectG -= 10;}
  if(rectB > 230) {rectB -= 10;}
  if (sec > 7) {
    
    fill(cbR, cbG, cbB);
    textFont('Bungee', windowWidth/12);
    text('Cold Blade', windowWidth/5, windowHeight/3);
    cbR += 3;
    cbG += 3;
    cbG += 3;
    fill(pF);
    rect(windowWidth/4, windowHeight/2, windowWidth/8 * 3.75, 80, 10);
    textSize(windowWidth/15);
    fill(173, 216, 230);
    text('Play', windowWidth/2.6, windowHeight/1.78);
    
    if (mouseX > windowWidth/4 && mouseX < windowWidth/4 + (windowWidth/8 * 3.75) && mouseY > windowHeight/2 && mouseY < windowHeight/2 + 80) { pF = 240; }
    else { pF = 255; }
    
  }

}

mousePressed = function() {
  
  if (mouseX > windowWidth/4 && mouseX < windowWidth/4 + (windowWidth/8 * 3.75) && mouseY > windowHeight/2 && mouseY < windowHeight/2 + 80) {
    
  }
  
}

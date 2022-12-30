var r,p,a,n,t1,t2,t,nInput;
var d1,d2,years,calculate,gameState = "take";

function setup() {
  createCanvas(windowWidth,windowHeight);

  p = createInput("","number");
  p.size(200,20);
  p.position(width/2-100,height/2-85);

  r = createInput("","number");
  r.size(200,20);
  r.position(width/2-100,height/2-35);

  nInput = createSelect();
  nInput.position(width/2-50,height/2+25);
  nInput.size(100,20);
  nInput.option("Select");
  nInput.option("Yearly");
  nInput.option("Half-Yearly");
  nInput.option("Quater-Yearly");
  nInput.option("Monthly");
  nInput.option("Daily");

  t1 = createInput("","date");
  t1.size(200,20);
  t1.position(width/2-215,height/2+75);

  t2 = createInput("","date");
  t2.size(200,20);
  t2.position(width/2+15,height/2+75);

  calculate = createButton("Calculate");
  calculate.size(70,20);
  calculate.position(width/2-35,height/2+125);
}

function draw() {
  background(0);

  if(nInput.value()==="Yearly") {
    n = 1;
  }
  
  if(nInput.value()==="Half-Yearly") {
    n = 2;
  }

  if(nInput.value()==="Quaterly") {
    n = 3;
  }

  if(nInput.value()==="Monthly") {
    n = 12;
  }

  if(nInput.value()==="Daily") {
    n = 365;
  }

  if(nInput.value()==="Select") {
    n = "";
  }

  if(gameState==="give") {
    p.hide();
    r.hide();
    t1.hide();
    t2.hide();
    calculate.hide();
    nInput.hide();
    fill(255);
    noStroke();
    textSize(20);
    text(a,width/2,height/2-10);
  }else{
    p.show();
    r.show();
    t1.show();
    t2.show();
    nInput.show();
    fill(255);
    noStroke();
    textSize(20);
    text("Principal Amount",width/2-270,height/2-65);
    text("Interest Rate (per annum)",width/2-345,height/2-15);
    text("Starting Date",width/2-215,height/2+70);
    text("Ending Date",width/2+110,height/2+70);
  }

  d1 = new Date(t1.value());
  d2 = new Date(t2.value());
  years = (d2-d1)/(86400000*365);
 
  calculate.mousePressed(()=>{
    calculateA();
    gameState = "give";
  });
}

function calculateA() {
  a = p.value()*pow((1+r.value()/(n*100)),n*years);
}
const zine = {
  title: "GenZ(ine) V3",
  author: "Munus Shih",
  personalUrl: "https://munusshih.com",
  sourceCode: "https://munusshih.com",
  frameCount: 8,
  description: "Our objective is to create a coded zine that focuses on digital identity. We will use P5.js to teach ‘function’ and generate a collaborative digital profile zine in the end. We created some customized functions for people to play with this zine more easily."
}

const randomRGB1 = createRandomColor(5)
const randomRGB2 = createRandomColor(10)
const randomRGB3 = createRandomColor(5)
const randomRGB4 = createRandomColor(5)

function preload() {
  cat = loadImage("cat.png")
}

function setupPage(){
  
}

function drawPage() {

/* Cover */
  cover.randomLayout(["hello Bush", cat, selfie])

/*page One*/
  one.rect(one.mouseX, one.mouseY, 100)

/*page Two*/
  two.frameRate(2)
  two.background(randomRGB2())
  two.fill(randomRGB3())
  two.glitchLayout(["hello Bush", cat, selfie])

/*page Three*/
  three.gridLayout(["hello Bush", cat, selfie])

/*back Cover*/
  back.background(randomRGB4())
}


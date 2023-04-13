# p5.genzine
## How to start

You can either:

- Duplicate this [p5 sketch](https://editor.p5js.org/munusshih/sketches/WyAAMH2gY)
- Import both p5.genzine library and the css file in.

```HTML
<script src="https://munusshih.github.io/p5.genzine/main.js"></script>
<link rel="stylesheet" href="https://munusshih.github.io/p5.genzine/styles.css">
```

Put this starter template in sketch.js
```javascript
const zine = {
  title: "GenZ(ine) V3",
  author: "Munus Shih",
  personalUrl: "https://munusshih.com",
  sourceCode: "https://munusshih.com",
  frameCount: 8,
  description: "Our objective is to create a coded zine that focuses on digital identity. We will use P5.js to teach ‘function’ and generate a collaborative digital profile zine in the end. We created some customized functions for people to play with this zine more easily."
}

function drawPage() {

/* Cover */
  cover.randomLayout(["hello world", selfie])

/*page One*/
  one.rect(one.mouseX, one.mouseY, 100)

/*page Two*/
  two.background(random(255), random(255), random(255))
  two.glitchLayout(["hello world", selfie])

/*page Three*/
  three.gridLayout(["hello world", selfie])

/*back Cover*/
  back.background(random(255), random(255), random(255))
}


```

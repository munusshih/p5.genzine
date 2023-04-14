# p5.genzine
p5.(gen)Zine is a free and friendly library created by [Munus Shih](https://munusshih.com) and [Iley Cao](https://www.ileycao.com/) for anyone curious about creative code and zine-making. It utilizes the p5.js library to experiment with collaborative zine-coding, forking, remixing and explore what generative coded zine can do to contribute to community building.

It is a open source project with MIT license.

**CURRENT STATUS**: `v1.2` is in beta. Please feel free to send issues or pull request us!


## Get Started

You can either:

- Duplicate this [p5 sketch](https://editor.p5js.org/munusshih/sketches/WyAAMH2gY) to play in ih the p5 editor
- Fork [this sketch]() to utilize the forking function in [Open Processing](https://openprocessing.org/) 
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

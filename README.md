# p5.genzine
p5.(gen)Zine is a free and friendly library created by [Munus Shih](https://munusshih.com) and [Iley Cao](https://www.ileycao.com/) for anyone curious about creative code and zine-making. It utilizes the p5.js library to experiment with collaborative zine-coding, forking, remixing and explore what generative coded zine can do to contribute to community building.

It is a open source project with MIT license.

**CURRENT STATUS**: `v1.2` is in beta. Please feel free to send issues or pull request us!


## Get Started

You can simply just:

- Duplicate this [p5 sketch](https://editor.p5js.org/munusshih/sketches/WyAAMH2gY) to play in ih the p5 editor
- Fork [this sketch](https://openprocessing.org/sketch/1897656) to utilize the forking function in [Open Processing](https://openprocessing.org/) 
- Play with [this example of Processing-themed Stretching](https://openprocessing.org/sketch/1898736) to better understand it works!

Or you could:

First, import the p5.genzine library in by pasting the below line after the `<body></body>` tag

```HTML
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
<script src="https://munusshih.github.io/p5.genzine/p5.(gen)zine.js"></script>
<script src="sketch.js"></script>
```

And then, create a starter file called `sketch.js` and paste the below code in;
```javascript
const zine = {
  title: "GenZ(ine) V1.2",
  author: "Munus Shih",
  personalUrl: "https://munusshih.com",
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

## How To Use
The library basically does everything that the p5 library does, while simply using `namespacing` to specify where you want to draw your shape.

For instance, if you want to draw a circle on the cover page, you will write.

```javascript
function drawPage(){
  cover.circle(30, 30, 10)
}
```

The `drawPage()` function here basically replace the original p5 `draw()` function.

You can always hit the button to download your zine as a `.jpg` or `.pdf` that's ready to print! You can also share your source code to friends so they can play with your zine and get inspried :)

## Documentation / Tutorials
- You can play with [this interactive documentation]() in OpenProcessing (not finished!)
- You can find the recording of a workshop we taught at 2022's Virtual Creative Coding Festival [here](https://www.youtube.com/watch?v=lAQc3Ij3O8k&ab_channel=ProcessingFoundation).
- [This is the link](https://docs.google.com/presentation/d/1EJhxkK4Y07TfD7r6gUuXITqdYWmzFHE_BbPqNvFViuM/edit?usp=sharing) to our slides we used to teach `function` and `p5.gen(zine)` at POWRPLNT.
- [There is the link](https://docs.google.com/presentation/d/1VEQN4Ro4POYxDtKL6aLBGOjlln6rnFerCH_ebJS2VUE/edit?usp=sharing) to the talk that Munus gave at 2023's Open Source Art Contributor's Conference.

## Next Step

Some of the functions we are thinking of adding includes
- an `all` namespacing function, etc. `all.pageNumbers()`
- more typography functions, etc. `columns()`, `border()`, `gutter()`
- a more accessible way of rendering the canvas
- save `styles()`, a hierarchy-based way of writing code, etc. `h1, h2`
- add more helper functions, etc.`setFillStroke()`
- making it mobile friendly (currently jsPDF doesn't support mobile download)
- different way to flip through the zine
- more detailed printSettings: `paper`, `borderline`, `highres`, `mp4 export`

## You Can Help!

- By making a zine out of this and we can link them here :)
- Use them in your class, workshops or just simply sharing!
- Think of creative ways of using this library!
- Write tutorial/documentation on ur exp using this library
- issues or pull request us on how to enhance/fix the code
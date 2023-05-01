# Installation

Now let's take a closer look at the library p5.genzine. This library is a powerful tool that allows you to create zines using p5.js. With p5.genzine, you can turn your p5 sketch into a live-rendered, 8-page zine that can be easily shared and viewed by others. This feature makes it an ideal tool for both beginners and experienced coders alike, enabling them to collaborate and share their work with the community.

## Import & Preparation

We will now walk through what it is like to to use p5.henzine to create a zine, and the design of its mechanism behind it. The library is essentially built on top of P5.js and utilizes HTML Canvas for most of its features. HTML Canvas is a powerful element that allows developers to draw graphics, animations, and other visual effects on a web page. With HTML Canvas and p5.js, users can create interactive and dynamic visualizations using JavaScript, making it an ideal tool for creating zines. We will need three things, an HTML file to import our p5 main library and p5.genzine, a Javascript file that holds our sketches for zine, an empty folder that will hold any assets (images, fonts) we use in the future. Here we present it in a [linux tree style](http://mama.indstate.edu/users/ice/tree/).

```file-path
my-project/
├── assets/
├── index.html
└── sketch.js
```

We will need to write the following code in `index.html` to import both p5.js, p5.genzine.js and our sketch.js.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
<script src="https://munusshih.github.io/p5.genzine/p5.(gen)zine.js"></script>
<script src="sketch.js"></script>
```

And in sketch.js we can start with the starter code that is provided below:

```javascript
const zine = {
/*about your zine*/
  title: "GenZ(ine) V1.2",
  author: "Munus Shih",
  description: "Our objective is to create a coded zine that focuses on digital identity. \
  We will use P5.js to teach ‘function’ and generate a collaborative digital profile zine in the end. \
  We created some customized functions for people to play with this zine more easily.",
  
/*other settings*/
  frameRate: 8, //the bigger, the faster the animation is
  pixelDensity: 2 //the bigger, the better quality for print
}

function setPage() {

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

And viola! You should have an GUI playground for you to start making a beautiful coded zine that looks like this:

![Screenshot 2023-04-22 at 6.55.16 PM.png](Coding%20Zine%20(Working%E2%80%A6)%2047ba2b7b8cb84a3fa827635f11081f5a/Screenshot_2023-04-22_at_6.55.16_PM.png)

## Three building blocks

There are three main elements here in the starter code. 

First,`zine`. It is an object that has some predefined attributes of that would be used to update info on the interface, including the title of the zine, the author and a description of the zine. There are also some print settings of the zine, including the `frameRate` of the zine, the `pixelDensity` of the zine, which each determines the performance of the digital and printed version of the coded zine. 

Second, the `setupPage()`, this function basically only runs once, and serves as a replacement for `setup()` in original p5js.

Last, `drawPage()` which is in replacement of the famous `draw()` of p5.

## Namespacing

Here you can see, the library incorporates a name-spacing convention that allows you to create multiple pages of the zine in a single p5 sketch file. This convention ensures that your code is more modular and reusable, which makes it easier to maintain and update your zines in the future. For instance, if you want to create a red background on the cover page, and a green background on the back cover page, you will write.

```javascript
cover.background("red")
back.background("red")
```

The key feature of p5.genzine is how it separates 8 pages and also puts them together the printed form of your zine. You can use it to create your content for each page of the zine, using a variety of shapes, colors, and interactive elements to bring your ideas to life. And when you want to print it out, you can just click the bottom right button `download .pdf` and it will rendered as a printable pdf version in real time.

![Screenshot 2023-04-22 at 7.10.23 PM.png](Coding%20Zine%20(Working%E2%80%A6)%2047ba2b7b8cb84a3fa827635f11081f5a/Screenshot_2023-04-22_at_7.10.23_PM.png)

## Tidier Code

There’s a problem with this approach though. As the zine gets more complicated and the content gets richer, putting everything inside the `drawPage()` might become way too messy. So I also created a holder function for each of these pages. Test the starter code as examples, you can also structure your code like this.

```javascript
function coverSet(){
  cover.randomLayout(["hello world", selfie])
}

function coverDraw(){
  cover.randomLayout(["hello world", selfie])
}

function oneDraw(){
  one.rect(one.mouseX, one.mouseY, 100)
}

function twoDraw(){
  two.background(random(255), random(255), random(255))
  two.glitchLayout(["hello world", selfie])
}

function threeDraw(){
  three.gridLayout(["hello world", selfie])
}

function backDraw(){
  back.background(random(255), random(255), random(255))
}
```

So then there’s a `Set()` function and a `Draw()` to the corresponding page. This enables the user to structure their code in a more legible way. For instance, they might be able to put each code for their corresponding page in a separate javascript file.

```file-path
my-project/
├── assets/
├── pages/
│   ├── cover.js
│   ├── one.js
│   ├── two.js
│   ├── three.js
│   └── back.js
├── index.html
└── sketch.js
```

This also enables people to easily collaborate on the same zine together by each being assigned to design and code part of the zine.
# Custom Functions

Now you grab the idea of the library, you would want to make the process more streamlined and start Once thing that is noticeably different in p5 and p5.genzine is the way custom function is being used. For instance, you want to make a function called `randomColorCircle` that generate a random colored circle on the page every time you call it, you can define it like this.

## The easy way

```javascript
function randomColorCircle(x, y, r){
	fill(random(255), random(255), random(255))
	circle(x, y, r)
}
```

However, how do you call it so you can reuse it and draw it in different pages? One way of doing it would be passing the `page` object inside your custom function as a parameter, so it can be drawn on the designated page.

```javascript
function randomColorCircle(element, x, y, r){
  element.fill(random(255), random(255), random(255))
	element.circle(x, y, r)
}

function drawPage(){
	randomColorCircle(one, 0, 0, 20)
}
```

## The hard way

The benefit of doing this is that it differentiate your custom function in syntax from the predefined ones. But that could also be a problem if you strive for cohesiveness in your code styling. In that case, you might consider defining your function like this.

```javascript
p5.prototype.randomColorCircle = function (x, y, r) {
  this.fill(random(255), random(255), random(255))
	this.circle(x, y, r)
};

function drawPage(){
	one.randomColorCircle(0, 0, 20)
}
```

You probably have guessed that the whole p5.genzine library’s custom functions is also built on top of this syntax. Now we are using the `this` keyword that refers the invoked object. Simply put, it stands for whatever object that is being called to use this function. So you will be able to simply call your custom function here like any other p5 function.

## Make A Template

The custom template function makes it very easy to create template page for p5.genzine. For instance you could easily make a template page that holds a full page of texts by defining it like this:

```javascript
p5.prototype.textTemplate = function (content) {
  const margin = 20

  this.textSize(30)
  this.fill(255)
  
  if(this.pageSize === 'full'){
    this.textBox(content, margin, margin, this.width/2 - margin*2, this.height - margin*2, margin*2)
  } else{
    this.textBox(content, margin, margin, this.width - margin*2, this.height - margin*2, margin)
  }
};

function drawPage() {
  cover.background(0)
  one.background(0)
  cover.textTemplate('One of the most absurd aspects of my computer science education was the writing tests. You might be wondering, "What writing tests?" Well, we were asked to write code on paper without any means to test or verify it. We were not provided with a console log or any debugging tools, and it felt like working inside a black box. We were given only a paper with prompts and another paper to write our code, without even pseudo-code. It was as if we were ChatGPT, expected to produce actual runnable code without any way to test its functionality. Our code was then reviewed by a human, typically the TA of the class, to determine if our logic and syntax were correct and if we followed the prompt. Even small mistakes like missing a semicolon or misspelling the word "function" could result in a deduction of most of our points because it could render the entire program unrunnable in some languages. This approach to testing was entirely counterintuitive and served to discourage and exclude students who might have otherwise been interested in coding. It is possible that even students who were interested in becoming a professional software engineer were discouraged. While this may seem absurd, unfortunately, this way of teaching is still prevalent in many computer science courses. Instructors who teach computer science today likely experienced the same uninspired and unexciting approach to coding education that I did.')
  one.textTemplate('I began exploring alternative pedagogical theory while taking design classes, where I encountered writings that challenged the traditional way of teaching in art education. I realized how similar the scaffolding in design education is and how its project-based, purpose-driven approach could be applied to teaching coding. This approach emphasizes broader applications and potential benefits, as well as inspiring creativity, instead of solely training for specialties. In contrast, traditional computer science education often focuses on solving mathematical problems and developing software, neglecting the creative expression, social impact, and personal growth aspects of coding. My research led me to find that many others shared these concerns and were also seeking new methods for teaching coding that could make it more accessible and enjoyable for a wider range of students, not just those with a natural aptitude for math or an interest in software engineering.\nI began exploring alternative pedagogical theory while taking design classes, where I encountered writings that challenged the traditional way of teaching in art education. I realized how similar the scaffolding in design education is and how its project-based, purpose-driven approach could be applied to teaching coding. This approach emphasizes broader applications and potential benefits, as well as inspiring creativity, instead of solely training for specialties. In contrast, traditional computer science education often focuses on solving mathematical problems and developing software, neglecting the creative expression, social impact, and personal growth aspects of coding. My research led me to find that many others shared these concerns and were also seeking new methods for teaching coding that could make it more accessible and enjoyable for a wider range of students, not just those with a natural aptitude for math or an interest in software engineering.')
}
```

![Screenshot 2023-04-23 at 1.31.06 AM.png](Coding%20Zine%20(Working%E2%80%A6)%2047ba2b7b8cb84a3fa827635f11081f5a/Screenshot_2023-04-23_at_1.31.06_AM.png)

One thing that needs to keep in mind is that there are two kinds of pages in p5.genzine. One is the a single page like the cover and back page, the other is the full spray page like one, two and three pages. One way to differentiate them is by using the attribute `pageSize`. For the single pages, they have an attribute of `single`, while the spray pages have the attribute of `full`.

## Function For All Pages

Sometimes we need an element that would be shown on every page of the zine. Now we can access the special reserved word `all`. This array contains all the pages in the zine, and enables you to draw something on the page all at once. However, the syntax to use `all` is a little different. See the below example.

 

```javascript
for(const page of all){
	page.background(255, 0, 0)
}
```

Because `all` is just an array holding all the pages together, in order to use it you need to run an array over it. This is a super useful reserved word! You can basically use this to create something structural, like page numbers.

```javascript
let pageNum = 0;

  for (const page of all) {
    const margin = 100;

    if (page.width > 800) {
      page.textSize(50);
      page.textAlign(CENTER, TOP);
      
      pageNum++;
      page.text(pageNum, margin, margin);

      pageNum++;
      page.text(pageNum, page.width - margin, margin);
    }
  }
```